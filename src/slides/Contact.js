import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Contactmodal from '../reusables/Contactmodal'
import NavBar from "../reusables/NavBar";
import Footer from "../reusables/Footer";


function Contact() {
  return (
    <div>
        <NavBar/>
    <div className="contactcont min-h-fit mb-32">
      <div className="flex w-full md:w-4/5 lg:w-2/3 xl:w-1/2 h-fit justify-between p-12 ">
        <form className="loginbox w-full p-6  gap-10 bg-slate-50 border-slate-50  rounded-md flex flex-col justify-center items-start">
        <h1 className="font-Playfair text-[#001D3D] text-xl md:text-2xl lg:text-3xl xl:text-4xl">Contact Us</h1>
          <div className="w-full">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{width:"100%"}}
            />
          </div>
          <div className="w-full">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
               style={{width:"100%"}}
            />
          </div>
          <div className="w-full">
            <TextField
              id="outlined-textarea"
              label="FeedBack"
                style={{width:"100%"}}
              multiline
            />
          </div>
          <div className="flex border-slate-50 justify-center items-center">
            <Button  className="flex justify-center items-center text-[#457B9D] hover:bg-slate-300 hover:text-white" variant="outlined" href="#outlined-buttons">
           
              <Contactmodal style={{ color: "white" }} />
           
            </Button>
          </div>
          <div className="flex justify-center w-full">
          <div className="footer_icon container mt-2 mb-10">
        {/* <div className="border-b border-[#001D3D] relative">
          <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto"> */}
            <div className="text-lg text-center space-x-4">
              <i className="ri-facebook-fill hover:text-[#457B9D] duration-300 cursor-pointer"></i>
              <i className="ri-twitter-x-line hover:text-[#457B9D] duration-300 cursor-pointer"></i>
              <i className="ri-instagram-line hover:text-[#457B9D] duration-300 cursor-pointer"></i>
              <i className="ri-linkedin-fill hover:text-[#457B9D] duration-300 cursor-pointer"></i>
            {/* </div>
          </div> */}
        </div>
      </div>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Contact;
