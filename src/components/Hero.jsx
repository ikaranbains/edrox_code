import React from "react";

const Hero = () => {
  return (
    <>
      <div className='w-screen min-h-screen bg-[url("../Frame310.jpg")] bg-cover bg-no-repeat bg-center'></div>
      <div className="w-full h-35 bg-[#EAF1FA] flex items-center justify-between px-28">
        <section className="flex items-center gap-5">
            <img className="w-20" src="../law.svg" alt="" />
            <div className="flex flex-col">
                <h1 className="font-semibold">BEST LAW FIRM</h1>
                <h3 className="text-zinc-500 text-xs">45 Years of Experience</h3>
            </div>
        </section>
        <section className="flex items-center gap-5">
            <img className="w-20" src="../law2.svg" alt="" />
            <div className="flex flex-col">
                <h1 className="font-semibold">BEST LAW FIRM</h1>
                <h3 className="text-zinc-500 text-xs">45 Years of Experience</h3>
            </div>
        </section>
        <section className="flex items-center gap-5">
            <img className="w-20" src="../law3.svg" alt="" />
            <div className="flex flex-col">
                <h1 className="font-semibold">BEST LAW FIRM</h1>
                <h3 className="text-zinc-500 text-xs">45 Years of Experience</h3>
            </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
