import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const chatContainerRef = useRef(null);

  const sendMessage = async () => {
    try {
      setIsLoading(true);
      setChatHistory([...chatHistory, { role: "user", text: userInput }]);

      const response = await axios.post("http://localhost:3001/api/chat", {
        userInput,
      });
      const botResponse = response.data.response;

      setChatHistory([
        ...chatHistory,
        { role: "user", text: userInput },
        { role: "bot", text: botResponse },
      ]);

      setUserInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const clearChat = () => {
   
    setChatHistory([]);
  };

  const renderMessage = (text, role) => {
    return text.split("\n").map((line, index) => {
      if (line.trim() !== "") {
        return (
          <div key={index} className={role === "user" ? styles.userMessage : styles.botMessage}>
            {line}
          </div>
        );
      }
      return null;
    });
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatHistory]);

  return (
    <div
      ref={chatContainerRef}
      className={`${styles.chatContainer} ${isMinimized ? styles.minimized : ""}`}
    >
      {!isMinimized && (
        <>
          <h1>Nebula9 Chatbot</h1>
          <div className={styles.chatHistory}>
            {chatHistory.map((message, index) => (
              <div key={index}>
                {renderMessage(message.text, message.role)}
              </div>
            ))}
          </div>
          <div className={styles.chatControls}>
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message"
              />
              <button type="submit">Send</button>
              <button onClick={clearChat}>Clear</button>
            </form>
            {isLoading && <div className={styles.loadingIndicator}>Loading...</div>}
            <div className={styles.minimizedControls}>
          <button onClick={() => setIsMinimized(true)}>Close</button>
        </div>
          </div>
        </>
      )}
      {isMinimized && (
        <div className={styles.minimizedControls}>
          <button onClick={() => setIsMinimized(false)}>Help!</button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;