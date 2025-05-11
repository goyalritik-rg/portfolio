import Message from "./Message";

const Messages = ({ messages = [] }) => {
  if (!messages.length) {
    return null;
  }

  return messages.map((message) => (
    <Message key={message.id} message={message} />
  ));
};

export default Messages;
