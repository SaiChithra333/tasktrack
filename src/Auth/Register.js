import React, { useState } from "react";
import Footer from "../reusables/Footer";
import Header from "../reusables/Header";
import { Link, useNavigate } from "react-router-dom";
import FunctionModal from "../reusables/Modal";
import NavBar from "../reusables/NavBar";

function Register() {
  const navigate = useNavigate();
  const [tac, settac] = useState(0);
  const checkvalue = () => {
    if (tac) {
      navigate("/customer");
    } else {
      navigate("/register");
    }
  };
  return (
    <div>
      <NavBar />
      <div className=" flex justify-center items-center">
        <div className="loginbox bg-[#F1FAEE] md:w-1/2 lg:w-1/3 xl:1/4 sm:w-full  flex items-center justify-center m-12 border-grey-900 border-1 rounded-md p-12 ">
          <form className="font-PTSans flex flex-col gap-2">
            <h1 className="h3  font-PTSans fw-normal">Please sign in</h1>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com" required
              />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="" required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword" required
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword" required
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>
            <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Location"
                    required // Location input is required
                  />
                  <label htmlFor="location">Location</label>
                </div>
            <div className="m-1 space-x-2">
              <input type="checkbox" />
              <label htmlFor="customer">I want to receive emails</label>
            </div>
            <div className="m-1 space-x-2">
              <input type="checkbox" required onClick={() => settac(!tac)} />
              <label htmlFor="customer">
                I accept all{" "}
                <a
                  className="font-italic  text-blue-400"
                  href="/terms&conditions"
                >
                  terms&conditions
                </a>
              </label>
            </div>

            <button
              className="btn bg-[#8ecae6] w-100 py-2"
              onClick={checkvalue}
              type="submit"
            >
              Sign Up
            </button>
            <div>
              <a className=" text-[#8ecae6">
                <FunctionModal />
              </a>
            </div>
            <div className="underline m-0 p-0">
              <Link to="/login">already have an account?</Link>
            </div>
            <div className="underline m-0 p-0">
              <Link to="/registerpro">Want to Join Community?</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
