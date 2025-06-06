import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import '../styles/main.css';

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '', 
    user_email: '', 
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = 'Name is required';
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitted(true);
        setFormData({ user_name: '', user_email: '', message: '' }); 
        setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3 seconds
      },
      (error) => {
        console.log('Email failed:', error.text);
        setErrors({ submit: 'Failed to send message, please try again later' });
      }
    );
  };

  return (
    <div className="contact-page">
      <h1 className="contact-heading" data-aos="fade-up">Get in Touch</h1>
      <p className="contact-description" data-aos="fade-up" data-aos-delay="100">
        I'm always open to connecting. Feel free to reach out through the form below or via the platforms listed.
      </p>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit} ref={form} data-aos="fade-up" data-aos-delay="200">
        {isSubmitted && (
          <div className="success-message" data-aos="fade-in">
            Message sent successfully!
          </div>
        )}
        {errors.submit && <div className="error-message">{errors.submit}</div>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={formData.user_name} 
            onChange={handleChange}
            className={errors.user_name ? 'input-error' : ''}  
          />
          {errors.user_name && <span className="error-message">{errors.user_name}</span>} 
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            value={formData.user_email}  
            onChange={handleChange}
            className={errors.user_email ? 'input-error' : ''} 
          />
          {errors.user_email && <span className="error-message">{errors.user_email}</span>}  
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit" className="btn btn-gradient">Send Message</button>
      </form>

      {/* Social Links */}
      <div className="contact-icons" data-aos="fade-up" data-aos-delay="300">
        <a href="https://github.com/johngarnsey" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="contact-icon" />
        </a>
        <a href="https://www.linkedin.com/johngarnsey" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="mailto:john.garnsey@hotmail.com" aria-label="Email">
          <FaEnvelope className="contact-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;