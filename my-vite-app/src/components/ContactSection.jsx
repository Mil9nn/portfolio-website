import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ email: '', message: '' });
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 mt-16 mb-12 transition-all duration-1000 transform opacity-100 translate-y-0">
      <h3 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-4 inline-block bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Get In Touch</h3>
      
      <div className="bg-gray-800 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border-2 border-purple-700 rounded-lg p-3 pl-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
                required
                placeholder="your.email@example.com"
              />
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <span className="text-gray-400 absolute left-0"></span>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full bg-gray-900 border-2 border-purple-700 resize-none rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white"
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>
          
          <div className="flex items-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-blue-500/30 transform transition-all duration-300 hover:-translate-y-1 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="ml-4 text-green-400 flex items-center animate-fadeIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Message sent successfully!
              </div>
            )}
          </div>
        </form>
        
        {/* Contact Information */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-gray-300">singhmilan314@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-300">Jammu, India</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-400">Social</p>
                <div className="flex space-x-3 mt-1">
                  <a href="#" className="text-gray-300 hover:text-blue-400">LinkedIn</a>
                  <a href="#" className="text-gray-300 hover:text-purple-400">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;