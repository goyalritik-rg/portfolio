"use client";

import { useEffect } from "react";

const ChatbotFrame = () => {
  useEffect(() => {
    const iframe = document.createElement("iframe");

    const iframeStyles = (styleString) => {
      const style = document.createElement("style");
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
        .chat-frame {
            position: fixed;
            bottom: 20px;
            right: 20px;
            border: none;
            z-index: 9999;
        }
    `);

    iframe.src = "https://nudge-bot.vercel.app/chatbot";
    iframe.classList.add("chat-frame");
    document.body.appendChild(iframe);

    iframe.onload = () => {
      iframe.contentWindow.postMessage(
        JSON.stringify({
          type: "DEVICE_INFO",
          width: window.innerWidth,
          height: window.innerHeight,
        }),
        "https://nudge-bot.vercel.app/"
      );
    };

    const handleMessage = (e) => {
      if (e.origin !== "https://nudge-bot.vercel.app") return;

      try {
        const dimensions = JSON.parse(e.data);
        iframe.width = dimensions.width;
        iframe.height = dimensions.height;
        iframe.contentWindow.postMessage(
          "e25ae0ba-31c9-4482-b12a-34b3ef9739a5",
          "https://nudge-bot.vercel.app/"
        );
      } catch (err) {
        console.error("Invalid message data", err);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
};

export default ChatbotFrame;
