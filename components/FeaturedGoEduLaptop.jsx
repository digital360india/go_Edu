"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRouter } from "next/navigation";
import FeaturedGoEduMobile from "./FeaturedGoEduMobile";

gsap.registerPlugin(ScrollTrigger);



const schools = [
  {
    school: "Jain International School",
    logo: "/mayoschool.svg", 
    url: "/school/bengaluru/jain-international-residential-school-bangalore-karnataka",

  },
  {
    school: "Wellham Girls School",
    logo: "/Welham_Girls.svg", 
    url: "/school/dehradun/welham-girls'-school-dehradun-uttarakhand",

  },
  {
    school: "Mayo College",
    logo: "/mayoschool.svg", 
    url: "/school/india/mayo-college-india",

  },
  {
    school: "Mussoorie International School",
    logo: "/mayoschool.svg", 
    url: "/school/mussoorie/mussoorie-international-school-mussoorie-uttarakhand ",

  },
  {
    school: "The Doon School",
    logo: "/The_Doon_School.svg", 
    url: "/school/dehradun/the-doon-school-dehradun-uttarakhand",

  },
];


const Gallery = () => {
  const galleryRef = useRef(null);
  const cardsRef = useRef([]);
  const router = useRouter();

  useEffect(() => {
    const gallery = galleryRef.current;
    const cards = cardsRef.current;

    if (!gallery || cards.length === 0) return;

    const cardWidth = window.innerWidth * 0.25; 
    const totalWidth = cardWidth * cards.length;

    gsap.to(gallery, {
      x: -totalWidth + cardWidth, 
      ease: "none",
      scrollTrigger: {
        trigger: gallery,
        start: "top top",
        end: `+=${totalWidth}`,
        scrub: 1,
        snap: {
          snapTo: 1 / (cards.length - 1),
          duration: { min: 0.2, max: 0.3 }, 
          delay: 0.1, 
        },
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleCardClick = (url) => {
    router.push(url); // Navigate to the specified URL
  };

  return (
    <div className="w-full h-full overflow-hidden bg-white">
      <div ref={galleryRef} className="flex h-full">
        {/* {Array(7)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex-shrink-0 w-[30vw] h-full p-6 pt-40"
            >
              <div className="flex flex-col items-center w-[350px] border border-white h-[400px] shadow-lg rounded-2xl">
                <div
                  className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
                  style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
                >
                  <Image
                    src="/mayoschool.svg"
                    alt="Mayo's College"
                    width={1000}
                    height={1000}
                    className="object-cover p-14"
                  />
                </div>

                <div className="w-full flex justify-center items-center h-[118px]">
                  <h2 className="text-[24px] text-[#1B6EA1]">
                    MAYO&apos;S COLLEGE
                  </h2>
                </div>
              </div>
            </div>
          ))} */}
          {schools.map((school, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex-shrink-0 w-[30vw] h-full p-6 pt-40 "
          >
            <div
                        onClick={() => handleCardClick(school.url)}
            className="flex flex-col items-center w-[350px] border border-white h-[400px] shadow-lg rounded-2xl">
              <div
                className="w-full h-[280px] rounded-b-2xl flex items-center justify-center bg-[#29A2D5]"
                style={{ boxShadow: "0px 7px 6px 0px #0C263F40" }}
              >
                <Image
                  src={school.logo}
                  alt={school.name}
                  width={1000}
                  height={1000}
                  className="object-cover p-14 cursor-pointer"
                />
              </div>
              <div className="w-full flex justify-center items-center h-[118px]">
                <h2 className="text-[24px] text-[#1B6EA1] cursor-pointer">
                  {school.school}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function FeaturedGoEduLaptop() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const circle = circleRef.current;

    if (!container || !circle) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=600%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    });

    tl.to(circle, {
      scale: 10,
      duration: 1,
      ease: "power2.inOut",
    })
      .to(circle, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => setShowGallery(true),
      })
      .to({}, { duration: 4 })
      .to(circle, {
        opacity: 0,
        scale: 1,
        duration: 0.5,
      });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="h-[450vh] hidden md:block">
        <div
          ref={containerRef}
          className="w-full h-screen  flex justify-end items-center overflow-hidden relative"
          style={{
            background: `linear-gradient(90deg, #1B6EA1 1.4%, rgba(41, 162, 213, 0) 100%), url('/featuredschool.svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <div className="absolute top-[50%] left-10 text-[50px] font-bold text-white z-10">
            FEATURED SCHOOL
          </div>

          <div
            ref={circleRef}
            className="w-[300px] h-[300px] rounded-full flex justify-center items-center text-white z-20"
            style={{
              background: "linear-gradient(180deg, #1B6EA1 0%, #29A2D5 100%)",
            }}
          >
            <Image
              src="/goEdulogo.svg"
              alt="logo"
              width={1000}
              height={1000}
              className="object-cover w-[200px] h-[120px]"
            />
            {/* <span className="text-2xl font-bold">Explore</span> */}
          </div>

          {showGallery && (
            <div className="absolute inset-0 z-30">
              <Gallery />
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden">
        <FeaturedGoEduMobile />
      </div>
    </>
  );
}


