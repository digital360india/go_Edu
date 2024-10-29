"use client";
import React from "react";
import MascotAnimation from "./MascotAnimation";
import Image from "next/image";

const AboutGoEDU2 = () => {
  return (
    <>
      <div className="absolute">
        <MascotAnimation />
      </div>

      <div className="bg-[#1B6EA1]">
        <h1 className="text-[#FFFFFF] text-[50px] md:text-[200px] text-center pt-40 md:pt-0 md:mt-20">
          About Us
        </h1>

        {/* <Image
              src="/abouteduline.svg"
              width={1000}
              height={1000}
              alt="line"
              className="w-[350px] h-[250px] absolute bottom-40 left-20 hidden md:block"
            /> */}
        <div className="flex justify-center items-center mb-20">
          <Image
            src="/aboutbg.svg"
            alt="about"
            width={1000}
            height={1000}
            className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] "
          />
        </div>

        <h2 className="text-center text-white text-[30px] mb-5">
          Let&apos;s Begin !!
        </h2>
        <div className="flex justify-center items-center pb-10">
          <Image
            src="/downarrowedu.svg"
            width={1000}
            height={1000}
            alt="down"
            className="w-[40px] h-[40px] cursor-pointer"
            onClick={() => {
              document.getElementById("scroll-target").scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      <div
        id="scroll-target"
        className="sm:mt-12 text-[#323232] md:px-[100px]  pb-12 md:pb-0"
      >
        <div className="bg-[#F8F8F8] px-7 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[12px] sm:text-[20px] text-justify mt-4 ">
                At Go Edu, we connect families with the top boarding schools
                across India, creating a seamless journey for parents and
                students to find the perfect educational fit. Our platform
                provides in-depth school profiles and expert insights to
                simplify this decision-making process.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center space-y-2 md:space-y-4 order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left">
              About Us

              </p>
              <img
                src="/footerlogo.svg"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center  md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-5 md:gap-0">
              <img
                src="./ourpassion.svg"
                className="w-[100px] h-[110px] md:h-[160px] md:w-[150px]"
                alt="Passion logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold md:hidden">
                Guided by Educational Excellence
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold hidden md:block">
                Guided by Educational Excellence
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Driven by a passion for quality education, Go Edu showcases the
                diversity of boarding schools across India. Our team is
                dedicated to building a resource that honors each school&apos;s
                unique offerings.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center  md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[12px] sm:text-[20px] text-justify">
                Our mission is to make the search for the right school easy,
                informed, and enjoyable. We streamline the admission journey by
                providing thorough information and simplifying school
                comparisons.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left">
                Making School Selection Easy
              </p>
              <img
                src="./ourmission.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Mission logo"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
            <div className="flex items-center justify-center order-1 md:order-none gap-8 md:gap-0">
              <img
                src="/consult.svg"
                className="w-[100px] h-[100px] md:h-[160px] md:w-[150px]"
                alt="Consultation logo"
              />
              <p className="text-[16px] sm:text-[40px] font-semibold  md:hidden">
                Join Our Community
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex-1 text-center md:text-left order-2 md:order-none">
              <p className="text-[16px] sm:text-[40px] font-semibold hidden md:block">
                Join Our Community
              </p>
              <p className="text-[12px] sm:text-[20px] text-justify">
                Go Edu invites students, parents, and schools to join our
                mission of promoting high-quality boarding education. Join a
                growing community that values excellence and educational growth.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
            <div className="flex-1 order-2 md:order-none text-center md:text-left">
              <p className="text-[12px] sm:text-[20px] text-justify">
                We&apos;re committed to empowering families with knowledge and
                confidence. With Go Edu, finding the right boarding school
                becomes an informed, confident choice.
              </p>
            </div>
            <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
            <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
              <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left">
                Your Path to Informed Choices
              </p>
              <img
                src="/joinus.svg"
                className="w-[100px] h-[130px] md:h-[160px] md:w-[150px]"
                alt="Join us logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGoEDU2;
