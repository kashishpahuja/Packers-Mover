import React from 'react';
import Services from '../components/Services';


const ServicePage = () => {
  return (
    <div>
      <div className='relative'>
        <img
          src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg"
          alt="topImage"
          className='w-full h-auto bg-gradient-to-br z-0 from-black to-transparent mix-blend-multiply'
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-4xl font-bold mb-2">Services</h1>
          <p className="text-white text-lg sm:text-xl">
            <span className='text-yellow-600 font-bold'>Home</span> - <span>Services Provided by Us</span>
          </p>
        </div>
      </div>
      <Services/>
      
    </div>
  );
};

export default ServicePage;
