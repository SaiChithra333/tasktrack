import React from 'react'

function NewLetter() {
  return (
    <div>
      <div className=" text-white ">
        <div className="bg-[#001D3D] px-10 pt-5 pb-10 space-y-5 rounded-md">
          <h3>
            <span className="text-[#457B9D]">Subscribe</span> to our newsletter
          </h3>
          <div className="flex flex-col md:flex-row gap-1">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-5 py-3 text-[#457B9D] rounded-md outline-none"
            />
            <button className="flex items-center justify-center gap-1 bg-[#8ecae6] px-5 py-3 rounded-md hover:opacity-80 duration-300">
              <span>Subscribe</span>
              <i className="ri-send-plane-2-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLetter
