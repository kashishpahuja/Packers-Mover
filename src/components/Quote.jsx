import React from 'react';

const Quote = () => {
  return (
    <section className="relative py-12 ">
        <div className='top-0 left-0 absolute'>
            <img src="https://unicktheme.com/demo/bondor/assets/images/shapes/contact-one-shape-2.png" className="w-full h-auto object-cover" alt="topleft" />
        </div>
        <div className="absolute bottom-[-44px] left-0 ">
        <img src="https://unicktheme.com/demo/bondor/assets/images/shapes/contact-one-shape-4.png" alt="bottomleft" className="w-full h-auto object-cover" />
      </div>
      <div className='top-0 right-0 absolute hidden lg:block'>
            <img src="https://unicktheme.com/demo/bondor/assets/images/shapes/contact-one-shape-6.png" className="w-full h-auto object-cover" alt="bottomright" />
        </div>
        <div className="absolute top-0 right-0 ">
        <img src="https://unicktheme.com/demo/bondor/assets/images/shapes/contact-one-shape-5.png" alt="topright" className="w-full h-auto opacity-25" />
      </div>
      <div className="container mx-auto p-8 relative z-30">
        <div className="flex gap-20 justify-center flex-wrap lg:flex-nowrap mt-10  items-center">
          {/* Left Column */}
          <div className=" mb-8 md:mb-0">
            <div className="relative">
                <img src="https://unicktheme.com/demo/bondor/assets/images/resources/contact-one-img-1.jpg" alt="Contact" className="w-full max-w-lg h-auto border-0 rounded-full" />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 p-12  border-2 bg-gray-50">
            <div>
              <p className="text-primary text-lg font-bold mb-2 text-red-700 ">GET FREE QUOTE</p>
              <h2 className="text-4xl font-bold text-slate-800 mb-6 ">Request a Quote</h2>

              {/* Form */}
              <form >
                  <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 text-black border border-gray-300 rounded" />
                  <input type="email" placeholder="Email Address" className="w-full mb-4 p-3 text-black border border-gray-300 rounded" />
                  <input type="text" placeholder="Phone Number" className="w-full p-3 mb-4 text-black border border-gray-300 rounded" />
                  <input type="text" placeholder="Property Types" className="w-full p-3 border text-black border-gray-300 rounded" />

                {/* Form Bottom */}
                <div className="flex items-center justify-between mt-8">
                  <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 mt-2 px-6 rounded animate-bounce">
                    GET YOUR QUOTE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
