"use client";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full shadow-md">
        <p className="max-w-[1170px] mx-auto lg:px-0 px-3 uppercase flex items-center text-[15px] gap-2 py-[15px] cursor-pointer">
          <Link href={"/"}>
            <span>Home</span>
          </Link>{" "}
          <FaAngleRight className="text-[#D53332] cursor-default" /> company
        </p>
      </div>
      <div className="max-w-[1170px] mx-auto lg:px-0 px-3 lg:my-[60px] my-[30px]">
        <div className="grid md:grid-cols-[40%_auto] grid-cols-1 gap-10">
          <div>
            <h3 className="text-[25px] uppercase font-semibold mb-3">
              About us
            </h3>
            <p className="leading-[30px] mb-[25px] tracking-wide text-[18px]">
              An ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Company, is one
              of today&#39;s well recognized Switchgear & Low Voltage Panel
              manufacturer of low voltage electrical and electronic controls in
              India. The Company was established in 1965 as a joint venture
              between Cutler-Hammer, USA, and Indian partners. Since 1977, it is
              a wholly owned Indian company with global business connections.
            </p>
            {/* <p className="leading-[30px] mb-[25px] tracking-wide text-[18px]">
              The Company&#39;s first plant is located at Faridabad, near Delhi,
              on a 15-acre plot with a covered area of over 2,50,000 square
              feet, employing over 700 personnel with fully modern manufacturing
              facilities. In continuation of its policy of continued investments
              in electrical products, BCH has set up another state-of-the-art
              manufacturing plant spread over 12 acres in Rudrapur, Uttarakhand
              in 2010.
            </p> */}
            {/* <p className="leading-[30px] mb-[25px] tracking-wide text-[18px]">
              Our proven range of Industrial Contactors, Overload Relays, Motor
              starters, Brakes, Limit Switches, Plugs & Sockets, Industrial
              Enclosures, Power Distribution and PCC & MCC has, over the years,
              become well accepted. All our products conform to the latest
              national and international standards, including labelling for most
              of them.
            </p> */}
          </div>
          <div>
            <img
              className="w-[100%] "
              src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
