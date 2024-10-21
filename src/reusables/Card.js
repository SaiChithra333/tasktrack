import React from "react";
import Fab from "@mui/material/Fab";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Card = ({ imageSrc, name, profession, timings, description, rating, price, onClick }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="bg-[#A8DADC] p-3 rounded-md relative text-center overflow-hidden">
      <img
        src={imageSrc}
        alt={name}
        className="absolute top-16 w-32 h-28 rounded-full -right-16 transform -translate-x-1/2 -translate-y-1/2 duration-500 hover:top-16"
      />
      <div className="flex flex-col gap-2 items-start m-0 p-0">
        <h3 className="text-[#457B9D] mb-4 font-bold font-Playfair text-2xl xl:text-3xl">
          {name}
        </h3>
        <p className="font-bold text-xl xl:text-2xl">{profession}</p>
        <p className="text-base font-bold xl:text-2xl">Timings available: {timings}</p>
        <p className="xl:text-xl m-0 p-0">{description}</p>
      </div>
      <div className="text-[#f4bb40] text-xl py-2 flex">
        {Array.from({ length: 5 }, (_, index) => (
          <i key={index} className={`ri-star-${index < rating ? "fill" : "line"}`}></i>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xl text-[#333]">${price}/hr</p>
        <Fab variant="extended" className="bg-[#f4bb40]" onClick={handleClick}>
          Book Now
          <ArrowForwardIcon sx={{ ml: 1 }} />
        </Fab>
      </div>
    </div>
  );
};

export default Card;
