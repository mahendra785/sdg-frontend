// components/contactus.js
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const contactInfo = [
    { type: 'Email', value: 'acmvit.in', icon: 'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' },
   // { type: 'Phone', value: '+1 (555) 123-4567', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
    { type: 'Address', value: 'VIT Vellore Tamil Nadu ', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  const socialMedia = [
    //{ name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', link: 'https://facebook.com' },
    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', link: 'https://x.com/ACM_VIT' },
    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M2 4a2 2 0 114 0 2 2 0 01-4 0z', link: 'https://www.linkedin.com/company/acmvit' },
    { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A5 5 0 0122.5 11.5v11a5 5 0 01-5 5h-11a5 5 0 01-5-5v-11A5 5 0 016.5 6.5z', link: 'https://www.instagram.com/acmvit/' },
  ];

  return (
    <div className="bg-gradient-to-br from-green-600 to-green-800 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">{item.type}</p>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialMedia.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-3 rounded-full hover:bg-purple-100 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={platform.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;