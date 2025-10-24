"use client";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight, FaBlenderPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

export default function Page() {
  return (
    <div className="w-full ">
      <p className="max-w-[1170px] mx-auto uppercase  flex items-center text-[15px] gap-2 py-[15px] cursor-pointer">
        <Link href={"/"}>
          <span>Home</span>
        </Link>{" "}
        <FaAngleRight className="text-[#D53332] cursor-default" /> Sales offices
      </p>
      <div className="max-w-[1170px] mx-auto ">
        <h3 className="uppercase text-[30px] text-red-600 font-semibold tracking-wide mb-4">
          Sales Offices
        </h3>
        <div className="grid grid-cols-3 gap-10 ">
          {
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

          }
        </div>
      </div>
    </div>
  );
}
