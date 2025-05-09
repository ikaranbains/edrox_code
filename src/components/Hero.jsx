import React from "react";

const Hero = () => {
  return (
    // <>
    //   <div className='w-screen min-h-screen bg-[url("../Frame310.jpg")] bg-cover bg-no-repeat bg-center'></div>
    //   <div className="w-full h-35 bg-[#EAF1FA] flex items-center justify-between px-28">
    //     <section className="flex items-center gap-5">
    //         <img className="w-20" src="../law.svg" alt="" />
    //         <div className="flex flex-col">
    //             <h1 className="font-semibold">BEST LAW FIRM</h1>
    //             <h3 className="text-zinc-500 text-xs">45 Years of Experience</h3>
    //         </div>
    //     </section>
    //     <section className="flex items-center gap-5">
    //         <img className="w-20" src="../law2.svg" alt="" />
    //         <div className="flex flex-col">
    //             <h1 className="font-semibold">BEST LAW FIRM</h1>
    //             <h3 className="text-zinc-500 text-xs">45 Years of Experience</h3>
    //         </div>
    //     </section>
    //     <section className="flex items-center gap-5">
    //         <img className="w-20" src="../law3.svg" alt="" />
    //         <div className="flex flex-col">
    //             <h1 className="font-semibold">BEST LAW FIRM</h1>
    //             <h3 className="text-zinc-500 text-xs">45 Years of Experience</h3>
    //         </div>
    //     </section>
    //   </div>
    // </>

    <div className="flex flex-col w-full h-full">
      <div className="w-screen">
        <img
          className="w-full h-auto max-h-screen object-cover"
          src="../Frame310.jpg"
          alt=""
        />
      </div>

      <div className="w-full bg-[#EAF1FA] flex flex-col gap-10 lg:flex-row items-center justify-between px-4 sm:px-10 md:px-20 lg:px-28 py-6 lg:gap-6">
        <section className="flex items-center gap-4">
          <img className="w-16 sm:w-20" src="../law.svg" alt="" />
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-semibold text-sm sm:text-base">
              BEST LAW FIRM
            </h1>
            <h3 className="text-zinc-500 text-xs sm:text-sm">
              45 Years of Experience
            </h3>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <img className="w-16 sm:w-20" src="../law2.svg" alt="" />
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-semibold text-sm sm:text-base">
              BEST LAW FIRM
            </h1>
            <h3 className="text-zinc-500 text-xs sm:text-sm">
              45 Years of Experience
            </h3>
          </div>
        </section>
        <section className="flex items-center gap-4">
          <img className="w-16 sm:w-20" src="../law3.svg" alt="" />
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-semibold text-sm sm:text-base">
              BEST LAW FIRM
            </h1>
            <h3 className="text-zinc-500 text-xs sm:text-sm">
              45 Years of Experience
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
