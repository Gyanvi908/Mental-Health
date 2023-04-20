import React, { useState } from 'react';
import Typing from 'react-typing-effect';
import leftImage from '../assets/chat.png'; // Replace with the actual file path of your left-side image
import rightImage from '../assets/talk.png'; // Replace with the actual file path of your right-side image

const ChatbotComponent = () => {
  const [chat, setChat] = useState([]);

  const handleUserInput = (event) => {
    const newChat = [...chat];
    newChat.push({ user: 'user', message: event.target.value });
    setChat(newChat);
  };

  const handleChatbotResponse = (response) => {
    const newChat = [...chat];
    newChat.push({ user: 'bot', message: response });
    setChat(newChat);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Render left-side image */}
        <img src={leftImage} alt="../assets/chat.png" style={{ margin: '0 16px', width: '500px', height: '500px' }} />

        <div>
          {/* Render chat messages */}
          {chat.map((message, index) => (
            <div key={index}>
              {message.user}: {message.message}
            </div>
          ))}

          {/* Render chatbot iframe */}
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/9216421f-76e4-41cf-bae4-db02637fed2b"
          ></iframe>
        </div>

        {/* Render right-side image */}
        <img src={rightImage} alt="../assets/talk.png" style={{ margin: '0 16px', width: '500px', height: '500px' }} />
      </div>
    </div>
  );
};

export default ChatbotComponent;
