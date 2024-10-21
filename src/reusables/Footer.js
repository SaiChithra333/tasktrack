import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#A8DADC] text-[##457B9D] pt-20 pb-10 md:pt-28 relative">
      {/* Social Icons */}
      <div className="footer_icon container mt-16 mb-10">
        <div className="border-b border-[#001D3D] relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
            <div className="bg-slate-100 text-lg text-center space-x-2">
              <i className="ri-facebook-fill hover:text-[#457B9D] duration-300 cursor-pointer"></i>
              <i className="ri-twitter-x-line hover:text-[#457B9D] duration-300 cursor-pointer"></i>
              <i className="ri-instagram-line hover:text-[#457B9D] duration-300 cursor-pointer"></i>
              <i className="ri-linkedin-fill hover:text-[#457B9D] duration-300 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="footer_content container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start">
        {/* Item 1 */}
        <div>
          <div className="text-7xl text-[#001D3D] text-center inline-block">
            <img
              src="\assets\img\logo.webp"
              className="w-20 h-20 rounded-full "
            />
            <p className="font-PTSans  text-base font-bold sm:text-2xl">TaskTrack.</p>
          </div>
        </div>
        {/* Item 2 */}
        <div>
          <p className="mb-5 font-bold text-xl">Quick Link</p>
          <div className="flex flex-col gap-1">
            <a href="#">Plants</a>
            <a href="#">Flowers</a>
            <a href="#">Gardening</a>
            <a href="#">Seeds</a>
            <a href="#">Shipping</a>
          </div>
        </div>
        {/* Item 3 */}
        <div>
          <p className="mb-5 font-bold text-xl">Quick Link</p>
          <div className="flex flex-col gap-1">
            <a href="#">Popular Services</a>
            <a href="#">Tree Planting</a>
            <a href="#">Grass Cutting</a>
            <a href="#">Weeds Control</a>
            <a href="#">Project</a>
          </div>
        </div>
        {/* Item 4 */}
        <div>
          <p className="mb-5 font-bold text-xl">Contact Us</p>
          <div className="flex flex-col gap-1">
            <a href="#">+88 333 78 901</a>
            <a href="#">lightcodecamp@gmail.com</a>
            <a href="#">1234 Tailwind Ave, CSS City, Webland 56789, USA</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copy_right container">
        <p className="text-center mt-10 opacity-50">
          Copyright &copy; 2024 LightCode. All rights reserved.
        </p>
      </div>

      {/* Floral Image */}
      <div className="footer_floral absolute bottom-0 left-0 opacity-20 pointer-events-none">
        <img src="assets/img/floral-1.png" alt="" className="w-full lg:w-1/2" />
      </div>
    </footer>
  );
};

export default Footer;
