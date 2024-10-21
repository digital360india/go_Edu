'use client'; // Required for client-side rendering in Next.js

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MobileAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set to true after the component mounts (client-side) to avoid hydration issues
    setIsClient(true);

    if (isClient) {
      // GSAP Animation for second div, only runs after component mounts
      gsap.to(".second-div", {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".second-div",
          start: "top 80%",
          end: "top 20%",
          scrub: 5,
          markers: false, // Disable markers in production
        },
      });
    }
  }, [isClient]);

  if (!isClient) return null; // Return null on server-side to avoid mismatch during hydration

  return (
    <div className="overflow-hidden relative">
      {/* First Section with Image */}
      <div className="bg-white w-full h-screen absolute inset-0 top-0 left-0">
        <div className="absolute top-0 left-0">
          <Image
            src="/whychoseusmobile.svg"
            alt="Why Choose Us Animation"
            width={1000}
            height={1000}
            priority={true} // Priority helps Next.js pre-load the image
          />
        </div>
      </div>

      {/* Second Div with GSAP Trigger */}
      <div className="second-div transform translate-x-full h-screen opacity-55 w-full bg-blue-600 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to the Second Section</h1>
      </div>
    </div>
  );
}
