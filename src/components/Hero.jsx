import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import sliderImg1 from '../assets/hero/hero1.jpg'
import sliderImg2 from '../assets/hero/img1.avif'
import sliderImg3 from '../assets/hero/log.avif'



function Hero() {
  const contentData = [
    {
      image: sliderImg1,
      title: "Your Trusted Moving Partner",
      mainText: "Stress-Free Relocations for Home and Office.",
      description: "Experience a hassle-free move with our expert packing and moving services. We ensure your belongings are safely transported with care and precision."
    },
    {
      image: sliderImg2,
      title: "Expert Packers and Movers",
      mainText: "Reliable Solutions for a Seamless Transition.",
      description: "Our professional team provides top-quality packing and moving services to make your relocation smooth and stress-free. Let us handle the heavy lifting."
    },
    {
      image: sliderImg3,
      title: "Efficient Moving Services",
      mainText: "Your Move, Our Priority.",
      description: "From packing to transport, we handle every detail to ensure your move is seamless and worry-free. Trust us for a safe and efficient relocation experience."
    }
  ];
  

      const [currentIndex, setCurrentIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
        }, 3000);
        return () => clearInterval(interval);
      }, []); 

  const { image, title, mainText, description } = contentData[currentIndex];

    return (
        <div
            className="relative flex flex-col lg:flex-row justify-start items-center bg-cover bg-slate-700 bg-center h-auto lg:h-96 w-full text-white "
            style={{ backgroundImage: `url(${image})`,
                     backgroundSize:'cover',
                     backgroundRepeat: "no-repeat",
                     backgroundPosition: "center",
                     height: window.innerWidth <= 768 ? "480px" : "770px", // Conditionally set height based on window width
                     transition: "background-image 2s ease-in-out",
             }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent mix-blend-multiply"></div>
            <div className="absolute top-52 max-sm:top-28 max-lg:top-40 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft space-y-8">
                <h1 className='text-2xl  font-semibold font-serif tracking-widest text-[#dcd7d7]'>SRS Packers & Movers</h1>
                <h3
                className="text-2xl md:text-3xl lg:text-4xl font-semibold font-serif tracking-widest text-[#f1ecec]"
                style={{ fontFamily: "'Bilbo Swash Caps', cursive" }}
                >
                {title}
                </h3>
                <h1 className="text-lg md:text-2xl lg:text-5xl leading-tight font-semibold">
                <div>
                    {mainText.split(' ').map((word, index) =>
                    index === mainText.split(' ').length - 1 ? <span key={index}>{word}</span> : `${word} `
                    )}
                </div>
                </h1>
                <div className=" w-full md:w-full lg:w-6/12">
                
                    <p className="text-xl md:font-medium font-base">
                    {description}
                    </p>
                
                </div>
                <div className="d-flex">
                <Link to="/about" className=" w-auto  bg-red-600 text-white p-4 rounded-lg transition duration-400 ease-in-out text-lg lg:text-2xl font-semibold focus:outline-none hover:bg-red-700 hover:text-white">
                    Discover More
                </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Hero;
