import React from 'react'
import { FaCheck} from 'react-icons/fa';
import FAQ from '../components/FAQ.jsx'
import ServiceSideBar from '../components/ServiceSideBar';

function PackersMovers() {
  return (
    <div >
      <div className='relative'>
        <img
          src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg"
          alt="topImage"
          className='w-full h-auto bg-gradient-to-br z-0 from-black to-transparent mix-blend-multiply'
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-4xl font-bold mb-2">Services: Packers & Movers</h1>
          
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap mt-16">
        {/* Left Column */}
        <ServiceSideBar/>

        {/* Right Column */}
        <div className="w-full lg:w-7/12 xl:w-2/3 ">
        <div className="p-6 ">
            {/* Main Title and Description */}
            <h3 className="text-3xl font-bold mb-4 ">
            SRS Packers and Movers: Your Trusted Relocation Partner
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
            Shifting from one city or state to another may be bothersome. One needs to ensure that all of his belongings are packed and shifted, which requires a tactical and skillful implementation of plans. Among the well-known shifting companies in Bangalore, SRS Packers & Movers enjoys a lead among people because of their work ethics and commitment towards fulfilling customer requirements.
            </p>
            <img
              src="https://unicktheme.com/demo/bondor/assets/images/services/services-details-img-1.jpg"
              alt=""
              className="w-full h-auto my-8 "
            />

            {/* packers and movers Service */}
            <div className='bg-white shadow-lg p-4  gap-8'>
              <h3 className="text-2xl font-bold mb-4">SRS Movers & Packers.</h3>
              <p className="text-gray-600 mb-6 text-lg">
              SRS Packers & Movers in Bengaluru offer home-moving services as well as business relocation services. They try to make their clients have a smooth and stress-free relocation by utilizing their expertise in packing and moving services. Bangalore's Trusted Moving Partner: SRS Packers & Movers
              Shifting from one city or state to another is a hassle. Packing and then relocating all goods requires adequate planning and proper execution. It is for this that SRS Packers & Movers exists as a leading provider of house-shifting services in Bangalore. In this regard, keeping customers in mind, they have a professional way of working.
              </p>
              <h3 className="text-2xl font-bold mb-4">Efficient Residential and Commercial Relocations</h3>
              <p className="text-gray-600 mb-6 text-lg">
              SRS Packers & Movers are the best in providing relocation services effectively to corporate and residential clients. Whether it's your company moving or you moving into a new home, our highly qualified team of professionals manages every aspect of relocation with much care, efficiency, and accuracy. We want to make the process as smooth as possible, and we certainly understand how moving can be a truly stressful experience, especially when it comes to planning your home or handling the details of a corporate relocation.
              </p>
              <h3 className="text-2xl font-bold mb-4">Stress-Free Packing and Moving Solutions</h3>
              <p className="text-gray-600 mb-6 text-lg">
              We at SRS Packers & Movers provide hassle-free relocation through our full-range packing and moving services. Our skilled staff ensures that every stage of the moving procedure is carried out with precision and care. We use top-quality packing supplies in order to protect your valuables, while our efficient moving services ensure everything reaches your new destination on time and safely.
              </p>
              <p className="text-gray-600 mb-6 text-lg">From local to across-town services, we have it all to meet your requirements. Let the packers and movers do the job-from huge furniture to the most fragile items-as you sit back and get ready to unpack in the new home or office.


              </p>
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
        <p className="text-gray-900 text-lg">Provide Exceptional Customer Service</p>
      </li>
      <li className="flex items-center">
        <FaCheck className="text-red-700 mr-4" />
        <p className="text-gray-900 text-lg">Expand Service Offerings</p>
      </li>
      <li className="flex items-center">
        <FaCheck className="text-red-700 mr-4" />
        <p className="text-gray-900 text-lg">Maintain Safety and Efficiency</p>
      </li>
    </ul>
  </div>

  {/* Additional Goals Section */}
  <div className="w-full md:w-1/2 px-4">
    <ul className="list-none space-y-2">
      <li className="flex items-center">
        <FaCheck className="text-red-700 mr-4" />
        <p className="text-gray-900 text-lg">Improve Operational Efficiency</p>
      </li>
      <li className="flex items-center">
        <FaCheck className="text-red-700 mr-4" />
        <p className="text-gray-900 text-lg">Focus on Sustainability</p>
      </li>
      <li className="flex items-center">
        <FaCheck className="text-red-700 mr-4" />
        <p className="text-gray-900 text-lg">Leverage Technology Integration</p>
      </li>
    </ul>
  </div>
</div>




            <FAQ/>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PackersMovers
