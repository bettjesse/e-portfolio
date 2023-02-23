import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-gray-100 shadow-lg rounded-lg p-8 mx-4 lg:mx-auto my-15 items-ce">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
      <div className="flex items-center mb-4">
        <FaPhoneAlt className="text-blue-500 text-2xl mr-4" />
        <p className="text-gray-700 text-lg">437-987-2752</p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-blue-500 text-2xl mr-4" />
        <p className="text-gray-700 text-lg hover:text-blue-500 transition-colors duration-300">
          nehabeniwal2708@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Contact;
