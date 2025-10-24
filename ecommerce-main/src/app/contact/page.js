"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaAngleRight, FaBlenderPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full shadow-md">
        <p className="max-w-[1170px] mx-auto lg:px-0 px-3 uppercase  flex items-center text-[15px] gap-2 py-[15px] cursor-pointer">
          <Link href={"/"}>
            <span>Home</span>
          </Link>{" "}
          <FaAngleRight className="text-[#D53332] cursor-default" /> Contact
        </p>
      </div>
      <div className="max-w-[1170px] mx-auto   lg:py-[40px] py-[20px]">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:p-0 p-3 gap-10">
          <div className="bg-white min-h-[250px] border border-gray-300 p-7 flex flex-col items-center justify-center">
            <h2 className="text-[30px] mb-3">Contact Number</h2>
            <FaPhoneAlt className="w-[60px] h-[60px] p-3 rounded-full bg-[#D53332] text-white" />
            <p className="mt-3 text-[25px] cursor-pointer hover:text-[#D53332] duration-300">
              +91 9941017937
            </p>
          </div>
          <div className="bg-white min-h-[250px] border border-gray-300 p-7 flex flex-col items-center justify-center">
            <h2 className="text-[30px] mb-3">Email</h2>
            <IoIosMail className="w-[60px] h-[60px] p-3 rounded-full bg-[#D53332] text-white" />
            <p className="mt-3 text-[20px] cursor-pointer hover:text-[#D53332] duration-300">
              arcenterprises2022@gmail.com
            </p>
          </div>
          <div className="bg-white min-h-[250px] border border-gray-300 p-7 flex flex-col items-center justify-center">
            <h2 className="text-[30px] mb-3">Contact Us</h2>
            <FaPhoneAlt className="w-[60px] h-[60px] p-3 rounded-full bg-[#D53332] text-white" />
            <p className="mt-3 text-[25px] cursor-pointer hover:text-[#D53332] duration-300">
              Submit your query
            </p>
          </div>
        </div>
       
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:p-0 p-3 gap-10 lg:my-[30px]">
          <div className="w-[100%] p-5 bg-[#F7F7F7]">
            <h3 className="text-[25px] text-red-600 mb-3 tracking-wider">
              Corporate Office
            </h3>
            <ul>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <IoLocationSharp className="text-[20px]" />
                Vulture Electricals Pvt. Ltd.
                No. 18, Krishna Iyer Street,
                Sowcarpet, Chennai, Tamil Nadu - 600001
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaBlenderPhone /> 91-9941017937
              </li>
            </ul>
          </div>
          {/* <div className="w-[100%] p-5 bg-[#F7F7F7]">
            <h3 className="text-[25px] text-red-600 mb-3 tracking-wider">
              Work 1
            </h3>
            <ul>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <IoLocationSharp className="text-[20px]" />
                1105, New Delhi House, 27, Barakhamba Road, New Delhi - 110 001
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaPhoneAlt />
                011-43673100
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaBlenderPhone /> 91-11-23715247
              </li>
            </ul>
          </div>
          <div className="w-[100%] p-5 bg-[#F7F7F7]">
            <h3 className="text-[25px] text-red-600 mb-3 tracking-wider">
              Work 2
            </h3>
            <ul>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <IoLocationSharp className="text-[20px]" />
                1105, New Delhi House, 27, Barakhamba Road, New Delhi - 110 001
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaPhoneAlt />
                011-43673100
              </li>
              <li className="my-[10px] text-[18px] grid grid-cols-[8%_auto]">
                <FaBlenderPhone /> 91-11-23715247
              </li>
            </ul>
          </div> */}
        </div>
        {/* <div className="flex justify-center w-full">
          <Link href={"/sales-offices"}>
            <button className="bg-[#D53332] text-white cursor-pointer hover:bg-transparent border border-transparent hover:border-red-600 hover:text-red-600 duration-300 uppercase px-14 py-3 rounded">
              View our sales offices
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
