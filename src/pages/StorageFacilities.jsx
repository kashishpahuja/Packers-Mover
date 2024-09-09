import React from "react";
import { FaCheck } from "react-icons/fa";
import ServiceSideBar from "../components/ServiceSideBar";
import FAQ from "../components/FAQ";
function StorageFacilities() {
  return (
    <div>
      <div className="relative">
        <img
          src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg"
          alt="topImage"
          className="w-full h-auto bg-gradient-to-br z-0 from-black to-transparent mix-blend-multiply"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
          <h1 className="text-white text-4xl font-bold mb-2">Services: Storage Facilities</h1>
          
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
              SRS Packers & Movers: Comprehensive Storage Solutions
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Efficient storage requires coordination and planning. SRS Packers
              & Movers provides credible and safe storage facilities, tailored
              according to the individual clients' needs. Be it long-term or
              short-term, our experienced staff ensures that your goods are well
              preserved and accessible in the best manner. We take care of
              everything-from delicate inventory management to ideal environment
              preservation-to make the storage process smooth and hassle-free.
            </p>
            <img
              src="https://unicktheme.com/demo/bondor/assets/images/services/services-details-img-1.jpg"
              alt=""
              className="w-full h-auto my-8 "
            />

            {/* {/ packers and movers Service /} */}
            <div className="bg-white shadow-lg p-4  gap-8">
              <h3 className="text-2xl font-bold mb-4">
                Reliable and Secure Storage Services
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                SRS Packers and Movers in Bangalore offer complete storage
                facilities for short-term or long-term purposes. The storage
                facilities offered by them are tremendously safe, wherein only
                the authorized workers can access it with the aid of CCTV
                monitoring round the clock to ensure that your goods remain safe
                and sound. They maintain climate-controlled storage chambers for
                sensitive valuables so that these don't get damaged due to
                environmental factors. With a flexible storage contract, you can
                have your stuff stay in storage from several days to several
                months. Moreover, SRS makes the process of inventory management
                quite easy by itemizing and tracking everything you store. They
                offer unit sizes in a range of sizes, with clear and reasonable
                pricing so you may store anything from big furniture to little
                personal belongings. Additionally, it provides fast access to
                your belongings, thanks to the business.
              </p>
              <h3 className="text-2xl font-bold mb-4">
                Trusted and Secure Storage Facilities in Bangalore
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                SRS Packers and Movers Bangalore offers customized storage
                facilities for a wide range of customers' demands. It strives to
                innovate and make the transition smooth, effective, and
                successful. The warehouses will be fully equipped with the
                latest technology, which would improve the aspects of both
                security and convenience. It would facilitate real-time
                monitoring systems, space management with much efficiency, and
                more. Facilities are designed for managing products from
                domestic items to commercial stocks, ensuring maximum
                flexibility for individual customers as well as corporations.
                These include value-added services such as professional packing,
                where every item is wrapped safely and carried with care to a
                storage facility. Storage rooms are designed in such a way that
                access to them is easy for safe handling in the case of things
                that require special care or attention. SRS fully supports the
                entire process of storage.
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

            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorageFacilities;