import Image from "next/image";
import React from "react";
import Blink from "./Blink";

const CategoryHeroGoEdu = () => {
  return (
    <>
      <div className="relative">
        <Blink />
        <div className="absolute top-0 min-h-screen">
          <Image
            src="/categoryhero.svg"
            alt="category_hero"
            width={1000}
            height={1000}
            className="w-full h-[80vh]  object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default CategoryHeroGoEdu;
