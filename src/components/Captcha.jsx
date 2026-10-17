import React, { useState, useEffect } from 'react';

const Captcha = ({ onCaptchaChange }) => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');

  // Random 6-character captcha generate karne ka function
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserInput(''); // Naya captcha aaye toh input clear ho jaye
    
    // Parent component ko batao ki naya captcha kya hai (validation ke liye)
    if (onCaptchaChange) {
      onCaptchaChange(result);
    }
  };

  // Component load hote hi pehli baar captcha generate karo
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="inline-group font-medium my-2" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      
      {/* Input Box */}
      <input 
        type="text" 
        className="custom-input" 
        placeholder="Enter Captcha" 
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        style={{ flex: 1 }}
      />

      {/* Captcha Text Box */}
      <div style={{
        backgroundColor: '#f1f1f1',
        padding: '8px 15px',
        borderRadius: '5px',
        fontFamily: 'monospace',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '3px',
        textDecoration: 'line-through', // Aapke purane design ke hisaab se
        color: '#333',
        border: '1px solid #ccc',
        userSelect: 'none'
      }}>
        {captchaText}
      </div>

      {/* Refresh Button (Icon) */}
      <button 
        type="button" 
        onClick={generateCaptcha}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
          color: '#0056b3'
        }}
        title="Refresh Captcha"
      >
        ⟳
      </button>
    </div>
  );
};

export default Captcha;