import React,{useState} from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { FaReply } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";

function BlogDetails() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
  return (
    <div className="flex flex-col md:flex-row gap-16 justify-between px-4 md:px-8 lg:px-36 py-6 md:py-10">
      <div className="w-full md:w-2/3 mb-8 md:mb-0">
        <img src="https://unicktheme.com/demo/bondor/assets/images/news/blog-details-img-1.jpg"
          alt="Blog Main"
          className="w-full h-auto mb-4"
        />
        <div className="py-6">
          <h3 className="text-3xl md:text-4xl mb-4 font-bold">Easy & Most Powerful Logistic Platform.</h3>
          <p className="text-red-600 text-lg md:text-xl font-semibold mb-4">
            March 23, 2022 _ TRANSPORT _ BY Katty Olson _ 2 Comments
          </p>
          <p className="font-normal text-gray-700 text-base md:text-lg text-justify mb-6">
            With worldwide annual spend on digital advertising surpassing $325 billion, it's no surprise that different approaches to online marketing are becoming available. One of these new approaches is performance marketing or digital performance marketing. Keep reading to learn all about performance marketing, from how it works to how it compares to digital marketing. Plus, get insight into the benefits and risks of performance marketing and how it can affect your company’s long-term success and profitability. Performance marketing is an approach to digital marketing or advertising where businesses only pay when a specific result occurs. This result could be a new lead, sale, or other outcome agreed upon by the advertiser and business. Performance marketing involves channels such as affiliate marketing, online advertising.
          </p>
          <div className="flex gap-x-20 justify-center py-4">
            <img
              src="https://unicktheme.com/demo/bondor/assets/images/news/blog-details-img-box-img-1.jpg"
              alt="Image 1"
              className="w-1/3 h-auto"
            />
            <img
              src="https://unicktheme.com/demo/bondor/assets/images/news/blog-details-img-box-img-2.jpg"
              alt="Image 2"
              className="w-1/3 h-auto"
            />
          </div>
        </div>
        <div>
          <h3 className="text-3xl md:text-4xl mb-4 font-bold">Latest Articles Updated Daily</h3>
          <p className="font-normal text-gray-700 text-base md:text-lg text-justify">
            With worldwide annual spend on digital advertising surpassing $325 billion, it's no surprise that different approaches to online marketing are becoming available. One of these new approaches is performance marketing or digital performance marketing. Keep reading to learn all about performance marketing.
          </p>
        </div>
        <div className=" p-6  flex flex-col items-center text-center my-4">
            <div className="mb-4">
                <img
                src="https://unicktheme.com/demo/bondor/assets/images/icon/quote-icon-3.png"
                alt="Quote Icon"
                className="w-12 h-auto mx-auto"
                />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                Diam luctus nostra dapibus varius et semper semper rutrum ad risus felis eros. Cursus libero viverra tempus netus diam vestibulum
            </h3>
            <p className="text-lg font-medium text-gray-600">David Backhum</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t mt-12 border-gray-500">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0 ">
                <h5 className="font-semibold text-black text-2xl">Posted in:</h5>
                <p className="bg-[#f5f5f8]  border rounded-sm py-1 px-3">Development</p>
                <p className="bg-[#f5f5f8]  border rounded-sm p-1 px-3">Digital</p>
                <p className="bg-[#f5f5f8]  border rounded-sm p-1 px-3">Development</p>
            </div>
            <div className="flex items-center">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                <FaShareAlt className="text-2xl" />
                </a>
            </div>
        </div>
        <div className=" mb-6 p-6 ">
            <h3 className="text-2xl font-semibold mb-4">01 Comment</h3>
            <div className="flex items-start flex-wrap lg:flex-nowrap  space-x-4 bg-white p-6 rounded-lg shadow-md">
            
                <img
                    src="https://unicktheme.com/demo/bondor/assets/images/news/comment-1-1.jpg"
                    alt="Commenter"
                    className="w-32 h-26 rounded-full object-cover mx-auto my-2"
                />
                <div>
                    <p className="text-gray-500 text-sm my-2">September 6, 2022 at 1:28 pm</p>
                    <div className='flex justify-between mb-2'>
                        <h4 className="text-lg font-semibold ">Saiful Islam</h4>
                        <a
                            href="blog-details.html"
                            className="flex items-center text-red-600 hover:underline"
                        >
                            <FaReply className="mr-2" /> Reply
                        </a>
                    </div>
                
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipi vestibulum lectus egestas cubilia nam sagittis, nulla posuere habitant
                    </p>
                </div>
        
            </div>
        </div>
        <div className=" p-6 mb-6">
            <h3 className="text-4xl font-semibold mb-3">Let’s Get in Touch</h3>
            <p className="text-gray-500 text-lg mb-4">Your email address will not be published. Required fields are marked *</p>
            <form
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <input
                    type="text"
                    placeholder="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <div>
                    <input
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    />
                </div>
                <div className="col-span-2">
                    <input
                    type="text"
                    placeholder="Website*"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    required
                    />
                </div>
                </div>
                <div>
                <textarea
                    name="message"
                    placeholder="Write Message*"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    rows="4"
                    required
                ></textarea>
                </div>
                <div>
                <button
                    type="submit"
                    className="bg-red-800 text-white text-lg py-4 px-6 "
                >
                    Send Message
                </button>
                </div>
            </form>
        </div>


      </div>
      <div className="sticky top-0 h-max w-full md:w-1/3 ">
        <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Search</h3>
            <form action="#" className="flex items-center">
                <input
                type="search"
                placeholder="Keywords here...."
                className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                type="submit"
                className="p-3 text-white rounded-r-lg hover:bg-blue-600"
                >
                <i className="icon-search"></i>
                </button>
            </form>
        </div>
        {/* Recent Posts Widget */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold my-6">Recent Post</h3>
          <ul className="list-none space-y-4 ">
            <li className="flex  border shadow-lg p-4 my-2">
              <div className="w-24 h-16 mr-4">
                <img
                  src="https://unicktheme.com/demo/bondor/assets/images/news/lp-1-1.jpg"
                  alt="Recent Post 1"
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  <a href="blog-details.html" className="text-black ">
                    Keep Your Business Safe Ensure High
                  </a>
                </h3>
                <span className="text-gray-500 text-sm flex items-center space-x-1">
                  <i className="fas fa-clock"></i>
                  <span>April 21, 2023</span>
                </span>
              </div>
            </li>
            <li className="flex border shadow-lg p-4 my-2">
              <div className="w-24 h-16 mr-4">
                <img
                  src="https://unicktheme.com/demo/bondor/assets/images/news/lp-1-1.jpg"
                  alt="Recent Post 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  <a href="blog-details.html" className="text-black ">
                    We’ve Been a Strategy Thought Leader Nearly
                  </a>
                </h3>
                <span className="text-gray-500 text-sm flex items-center space-x-1">
                  <i className="fas fa-clock"></i>
                  <span>April 21, 2023</span>
                </span>
              </div>
            </li>
            <li className="flex border shadow-lg p-4 my-2">
              <div className="text-[#767676] w-24 h-16 mr-4">
                <img
                  src="https://unicktheme.com/demo/bondor/assets/images/news/lp-1-1.jpg"
                  alt="Recent Post 3"
                  className="w-full h-full object-cover "
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  <a href="blog-details.html" className="text-black ">
                    This Week’s Top Stories About It
                  </a>
                </h3>
                <span className="text-gray-500 text-sm flex items-center space-x-1">
                  <i className="fas fa-clock"></i>
                  <span>April 21, 2023</span>
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* Categories Widget */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold my-6">Categories</h3>
          <ul className="list-none space-y-2 text-black font-medium">
            <li className='border shadow-lg p-4 my-2'>
              <a href="blog-details.html" className=" hover:underline flex items-center justify-between">
                Medical Shipping <span ><FaArrowRightLong/></span>
              </a>
            </li>
            <li className='border shadow-lg p-4 my-2'>
              <a href="blog-details.html" className=" hover:underline flex items-center justify-between">
                Land Freight <span ><FaArrowRightLong/></span>
              </a>
            </li>
            <li className='border shadow-lg p-4 my-2'>
              <a href="blog-details.html" className="hover:underline flex items-center justify-between">
                Shipping Freight <span ><FaArrowRightLong/></span>
              </a>
            </li>
            <li className='border shadow-lg p-4 my-2'>
              <a href="blog-details.html" className="hover:underline flex items-center justify-between">
                Road Transport <span ><FaArrowRightLong/></span>
              </a>
            </li>
            <li className='border shadow-lg p-4 my-2'>
              <a href="blog-details.html" className="hover:underline flex items-center justify-between">
                Air Freight <span ><FaArrowRightLong/></span>
              </a>
            </li>
            <li className='border shadow-lg p-4 my-2'>
              <a href="blog-details.html" className="hover:underline flex items-center justify-between">
                Railway Freight <span ><FaArrowRightLong/></span>
              </a>
            </li>
          </ul>
        </div>

        {/* Tags Widget */}
        <div>
          <h3 className="text-2xl font-semibold my-6">Tags</h3>
          <div className="flex flex-wrap gap-2 ">
            <a href="#" className="border-2 border-gray-400 text-gray-700 py-1 px-3  text-sm hover:bg-gray-300">
              IT Technology
            </a>
            <a href="#" className="border-2 border-gray-400 text-gray-700 py-1 px-3  text-sm hover:bg-gray-300">
              Software
            </a>
            <a href="#" className="border-2 border-gray-400  text-gray-700 py-1 px-3  text-sm hover:bg-gray-300">
              Design
            </a>
            <a href="#" className="border-2 border-gray-400 text-gray-700 py-1 px-3  text-sm hover:bg-gray-300">
              Service
            </a>
            <a href="#" className="border-2 border-gray-400 text-gray-700 py-1 px-3  text-sm hover:bg-gray-300">
              Development
            </a>
            <a href="#" className="border-2 border-gray-400 text-gray-700 py-1 px-3  text-sm hover:bg-gray-300">
              Digital
            </a>
            <a href="#" className="border-2 border-gray-400 text-gray-700 py-1 px-3  text-sm hover:bg-gray-300">
              Cyber
            </a>
          </div>
        </div>
      
    

      </div>
      
    </div>
  );
}

export default BlogDetails;
