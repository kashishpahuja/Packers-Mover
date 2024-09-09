import React from 'react'

function ContactPage() {
  return (
    <div>
        <div className='relative '>
            <img src="https://unicktheme.com/demo/bondor/assets/images/backgrounds/page-header-bg.jpg" alt="topImage" className='w-full h-auto bg-gradient-to-br from-black to-transparent mix-blend-multiply' />
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8  left-4 sm:left-4 md:left-12 lg:left-28 text-white animate-slideInLeft">
                
                <h1 className="text-white text-4xl font-bold mb-2">Contact Us</h1>
                <p className="text-white text-lg sm:text-xl">
                <span className='text-yellow-600 font-bold'>Home</span> - <span>Contact Us</span>
                </p>
                
            </div>
        </div>
        <div className="container mx-auto px-4 lg:mt-28 lg:space-y-24">
        {/* Top Image */}
        <div className=" my-4">
          <img src="https://unicktheme.com/demo/bondor/assets/images/resources/contact-page-top-img-1.jpg" alt="Contact" className="w-full shadow-lg" />
        </div>

        {/* Contact Info and Google Map */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div >
              <h3 className="text-4xl font-bold text-red-700 mb-4">Get in Touch</h3>
              <p className="mb-6 text-gray-700">
                A vast majority of the app marketers mainly concentrate on post-launch app marketing techniques and measures while completely missing the pre-launch campaign. This prevents the...
              </p>

              <div className=" mb-8">
                <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
                <ul className="list-none space-y-4">
                  <li>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p>254, North City, Bulex Center, New York</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p>
                      <a href="tel:09354587874" className="text-blue-500">09 (354) 587 874</a> or <a href="tel:10698852741" className="text-blue-500">10 (698) 852 741</a>
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p>
                      <a href="mailto:info@example.com" className="text-gray-600">info@example.com</a> or <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
                    </p>
                  </li>
                </ul>
              </div>
              <a href="http://www.example.com" className="text-blue-500 hover:underline">www.example.com</a>
            </div>

            {/* Google Map */}
            <div >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                className="w-full h-64 lg:h-full shadow-lg"
                allowFullScreen
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className=" bg-[#f5f5f8] p-8 shadow-lg mb-52">
            <h3 className="text-2xl font-semibold mb-4">Let’s Get in Touch</h3>
            <p className="text-gray-600 mb-6">
              Your email address will not be published. Required fields are marked *
            </p>
            <form action="assets/inc/sendemail.php" className="contact-page__form contact-form-validated">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div className="contact-page__input-box">
                  <input type="text" placeholder="Your Name*" name="name" className="w-full border border-gray-300 p-4" />
                </div>
                <div className="contact-page__input-box">
                  <input type="email" placeholder="Your Email*" name="email" className="w-full border border-gray-300 p-4" />
                </div>
                <div className="contact-page__input-box lg:col-span-2">
                  <input type="text" placeholder="Website*" name="website" className="w-full border border-gray-300 p-4" />
                </div>
              </div>
              <div className="contact-page__input-box mb-6">
                <textarea name="message" placeholder="Write Message*" className="w-full border border-gray-300 p-4 h-32"></textarea>
              </div>
              <div className="contact-page__btn-box text-center">
                <button type="submit" className="bg-red-700 text-white py-3 px-6 hover:bg-red-900 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
            <div className="result"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
