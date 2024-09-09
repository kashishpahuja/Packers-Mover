import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';

function ServiceSideBar() {
  const location = useLocation();  // get current path

  const links = [
    { path: '/packers-movers-banglore', label: 'Packers & Movers' },
    { path: '/office-shifting-banglore', label: 'Office Shifting' },
    { path: '/home-shifting-banglore', label: 'Home Shifting' },
    { path: '/storage-facilities-banglore', label: 'Storage Facilities' },
    { path: '/bike-car-shifting-banglore', label: 'Bike & Car Shifting' },
    { path: '/international-shifting-banglore', label: 'International Shifting' },
  ];

  return (
    <div className="w-full lg:w-5/12 xl:w-1/3 px-4 mb-4 lg:mb-0 lg:sticky lg:top-0 lg:h-min">
      {/* Categories Section */}
      <div className="mb-8 p-6 bg-white shadow-lg">
        <h3 className="text-3xl font-bold mb-4">Categories</h3>
        <ul className="container mx-auto space-y-2">
          {links.map(({ path, label }) => (
            <li
              key={path}
              className={`border-2 p-3 shadow-lg ${
                location.pathname === path ? 'bg-red-600 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <Link
                to={path}
                className="flex justify-between items-center font-semibold w-full text-left"
              >
                {label}
                <span className="text-3xl font-bold ml-2">&#8250;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Need Help Section */}
      <div className="relative flex flex-col items-center justify-center gap-8 p-6 mb-8 bg-cover bg-center text-center h-96 bg-[url('https://unicktheme.com/demo/bondor/assets/images/backgrounds/services-details-need-help-bg.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h3 className="relative text-white text-4xl font-bold ">
          Need Any Type <br /> of Services <br /> from us
        </h3>
        <Link to="/contact" className="relative bg-red-700 text-white font-bold p-4">
          FIND SOLUTION
        </Link>
      </div>

      {/* Contact Section */}
      <div className="flex justify-center items-center bg-slate-100 p-6">
        <FaPhoneAlt className="text-primary text-3xl mr-4" />
        <div>
          <span className="text-gray-600">You can call anytime</span>
          <p className="text-lg font-semibold text-gray-800">
            Free
            <a href="tel:+997868765" className="ml-2 text-primary">
              +99 (786) 8765
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSideBar;
