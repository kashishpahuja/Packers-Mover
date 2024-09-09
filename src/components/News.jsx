import React from 'react';
import { FaUser, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Railway from '../assets/hero/hero1.jpg';
import Land from '../images/Land.jpg';
import Cargo from '../images/cargo.avif';

const News = () => {
  const blogs = [
    {
      id: 1,
      imgSrc: Railway,
      title: 'SRS Packers & Movers Expands Service Areas',
      description: 'We are pleased to announce that more cities and territories have been included in our service network. This extension of service will give us the opportunity to serve more customers with superior moving services, making your move even smoother and more effective than ever.',
      comments: 0,
    },
    {
      id: 2,
      imgSrc: Land,
      title: 'Introducing Eco-Friendly Packing Materials',
      description: 'We are proud to now offer a suite of new packing materials as part of our ongoing commitment to sustainability. These products will make your move safe and green by cushioning your possessions while minimizing our impact on the environment.',
      comments: 0,
    },
    {
      id: 3,
      imgSrc: Cargo,
      title: 'Enhanced Cargo Tracking System',
      description: 'Our upgraded cargo tracking system with real-time updates on the status of your shipment. With this new feature, you can easily track your belongings and stay informed throughout the moving process, ensuring peace of mind and reliability.',
      comments: 0,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="text-center mb-12">
        <h4 className="text-red-600 text-2xl font-bold mb-2">News & Updates</h4>
        <h2 className="text-4xl font-bold animate-slideUp">Recent Developments at SRS Packers & Movers</h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="w-full lg:w-1/3 px-4 mb-8 transition-transform duration-300 hover:scale-105">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={blog.imgSrc}
                alt={blog.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  <Link to="/blog-details">{blog.title}</Link>
                </h3>
                <p className="text-gray-700 mb-4">{blog.description}</p>
                <div className="flex items-center justify-between text-red-500">
                  <a className="flex items-center text-lg" href="#">
                    <FaUser className="mr-1" /> admin
                  </a>
                  <a className="flex items-center text-lg" href="#">
                    <FaComment className="mr-1" /> {blog.comments} Comments
                  </a>
                  <Link
                    to="/blog-details" className='hover:underline text-lg'
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
