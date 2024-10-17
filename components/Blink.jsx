"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Blink() {
  const circleRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const mask = maskRef.current;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.to(mask, {
      scale: 18,
      opacity: 0.1,
      duration: 2,
      ease: "power2.inOut",
    })
      .to(
        mask,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .set(mask, {
        scale: 1,
        opacity: 0.3,
      });
  }, []);

  return (
    <div className="overflow-hidden w-full h-screen relative bg-gray-100">
      <div className="absolute top-4 right-4 z-50">
        <div
          ref={circleRef}
          className="w-[200px] h-[200px] rounded-full bg-gradient-to-r from-[#1B6EA1] to-[#29A2D5]"
        ></div>
        <div
          ref={maskRef}
          className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-[#1B6EA1] to-[#29A2D5]"
        ></div>
      </div>
    </div>
  );
}
