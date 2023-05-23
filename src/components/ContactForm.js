import React, { useState } from 'react';

// Set initial values to empty
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email);
  };

  // Handle name input change
  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  // Handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError('');
  };

  // Handle onBlur event for name, email, and message fields
  const handleBlur = (fieldName) => {
    if (fieldName === 'name') {
      if (name.trim() === '') {
        setNameError('Please enter your name');
      }
    } else if (fieldName === 'email') {
      if (email.trim() === '') {
        setEmailError('Please enter your email');
      }
    } else if (fieldName === 'message') {
      if (message.trim() === '') {
        setMessageError('Please enter your message');
      }
    }
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name input
    if (name.trim() === '') {
      setNameError('Please enter your name');
      return;
    }

    // Validate email input
    if (email.trim() === '') {
      setEmailError('Please enter your email');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // When input is valid, console log the info then reset the fields
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    setName('');
    setEmail('');
    setMessage('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="name" >Name:</label>
        <input
          type="text"
          id="name"
          style={{ width: '30%', padding: '.5rem', margin: '1rem 0rem 1rem 0rem' }}
          value={name}
          onChange={handleNameChange}
          onBlur={() => handleBlur('name')}
        />
        {nameError && <p className="error">{nameError}</p>}
      </div>


      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          style={{ width: '30%', padding: '.5rem', margin: '1rem' }}
          value={email}
          onChange={handleEmailChange}
          onBlur={() => handleBlur('email')}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>


      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          style={{ width: '30%', height: '400px', padding: '.5rem', margin: '1rem' }}
          placeholder="Please enter your message"
          value={message}
          onChange={handleMessageChange}
          onBlur={() => handleBlur('message')}
        ></textarea>
        {messageError && <p className="error">{messageError}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
