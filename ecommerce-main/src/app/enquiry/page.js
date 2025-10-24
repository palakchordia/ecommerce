"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Page() {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(result);
  };

  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (userInput === captcha) {
  //         setMessage("Captcha matched ✅");
  //     } else {
  //         setMessage("Captcha does not match ❌");
  //         generateCaptcha(); // regenerate captcha on failure
  //     }
  //     setUserInput("");
  // };
  return (
    <div className="w-full  ">
      <div className="w-full shadow-md">
        <p className="max-w-[1170px] mx-auto lg:px-0 px-3 uppercase flex items-center text-[15px] gap-2 py-[15px] cursor-pointer">
          <Link href={"/"}>
            <span>Home</span>
          </Link>{" "}
          <FaAngleRight className="text-[#D53332] cursor-default" /> Enquiry
        </p>
      </div>

      <div className="max-w-[1170px] lg:p-0 p-3 lg:py-[40px] py-[30px] mx-auto">
        <h2 className="uppercase font-semibold text-red-600 text-center text-[33px] mb-5">
          Enquiry
        </h2>
        <form className="bg-gray-200 p-5 max-w-[945px] mx-auto">
          <div className="grid grid-cols-2 gap-8 mb-3">
            <div>
              <p>Product Name*</p>
              <input
                type="text"
                className="bg-white focus:outline-none px-3 w-full py-[10px]"
              />
            </div>
            <div>
              <p>Your Name*</p>
              <input
                type="text"
                className="bg-white focus:outline-none px-3 w-full py-[10px]"
              />
            </div>
          </div>
          <div className="mb-3">
            <p>Address</p>
            <textarea className="w-full min-h-[100px] px-3 bg-white focus:outline-none"></textarea>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-3">
            <div>
              <p>City*</p>
              <input
                type="text"
                className="bg-white focus:outline-none px-3 w-full py-[10px]"
              />
            </div>
            <div>
              <p>State*</p>
              <input
                type="text"
                className="bg-white focus:outline-none px-3 w-full py-[10px]"
              />
            </div>
            <div>
              <p>Country*</p>
              <input
                type="text"
                className="bg-white focus:outline-none px-3 w-full py-[10px]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mb-3">
            <div>
              <p>Email*</p>
              <input
                type="text"
                className="bg-white focus:outline-none px-3 w-full py-[10px]"
              />
            </div>
            <div>
              <p>Phone/Mobile</p>
              <input
                type="text"
                className="bg-white focus:outline-none px-3 w-full py-[10px]"
              />
            </div>
          </div>
          <div className="mb-3">
            <p>Enquiry/Feedback*</p>
            <textarea className="w-full min-h-[100px] px-3 bg-white focus:outline-none"></textarea>
          </div>
          <div className="lg:w-[50%] w-full mt-7 h-[150px] flex flex-col items-center justify-center gap-2 bg-white p-4">
            <div className="w-full h-[50px] flex items-center justify-center bg-gray-200 text-xl font-bold tracking-widest">
              {captcha}
            </div>
            <div className="flex gap-2 mt-2">
              <input
                required
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Enter captcha"
                className="bg-white border border-gray-300 px-2 py-1"
              />
              <button type="submit" className="bg-red-500 text-white px-3 py-1">
                Verify
              </button>
              <button
                type="button"
                onClick={generateCaptcha}
                className="bg-gray-500 text-white px-3 py-1"
              >
                Refresh
              </button>
            </div>
            {message && <p className="mt-2">{message}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
