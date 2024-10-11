"use client";
import Image from "next/image";
import React, { useState } from "react";
import Testemonialsbg from "@/public/Testemonialsbg.svg";

const TestimonailGoEdu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Yogesh Pal",
      image: "/testimonial.svg",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae.",
    },
    { name: "John Doe", image: "/consult.svg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
    { name: "Jane Smith", image: "/whychooseus.svg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
    { name: "Jane 1", image: "/testimonial.svg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
    { name: "Jane 2", image: "/4.png", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
    { name: "Jane 3", image: "/5.png", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className="w-full   bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${Testemonialsbg.src})` }}
    >
      <div>
        <h1 className="text-[46px] text-[#323232] font-light p-14">Testimonials</h1>
      </div>

      <div className="flex justify-between  transition-transform duration-1000 ease-in-out">
        <div className="transform scale-75  transition-transform duration-500 ease-in-out">
          <Image
            src={
              testimonials[
                (currentIndex - 1 + testimonials.length) % testimonials.length
              ].image
            }
            height={1000}
            width={1000}
            alt="Previous Testimonial"
            className="w-[200px] h-[200px]"
          />
        </div>

        <div className="transform scale-125 transition-transform duration-500 ease-in-out">
          <Image
            src={testimonials[currentIndex].image}
            height={1000}
            width={1000}
            alt="Current Testimonial"
            className="w-[200px] h-[200px] mt-20"
          />
        </div>

        <div className="transform scale-75  transition-transform duration-500 ease-in-out">
          <Image
            src={testimonials[(currentIndex + 1) % testimonials.length].image}
            height={1000}
            width={1000}
            alt="Next Testimonial"
            className="w-[200px] h-[200px]"
          />
        </div>
      </div>

      <div className="flex justify-between px-10">
        <div className="flex gap-10 mt-32">
          <Image
            src="/leftbutton.svg"
            height={1000}
            width={1000}
            alt="Previous"
            className="w-[50px] h-[47px] cursor-pointer"
            onClick={handlePrev}
          />
          <Image
            src="/rightbutton.svg"
            height={1000}
            width={1000}
            alt="Next"
            className="w-[50px] h-[47px] cursor-pointer"
            onClick={handleNext}
          />
        </div>
 
        <div className="text-[#000000] w-[442px] h-[255px]">
          <h1 className="text-[24px]">{testimonials[currentIndex].name}</h1>
          <p className="text-[1rem]">
            {testimonials[currentIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonailGoEdu;
