import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NavBar from "../reusables/NavBar";
import Footer from "../reusables/Footer";

function FullCard() {
  const Navigate = useNavigate();
  const location = useLocation();
  const { professional } = location.state || {}; // Destructure professional data from location

  // Fallback data in case no state is passed
  const fallbackData = {
    imgSrc: "assets/img/default.jpg",
    name: "Unknown",
    profession: "Unknown Profession",
    timings: "Not Available",
    description: "No description available.",
    rate: 0,
    stars: 0,
  };
  const handleclikc = ()=>{
    Navigate('/payment')
  }

  // Use either the passed professional data or fallback data
  const data = professional || fallbackData;

  return (
    <div>
      <NavBar />
      <div className="bg-[#A8DADC] h-fit mb-32 px-10 pt-20 pb-50 lg:p-40 xl:p-50 lg:pb-60 xl:pb-64 rounded-md relative text-center overflow-hidden">
        <img
          src={data.imgSrc}
          alt={data.profession}
          className="absolute top-5 right-5 w-42 h-32 lg:w-62 lg:h-52 xl:w-82 xl:h-72 rounded-full lg:top-10 lg:right-10 xl:top-12 xl:right-12"
        />
        <div className="flex flex-col font-bold gap-2 items-start m-0 p-0">
          <h3 className="text-[#457B9D] mb-4 font-bold font-Playfair text-2xl xl:text-3xl">
            {data.name}
          </h3>
          <p className="font-bold text-xl xl:text-2xl">{data.profession}</p>
          <p className="text-base font-bold xl:text-2xl">
            Timings available: {data.timings}
          </p>
          <p className="xl:text-xl m-0 p-0">Experience: 3 years</p>
          <p className="xl:text-xl m-0 p-0">Mobile Number: +91 8893734230</p>
          <p className="xl:text-xl m-0 p-0">Description: {data.description}</p>
        </div>
        <div className="text-[#f4bb40] text-xl py-2 mt-4">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={`ri-star-${index < data.stars ? "fill" : "line"}`}
            ></i>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl text-[#333]">${data.rate}/hr</p>
          <Fab variant="extended" className="bg-[#f4bb40]" onClick={handleclikc}>
            Book Now
            <ArrowForwardIcon sx={{ ml: 1 }} />
          </Fab>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FullCard;
