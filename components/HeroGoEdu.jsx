import React from "react";
import goedubanner from "@/public/goedubanner.svg";

const HeroGoEdu = () => {
  return (
    <>
      <div>
        <div
          className="w-full h-[100vh] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${goedubanner.src})` }}
        >
            <div className="text-[#0C263F] text-[2.9rem] pt-56 px-[100px]">
                <p>Find the</p>
                <p className="font-bold">Perfect School</p>
                <p>for Every <span className="font-bold">Dream</span> </p>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default HeroGoEdu;
