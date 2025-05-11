import supabase from "@/lib/supabase";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const createUser = async () => {
    const newUserId = uuidv4();

    // Create user in Supabase
    const { error } = await supabase
      .from("users")
      .insert([{ id: newUserId, created_at: new Date().toISOString() }]);

    if (!error) {
      localStorage.setItem("chat_user_id", newUserId);
      setUserId(newUserId);
    } else {
      console.error("Error creating user:", error);
    }
  };

  const fetchMessages = async () => {
    if (!userId) {
      return;
    }

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: true });

    if (data) {
      setMessages(data);
    } else {
      console.error("Error fetching messages:", error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() || !userId) return;

    const userMessage = {
      id: uuidv4(),
      user_id: userId,
      content: input.trim(),
      sender: "user",
      created_at: new Date().toISOString(),
    };

    // Optimistically add message to UI
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Save message to Supabase
    const { error } = await supabase.from("messages").insert([userMessage]);

    if (error) {
      console.error("Error saving message:", error);
      return;
    }

    // Simulate assistant typing
    setIsTyping(true);

    try {
      // Call the API route for Gemini (placeholder for now)
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.ok) {
        throw new Error("API response was not ok");
      }

      const data = await response.json();

      // Create assistant message
      const assistantMessage = {
        id: uuidv4(),
        user_id: userId,
        content: data.content,
        sender: "assistant",
        created_at: new Date().toISOString(),
      };

      // Save assistant message to Supabase
      setMessages((prev) => [...prev, assistantMessage]);
      await supabase.from("messages").insert([assistantMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);

      // Handle error with a fallback message
      const errorMessage = {
        id: uuidv4(),
        user_id: userId,
        content:
          "Sorry, I'm having trouble connecting to my brain right now. Please try again later.",
        sender: "assistant",
        created_at: new Date().toISOString(),
      };

      // Save error message to Supabase
      await supabase.from("messages").insert([errorMessage]);
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
      fetchMessages();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Initialize user and subscription
  useEffect(() => {
    // Get or create user_id from localStorage
    const storedUserId = localStorage.getItem("chat_user_id");

    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      createUser();
    }

    // Cleanup on component unmount
    return () => {
      supabase.removeAllChannels();
    };
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [userId]);

  // Subscribe to realtime messages when userId is available
  useEffect(() => {
    if (!userId) return;

    // Subscribe to new messages
    const channel = supabase
      .channel("public:messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          setMessages((previous) => [...previous, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.channel(channel).unsubscribe();
    };
  }, [userId]);

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return {
    messages,
    input,
    toggleChat,
    isOpen,
    isTyping,
    handleSendMessage,
    messagesEndRef,
    setInput,
    inputRef,
  };
};

export default useChatBot;
