import React, { useState, useEffect } from 'react';
import { TiTick } from "react-icons/ti";
import Img from '../images/blog1.png';
import BgImg from '../images/blog2.png';
import { FaRegClock } from "react-icons/fa";

const Blog = () => {
  const [hours, setHours] = useState(0);

  useEffect(() => {
    let interval;
    const target = 24;
    const increment = target / 200; // Speed of increment
    interval = setInterval(() => {
      setHours((prevHours) => {
        if (prevHours < target) {
          return Math.min(prevHours + increment, target);
        } else {
          clearInterval(interval);
          return prevHours;
        }
      });
    }, 10); // Speed of animation

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 lg:py-16 ">
      <div className="container mx-auto ">
        <div className="flex flex-wrap gap-14">
          {/* Left Section */}
          <div className="left w-full lg:w-[48%] mb-8 lg:mb-0 animate-fadeIn  mx-4 lg:mx-0 ">
            <div className="md:relative">
              <img
                src={BgImg}
                alt="Why Choose Us"
                className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover hidden md:block transition-transform duration-500 hover:scale-105"
              />
              <div className="md:absolute top-0 left-0">
                <img
                  src={Img}
                  alt="Shape"
                  className="w-auto h-auto sm:h-[500px] md:h-[600px] lg:h-[580px] transition-transform duration-500 animate-moveForwardBackward hover:scale-105"
                />
              </div>
              <div className="absolute top-0 right-0 p-4 sm:p-8 bg-red-600 shadow-lg rounded-lg hidden md:block animate-fadeIn">
                <div className="text-center">
                  <FaRegClock className="text-lg sm:text-2xl lg:text-4xl text-white mx-auto" />
                  <div className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
                    {hours.toFixed(0)}
                  </div>
                  <p className="text-lg sm:text-xl md:text-2xl text-white">Hours Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right w-full lg:w-[48%] mx-4 lg:mx-0 animate-fadeIn">
            <div className="text-left mb-8">
              <span className="font-bold text-xl lg:text-2xl text-red-600">WHY YOU CHOOSE US</span>
              <h2 className="text-4xl font-extrabold mt-2 animate-slideUp">
                We Provide Clients Best Logistics Services
              </h2>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-8 animate-slideUp">
              Arki features minimal and stylish design. The theme is well crafted for all the modern architect and interior design websites. With Arki, it makes your website look even more attractive and impressive.
            </p>
            <ul className="pl-4 mb-6 text-lg sm:text-xl md:text-2xl space-y-4">
          <li className="flex items-center space-x-2 p-3 rounded-lg border shadow-sm animate-slideUp">
            <img src="path-to-flaticon-icon1.svg" alt="Air Freight" className="w-5 h-5" />
            <span>Air Freight</span>
          </li>
          <li className="flex items-center space-x-2 p-3 rounded-lg border shadow-sm animate-slideUp">
            <img src="path-to-flaticon-icon2.svg" alt="Road Freight" className="w-5 h-5" />
            <span>Road Freight</span>
          </li>
          <li className="flex items-center space-x-2 p-3 rounded-lg border shadow-sm animate-slideUp">
            <img src="path-to-flaticon-icon3.svg" alt="International Shipment" className="w-5 h-5" />
            <span>International Shipment</span>
          </li>
        </ul>



            <p className="text-gray-600 text-base sm:text-lg animate-slideUp">
              Do you have any project on your mind? Call Us: <a href="tel:+123456789" className="text-blue-600">+123 456789</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
