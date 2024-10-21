import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function Header() {
  const Navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="w-full flex flex-col">
            <div className="absolute left-5 top-2.5 hidden md:block ">
                <img src="/assets/img/logo.webp" className="w-10 h-10 rounded-full"></img>
            </div>
          <div className="bg-slate-50 h-16 flex gap-2 justify-end items-center">
            <div className="w-3/4 md:w-1/2 ml-2">
              <form role="search" className="flex items-center">
                <div className="relative w-full">
                  <input
                    type="search"
                    className="form-control w-full lg:text-xl pl-10" // Add padding to the left for the icon
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />{" "}
                  {/* Position the icon */}
                </div>
              </form>
            </div>

            <div className="pr-4 flex justify-end gap-3">
            <Button variant="outlined" href="/login" style={{borderColor:'#f8fafc ',color:'black'}}>
                login
              </Button>
              <Button variant="outlined" href="/registerpro" style={{borderColor:'grey',color:'black',fontSize:'0.7rem',paddingInlineStart:'0.3rem'}}>
                Join as Pro
              </Button>
            </div>
          </div>
          <div className="flex font-PTSans flex-wrap lg:flex-nowrap items-center justify-center md:justify-start text-xs md:text-sm lg:text-base  xl:text-2xl bg-red-100">
            <ul className="nav flex justify-start">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle px-2 text-black"
                  id="homeImprovementDropdown"
                  role="button"
                >
                  Home Improvement & Repair
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="homeImprovementDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#" >
                      Appliance Repair
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Electrician
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Plumbers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Roofing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      HVAC Companies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chimney Repair
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drywall
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      General Contractors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Foundation Repair
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle px-2 text-black"
                  id="cleaningMaintenanceDropdown"
                  role="button"
                >
                  Cleaning & Maintenance
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="cleaningMaintenanceDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Carpet Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Gutter Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      House Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Window Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Mold Removal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pressure Washing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Deck Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dryer Vent Cleaning
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Chimney Sweep
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle px-2 text-black"
                  id="designInstallationDropdown"
                  role="button"
                >
                  Design & Installation
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="designInstallationDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Interior Decorators
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Closet Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Countertop Installation
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Decks & Porches
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Lighting
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Patios
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Stone & Gravel
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Hardwood Floors
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Tile Installation
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle px-2 text-black"
                  id="miscellaneousDropdown"
                  role="button"
                >
                  Miscellaneous Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="miscellaneousDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Pest Control
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Locksmith
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Handyman
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Movers
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Real Estate Agent
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Home Security Systems
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Trash Removal
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Holiday Decorating
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
