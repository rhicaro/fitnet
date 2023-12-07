// MessagingComponent.js
import React, { useState } from "react";
import "../styles/MessageComponent.css";

//This is the messaging component for the messages page

const MessageComponent = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    // Add more contacts as needed
  ]);

  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleSendMessage = (messageText) => {
    if (selectedContact) {
      const newMessage = { text: messageText, sent: true };
      setMessages([...messages, newMessage]);
    }
  };

  return (
    <div className="messaging-container">
      <div className="contacts-list">
        <h3>Contacts:</h3>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} onClick={() => handleContactClick(contact)}>
              {contact.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="messages-container">
        <div className="message-list">
          <h3>Messages:</h3>
          <div className="message-list-content">
            {selectedContact ? (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={message.sent ? "sent-message" : "received-message"}
                >
                  {message.text}
                </div>
              ))
            ) : (
              <p>Select a contact to start a conversation</p>
            )}
          </div>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage(e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;
