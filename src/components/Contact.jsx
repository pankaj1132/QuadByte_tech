import { useState } from "react";
import Header from "./Header";
import emailjs from '@emailjs/browser';
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug environment variables
    console.log('Environment variables:', {
      serviceId: serviceId ? 'Set' : 'Missing',
      templateId: templateId ? 'Set' : 'Missing',
      publicKey: publicKey ? 'Set' : 'Missing',
    });

    // Check if all required variables are set
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS configuration. Please check your .env file.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        phone: formData.phone,
        message: formData.message,
        to_email: import.meta.env.VITE_CONTACT_EMAIL || 'Quadbytetechnologies@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="bg-black text-white py-16 px-6 md:px-16 relative overflow-hidden">
      {/* Simple Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full contact-float-element opacity-30"></div>
        <div className="absolute top-1/4 right-16 w-3 h-3 bg-green-500 rounded-full contact-pulse-element opacity-20"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-300 rounded-full contact-twinkle-element opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-400 rounded-full contact-float-element opacity-25"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-green-500 rounded-full contact-twinkle-element opacity-35"></div>
      </div>

      <div className="relative z-10">
        {/* Unified heading style using Header component */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <Header
            title="Get In Touch"
            subtitle="Yes! You Are Here! Have You Any Project? Drop A Line Here"
          />
        </div>

        <p className="text-gray-400 max-w-xl mb-10 opacity-100">
          Ready to bring your vision to life? We're here to help you build innovative digital solutions that drive your business forward. Reach out to us today!
        </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
            {submitStatus === 'success' && (
              <div className="p-3 bg-green-600 text-white rounded mb-4 animate-bounce">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Message sent successfully! We'll get back to you soon.
                </div>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="p-3 bg-red-600 text-white rounded mb-4 animate-pulse">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Failed to send message. Please check your EmailJS configuration or contact us directly.
                </div>
              </div>
            )}
            
            <div className="group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name" 
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 placeholder-gray-400 group-hover:bg-white/20" 
                required 
              />
            </div>
            
            <div className="group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email" 
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 placeholder-gray-400 group-hover:bg-white/20" 
                required 
              />
            </div>
            
            <div className="group">
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject" 
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 placeholder-gray-400 group-hover:bg-white/20" 
                required 
              />
            </div>
            
            <div className="group">
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone" 
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 placeholder-gray-400 group-hover:bg-white/20" 
              />
            </div>
            
            <div className="group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write message" 
                rows="5" 
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-gray-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all duration-300 placeholder-gray-400 group-hover:bg-white/20 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed scale-100' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="transform hover:scale-105 transition-all duration-500">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 h-full">
            <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
              </svg>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <FaPhone className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-400 group-hover:text-green-300 transition-colors duration-300">+91 8851821053</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <FaEnvelope className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-400 group-hover:text-green-300 transition-colors duration-300 break-all text-sm md:text-base">Quadbytetechnologies@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <FaGlobe className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Website</p>
                  <p className="text-gray-400 group-hover:text-green-300 transition-colors duration-300">www.quadbyte.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300 cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-green-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="text-gray-400 group-hover:text-green-300 transition-colors duration-300">Uttam Nagar New Delhi - 59</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://x.com/Quadbyte_" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-sky-500/30">
                  <FaTwitter className="text-white group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Twitter
                  </div>
                </a>
                <a href="#" className="group relative w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center hover:from-blue-900 hover:to-blue-950 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-800/30">
                  <FaLinkedin className="text-white group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    LinkedIn
                  </div>
                </a>
                <a href="https://www.instagram.com/quadbytetechnologies?igsh=MTdjNXN1dWYweTRycg==" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30">
                  <FaInstagram className="text-white group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Instagram
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
