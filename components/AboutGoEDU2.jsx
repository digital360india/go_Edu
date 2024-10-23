"use client"
import React from 'react'
import MascotAnimation from './MascotAnimation';
import Image from 'next/image';

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
    
            <Image
              src="/abouteduline.svg"
              width={1000}
              height={1000}
              alt="line"
              className="w-[350px] h-[250px] absolute bottom-40 left-20 hidden md:block"
            />
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
                  document.getElementById('scroll-target').scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              />
            </div>
          </div>
    
          <div id="scroll-target" className="sm:mt-12 text-[#323232] md:px-[100px]  pb-12 md:pb-0">
            <div className="bg-[#F8F8F8] px-7 space-y-10">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
                <div className="flex-1 order-2 md:order-none text-center md:text-left">
                  <p className="text-[12px] sm:text-[20px] text-justify mt-4 ">
                    Go edu is a pioneering online platform dedicated to connecting
                    students and parents with the finest boarding schools across
                    India. Our portal is a comprehensive resource, offering detailed
                    listings and insights into each institution, making the
                    decision-making process for parents and students both efficient
                    and informed.
                  </p>
                </div>
                <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
                <div className="flex md:flex-col items-center space-y-2 md:space-y-4 order-1 md:order-none gap-10 md:gap-0">
                  <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left">
                    WHO WE ARE
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
                    OUR PASSION FOR EDUCATION
                  </p>
                </div>
                <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
                <div className="flex-1 text-center md:text-left order-2 md:order-none">
                  <p className="text-[16px] sm:text-[40px] font-semibold hidden md:block">
                    OUR PASSION FOR EDUCATION
                  </p>
                  <p className="text-[12px] sm:text-[20px] text-justify">
                    At Edu 123, we are driven by our commitment to educational
                    excellence and our belief in the transformative power of
                    boarding schools. Our team works tirelessly to ensure that our
                    platform reflects the diversity and quality of boarding
                    education offered in Bharat, catering to a wide range of needs
                    and preferences.
                  </p>
                </div>
              </div>
    
              <div className="flex flex-col md:flex-row md:justify-between items-center  md:space-x-10">
                <div className="flex-1 order-2 md:order-none text-center md:text-left">
                  <p className="text-[12px] sm:text-[20px] text-justify">
                    Our mission is to streamline the admission process, provide
                    in-depth analysis of each institution, and assist families in
                    making informed choices regarding their child's educational
                    journey. We aim to be a one-stop destination for everything
                    related to boarding schools in Bharat.
                  </p>
                </div>
                <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
                <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
                  <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left">
                    OUR MISSION
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
                    FREE CONSULTATION
                  </p>
                </div>
                <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
                <div className="flex-1 text-center md:text-left order-2 md:order-none">
                  <p className="text-[16px] sm:text-[40px] font-semibold hidden md:block">
                    FREE CONSULTATION
                  </p>
                  <p className="text-[12px] sm:text-[20px] text-justify">
                    Edu 123 offers free consultations to families seeking guidance
                    on the best boarding school options for their children. Our
                    expert advisors help parents navigate the admission process,
                    provide personalized recommendations, and answer any questions
                    they may have.
                  </p>
                </div>
              </div>
    
              <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
                <div className="flex-1 order-2 md:order-none text-center md:text-left">
                  <p className="text-[12px] sm:text-[20px] text-justify">
                    Become a part of the Edu 123 community! Whether you are a
                    parent, student, or school representative, we welcome you to
                    join us in our mission to promote quality boarding education in
                    Bharat. Together, we can make a positive impact on the future of
                    education.
                  </p>
                </div>
                <div className="w-[2px] h-52 bg-[#323232] hidden md:block"></div>
                <div className="flex md:flex-col items-center order-1 md:order-none gap-10 md:gap-0">
                  <p className="text-[16px] sm:text-[40px] font-semibold text-center md:text-left">
                    JOIN US
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
}

export default AboutGoEDU2