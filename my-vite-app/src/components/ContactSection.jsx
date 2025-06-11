import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        user_email: formData.email,
        message: formData.message,
      }, PUBLIC_KEY)
      .then(() => {
        setFormData({ email: '', message: '' });
        setSubmitStatus('success');
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 3000);
      });
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Touch</span>
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto text-lg">
          Have a project in mind or want to collaborate? Drop me a message!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Hello Milan, I'd like to talk about..."
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-400 animate-fadeIn">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 animate-fadeIn">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mt-1 text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Email</p>
                  <a href="mailto:singhmilan314@gmail.com" className="text-blue-400 hover:underline">singhmilan314@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 text-purple-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-400">Location</p>
                  <p className="text-gray-300">Jammu, India</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/milan-singh-51351b1bb/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="https://github.com/Mil9nn" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <i className="fab fa-github fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
