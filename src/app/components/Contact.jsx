import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_mr4jpmh', 'template_ayre7sb', form.current, 'FHn0eo-OZlNDf2zlM')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md text-black mt-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 ">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="to_name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="from_name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-green-400"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
