"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { ProductSolutionData } from "../ApiData/ProductSolutionData";

export default function Page() {
  let [activeTab, setActiveTab] = useState("Weatherproof & Outdoor Enclosures");
  const specificCategoryData = ProductSolutionData.filter(
    (item) => item.categoryName == activeTab
  )[0];

  const [currentProductIndex, setCurrentProductIndex] = useState(null);

  return (
    <div>
      <div className="w-full shadow-md">
        <p className="max-w-[1170px] mx-auto lg:px-0 px-3 uppercase flex items-center text-[15px] gap-2 py-[15px] cursor-pointer">
          <Link href={"/"}>
            <span>Home</span>
          </Link>{" "}
          <FaAngleRight className="text-[#D53332] cursor-default" /> product &
          solutions
        </p>
      </div>
      <div>
        <img
          className="w-[100%] h-[60vh] object-cover object-center"
          src="https://bchindia.com/wp-content/uploads/2017/06/BCh.jpg"
        />
      </div>
      <div className="bg-white max-w-[1170px] mx-auto lg:p-0 p-3 lg:py-[40px] py-[30px]">
        <div className="grid md:grid-cols-[30%_auto] gap-10">
          <ul>
            {ProductSolutionData.map((item, index) => {
              return (
                <div key={index}>
                  <li
                    onClick={() => {
                      setActiveTab(item.categoryName);
                      setCurrentProductIndex(
                        currentProductIndex === index ? null : index
                      );
                    }}
                    className={`py-[20px] hover:text-white hover:bg-[#D53332] duration-300 font-semibold capitalize flex items-center justify-between w-[100%] cursor-pointer text-[17px] tracking-wider mb-1 px-3 relative ${
                      activeTab === item.categoryName
                        ? "bg-[#D53332] text-white"
                        : "bg-gray-200 text-black"
                    } `}
                  >
                    {item.categoryName} <FaAngleRight />
                  </li>

                  <div
                    className={`${
                      index === currentProductIndex
                        ? "opacity-100 h-auto -translate-y-0"
                        : "opacity-0 h-0 -translate-y-7"
                    } p-3 lg:hidden block duration-100`}
                  >
                    {specificCategoryData.subCategory.map((subCat, newInd) => {
                      return (
                        <div
                          key={newInd}
                          className="w-[100%] cursor-pointer sm:h-[250px] h-[200px] my-[20px] border border-gray-200 bg-cover bg-center group shadow-2xl flex items-end"
                          style={{
                            backgroundImage:
                              'url("https://5.imimg.com/data5/LD/FF/MY-4513089/single-door-panel-enclosure-500x500.jpg")',
                          }}
                        >
                          <p className="w-full p-3 bg-[#D53332] group-hover:bg-transparent  rounded-b-md text-white group-hover:text-black border-t border-t-transparent group-hover:border-t-gray-100 duration-300">
                            {subCat.subCategoryName}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </ul>
          <div className="w-[100%] lg:block hidden">
            <h3 className="text-[28px] text-red-600 hover:text-black duration-300 cursor-pointer">
              {specificCategoryData?.categoryHeading}
            </h3>
            <img
              className="w-[100%] h-[120px] my-5 object-cover"
              src={specificCategoryData?.categoryImage}
            />
            <ul className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-1">
              {specificCategoryData?.subCategory.map((subCat, index) => {
                return (
                  <div key={index}>
                    <li className="w-[100%] bg-[#D53332] border border-gray-200 text-white cursor-pointer capitalize relative rounded-[10px] group-hover:text-black duration-300">
                      <div
                        className="w-[100%] h-[250px] bg-cover bg-center group shadow-2xl flex items-end"
                        style={{
                          backgroundImage:
                            'url("https://5.imimg.com/data5/LD/FF/MY-4513089/single-door-panel-enclosure-500x500.jpg")',
                        }} >
                        <p className="w-full p-3 bg-[#D53332] group-hover:bg-transparent  rounded-b-md text-white group-hover:text-black border-t border-t-transparent group-hover:border-t-gray-100 duration-300">
                          {subCat.subCategoryName}
                        </p>
                      </div>
                    </li>

                    {/* <div
                      className={`${
                        subCat.subSubCategory.length >= 1
                          ? "block h-auto"
                          : "hidden h-0"
                      } border-[1px] border-gray-400 p-3`}
                    >
                      <ul>
                        {subCat.subSubCategory.map(
                          (subSubCat, subSubCatIndex) => {
                            return (
                              <p
                                key={subSubCatIndex}
                                className="hover:text-red-600 duration-300 cursor-pointer"
                              >
                                {subSubCat}
                              </p>
                            );
                          }
                        )}
                      </ul>
                    </div> */}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
