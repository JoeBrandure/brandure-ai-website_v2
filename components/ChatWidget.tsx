import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey! This is Joe from Brandure AI. Anything I can help with?", isBot: true }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: message, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setMessage('');
    
    // Simulate AI response (you can replace this with actual Relevance AI integration)
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: "Thanks for your message! I'm here to help with any questions about Brandure AI.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="chat-widget-container">
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-toggle-button"
        aria-label="Open chat"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="chat-interface">
          <div className="chat-header">
            <h3>Brandure AI Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-button"
              aria-label="Close chat"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.isBot ? 'bot' : 'user'}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              className="chat-text-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button 
              className="chat-send-button"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22,2 15,22 11,13 2,9" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
