'use client'; 

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (isClient) {
      gsap.to(".second-div", {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".second-div",
          start: "top 80%",
          end: "top 20%",
          scrub: 5,
          markers: false, 
        },
      });
    }
  }, [isClient]);

  if (!isClient) return null; 

  return (
    <div className="overflow-hidden relative">
      <div className="bg-white w-full h-screen absolute inset-0 top-0 left-0">
        <div className="absolute top-0 left-0">
          <Image
            src="/whychoseusmobile.svg"
            alt="Why Choose Us Animation"
            width={1000}
            height={1000}
            priority={true} 
          />
        </div>
      </div>

      <div className="second-div transform translate-x-full h-screen opacity-55 w-full bg-blue-600 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to the Second Section</h1>
      </div>
    </div>
  );
}
