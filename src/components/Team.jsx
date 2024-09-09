import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import p1 from '../images/p1.jpg'
import p2 from '../images/p2.jpg'
import p3 from '../images/p3.jpg'
import p4 from '../images/p4.jpg'
import p5 from '../images/p5.jpg'


const Team = () => {
  const teamData = [
    {
      image: p1,
      name: 'Anannya Wifey',
      designation: 'Developer'
    },
    {
      image: p2,
      name: 'Shamim Khan',
      designation: 'Co Founder'
    },
    {
      image: p3,
      name: 'Ananta Khan',
      designation: 'Designer'
    },
    {
      image: p4,
      name: 'Annette Black',
      designation: 'Engineer'
    },
    {
      image: p5,
      name: 'Jayant pahuja',
      designation: 'Cloud Engineer'
    },
    {
      image: p4,
      name: 'Anmol Kamlani',
      designation: 'Data Engineer'
    },
    {
      image: p2,
      name: 'Piyush Utreja',
      designation: 'Software developer'
    },
    {
      image: p5,
      name: 'Sakshi Makkar',
      designation: 'Product Manager'
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,  
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,  
        settings: {
            infinite:true,
            speed:500,
            autoplay:true,
            autoplaySpeed:3000,
            slidesToShow: 2,  
            slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,  
        settings: {
            infinite:true,
            speed:500,
            autoplay:true,
            autoplaySpeed:3000,
            slidesToShow: 1,  
            slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
        <div className='text-center pb-6 '>
                <h3 className='lg:text-2xl text-base text-red-700 font-bold'>OUR TEAM MEMBERS</h3>
                <h2 className='text-4xl font-bold mt-5'>Our Talented Team Member Behind Bondor</h2>
        </div>
        <div className="container w-full mx-auto px-4 pb-6 ">
        <Slider {...settings}>
            {teamData.map((member, index) => (
            <div key={index} className="p-4 h-[480px]">
                <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 h-[400px]">
                <img src={member.image} alt={member.name} className="w-full h-96 object-cover  mb-4" />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm text-justify">{member.designation}</p>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </div>
  );
};

export default Team;