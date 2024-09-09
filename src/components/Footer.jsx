import React from 'react';
import { FaPaperPlane, FaTwitter, FaFacebook, FaPinterestP, FaInstagram } from 'react-icons/fa'; // Import necessary icons from react-icons

const Footer = () => {
  
  return (
    <div className="bg-gray-900 text-white  pt-2 mt-48 lg:mt-36 relative ">
      <div className="container  mx-auto relative bg-cover bg-center overflow-hidden px-6 lg:px-16 py-8 lg:py-16 -mt-28 " style={{ backgroundImage: `url('https://unicktheme.com/demo/bondor/assets/images/backgrounds/cta-one-bg.jpg')` }}>
        <div className='flex items-center justify-between '>
          <div className="space-y-3">
            <h3 className="text-2xl lg:text-5xl text-black font-bold">
              Looking for the Best Transport Services?
            </h3>
            <p className="text-lg lg:text-xl text-gray-700 ">
              Try it risk-free - We don't charge cancellation fees
            </p>
          </div>
          <div>
            <a href="/contact" className=" inline-block bg-red-700 text-white font-semibold text-sm lg:text-lg p-2  lg:px-8 lg:py-3  transition duration-300">
                GET A QUOTE
            </a>
          </div>
        </div>
      
      </div>
      
    
      
      <div className="absolute top-16 lg:top-0 right-0 w-40 h-40 bg-no-repeat bg-cover bg-[url('https://unicktheme.com/demo/bondor/assets/images/shapes/footer-shape-1.png')]"/>
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-wrap -mx-4 py-24">
          {/* About Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <div>
              <div className=" mb-6">
                <a href="#">
                  <img src="https://unicktheme.com/demo/bondor/assets/images/resources/footer-logo-1.png"  className="mb-6" alt="Footer Logo" />
                </a>
              </div>
              <p className="text-gray-400 mb-6 text-xl">
                Address 301 Princes Street, Ei class
                <br /> Mahall Damietta Egypt-104
              </p>
              <div className="footer-widget__emergency-call">
                <a href="tel:+134353353545" className="block mb-3 text-lg hover:text-yellow-500">+1 343 5335 3545</a>
                <a href="mailto:bondor@mail.com" className="block text-gray-400 text-lg hover:text-yellow-500">bondor@mail.com</a>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <div className="footer-widget__navigation">
              <h3 className="text-2xl font-semibold mb-6">Navigation</h3>
              <ul className="space-y-3">
                <li><a href="index.html" className="text-lg hover:text-yellow-500">Home</a></li>
                <li><a href="about.html" className="text-lg hover:text-yellow-500">About Us</a></li>
                <li><a href="services.html" className="text-lg hover:text-yellow-500">Services</a></li>
                <li><a href="contact.html" className="text-lg hover:text-yellow-500">Contact Us</a></li>
                <li><a href="blog.html" className="text-lg hover:text-yellow-500">Our Blog</a></li>
              </ul>
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="w-full md:w-1/2 lg:w-1/6 px-4 mb-8 md:mb-0">
            <div className="footer-widget__quick-link">
              <h3 className="text-2xl font-semibold mb-6">Quick Link</h3>
              <ul className="space-y-3">
                <li><a href="contact.html" className="text-lg hover:text-yellow-500">Help</a></li>
                <li><a href="contact.html" className="text-lg hover:text-yellow-500">Support</a></li>
                <li><a href="testimonial.html" className="text-lg hover:text-yellow-500">Clients</a></li>
                <li><a href="shop.html" className="text-lg hover:text-yellow-500">Shop</a></li>
                <li><a href="project.html" className="text-lg hover:text-yellow-500">Portfolio</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="footer-widget__newsletter">
              <h3 className="text-2xl font-semibold mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-6 text-xl">Subscribe to our newsletter to get the latest news & updates</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="email@example.com"
                  name="email"
                  className="w-full px-4 py-3 text-gray-900 text-lg rounded-l-md focus:outline-none"
                />
                <button type="submit" className="bg-yellow-500 text-white px-6 py-3 text-lg rounded-r-md hover:bg-yellow-600 flex items-center justify-center">
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap justify-between items-center text-white">
            <p className="text-sm lg:text-base text-center lg:text-left mb-2 lg:mb-0">
              Copyright © 2024 Bondor by{' '}
              <a href="#" className="hover:text-yellow-500">codesholder.</a> All Rights Reserved
            </p>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a href="#" className="hover:text-yellow-500 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-yellow-500 text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-yellow-500 text-xl">
                <FaPinterestP />
              </a>
              <a href="#" className="hover:text-yellow-500 text-xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;