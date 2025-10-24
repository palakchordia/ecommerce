"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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

  return (
    <div className="w-full ">
      <div className="w-full shadow-md">
        <p className="max-w-[1170px] mx-auto lg:px-0 px-3 uppercase flex items-center text-[15px] gap-2 py-[15px] cursor-pointer">
          <Link href={"/"}>
            <span>Home</span>
          </Link>{" "}
          <FaAngleRight className="text-[#D53332] cursor-default" /> customer
          care
        </p>
      </div>
      <div className="max-w-[970px] mx-auto lg:px-0 px-3 lg:py-[40px] py-[20px]">
        <h3 className="uppercase font-semibold text-[35px] text-center text-red-600 mb-7">
          Customer Care
        </h3>
        <div className="bg-[#D53332] lg:p-0 p-3 text-white grid lg:grid-cols-[25%_auto] grid-cols-1 items-center">
          <img
            className="w-full h-[250px] object-cover"
            src="https://png.pngtree.com/png-vector/20230320/ourmid/pngtree-customer-care-line-icon-vector-png-image_6656862.png"
          />
          <div className="">
            <h3 className="capitalize text-[35px] font-semibold">
              Get support
            </h3>

            <div className="flex lg:flex-row flex-col lg:items-center gap-10 mt-5">
              <div className="flex group cursor-pointer items-center gap-2 text-[25px]">
                <FaPhoneAlt className="group-hover:text-black duration-300" />
                <p className="group-hover:text-black duration-300">
                  +91 9941017937
                </p>
              </div>
              <div className="flex group cursor-pointer items-center gap-2 text-[25px]">
                <IoMdMail className="group-hover:text-black duration-300" />
                <p className="group-hover:text-black duration-300">
                  arcenterprises2022@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-4 lg:p-0 p-4 border-red-600 lg:my-[30px] my-[20px] bg-gray-100 lg:py-[30px] py-[20px]">
          <h3 className="text-center font-semibold text-[25px] capitalize">
            Online Complaint Form:
          </h3>
          <p className="text-center max-w-[600px] mt-3 text-[18px] mx-auto">
            Customers can use the form below to help us resolve any issues to
            achieve the best level of customer satisfaction:
          </p>
          <form className="">
            <div className="grid md:grid-cols-2 lg:gap-16 sm:gap-7 gap-5 max-w-[800px] lg:my-[30px] my-[20px] mx-auto">
              <input
                type="text"
                className="bg-white py-[12px] focus:outline-none text-[18px] px-3"
                placeholder="Contact Person*"
              />
              <input
                type="text"
                className="bg-white py-[12px] focus:outline-none text-[18px] px-3"
                placeholder="Product Details*"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:gap-16 sm:gap-7 gap-5 max-w-[800px] lg:my-[30px] my-[20px] mx-auto">
              <input
                type="text"
                className="bg-white py-[12px] focus:outline-none text-[18px] px-3"
                placeholder="Mobile Number*"
              />
              <input
                type="text"
                className="bg-white py-[12px] focus:outline-none text-[18px] px-3"
                placeholder="Company Name"
              />
            </div>
            <div className="flex justify-center">
              <textarea
                className="min-h-[100px] w-[650px] focus:outline-none text-[18px] p-3 mx-auto bg-white"
                placeholder="Contact Address*"
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 lg:gap-16 sm:gap-7 gap-5 max-w-[800px] lg:my-[30px] my-[20px] mx-auto">
              <input
                type="text"
                className="bg-white py-[12px] focus:outline-none text-[18px] px-3"
                placeholder="Mobile Number*"
              />
              <select className="bg-white py-[12px] focus:outline-none text-[18px] px-3">
                <option>- Choose Appropriate Subject -</option>
                <option>Comments and Suggestions</option>
                <option>Complaints</option>
              </select>
            </div>

            <div className="flex justify-center">
              <textarea
                className="min-h-[100px] w-[650px] focus:outline-none text-[18px] p-3 mx-auto bg-white"
                placeholder="Complaint*"
              ></textarea>
            </div>

            {/* <div className="lg:max-w-[50%] w-full  mx-auto mt-10 lg:h-[150px] h-auto flex flex-col items-center justify-center gap-2 bg-white p-4">
              <div className="w-full h-[50px] flex items-center justify-center bg-gray-100 text-xl font-bold tracking-widest">
                {captcha}
              </div>
              <form className="flex lg:flex-row flex-col lg:gap-2 gap-5">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Enter captcha"
                  className="bg-gray-100  focus:outline-none px-2 py-1"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-3 py-1"
                >
                  Verify
                </button>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="bg-gray-500 text-white px-3 py-1"
                >
                  Refresh
                </button>
              </form>
              {message && <p className="mt-2">{message}</p>}
            </div> */}
            <div className=" text-center " >
               <button className='w-[50%] mx-auto mt-5.5 py-[10px] text-center uppercase hover:bg-[#D53332] hover:text-white duration-300  text-[#D53332] border hover:border-transparent border-gray-700 rounded-[5px] cursor-pointer'>Submit your query</button>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}
