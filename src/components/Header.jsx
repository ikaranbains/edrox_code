import React from "react";

const Header = () => {
  return (
    <header className="relative w-screen bg-white h-[20%] flex items-center px-4">
      <div>
        <img className="w-14 ml-5" src="../logo.svg" alt="company logo" />
      </div>
      <div>
        <span className="absolute left-[9.38%] right-[90.62%] top-0 bottom-0 border border-[#BF9874]"></span>
      </div>
      <div className="relative flex flex-col w-full h-full ml-20 ">
        <div className="flex items-center justify-between w-full h-[40%] border-b-2 mt-2 pb-2 pr-4 border-[#BF9874]">
          <section className="flex gap-12">
            <div className="flex gap-2 items-center">
              <img className="w-4" src="../phone.svg" alt="phone" />
              <h3 className="text-sm">+ 383 (21) 23 43984</h3>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-4" src="../clock.svg" alt="clock" />
              <h3 className="text-sm">MONDAY - FRIDAY 7:30AM - 6:30PM</h3>
            </div>
          </section>
          <section className="flex gap-3 text-[#BF9874] font-medium">
            <h4>IN.</h4>
            <h4>IG.</h4>
            <h4>FB.</h4>
          </section>
        </div>
        <div className="relative">
          <span className="absolute left-full right-full top-[33.57%] bottom-[11.43%] border border-[#BF9874] rotate-90"></span>
        </div>
        <div className="h-[60%] flex items-center justify-between pr-4">
          <section className="flex items-center gap-10">
            <div className="flex gap-4 items-center">
              <span className="text-[#BF9874]">&#9670;</span>
              <h1 className="text-sm">HOME</h1>
            </div>
            <div className="flex gap-4 items-center">
              <span className="">&#9670;</span>
              <h1 className="text-sm">ABOUT</h1>
            </div>
            <div className="flex gap-4 items-center">
              <span className="">&#9670;</span>
              <h1 className="text-sm">CAREER</h1>
            </div>
            <div className="flex gap-4 items-center">
              <span className="">&#9670;</span>
              <h1 className="text-sm">CONTACT</h1>
            </div>
          </section>
          <button className="px-3 border-2 py-2 font-medium cursor-pointer">
            Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
