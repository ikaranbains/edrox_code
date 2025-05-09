import React from "react";

const Experts = () => {
  return (
    <section className="w-full min-h-full lg:h-full mt-30 py-2 bg-[#001025] flex items-center justify-center lg:overflow-hidden">
      <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[80%] h-[88%] flex flex-col gap-5 px-4">
        <h3 className="text-[#BF9874] text-center">OUR PAST & OUR FUTURE</h3>
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center">
          OUR BEST EXPERTS
        </h1>
        <div className="mt-0 h-[80%] w-full flex flex-wrap gap-4 items-center justify-between">
          <div className="w-full sm:w-[48%] md:w-[22%] h-[90%]">
            <div className="w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-top"
                src="/edrox_code/img1.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2 text-center">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs text-center">
              Attorney & Partner
            </h4>
          </div>
          <div className="w-full sm:w-[48%] md:w-[22%] h-[90%]">
            <div className=" w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-top"
                src="/edrox_code/img2.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2 text-center">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs text-center">
              Attorney & Partner
            </h4>
          </div>
          <div className="w-full sm:w-[48%] md:w-[22%] h-[90%]">
            <div className=" w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-center"
                src="/edrox_code/img3.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2 text-center">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs text-center">
              Attorney & Partner
            </h4>
          </div>
          <div className="w-full sm:w-[48%] md:w-[22%] h-[90%]">
            <div className="w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-center"
                src="/edrox_code/img4.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2 text-center">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs text-center">
              Attorney & Partner
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-[url('/edrox_code/line.svg')] w-[.1vw] h-full hidden lg:block"></div>
    </section>
  );
};

export default Experts;
