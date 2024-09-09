import React from "react";
import aboutImg from "../assets/about/aboutMain1.jpg";
import { FaCheck } from 'react-icons/fa';


const About = () => {
  return (
    <div className="container mx-auto flex justify-center flex-col lg:flex-row lg:space-x-6 px-2 lg:px-4 gap-10 py-8 lg:py-16">
      <div>
        <img
          src={aboutImg}
          alt="About Us"
          className="w-full h-[500px] object-cover shadow-md m-0 lg:m-3"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center h-[500px]">
        <div className="text-justify space-y-8 ">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
            The Complete Solution
          </h2>
          <div className="border-b-4 border-red-600 w-[70px] rounded-lg my-3 "></div>
          <div className="text-xl text-gray-900 space-y-3">
            <p ><FaCheck className="text-red-500 text-2xl mr-2" />
              <b>Moving Solution: </b>SRS Packers & Movers provide you with a complete
              moving solution to ensure your move happens smoothly.
            </p>

            <p ><FaCheck className="text-red-500 text-2xl mr-2" />
              <b>Storage Facility: </b>Provide safe and climate-controlled storage for
              both short- and long-term needs.
            </p>
            <p><FaCheck className="text-red-500 text-2xl mr-2" />
              <b>Full-Service Support: </b>The services shall be offered with 24/7
              customer care support by logging all issues and informing you with
              any development.
            </p>
          </div>
          {/* <a
            href="#"
            className="inline-block bg-red-600 rounded-lg text-white text-xl font-semibold p-4 hover:bg-red-900 transition duration-300"
          >
            More About Us
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default About;
