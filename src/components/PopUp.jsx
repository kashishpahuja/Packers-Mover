import React, { useState, useEffect } from "react";
import img from '../assets/gallary/project5.jpg';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false); // Initially set to false to delay opening


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); 

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-50 w-full ">
        <div className="bg-white rounded-lg max-w-4xl w-full relative grid grid-cols-1 lg:grid-cols-2 mx-4">
          <button
            className="absolute right-2 text-black font-bold text-2xl lg:text-4xl "
            onClick={handleClose}
          >
            &times;
          </button>
          <div className="p-6 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">Ask a Question</h2>
            <span className="block text-black mb-4">
              Fill out the form below, and our team will get back to you soon.
            </span>
            <form>
              <div className="mb-3 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaUser className="text-gray-700 ml-3" />
                <input
                  name="S_name"
                  className="block w-full p-3 border-none rounded-md focus:outline-none"
                  type="text"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaEnvelope className="text-gray-700 ml-3" />
                <input
                  name="S_email"
                  className="block w-full p-3 border-none rounded-md focus:outline-none"
                  type="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-3 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaPhone className="text-gray-700 ml-3" />
                <input
                  name="S_phone"
                  className="block w-full p-3 border-none rounded-md focus:outline-none"
                  type="text"
                  placeholder="Enter Phone"
                />
              </div>
              <div className="mb-3 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaLocationArrow className="text-gray-700 ml-3" />
                <input
                  name="Location_form"
                  className="block w-full p-3 border-none rounded-md focus:outline-none"
                  type="text"
                  placeholder="Location from"
                />
              </div>
              <div className="mb-4 flex items-center border border-gray-700 rounded-md shadow-sm">
                <FaMapMarkerAlt className="text-gray-700 ml-3" />
                <input
                  name="Location_to"
                  className="block w-full p-3 border-none rounded-md focus:outline-none"
                  type="text"
                  placeholder="Location to"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Send Now
              </button>
            </form>
          </div>
          <div className="hidden lg:block">
            <img
              src={img}
              alt="Popup Image"
              className="object-cover h-full w-full rounded-tr-lg rounded-br-lg"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
