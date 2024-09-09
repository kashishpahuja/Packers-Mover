import React, {useState} from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? 0 : index);
  };
  return (
    <div className="space-y-4">
    {/* FAQ Item 1 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-xl font-bold cursor-pointer" onClick={() => toggleFAQ(0)}>
        How do you ensure the safety of goods during transit?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(0)} className="cursor-pointer text-lg text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 0 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      
      {/* Conditionally render the paragraph */}
      {activeIndex === 0 && (
        <p className="text-gray-600 mt-2 text-xl">
          <hr className='my-4' />
          We utilize premium packing materials and have skilled professionals who treat your belongings with the highest level of care. Moreover, our vehicles are designed to securely transport items to their destination.
        </p>
      )}
    </div>

    {/* FAQ Item 2 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-xl font-bold cursor-pointer " onClick={() => toggleFAQ(1)}>
        What if my items are damaged during the move?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(1)} className="cursor-pointer text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 1 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      
      {/* Conditionally render the paragraph */}
      {activeIndex === 1 && (
        <p className=" text-xl text-gray-600 mt-2">
          <hr className='my-4' />
          While we take every precaution to ensure your belongings are safely transported, in the event of damage, our insurance policies will cover the cost. Please report any issues as soon as possible for a timely resolution.
        </p>
      )}
    </div>

    {/* FAQ Item 3 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-xl font-bold cursor-pointer" onClick={() => toggleFAQ(2)}>
        Do you offer vehicle transportation services?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(2)} className="cursor-pointer text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 2 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      
      {/* Conditionally render the paragraph */}
      {activeIndex === 2 && (
        <p className="text-gray-600 mt-2 text-xl">
          <hr className='my-4' />
          Yes, we can transport vehicles, including cars and motorcycles, as part of our moving services. We ensure safe and secure delivery to your new location.
        </p>
      )}
    </div>

    {/* FAQ Item 4 */}
    <div className="border-b border-gray-200 p-6 my-8 bg-white shadow-lg ">
      <div className="flex justify-between items-center ">
        <h4 className="text-xl font-bold cursor-pointer" onClick={() => toggleFAQ(3)}>
        Can I track my shipment during transit?
        </h4>
        {/* Toggle Icon */}
        <div onClick={() => toggleFAQ(3)} className="cursor-pointer text-white border border-red-700 bg-red-700 p-2 rounded-xl">
          {activeIndex === 3 ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      {/* Conditionally render the paragraph */}
      {activeIndex === 3 && (
        <p className="text-gray-600  text-xl mt-2">
          <hr className='my-4'/>
          Yes, we provide tracking options for your goods, allowing you to monitor the progress of your move and know the expected delivery time.
        </p>
      )}
    </div>
  </div>
  )
}

export default FAQ
