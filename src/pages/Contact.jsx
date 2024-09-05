import React from 'react'
import { FaChalkboardTeacher, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaBabyCarriage, FaEnvelope, FaPerson, FaScissors, FaUserDoctor } from 'react-icons/fa6';
import { GiDoctorFace } from 'react-icons/gi';
import { MdCoPresent, MdOutlinePersonOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
<section className="relative py-20 flex flex-col items-center justify-center bg-main">
<div className="container mx-auto p-4 md:p-8 max-w-md">
       {/* Contact Form Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-pink-500 font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Drop a message for us</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
          <button
            type="submit"
            className="w-full bg-pink-400 text-white p-2 rounded-lg hover:bg-pink-600"
          >
            Send Message
          </button>
          </div>
         
        </form>
      </div>
    </div>
    <h1 className="text-3xl font-bold mb-6 text-center text-pink-500">Contact Us</h1>
      
      
      <div className="flex flex-col items-center py-5 font-bubblegum gap-10">
            <h3 className=" font-extrabold text-2xl md:text-3xl text-pink-500">
              In need of ?
            </h3>
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-row item-center">
              <Link className="bg-violet-400 hover:bg-violet-600 md:w-36 justify-center flex items-center gap-2 text-white text-center p-2 rounded-md">
                <GiDoctorFace />Dermatologist
              </Link>
              <Link className="bg-red-400 hover:bg-red-600 justify-center md:w-36 flex items-center gap-2 text-white text-center p-2 rounded-md">
                <FaPerson />Consultant
              </Link>
              <Link className="bg-pink-400 hover:bg-pink-600 justify-center md:w-36 flex items-center gap-2 text-white text-center p-2 rounded-md">
                <MdCoPresent />
                Esthetician
              </Link>
              <Link className="bg-cyan-400 hover:bg-cyan-600 justify-center md:w-36 flex items-center gap-2 text-white text-center p-2 rounded-md">
                <MdOutlinePersonOutline  />Advisor
              </Link>
            </div>
            <div className="flex flex-col gap-5 pb-7">
              <h5 className="text-pink-500 text-lg md:text-2xl font-bold">
                If you need any help or have any queries
              </h5>
            </div>
          </div>
          {/* Contact Info Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8 mb-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="mb-4 flex items-center">
            <FaPhoneAlt className="text-lg text-pink-300 mr-2" />
            <span className="text-lg">+234 8033057593</span>
          </div>
          <div className="mb-4 flex items-center">
            <FaEnvelope className="text-lg text-pink-300 mr-2" />
            <span className="text-lg">beautybymaks@gmail.com</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-lg text-pink-300 mr-2" />
            <span className="text-lg">Wuse Zone 6, Anytown Abuja</span>
          </div>
        </div>
      </div>
</section>
         
  );
};
