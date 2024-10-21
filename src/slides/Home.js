import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Home() {
  return (
    <div>
       <div className="home max-h-full  flex flex-col md:flex-row items-center lg:items-start lg:justify-between lg:gap-8  bg-slate-100">
      {/* Left Side: Carousel */}
      <div className="w-full  md:w-1/2">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner  ">
            <div className="carousel-item active">
              <img src="/assets/img/spa.jpg" className="d-block w-100 " alt="Cleaning" />
            </div>
            <div className="carousel-item">
              <img src="/assets/img/moving.jpg" className="d-block w-100 " alt="Electrician" />
            </div>
            <div className="carousel-item">
              <img src="/assets/img/furniture.jpg" className="d-block w-100 h-100" alt="Plumber" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Right Side: Heading and Search */}
      <div className="w-full  h-lvh flex flex-col justify-start items-center gap-4 lg:gap-6 xl:gap-8  mt-4 ">
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-Playfair font-bold">
        From Repairs to Renovations <br /> We’ve Got You Covered!
      </h1>
      <p className="font-PTSans text-center lg:text-start mb-4 lg:text-base xl:text-3xl">
        "See Reviews, Compare Prices, and Make Informed Choices!" Highlights transparency and decision-making support.
      </p>
      <form className="w-2/3 lg:w-3/4 "> {/* Add relative positioning */}
      <LocationOnIcon className='transform translate-y-8 translate-x-1' />
        <input
          type="search"
          className="form-control w-full border font-PTSans border-gray-300 rounded-lg px-3 py-2 pl-10 text-sm md:text-base lg:text-xl xl:text-base" // Add padding to the left for the icon
          placeholder="   Search with location..."
          aria-label="Search"
        />
        {/* <SearchIcon style={{fontSize:"1.2rem" }} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" /> Position the icon */}
        <div className='relative'>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Home
