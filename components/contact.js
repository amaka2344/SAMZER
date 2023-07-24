// components/ContactForm.js
import React from 'react';
import Image from 'next/image';
import image2 from '../public/electricalservice2.jpg';

const ContactForm = () => {
  return (
    <div id='contact' className="py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        {/* Image on the left (for medium and large screens) */}
        <div className="md:w-2/3 mb-8 md:mb-0">
          <Image
            src={image2}
            alt="Contact Image"
            width={700}
            height={700}
            className="rounded"
          />
        </div>

        {/* Form on the right (for medium and large screens) */}
        <form
          action="https://formspree.io/f/mleydozd"
          method="POST"
          className="md:w-1/3 max-w-lg md:ml-20"
        >
          <h2 className="text-3xl font-semibold text-gray-500 mb-8">Contact Us</h2>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your message here..."
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
