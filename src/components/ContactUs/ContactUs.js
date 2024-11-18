import React, { useState } from 'react';
import './ContactUs.css'; // Ensure the file exists and is correctly linked
import backgroundImage from '../../assets/ContactUs.jpg'; // Ensure the image path is correct

const ContactUs = () => {
  // Define state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState(''); // To show the success message

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message: message || 'NAN', // Default to 'NAN' if no message
    };

    // Send the form data to the backend
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Thank you for your feedback!'); // Show success message
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage('Error submitting feedback. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setResponseMessage('Error submitting feedback. Please try again.');
    }
  };

  return (
    <div 
      className="contact-us"
      style={{
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Gradient Overlay for readability */}
      <div className="overlay"></div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>We're here to help! Feel free to reach out with any inquiries or feedback.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Handle name input
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle email input
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Handle message input
            rows="4"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>} {/* Show success/error message */}
      </div>
    </div>
  );
};

export default ContactUs;
