import React from "react";

const Video = () => {
  return (

    <div className="w-screen h-[10%] xs:mb-20 lg:mt-32 lg:h-screen flex items-center justify-center px-4 py-6">
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85%] bg-[url('/edrox_code/map.svg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <img
          className="w-[90%] sm:w-[80%] md:w-[70%] cursor-pointer"
          src="/edrox_code/Frame309.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Video;
