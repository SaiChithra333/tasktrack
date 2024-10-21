import React from "react";
import Home from "./Home";
import { useLocation } from "react-router-dom";
import IconBanner from "./IconBanner";
import NewLetter from "./NewLetter";
import Popular from "./Popular";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import MiniDrawer from "../reusables/MiniDrawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

function Customer() {
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      <header className="p-2 border-b font-PTSans bg-red-100 ">
        <div className="container mx-auto flex items-center justify-between ">
          <ul className="nav flex flex-wrap lg:space-x-4 ">
            <li>
              <Link
                to="#"
                className="nav-link px-2 text-white hover:bg-grey-400"
              >
                <MiniDrawer />
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link px-2 text-black ">
                Home
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-black ">
                About us
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-black ">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link px-2 text-black ">
                Show Categories
              </Link>
            </li>
          </ul>
          <div className="relative flex gap-3 items-center">
            <form className="" role="search">
              <span>
                <SearchIcon className="absolute  left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " />
              </span>
              <input
                type="search"
                className="form-control border rounded-md p-2"
                placeholder="       Search..."
                aria-label="Search"
                focus
              />
            </form>
            <div className="dropdown text-end mt-3">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/img/profile.webp"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Home />
      <IconBanner />
      <Popular />
      <NewLetter />
    </div>
  );
}

export default Customer;
