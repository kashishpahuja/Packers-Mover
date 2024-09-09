import React from "react";
import { FaCheck } from "react-icons/fa";
import ServiceSideBar from "../components/ServiceSideBar";
import FAQ from "../components/FAQ";

function HomeShifting() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg"
          alt="topImage"
          className="w-full h-auto bg-gradient-to-br z-0 from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-4xl font-bold mb-2">Services: Home Shifting</h1>
          
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap mt-16">
        {/* Left Column */}
        <ServiceSideBar />

        {/* Right Column */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
          <div className="p-6 ">
            {/* Main Title and Description */}
            <h3 className="text-3xl font-bold mb-4 ">
              SRS Packers and Movers: Your Reliable Partner for Home Shifting{" "}
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              House shifting requires a lot of planning and mobilization on your
              part for smooth shifting to take place without disturbing your
              daily routine. SRS Packers & Movers are professional and renowned
              packers and movers offering consistent and efficient services
              regarding house shifting to make the transition hassle-free and as
              smooth as possible. From packing up your valuable belongings to
              settling into your new home, let our professionals handle every
              detail. We can offer specialized solutions to meet your specific
              needs and ensure the move is customized to your expectations in
              terms of time and specifications. Because we have knowledgeable
              personnel, everything is taken care of, from packing and
              disassembling furniture to unpacking and organizing at your new
              home.We make sure that your relocation is performed professionally
              with SRS Packers & Movers for a seamless move at your new
              location.
            </p>
            <img
              src="https://unicktheme.com/demo/bondor/assets/images/services/services-details-img-1.jpg"
              alt=""
              className="w-full h-auto my-8 "
            />

            {/* packers and movers Service */}
            <div className="bg-white shadow-lg p-4  gap-8">
              <h3 className="text-2xl font-bold mb-4">
                Efficient and Hassle-Free Office Relocation in Bangalore with
                SRS Packers and Movers
              </h3>
              <div className="text-gray-600 mb-6 text-lg">
                House shifting is a lot about elaborate planning and executions
                to complete the process with minimum fuss. SRS Packers & Movers
                specialize in home shifting services that make your transition
                smooth and efficient. With ample experience in household
                relocations, SRS Packers & Movers develops an all-inclusive
                array of moving services. From packing up your belongings to
                settling them into your new home, their experienced team manages
                every detail with care. Our home-shifting services also
                include:
               <p className="mt-2"> <b>Packing and Unpacking:</b> The packing can be done by the
                experts themselves who will pack all your items safely, and
                unpacking in your new location is efficiently carried out.</p>
                <p className="my-2"><b>Loading and Unloading:</b> They load and unload their goods
                safely and securely so that there is no breakage in them.
                Transportation: They ensure timely transportation.</p>
                <b>Special Handling:</b> Special handling is done with fragile
                items or any other valuable possessions.
               <p className="mt-2"><b>Loading and Unloading:</b> They load and unload their goods
                safely and securely so that there is no breakage in them.
                Transportation: They ensure timely transportation.</p>
              </div>
            </div>

            {/* Goals and Challenges */}
            <div className="flex flex-wrap my-8 bg-white shadow-lg p-4 ">
              {/* Heading Section */}
              <div className="w-full text-start mb-4">
                <h2 className="text-2xl font-bold mb-2">Our Goals</h2>
              </div>

              {/* Goals Section */}
              <div className="w-full md:w-1/2">
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-red-700 mr-4" />
                    <p className="text-gray-900 text-lg">
                      Provide Exceptional Customer Service
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-red-700 mr-4" />
                    <p className="text-gray-900 text-lg">
                      Expand Service Offerings
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-red-700 mr-4" />
                    <p className="text-gray-900 text-lg">
                      Maintain Safety and Efficiency
                    </p>
                  </li>
                </ul>
              </div>

              {/* Additional Goals Section */}
              <div className="w-full md:w-1/2 px-4">
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <FaCheck className="text-red-700 mr-4" />
                    <p className="text-gray-900 text-lg">
                      Improve Operational Efficiency
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-red-700 mr-4" />
                    <p className="text-gray-900 text-lg">
                      Focus on Sustainability
                    </p>
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-red-700 mr-4" />
                    <p className="text-gray-900 text-lg">
                      Leverage Technology Integration
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeShifting;
