"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import DynamicCircularGraph from "./GraphComponent";

const sports = [
  { src: "/Cricket.svg", alt: "Cricket", text: "Cricket" },
  { src: "/football.svg", alt: "Football", text: "Football" },
  { src: "/table-tannis.svg", alt: "Tennis", text: "Table-tannis" },
  { src: "/Basketball.svg", alt: "Basketball", text: "Basketball" },
  { src: "/Playground.svg", alt: "Playground", text: "Playground" },
  { src: "/horse-riding.svg", alt: "horse-riding", text: "Horse-riding" },
  { src: "/Swimming.svg", alt: "Swimming", text: "Swimming" },
  { src: "/Badminton.svg", alt: "Badminton", text: "Badminton" },
  { src: "/shooting.svg", alt: "shooting", text: "Shooting" },
];

const AboutHero = () => {
  useEffect(() => {
    const animatedDiv = document.getElementById("animated-div");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When the element comes into the viewport (scroll down)
            animatedDiv.classList.remove("translate-x-full", "opacity-0");
            animatedDiv.classList.add("translate-x-0", "opacity-100");
          } else {
            // When the element leaves the viewport (scroll up)
            animatedDiv.classList.remove("translate-x-0", "opacity-100");
            animatedDiv.classList.add("translate-x-full", "opacity-0");
          }
        });
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    observer.observe(animatedDiv);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  const school = {
    infrastructure: 95,
    Administration: 90,
    Extracurricular: 98,
    Academics: 91,
  };

  const icons = [
    "/infra.svg",
    "/administration.svg",
    "/extracur.svg",
    "/academics.svg",
  ];

  return (
    <>
      <div className="relative flex justify-center">
        <Image
          className="w-full"
          src="/aboutbanner.svg"
          width={1000}
          height={1000}
          alt="img"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-[36px] text-[#1B6EA1]">School Name</h2>
          <div className="mt-4">
            <button className="w-[160px] h-[44px] bg-[#1B6EA1] text-[#FFFFFF] rounded-md">
              Enquiry Now
            </button>
          </div>
        </div>
      </div>

      <div className="pb-40 w-full">
        <div className="flex gap-20 ml-14 sticky top-0">
          <div className="p-10">
            <h3 className="text-[36px] text-[#323232] pb-5 pl-14">
              About School
            </h3>
            <hr className="w-[570px] ml-14 h-0.5 bg-black" />

            <div className="">
              <p className="text-[#898989] pt-10 pb-10  text-[1rem] text-justify ml-14 w-[560px] h-[530px] overflow-y-scroll">
                Mayo College, established in 1875 by Richard Bourke, the 6th
                Earl of Mayo, Ajmer, holds a prestigious place in Indian
                education. This all-boys boarding school, often referred to as
                the "Eton of the East," boasts a rich history and a reputation
                for nurturing future leaders. History & Legacy: Originally
                envisioned to provide Western-style education for potential
                officers in the British Indian Army, Mayo College has evolved
                into a premier institution preparing students for diverse
                fields. Alumni have distinguished themselves in the Indian Armed
                Forces, civil services, and various professions. Facilities: The
                sprawling 183-acre campus provides a serene learning
                environment. Classrooms are well-equipped for interactive
                learning. Specialized labs cater to science experiments and
                technological advancements.Mayo College, established in 1875 by
                Richard Bourke, the 6th Earl of Mayo, Ajmer, holds a prestigious
                place in Indian education. This all-boys boarding school, often
                referred to as the "Eton of the East," boasts a rich history and
                a reputation for nurturing future leaders. History & Legacy:
                Originally envisioned to provide Western-style education for
                potential officers in the British Indian Army, Mayo College has
                evolved into a premier institution preparing students for
                diverse fields. Alumni have distinguished themselves in the
                Indian Armed Forces, civil services, and various professions.
                Facilities: The sprawling 183-acre campus provides a serene
                learning environment. Classrooms are well-equipped for
                interactive learning. Specialized labs cater to science
                experiments and technological advancements.Mayo College,
                established in 1875 by Richard Bourke, the 6th
              </p>

              <div className="flex w-[449px] h-[60px] gap-8 ml-12 items-center pt-8">
                <div className="flex items-center gap-2">
                  <Image
                    src="/currency-rupee.svg"
                    alt="Rupee Icon"
                    className="w-[30px] h-[30px] text-[#898989]"
                    width={1000}
                    height={1000}
                  />
                  <div className="mt-2">
                    <p className="mt-4 text-[#898989]">Annual Fees</p>
                    <p className="mt-2 text-[#323232]">100000-500000</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    src="/map.svg"
                    alt="Map Icon"
                    className="w-[23px] h-[30px] text-[#898989]"
                    width={1000}
                    height={1000}
                  />
                  <div className="mt-2">
                    <p className="mt-4 text-[#898989]">Address</p>
                    <p className="mt-2 text-[#323232]">XYZ, Street, City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[600px] bg-[#F3F3F3] pb-30 rounded-t-[10%] mt-12  mr-16">
            <div>
              <div className="w-[40] h-[40px] ml-6">
                <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-[#27AAE1]">
                  1
                </p>
              </div>
              <hr className=" h-0.5 pt-[1px] bg-[#1B6EA1] ml-6 mr-6 mb-16 mt-4" />

              <div className="w-[600px] h-[360px] ">
                <Image
                  src="/pic.svg"
                  alt="img"
                  className="w-[600px] h-[360px] object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
             

              <div
                id="animated-div"
                className="transform translate-x-full opacity-0 transition-transform  duration-700 ease-out"
              >
                <div className="flex justify-center items-center mb-60 w-[645px] h-[127px] mt-2 bg-[#1B6EA1] rounded-l-full text-white shadow-md px-6">
                  <div className="flex w-full justify-around gap-x-6 pt-4">
                    <div className="flex flex-col items-center">
                      <p className="uppercase text-xs font-bold">Board</p>
                      <p className="text-lg">CBSE</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-xs font-bold">School Type</p>
                      <p className="text-lg">Co-Ed School</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-xs font-bold">School Time</p>
                      <p className="text-lg">Day School</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-xs font-bold">School Classes</p>
                      <p className="text-lg">Grade 10</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-20 ml-14 sticky top-0 bg-white">
          <div className="p-10 pb-16">
            <p className="text-[36px] text-[#323232] pb-5 pl-14">
              School Statistics
            </p>
            <hr className="w-[570px] ml-14 h-0.5 bg-black" />

            <div className=" mt-8 p-4 gap-8 space-y-6 border-white ">
              <DynamicCircularGraph
                value={[
                  school.infrastructure,
                  school.Administration,
                  school.Extracurricular,
                  school.Academics,
                ]}
                labels={[
                  "Infrastructure",
                  "Administration",
                  "Extracurricular",
                  "Academics",
                ]}
                icons={icons}
              />
            </div>

            <div className="w-[525px]">
              <p className="text-[#898989] w-full h-auto pt-12 text-[1rem] ml-14"></p>
            </div>
          </div>

          <div className=" w-[600px] bg-[#F3F3F3] ">
            <div className="rounded-t-[10%] shadow-black shadow-md py-4 mt-[45px]">
              <div className="w-[40] h-[40px] ml-6 ">
                <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-[#27AAE1]">
                  2
                </p>
              </div>
              <hr className=" h-0.5 pt-[1px] bg-[#1B6EA1] ml-6 mr-6 mb-16 mt-4" />
              <div className="w-[800px] h-[285px] ">
                <Image
                  src="/aboutpic.svg"
                  alt="img"
                  className="w-[600px] h-[360px] object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex gap-20 ml-14 sticky top-0 bg-white">
          <div className="p-10">
            <p className="text-[36px] text-[#323232] pb-5 pl-14">
              Students Facilities
            </p>
            <hr className="w-[570px] ml-14 h-0.5 bg-black" />

            <div className="grid grid-cols-3 gap-6 pt-6">
              {sports.map((sport, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image
                    src={sport.src}
                    alt={sport.alt}
                    className="w-[111px] h-[111px] bg-white"
                    width={1000}
                    height={1000}
                  />
                  <p className="mt-2 text-center">{sport.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[600px] bg-[#F3F3F3]   mt-16px  ">
            <div className="rounded-t-[10%] shadow-black shadow-2xl py-4 mt-[100px]">
              <div className="w-[40] h-[40px] ml-6">
                <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-[#27AAE1]">
                  3
                </p>
              </div>
              <hr className=" h-0.5  pt-[1px] bg-[#1B6EA1] ml-6 mr-6 mb-16 mt-4" />
              <div className="w-[800px] h-[285px] ">
                <Image
                  src="/aboutpic1.svg"
                  alt="img"
                  className="w-[600px] h-[360px] object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
