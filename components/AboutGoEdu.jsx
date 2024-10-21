"use client";
import Image from "next/image";
import React, { useState } from "react";
import Aboutusgoedu from "@/public/Aboutusgoedu.svg";
import SchoolByCitiesGoedu from "./SchoolByCitiesGoedu";

const AboutGoEdu = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <>

    {/* mobile */}
      <div className="md:hidden">
        <div
          className="w-full h-[400px] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${Aboutusgoedu.src})` }}
        >

          <div className="flex justify-center">
          <div className=" text-white grid grid-cols-2  gap-24 p-10">
            <div className="space-y-10">
              <div className="space-y-1">
                <Image
                  src="/cap.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Schools</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/parent.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Parents</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-1">
                <Image
                  src="/head.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Counsellors</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/city.svg"
                  width={1000}
                  height={1000}
                  className="w-[47px] h-[39px]"
                  alt="img"
                />
                <p className="text-[20px] md:text-[29px] font-semibold">500+</p>
                <p className="w-[2.5rem] h-[3px] bg-white rounded-3xl"></p>
                <p className="text-[12px] md:text-[24px]">Cities</p>
              </div>
            </div>
          </div></div>

          <div className="flex justify-center items-center ">
            <div className="bg-white rounded-3xl cursor-pointer text-[#1B6EA1] w-[140px] h-[38px] flex justify-center items-center">
              <button className="z-20">Read More</button>
            </div>
          </div>
        </div>

        <SchoolByCitiesGoedu />
      </div>






      <div className="hidden md:block">
        <div
          className="w-full h-[463px] bg-no-repeat bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${Aboutusgoedu.src})` }}
        >
          <div
            className={`absolute inset-0 ${
              showContent ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500`}
          >
            <div
              className={`flex justify-center items-center text-white space-x-60 pt-32 transition-opacity duration-500 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="space-y-1">
                <Image
                  src="/cap.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Schools</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/parent.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Parents</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/head.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Counsellors</p>
              </div>

              <div className="space-y-1">
                <Image
                  src="/city.svg"
                  width={1000}
                  height={1000}
                  className="w-[83px] h-[83px]"
                  alt="img"
                />
                <p className="text-[29px] font-semibold">500+</p>
                <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
                <p className="text-[24px]">Cities</p>
              </div>
            </div>

            <div className="flex justify-center items-center pt-16">
              <div
                className="bg-white rounded-3xl cursor-pointer text-[#1B6EA1] w-[186px] h-[44px] flex justify-center items-center"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setShowContent(true)}
              >
                <button className="z-20">Read More</button>
              </div>
            </div>

            <div
              className={`transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative ">
                <Image
                  src="/linesvg.svg"
                  width={1000}
                  height={1000}
                  className="absolute w-[500px] h-[330px]  right-80 bottom-5 z-10"
                  alt="Line"
                />
                <Image
                  src="/Frame.png"
                  width={1000}
                  height={1000}
                  className={`absolute w-[450px] h-[485px] -bottom-[70px]  right-0 transition-transform duration-700 ease-in-out transform ${
                    isHovered ? "translate-x-0" : "translate-x-full"
                  }`}
                  alt="Frame"
                />
              </div>
            </div>
          </div>

          <div
            className={`w-full h-[461px] mt-[1px] mb-[1px]  pt-10  bg-[#F3F3F3] text-[#323232] z-50 absolute top-0 right-0 transition-transform duration-700 ease-in-out transform ${
              showContent ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              className={`relative h-full p-1  `}
              onMouseLeave={() => setShowContent(false)}
            >
              <button
                className="absolute w-[40px] h-[40px] rounded-full text-white text-[1.5rem] bg-[#1B6EA1] top-36 left-10  hover:text-gray-800"
                onClick={() => setShowContent(false)}
              >
                &lt;
              </button>
              <div
                className={`h-full px-[100px] overflow-y-auto  text-[1rem]  `}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
                amet veniam soluta ratione laboriosam animi accusantium
                similique nihil voluptates, eveniet minima ducimus magnam sunt a
                quis incidunt nesciunt. Facere ea ducimus fugiat laudantium
                totam, voluptas voluptatibus aspernatur deleniti officiis unde!
                Dolorum itaque rerum quos temporibus accusantium nisi totam vel
                quis! <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                laboriosam illum, maxime obcaecati ratione laborum cum hic.
                Nostrum laudantium suscipit ullam, incidunt at, laboriosam
                consequatur odio recusandae qui facere id accusamus ratione nam
                nesciunt aut, inventore accusantium debitis neque tempore quasi?
                Iure consequuntur, consequatur quae vero veritatis ipsam ex
                autem!
                <div className="flex justify-center items-center text-[#323232] space-x-60 pt-10">
                  <div className="space-y-1">
                    <Image
                      src="/cap1.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Schools</p>
                  </div>

                  <div className="space-y-1">
                    <Image
                      src="/raphael_parent.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Parents</p>
                  </div>

                  <div className="space-y-1">
                    <Image
                      src="/Technical Support.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Counsellors</p>
                  </div>

                  <div className="space-y-1">
                    <Image
                      src="/Downtown.svg"
                      width={1000}
                      height={1000}
                      className="w-[49px] h-[49px]"
                      alt="img"
                    />
                    <p className="text-[29px] font-semibold">500+</p>
                    <p className="w-[3.5rem] h-1 bg-[#323232] rounded-3xl"></p>
                    <p className="text-[24px]">Cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGoEdu;
