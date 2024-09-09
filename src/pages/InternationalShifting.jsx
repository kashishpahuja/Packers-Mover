import React from 'react'
import { FaCheck} from 'react-icons/fa';
import FAQ from '../components/FAQ';
import ServiceSideBar from '../components/ServiceSideBar';

function InternationalShifting() {
  return (
<div>
      <div className="relative">
        <img
          src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg"
          alt="topImage"
          className="w-full h-auto bg-gradient-to-br z-0 from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-4xl font-bold mb-2">Services: International Shifting</h1>
          
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap mt-16">
        {/* Left Column  */}
        <ServiceSideBar />

        {/*  Right Column  */}
        <div className="w-full lg:w-7/12 xl:w-2/3">
    <div className="p-6 ">
      {/* {/ Main Title and Description /} */}
      <h3 className="text-3xl font-bold mb-4 ">
      International Shifting with SRS Packers and Movers
      </h3>
      <p className="text-gray-900 mb-6 text-lg">
      International relocation can be quite cumbersome considering the hassles related to customs restrictions, secure packaging, and safe cross-border transportation. If one needs an easy and stress-free international relocation experience, SRS Packers and Movers in Bangalore offer a professional service. With wide experience over the years and having a global network, SRS has ensured that your goods will arrive in safety and on time no matter where you are relocating. <br />

SRS Packers & Movers provide complete relocation services internationally, right from packing to documentation, customs clearance, transportation, and final delivery at your new site. Its crew is proficient in the international shipping procedure in such a way that all legal and regulatory standards are met, apart from minimizing the chance of delays and problems in transit.
</p>
      <img
        src="https://unicktheme.com/demo/bondor/assets/images/services/services-details-img-1.jpg"
        alt=""
        className="w-full h-auto my-8 "
      />

      {/* {/ packers and movers Service /} */}
      <div className="bg-white shadow-lg p-4  gap-8">
        <h3 className="text-2xl font-bold mb-4">
        Distinct Advantages of International Relocation with SRS Packers and Movers
        </h3>
        <p className="text-gray-900 mb-6 text-lg">
    <b>Real-Time Tracking:</b> SRS has GPS-enabled tracking devices to ensure that you can follow your shipment’s movement in real time, providing you with peace of mind.
</p>
<p className="text-gray-900 mb-6 text-lg">
    <b>Competent Personnel:</b> The experienced staff ensures that items are packed and loaded safely, and your valuables are handled professionally throughout transportation.
</p>
<p className="text-gray-900 mb-6 text-lg">
    <b>Timely Delivery:</b> SRS Packers & Movers prioritize on-time delivery, working diligently to ensure your goods arrive at their destination within the stipulated timeframe.
</p>
<p className="text-gray-900 mb-6 text-lg">
    <b>Stress-Free Relocation:</b> SRS manages every aspect of international moving, allowing you to focus on settling into your new environment without added stress.
</p>
<p className="text-gray-900 mb-6 text-lg">
    <b>Insurance Coverage:</b> Comprehensive insurance solutions are provided to cover any potential risks during transit, offering added protection for your valued belongings.
</p>

      </div>

      {/* {/ Goals and Challenges /} */}
      <div className="flex flex-wrap my-8 bg-white shadow-lg p-4 ">
        {/* {/ Heading Section /} */}
        <div className="w-full text-start mb-4">
          <h2 className="text-2xl font-bold mb-2">Our Goals</h2>
        </div>

        {/* {/ Goals Section /} */}
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

        {/*  Additional Goals Section */}
        <div className="w-full md:w-1/2 ">
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

      {/* <FAQ /> */}
    </div>
  </div>
      </div>
    </div>
  )
}

export default InternationalShifting