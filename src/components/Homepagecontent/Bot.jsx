import React, { useState } from 'react'

export const Bot = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <div id="bot">
    {!isOpen && (
      <img 
        src="/imgs/Chatbot-Logo_New_jul_22.gif" 
        alt="" 
        onClick={() => setIsOpen(true)}
        style={{ cursor: 'pointer' }}
      />
    )}

    {isOpen && (
      <div className="chatbox">
        <div className="chatbox-header">
          <button onClick={() => setIsOpen(false)}>x</button>
          <img src="/imgs/Chatbot-Logo_New_jul_22.gif" /> 
          <p>Welcome to Aadhaar!</p>
          <p>Hi, I am Udai.</p>
          <p>How May I Help you!!</p>
          <p>Ask me anything about Aadhaar!</p>
          <input type='button' value="GET STARTED" id="getStartedBtn" />
        </div>
      </div>
    )}

    </div>
    </>
  )
}