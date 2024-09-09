import React from 'react'
import { FaUser, FaComment } from 'react-icons/fa';
import { BsArrowRightSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';

function BlogPage() {
    const blogData = [
        {
          id: 1,
          image: "https://unicktheme.com/demo/bondor/assets/images/news/blog-1-3.jpg",
          title: 'Fast and Reliable Shipping Guarantee Trusted',
          author: 'admin',
          comments: 0,
          delay: '100ms'
        },
        {
          id: 2,
          image: 'https://unicktheme.com/demo/bondor/assets/images/news/blog-1-2.jpg',
          title: 'Cargo Follow Through Best Supply Metal',
          author: 'admin',
          comments: 0,
          delay: '200ms'
        },
        {
          id: 3,
          image: 'https://unicktheme.com/demo/bondor/assets/images/news/blog-1-3.jpg',
          title: 'Grow Your Following by Building Cargo Service',
          author: 'admin',
          comments: 0,
          delay: '300ms'
        },
        {
          id: 4,
          image: 'https://unicktheme.com/demo/bondor/assets/images/news/blog-1-2.jpg',
          title: 'What’s the Main Challenge of Logistic Newbie',
          author: 'admin',
          comments: 0,
          delay: '400ms'
        },
        {
          id: 5,
          image: 'https://unicktheme.com/demo/bondor/assets/images/news/blog-1-3.jpg',
          title: 'We are Very Careful for Helping the Goods',
          author: 'admin',
          comments: 0,
          delay: '500ms'
        },
        {
          id: 6,
          image: 'https://unicktheme.com/demo/bondor/assets/images/news/blog-1-2.jpg',
          title: 'Why do You Love Bondor So Much Valuable',
          author: 'admin',
          comments: 0,
          delay: '600ms'
        }
      ];
  return (
    <div>
      <div className='relative'>
        <img src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg" alt="topImage" className='w-full h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply ' />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
            
            <h1 className="text-white text-4xl font-bold mb-2">Our Blog</h1>
            <p className="text-white text-lg sm:text-xl">
            <span className='text-yellow-600 font-bold'>Home</span> - <span>Our Blog</span>
            </p>
            
        </div>
      </div>
      <div className="m-8 px-4 py-8 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="wow fadeIn animated"
            style={{ animationDelay: blog.delay }}
          >
            <div className="bg-white shadow-md overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  <Link to={`/blog-details`}>{blog.title}</Link>
                </h3>

                  <ul className="border-t mt-4 pt-6 flex justify-between items-center text-red-600 ">
                    <li className="flex items-center gap-3">
                      <FaUser className="mr-1" />
                      <Link to="/blog-details">{blog.author}</Link>
                    </li>
                    <li className="flex items-center gap-3" >
                      <FaComment className="mr-1" />
                      <Link to="blog-details">{blog.comments} Comments</Link>
                    </li>
                    <li className='p-1 bg-red-600 text-white '>
                        <BsArrowRightSquare/>
                    </li>
                  </ul>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default BlogPage;





