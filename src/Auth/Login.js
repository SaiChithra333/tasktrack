import React, { useState } from "react";
import Footer from "../reusables/Footer";
import Header from "../reusables/Header";
import { Link, useNavigate } from "react-router-dom";
import FunctionModal from "../reusables/Modal";
import NavBar from "../reusables/NavBar";

function Login() {
  const navigate = useNavigate();
  const [customer, setcustomer] = useState("false");
  const checkvalue = () => {
    if (customer) {
      navigate("/customer");
    } else {
      navigate("/professional");
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
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com" required
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password" required
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="m-1 space-x-2">
              <input
                type="radio"
                id="customer"
                name="userType"
                value="customer"
                required
                onClick={() => setcustomer(1)}
              />
              <label htmlFor="customer">Customer</label>
            </div>

            <div className="m-1 space-x-2">
              <input
                type="radio"
                id="professional"
                name="userType"
                value="professional" required
                onClick={() => setcustomer(0)}
              />
              <label htmlFor="professional">Professional</label>
            </div>
            <button
              className="btn bg-[#8ecae6] w-100 py-2"
              type="submit"
              onClick={checkvalue}
            >
              Login
            </button>
            <div>
              <a className=" text-[#8ecae6">
                <FunctionModal />
              </a>
            </div>
            <div className="underline m-0 p-0">
              <Link to="/register">create an account?</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
