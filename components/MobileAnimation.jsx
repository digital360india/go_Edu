// 'use client';

// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export default function MobileAnimation() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);

//     if (isClient) {
//       gsap.to(".second-div", {
//         x: 0,
//         opacity: 1,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ".second-div",
//           start: "top 80%",
//           end: "top 20%",
//           scrub: 5,
//           markers: false,
//         },
//       });
//     }
//   }, [isClient]);

//   if (!isClient) return null;

//   return (
//     <div className="">
//     {/* <div className="overflow-hidden relative"> */}
//       {/* <div className="bg-white w-full h-screen absolute inset-0 top-0 left-0">
//         <div className="absolute top-0 left-0">
//           <Image
//             src="/whychoseusmobile.svg"
//             alt="Why Choose Us Animation"
//             width={1000}
//             height={1000}
//             priority={true}
//           />
//         </div>
//       </div>

//       <div className="second-div transform translate-x-full h-screen opacity-55 w-full bg-[#FFFFFF] flex items-center justify-center">
//         <h1 className="text-[#323232] text-[1rem] font-bold">Why Choose Us?</h1>
//       </div> */}

//       <div className='bg-[#FFFFFF]'>
//       <h1 className="text-[#323232] text-[1rem] font-bold text-center">Why Choose Us?</h1>

//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";

const MobileAnimation = () => {
  const reasons = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla sed dignissim pharetra placerat facilisis cursus. Et sit massa ultrices porttitor ornare varius tempor amet ut.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla sed dignissim pharetra placerat facilisis cursus. Et sit massa ultrices porttitor ornare varius tempor amet ut.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla sed dignissim pharetra placerat facilisis cursus. Et sit massa ultrices porttitor ornare varius tempor amet ut.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla sed dignissim pharetra placerat facilisis cursus. Et sit massa ultrices porttitor ornare varius tempor amet ut.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla sed dignissim pharetra placerat facilisis cursus. Et sit massa ultrices porttitor ornare varius tempor amet ut.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nulla sed dignissim pharetra placerat facilisis cursus. Et sit massa ultrices porttitor ornare varius tempor amet ut.",
    },
  ];

  return (
    <div className="md:hidden bg-white m-6">
      <h2 className="text-2xl text-[#323232] font-bold pb-6 text-center">
        Why Choose Us?
      </h2>
      <div className="space-y-6">
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex flex-col items-center">
              
              <Image
                src="/pointer.svg"
                width={1000}
                height={1000}
                className="w-[20px] h-[20px]"
                alt="Pointer"
              />
              
              {/* {index < reasons.length - 1 && ( */}
                <div className="w-[2px] h-24 bg-[#1B6EA1] mt-2"></div>
              {/* )} */}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-[#323232] text-lg mb-2">{reason.title}</h3>
              <p className="text-[#898989] text-[12px]">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAnimation;
