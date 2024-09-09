import React, { useState, useEffect } from "react";
import { FaGlobe, FaUsers, FaStar, FaTruck } from "react-icons/fa";

const counterData = [
  {
    icon: <FaGlobe />,
    count: 250,
    label: "Worldwide Branches",
    suffix: "+",
  },
  {
    icon: <FaUsers />,
    count: 20,
    label: "Total Clients in World",
    suffix: "+",
  },
  {
    icon: <FaStar />,
    count: 2.56,
    label: "Satisfied Customers",
    suffix: "k",
  },
  {
    icon: <FaTruck />,
    count: 99,
    label: "Successful Delivery",
    suffix: "%",
  },
];

const Counter = () => {
  const [counters, setCounters] = useState(
    counterData.map((item) => ({ ...item, currentCount: 0 }))
  );

  useEffect(() => {
    counters.forEach((item, index) => {
      const increment = item.count / 200; // Adjust the speed of increment
      const interval = setInterval(() => {
        setCounters((prevCounters) => {
          const newCounters = [...prevCounters];
          if (newCounters[index].currentCount < item.count) {
            newCounters[index].currentCount = Math.min(
              newCounters[index].currentCount + increment,
              item.count
            );
          } else {
            clearInterval(interval);
          }
          return newCounters;
        });
      }, 40); // Adjust the speed of animation
    });
  }, []);

  return (
      <div className="container mx-auto px-4 py-16 ">
        <div className="flex flex-wrap justify-center items-center">
          <ul className="flex flex-wrap justify-center gap-8 lg:gap-52">
            {counters.map((item, index) => (
              <li key={index} className="flex flex-col items-center text-center animate-fadeIn">
                <div className="mb-4 text-3xl lg:text-5xl text-black p-6 border-2 border-dashed border-red-700 rounded-full shadow-md ">
                  {item.icon}
                </div>
                <div className="flex items-baseline">
                  <h3 className="text-3xl lg:text-5xl font-bold text-black">
                    {item.currentCount.toFixed(item.count % 1 !== 0 ? 2 : 0)}
                  </h3>
                  <span className="text-4xl font-semibold text-black ml-1">{item.suffix}</span>
                </div>
                <p className="mt-2 text-black  text-xl">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default Counter;


