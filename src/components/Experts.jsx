import React from "react";

const Experts = () => {
  return (
    <section className="w-full h-full bg-[#001025] flex items-center justify-center overflow-hidden">
      <div className="w-[80%] h-[88%] flex flex-col gap-5">
        <h3 className="text-[#BF9874]">OUR PAST & OUR FUTURE</h3>
        <h1 className="text-white text-4xl">OUR BEST EXPERTS</h1>
        <div className="mt-0 h-[80%] w-full  flex items-center justify-between">
          <div className=" w-[22%] h-[90%]">
            <div className="border-2 w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-top"
                src="../img1.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs">Attorney & Parnet</h4>
          </div>
          <div className=" w-[22%] h-[90%]">
            <div className="border-2 w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-top"
                src="../img2.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs">Attorney & Parnet</h4>
          </div>
          <div className=" w-[22%] h-[90%]">
            <div className="border-2 w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-center"
                src="../img3.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs">Attorney & Parnet</h4>
          </div>
          <div className=" w-[22%] h-[90%]">
            <div className="border-2 w-full h-[83%]">
              <img
                className="h-full w-full object-cover object-center"
                src="../img4.jpg"
                alt=""
              />
            </div>
            <h3 className="text-white text-lg mt-2">Anne Hamlin</h3>
            <h4 className="text-zinc-500 text-xs">Attorney & Parnet</h4>
          </div>
        </div>
      </div>
      <div className="bg-[url('../line.svg')] w-[.1vw] h-full"></div>
    </section>
  );
};

export default Experts;
