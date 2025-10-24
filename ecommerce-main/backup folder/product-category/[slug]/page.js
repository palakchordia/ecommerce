import React from "react";

export default function Page() {
  return (
    <div className="w-full">
      <div className="max-w-[1170px]  mx-auto">
        <img
          className="w-full h-auto object-cover lg:my-[40px] my-[20px]"
          src="https://bchindia.com/wp-content/uploads/2022/03/Industrial-Products-banner-3-1.jpg"
        />

        {/* category section */}
        <div className="lg:px-0 px-3">
          <h3 className="text-[35px] font-semibold">Industrial Products</h3>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 ">
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[100%] cursor-pointer sm:h-[250px] h-[200px] my-[20px] border border-gray-200 bg-cover bg-center group shadow-2xl flex items-end"
                  style={{
                    backgroundImage:
                      'url("https://5.imimg.com/data5/LD/FF/MY-4513089/single-door-panel-enclosure-500x500.jpg")',
                  }}
                >
                  <p className="w-full capitalize p-3 bg-[#D53332] group-hover:bg-transparent  rounded-b-md text-white group-hover:text-black border-t border-t-transparent group-hover:border-t-gray-100 duration-300">
                    power control
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
