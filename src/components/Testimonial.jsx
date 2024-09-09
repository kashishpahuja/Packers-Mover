import React from 'react';
import Slider from 'react-slick';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.jpg';
import p3 from '../images/p3.jpg';
import quote from '../assets/hero/quote.png';

const Testimonials = () => {
    const testimonials = [
        {
            text: "SRS Packers & Movers made my relocation smooth and stress-free. Their team was professional, punctual, and handled all my belongings with care. Highly recommended!",
            name: "Anisha Patil",
            title: "Small Business Owner",
            image: p1
        },
        {
            text: "The service provided by SRS Packers & Movers was exceptional. From packing to unpacking, everything was handled efficiently and with great attention to detail.",
            name: "Shivam Chaundhary",
            title: "Marketing Executive",
            image: p2
        },
        {
            text: "I had a great experience with SRS Packers & Movers. Their team ensured that my belongings were safely transported. I appreciate their commitment to customer satisfaction.",
            name: "Kiran Dhiman",
            title: "Teacher",
            image: p3
        },
        {
            text: "SRS Packers & Movers provided excellent service during my recent move. The staff was friendly, and the entire process was handled smoothly. I would definitely use their services again.",
            name: "Disha Khurana",
            title: "IT Specialist",
            image: p1
        },
        {
            text: "Moving with SRS Packers & Movers was a breeze. They were efficient and took great care with my items. Their professionalism and dedication to service really stood out.",
            name: "Rohit",
            title: "Entrepreneur",
            image: p2
        }
    ];
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay:true,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay:true,
                    autoplaySpeed: 3000,

                }
            }
        ]
    };

    return (
        <div className="mx-auto lg:p-16 text-center bg-image">
            <div className="mb-8 flex justify-center flex-wrap items-center ">
                <div className='text-start space-y-4 p-6'>
                    <h4 className='font-bold text-xl lg:text-2xl text-red-600'>Our Client Awesome Reviews</h4>
                    <h2 className="text-4xl font-bold mb-4 text-white">Why Customers Love to Work with Us</h2>
                </div>
            </div>
            <Slider {...settings} className="text-white w-[80%] mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="relative max-w-sm my-8 p-4 lg:p-10  bg-[#272626] rounded-lg text-justify">
                        <img src={quote} className="absolute text-red-600 -top-5 h-8 lg:h-auto left-[40%]" alt="dblquotes" />
                        <div className="mb-4 text-xl text-center">
                            <p>{testimonial.text}</p>
                        </div>
                        <div className="flex items-center">
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-12 h-12 mt-3 rounded-full mr-6" 
                            />
                            <div className='mt-4'>
                                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                                <p className="text-lg text-gray-200">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Testimonials;
