import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ email: '', message: '' });
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 mb-12 transition-all duration-1000 transform opacity-100 translate-y-0">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 border-l-4 border-purple-500 pl-4">Get In Touch</h3>
      
      <div className="backdrop-blur-sm p-6 rounded-lg shadow-xl">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-1 border-purple-500 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border-1 border-purple-500 resize-none rounded-sm p-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-blue-500/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;