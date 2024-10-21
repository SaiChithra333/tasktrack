import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../reusables/Card";
import NavBar from "../reusables/NavBar";
import Footer from "../reusables/Footer";

const Popular = () => {
  const navigate = useNavigate();

  const handleClick = (professional) => {
    navigate("/fullcard", { state: { professional } }); // Pass professional data to FullCard component
  };

  // Professional data
  const professionals = [
    {
      imgSrc: "assets/img/electrician.jpg",
      name: "John Doe",
      profession: "Electrician",
      timings: "8:00am - 8:00pm",
      description: "Expert in residential electrical work and repairs.",
      rate: 80,
      stars: 3,
    },
    {
      imgSrc: "assets/img/painter.jpg",
      name: "Jane Smith",
      profession: "Painter",
      timings: "9:00am - 6:00pm",
      description: "Specializes in interior and exterior painting.",
      rate: 70,
      stars: 4,
    },
    {
      imgSrc: "assets/img/pedicure.jpg",
      name: "Emily Brown",
      profession: "Pedicurist",
      timings: "7:00am - 5:00pm",
      description: "Offers professional pedicure and foot care services.",
      rate: 50,
      stars: 4,
    },
    {
      imgSrc: "assets/img/Pest-Control.jpg",
      name: "Michael Green",
      profession: "Pest Control Specialist",
      timings: "10:00am - 6:00pm",
      description: "Experienced in pest removal and prevention.",
      rate: 65,
      stars: 5,
    },
    {
      imgSrc: "assets/img/plumber.png",
      name: "Sarah Johnson",
      profession: "Plumber",
      timings: "9:00am - 5:00pm",
      description: "Specializes in all types of plumbing repairs.",
      rate: 75,
      stars: 3,
    },
    {
      imgSrc: "assets/img/moving.jpg",
      name: "Sophia White",
      profession: "Movers",
      timings: "8:00am - 4:00pm",
      description: "Provides residential and commercial moving services.",
      rate: 60,
      stars: 3,
    },
  ];

  return (
    <div>
      <NavBar/>
    <section id="popular" className="bg-[#F1FAEE] p-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-Playfair font-bold text-[#457B9D]">
          Popular Professionals Nearby
        </h2>
        <p className="max-w-2xl mx-auto font-PTSans font-bold">
          Discover skilled professionals in your area!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {professionals.map((professional, index) => (
          <Card
            key={index}
            imageSrc={professional.imgSrc}
            name={professional.name}
            profession={professional.profession}
            timings={professional.timings}
            description={professional.description}
            price={professional.rate}
            rating={professional.stars}
            onClick={() => handleClick(professional)} // Pass professional info on click
          />
        ))}
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Popular;
