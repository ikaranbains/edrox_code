import React from "react";

const Header = () => {
  return (

    <header className="relative w-full bg-white h-auto md:h-[20%] flex flex-col md:flex-row items-start md:items-center px-4 py-4 gap-4 md:gap-0">
      <div className="w-14 ml-2 md:ml-5">
        <img className="w-full" src="/edrox_code/logo.svg" alt="company logo" />
      </div>
      <div className="hidden md:block">
        <span className="absolute left-[9.38%] right-[90.62%] top-0 bottom-0 border border-[#BF9874]"></span>
      </div>

      <div className="relative flex flex-col w-full h-full md:ml-20 gap-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full border-b-2 border-[#BF9874] pb-2 gap-2">
          <section className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
            <div className="flex gap-2 items-center">
              <img className="w-4" src="/edrox_code/phone.svg" alt="phone" />
              <h3 className="text-sm">+ 383 (21) 23 43984</h3>
            </div>
            <div className="flex gap-2 items-center">
              <img className="w-4" src="/edrox_code/clock.svg" alt="clock" />
              <h3 className="text-sm">MON - FRI 7:30AM - 6:30PM</h3>
            </div>
          </section>
          <section className="flex gap-3 text-[#BF9874] font-medium mt-2 md:mt-0">
            <h4>IN.</h4>
            <h4>IG.</h4>
            <h4>FB.</h4>
          </section>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <section className="flex flex-wrap md:flex-nowrap items-start md:items-center gap-6 md:gap-10">
            {["HOME", "ABOUT", "CAREER", "CONTACT"].map((item, idx) => (
              <div key={item} className="flex gap-2 items-center">
                <span className={`${idx === 0 ? "text-[#BF9874]" : ""}`}>
                  &#9670;
                </span>
                <h1 className="text-sm">{item}</h1>
              </div>
            ))}
          </section>
          <button className="px-4 py-2 border-2 font-medium cursor-pointer whitespace-nowrap">
            Free Consultation
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
