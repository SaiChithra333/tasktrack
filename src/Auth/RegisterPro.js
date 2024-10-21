import React from "react";
import Footer from "../reusables/Footer";
import NavBar from "../reusables/NavBar";
import { Link } from "react-router-dom";

function RegisterPro() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center">
        <div className="loginbox w-full m-12 p-12 bg-[#F1FAEE]  flex items-center justify-center border-grey-900 border-1 rounded-md ">
          <form className="font-PTSans flex  flex-col  gap-3 m-0 p-0">
            <h1 className="h3 font-PTSans fw-normal">Create an Account</h1>
            <div className="flex x flex-col lg:flex-row lg:gap-16 ">
              <div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    required // Email input is required
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingUsername"
                    placeholder="Username"
                    required // Username input is required
                  />
                  <label htmlFor="floatingUsername">Username</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    required // Password input is required
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    required // Confirm Password input is required
                  />
                  <label htmlFor="floatingConfirmPassword">
                    Confirm Password
                  </label>
                </div>

                <div className="mb-3">
                  <label htmlFor="chargeCategory" className="block mb-1">
                    Charge Category
                  </label>
                  <select id="chargeCategory" className="form-control" required>
                    <option value="">Select a category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <label htmlFor="imageUpload" className="block mb-1">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="imageUpload"
                    className="form-control"
                    accept="image/*"
                    required // Image upload is required
                  />
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

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="experience"
                    placeholder="Experience"
                    required // Experience input is required
                  />
                  <label htmlFor="experience">Experience</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="timings"
                    placeholder="Timings"
                    required // Timings input is required
                  />
                  <label htmlFor="timings">Timings</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileNo"
                    placeholder="Mobile Number"
                    required // Mobile Number input is required
                  />
                  <label htmlFor="mobileNo">Mobile Number</label>
                </div>
              </div>
            </div>
            <button className="btn bg-[#8ecae6] w-100 py-2" type="submit">
              Register
            </button>
            <div className="underline m-0 p-0">
              <Link to="/login">Already have an account? Log in</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPro;
