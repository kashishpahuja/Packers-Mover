import React from 'react';
import { FaCheck } from 'react-icons/fa';
import whyUs from '../assets/whyUs/whyUs.jpg'

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto flex justify-center flex-col lg:flex-row lg:space-x-6 px-4 gap-10 py-8 lg:py-16">
      <div className="lg:w-1/2 p-4 space-y-8">
        <div className="text-justify ">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 ">
            Why <span className="text-red-600">Choose Us</span>
          </h2>
        </div>
        <p className="text-lg mb-6">
        SRS Packers & Movers aims to strive for excellence over and above your expectations in your move. Our commitment to excellent service and customer satisfaction is our advantage in the competition.
          <br />
          <br />
          We have a commitment toward the safety of your valuables, upfront pricing, and cover all scope of assistance in your relocation. Our pro members ensure that every moving process is correctly done with care.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-semibold">
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-2xl mr-2" />
            <span className="text-lg">Expert Packing & Handling</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-2xl mr-2" />
            <span className="text-lg">Reliable and Timely Service</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-2xl mr-2" />
            <span className="text-lg">Transparent Pricing</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-green-500 text-2xl mr-2" />
            <span className="text-lg">Comprehensive Customer Support</span>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 ">
        <img className="w-full h-auto object-cover" src={whyUs} alt="Why Choose Us" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
