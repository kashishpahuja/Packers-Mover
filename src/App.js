import React from "react";
import "./index.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Menu from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from './components/About.jsx';
import Services from "./components/Services.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Counter from "./components/Counter.jsx";
import Team from './components/Team.jsx';
import Gallary from "./components/Gallary.jsx";
import Quote from "./components/Quote.jsx";
import Footer from "./components/Footer.jsx";
import Testimonial from './components/Testimonial.jsx';
import News from "./components/News.jsx";
import Blog from "./pages/BlogPage.jsx";
import BlogDetails from "./pages/BlogDetails.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import OfficeShifting from "./pages/OfficeShifting.jsx";
import HomeShifting from "./pages/HomeShifting.jsx";
import StorageFacilities from "./pages/StorageFacilities.jsx";
import BikeCarShifting from './pages/BikeCarShifting.jsx';
import InternationalShifting from './pages/InternationalShifting.jsx';
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import PackersMovers from "./pages/PackersMovers.jsx";
import Popup from "./components/PopUp.jsx";



function App() {
  return (
    <Router>
      <Header />
      <Menu />
      <Popup/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs/>
            <Gallary />
            <Counter />
            <Testimonial />
            <News />
            <Quote />
          </>
        } />
        <Route path="/blog" element={<Blog />} />  
        <Route path="/blog-details" element={<BlogDetails/>} />
        <Route path="/about" element={<AboutPage />} />  
        <Route path="/services" element={<ServicePage/>} />  
        <Route path="/contact" element={<ContactPage/>} />  
        <Route path="/packers-movers-banglore" element={<PackersMovers />} />  
        <Route path="/office-shifting-banglore" element={<OfficeShifting />} />  
        <Route path="/home-shifting-banglore" element={<HomeShifting />} />  
        <Route path="/storage-facilities-banglore" element={<StorageFacilities />} />  
        <Route path="/bike-car-shifting-banglore" element={<BikeCarShifting />} />  
        <Route path="/international-shifting-banglore" element={<InternationalShifting />} />  
        
        
                
        

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
