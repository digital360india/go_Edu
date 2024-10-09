// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import Aboutusgoedu from "@/public/Aboutusgoedu.svg";

// const AboutGoEdu = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <>
//       <div>
//         <div
//           className="w-full h-[463px] bg-no-repeat bg-cover bg-center relative"
//           style={{ backgroundImage: `url(${Aboutusgoedu.src})` }}
//         >
//           <div
//             className={`flex justify-center items-center text-white space-x-60 pt-32 transition-opacity duration-500 ${
//               isHovered ? "opacity-0" : "opacity-100"
//             }`}
//           >
//             <div className="space-y-1">
//               <Image
//                 src="/cap.svg"
//                 width={1000}
//                 height={1000}
//                 className="w-[83px] h-[83px]"
//                 alt="img"
//               />
//               <p className="text-[29px] font-semibold">500+</p>
//               <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
//               <p className="text-[24px]">Schools</p>
//             </div>

//             <div className="space-y-1">
//               <Image
//                 src="/parent.svg"
//                 width={1000}
//                 height={1000}
//                 className="w-[83px] h-[83px]"
//                 alt="img"
//               />
//               <p className="text-[29px] font-semibold">500+</p>
//               <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
//               <p className="text-[24px]">Parents</p>
//             </div>

//             <div className="space-y-1">
//               <Image
//                 src="/head.svg"
//                 width={1000}
//                 height={1000}
//                 className="w-[83px] h-[83px]"
//                 alt="img"
//               />
//               <p className="text-[29px] font-semibold">500+</p>
//               <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
//               <p className="text-[24px]">Counsellors</p>
//             </div>

//             <div className="space-y-1">
//               <Image
//                 src="/city.svg"
//                 width={1000}
//                 height={1000}
//                 className="w-[83px] h-[83px]"
//                 alt="img"
//               />
//               <p className="text-[29px] font-semibold">500+</p>
//               <p className="w-[3.5rem] h-1 bg-white rounded-3xl"></p>
//               <p className="text-[24px]">Cities</p>
//             </div>
//           </div>
         
//           <div className="flex justify-center items-center pt-16  ">
//             <div
//               className="bg-white rounded-3xl cursor-pointer text-[#1B6EA1] w-[186px] h-[44px] flex justify-center items-center"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               <button>Read More</button>
//             </div>
//           </div>


//         {/* Line and Frame with sliding effect */}
//         <div
//           className={`transition-opacity duration-500 ${
//             isHovered ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="relative top-0  ">
//             <div className="absolute ">

//             <Image
//               src="/Line.png"
//               width={1000}
//               height={1000}
//               className="w-[250px] h-[250px] ml-[800px] "
//               alt="Line"
//             />
//             </div>
            
//             <Image
//               src="/Frame.png"
//               width={500}
//               height={500}
//               className={`w-[500px] h-[463px] transition-transform duration-700 ease-in-out transform ${
//                 isHovered ? "translate-x-0" : "translate-x-full"
//               }`}
//               alt="Frame"
//             />
//           </div>
//         </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutGoEdu;




"use client";
import Image from "next/image";
import React, { useState } from "react";
import Aboutusgoedu from "@/public/Aboutusgoedu.svg";

const AboutGoEdu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div>
        <div
          className="w-full h-[463px] bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Aboutusgoedu.src})` }}
        >
          {/* Content Area */}
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

          {/* Read More Button */}
          <div className="flex justify-center items-center pt-16">
            <div
              className="bg-white rounded-3xl cursor-pointer text-[#1B6EA1] w-[186px] h-[44px] flex justify-center items-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button>Read More</button>
            </div>
          </div>

          {/* Frame and Line Images */}
          <div
            className={`transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative ">
              <Image
                src="/Line.png"
                width={1000}
                height={1000}
                className="absolute w-[280px] h-[365px] ml-[800px] bottom-5 z-10"
                alt="Line"
              />
              <Image
                src="/Frame.png"
                width={1000}
                height={1000}
                className={`absolute w-[450px] h-[485px] -bottom-[70px] mt-20 right-0 transition-transform duration-700 ease-in-out transform ${
                  isHovered ? "translate-x-0" : "translate-x-full"
                }`}
                alt="Frame"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutGoEdu;
