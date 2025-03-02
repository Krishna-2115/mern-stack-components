import { useSelector, useDispatch } from "react-redux";
import { sendMessage, deleteMessage } from "./chatSlice";
import { useState } from "react";

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);

  return (
    <div>
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type a message" />
      <button onClick={() => { dispatch(sendMessage(message)); setMessage(""); }}>Send</button>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>
            {msg.text} <button onClick={() => dispatch(deleteMessage(msg.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatApp;
