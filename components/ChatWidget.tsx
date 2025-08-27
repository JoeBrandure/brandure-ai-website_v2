import React, { useState } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Chat Interface (keeps same chrome, embeds Relevance AI chat) */}
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

          {/* Embedded Relevance AI iframe fills the panel */}
          <div style={{ flex: 1, display: 'flex' }}>
            <iframe
              src="https://app.relevanceai.com/agents/d7b62b/6271ce55f7b2-46d5-9d84-562aba385b32/ba0ee5a0-3f17-4f24-bd77-6616e27e04b5/embed-chat?starting_message_prompts=Hey%21+Is+there+anything+I+can+help+you+with%3F+&hide_tool_steps=true&hide_file_uploads=true&hide_conversation_list=true&bubble_style=icon&primary_color=%2300D9FF&bubble_icon=sparkles&input_placeholder_text=Type+your+message...&hide_logo=true&hide_description=true"
              width="100%"
              height="100%"
              style={{ border: 0, flex: 1 }}
              frameBorder={0}
              allow="microphone"
              title="Brandure AI Chat"
            />
          </div>
        </div>
      )}
    </div>
  );
}
