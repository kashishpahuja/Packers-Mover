import React from 'react';
import packersMovers from '../assets/services/packerMover.jpg'
import Railway from '../images/Railway.avif'
import Land from '../images/Land.jpg'
import Cargo from '../images/cargo.avif'
import Container from '../images/Land.jpg'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import officeShifting from '../assets/services/officeShifting.jpg';


function Services() {
  const servicesData = [
    {
      image: packersMovers,
      title: "Packers and Movers Services",
      description: "Moving to Link new location may be Link difficult undertaking, whether it's across town or state lines. Careful planning and dependable execution are necessary for the Packers & Movers, packing, and secure shipping.",
      link: "/packers-movers-banglore",
    },
    {
      image: officeShifting, 
      title: "Office Shifting Services",
      description: "Office relocation is Link huge undertaking that requires careful planning, organising, and carrying out. It is crucial to have Link trustworthy and knowledgeable moving service in Link busy city like Bangalore.",
      link: "/office-shifting-banglore",
    },
    {
      image: Land, 
      title: "Home Shifting Services",
      description: "SRS Packers & Movers develops an all-inclusive array of moving services. From packing up your belongings to settling them into your new home, their experienced team manages every detail with care. ",
      link: "/home-shifting-banglore",
    },
    {
      image: Railway,
      title: "Storage Facilities Services",
      description: "Provide both temporary and long-term storage solution,offering advanced security systems to ensure your belongings are kept safe.",
      link: "/storage-facilities-banglore",
    },
    {
      image: Cargo,
      title: "Bike & Car Shifting Services",
      description: "Relocation within the city or to some distant place gets all the more cumbersome if it happens to involve two-and four-wheelers.",
      link: "/bike-car-shifting-banglore",
    },
    {
      image: Container,
      title: "Internatonal Shifting Services",
      description: "International relocation can be quite cumbersome considering the hassles related to customs restrictions, secure packaging, and safe cross-border transportation.",
      link: "international-shifting-banglore",
    },
  ];

  return (    
    <div className=" py-8 bg-second" 
     >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-2xl text-red-600 font-bold uppercase">Our Services</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-4">Logistics Special Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl "
            >
              <div className="relative">
                <img
                  className="w-full lg:h-96 h-auto object-cover animate-fadeIn"
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <div className="p-6 text-center ">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-xl">{service.description}</p>
                
                <Link
                  to={service.link}
                  className="flex gap-2 justify-center items-center font-semibold p-2 text-white bg-red-700"
                >
                  Read More <FaArrowRightLong/>
                  
                </Link>
                
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;








