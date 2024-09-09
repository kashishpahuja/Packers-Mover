import React from "react";
import img1 from '../assets/gallary/project1.jpg';
import img2 from '../assets/gallary/project2.jpg';
import img3 from '../assets/gallary/project3.jpg';
import img4 from '../assets/gallary/project4.jpg';
import img5 from '../assets/gallary/project5.jpg';
import img6 from '../assets/gallary/project6.jpg';


// Array to hold project data
const projectData = [
  {
    image: img1,
    category: "Residential Relocations",
    title: "Seamless Home Moves",
  },
  {
    image: img2,
    category: "Commercial Moves",
    title: "Efficient Office Relocations",
  },
  {
    image: img3,
    category: "International Moving",
    title: "Global Relocation Services",
  },
  {
    image: img4,
    category: "Vehicle Transport",
    title: "Safe and Secure Vehicle Moving",
  },
  {
    image: img5,
    category: "Storage Solutions",
    title: "Flexible Storage Options",
  },
  {
    image: img6,
    category: "Special Handling",
    title: "Expert Care for Fragile Items",
  },
];

const Projects = () => {
  return (
    <section
  className="bg-secondary-color p-6 lg:py-16 animate-fadeIn bg-second"

>
      {/* Section Title */}
      <div className="mb-8 md:mb-16">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-lg-8 col-xl-6">
              <h5 className="font-bold text-xl lg:text-2xl text-red-600">
                Our Projects
              </h5>
              <h2 className="text-slate-800 text-4xl font-bold mb-8 animate-slideUp">
                Explore Our Successful Relocations
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Section Content */}
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap -mx-4">
          {projectData.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 animate-fadeIn">
              <div className="project-item bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative group">
                  <img
                    className="w-full lg:h-96 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                  />
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <div className="text-white mt-4">
                        <h6 className="text-xl font-semibold">{project.category}</h6>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
