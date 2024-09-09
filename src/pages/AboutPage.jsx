import React from 'react';
import { FaMoneyBillAlt, FaTruck, FaShieldAlt, FaArrowRight} from 'react-icons/fa';
import About from  '../components/About.jsx';

const AboutPage = () => {
    const settings = {
      dots: false,            
      arrows: false,          
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  
  return (
    <div>
      <div className='relative'>
        <img src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg" alt="topImage" className='w-full h-450px lg:auto bg-gradient-to-br from-black to-transparent mix-blend-multiply' />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8  left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
            <h1 className="text-white text-4xl font-bold mb-2">About Us</h1>
            <p className="text-white text-lg sm:text-xl">
                <span className='text-yellow-600 font-bold'>Home</span> - <span>About Us</span>
            </p>
        </div>
      </div>
      <About/>


      <div className="flex flex-wrap justify-center items-center lg:justify-end pb-12 px-3 lg:px-80 lg:gap-28 gap-10 ">
        <div className="w-full lg:w-1/2 h-[600px] lg:flex lg:-ml-64 gap-4">
          <img src="https://unicktheme.com/demo/bondor/assets/images/resources/why-choose-two-img-1.jpg" alt="left" className="w-full h-auto mb-6 lg:mb-0 " />
          <img src="https://unicktheme.com/demo/bondor/assets/images/resources/why-choose-two-img-2.jpg" alt="right" className="w-full h-auto "/>
        </div>
        <div className="w-full lg:w-1/2 space-y-6 ">
          <h4 className="text-red-800 text-2xl font-bold ">WHY CHOOSE BONDOR</h4>
          <h2 className=" text-5xl font-bold text-gray-800 ">What Makes Us Different From Others</h2>
          <p className="text-gray-600 text-xl text-justify ">
          Let our knowledgeable staff help you make a smooth and safe relocation. We offer specialized moving solutions, state-of-the-art tracking, and environmentally responsible methods to ensure your goods are in good hands. For a dependable and customer-focused moving experience, rely on SRS Packers & Movers.
          </p>
          <ul className="lg:flex lg:-ml-44 space-y-4 lg:space-y-0 lg:space-x-4">
            <li className="space-y-6 p-8 border-2 shadow-lg bg-white">
              <FaMoneyBillAlt size={52} className="text-red-800"/>
              <h3 className="text-2xl font-semibold text-gray-800">Cost Optimisation</h3>
              <a href="about.html" className="inline-flex">
                <FaArrowRight className="ml-2 text-gray-500" size={24} />
              </a>
            </li>
            <li className="space-y-6 p-8 border-2 shadow-lg bg-white">
              <FaTruck size={52} className="text-red-800"/>
              <h3 className="text-2xl font-semibold text-gray-800">Reduced Transit Time</h3>
              <a href="about.html" className="inline-flex">
                <FaArrowRight className="ml-2 text-gray-500" size={24} />
              </a>
            </li>
            <li className="space-y-6 p-8 border-2 shadow-lg bg-white">
              <FaShieldAlt size={52} className="text-red-800" />
              <h3 className="text-2xl font-semibold text-gray-800">Delivery On Your Time</h3>
              <a href="about.html" className="inline-flex">
                <FaArrowRight className="ml-2 text-gray-500" size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  );
};

export default AboutPage;
