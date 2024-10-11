// "use client";
// import React, { useState } from "react";
// import Image from "next/image";

// const MapGoEdu = () => {
//   const [showContent, setShowContent] = useState(false);

//   const cities = [
//     {
//       cityName: "City Name 1",
//       bannerSrc: "/locationbanner.svg",
//       bottomSrc: "/locationbottom.svg",
//     },
//     {
//       cityName: "City Name 2",
//       bannerSrc: "/locationbanner.svg",
//       bottomSrc: "/locationbottom.svg",
//     },
//     {
//       cityName: "City Name 3",
//       bannerSrc: "/locationbanner.svg",
//       bottomSrc: "/locationbottom.svg",
//     },
//     {
//       cityName: "City Name 4",
//       bannerSrc: "/locationbanner.svg",
//       bottomSrc: "/locationbottom.svg",
//     },
//   ];

//   return (
//     <div
//       className="relative text-white h-screen overflow-hidden"
//       onMouseEnter={() => setShowContent(true)}
//       onMouseLeave={() => setShowContent(false)}
//     >
//       <div className="">
//         <Image
//           src="/india.svg"
//           alt="map"
//           width={1000}
//           height={1000}
//           className={`transition-opacity duration-500 w-full h-[100vh] ${
//             showContent ? "opacity-50" : "opacity-100"
//           }`}
//         />
//       </div>

//       <div
//         className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
//           showContent ? "translate-x-0" : "-translate-x-full"
//         }`}
//         style={{
//           background: "linear-gradient(180deg, #1B6EA1 0%, #29A2D5 100%)"           
//         }}
//       >
//         <h1 className="text-center text-4xl mb-20">School By Cities</h1>

//         <div className="flex justify-center items-center gap-20 flex-wrap">
//           {cities.map((city, index) => (
//             <div key={index} className="space-y-3 text-center drop-shadow-3xl">
//               <div className={`animate-bounce-delayed-${index}`}>
//                 <Image
//                   src={city.bannerSrc}
//                   alt="location banner"
//                   width={180}
//                   height={200}
//                   className="w-[180px] h-[200px] mx-4 "
//                 />
//               </div>
//               <Image
//                 src={city.bottomSrc}
//                 alt="location bottom"
//                 width={200}
//                 height={12}
//                 className="w-[200px] h-[12px] "
//               />
//               <p>{city.cityName}</p>
//             </div>
//           ))}
//         </div>
//       </div>

    //   <style jsx global>{`
    //     @keyframes bounce-delayed {
    //       0%, 20%, 50%, 80%, 100% {
    //         transform: translateY(0);
    //       }
    //       40% {
    //         transform: translateY(-40px);
    //       }
    //       60% {
    //         transform: translateY(-15px);
    //       }
    //     }
    //     .animate-bounce-delayed-0 {
    //       animation: bounce-delayed 5s infinite;
    //       animation-delay: 1.5s;
    //     }
    //     .animate-bounce-delayed-1 {
    //       animation: bounce-delayed 5s infinite;
    //       animation-delay: 2.5s;
    //     }
    //     .animate-bounce-delayed-2 {
    //       animation: bounce-delayed 5s infinite;
    //       animation-delay: 3.5s;
    //     }
    //     .animate-bounce-delayed-3 {
    //       animation: bounce-delayed 5s infinite;
    //       animation-delay: 4.5s;
    //     }
    //   `}</style>
//     </div>
//   );
// };

// export default MapGoEdu;



"use client";
import React, { useState } from "react";
import Image from "next/image";

const MapGoEdu = () => {
  const [showContent, setShowContent] = useState(false);

  const cities = [
    {
      cityName: "City Name 1",
      bannerSrc: "/locationbanner.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      cityName: "City Name 2",
      bannerSrc: "/locationbanner.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      cityName: "City Name 3",
      bannerSrc: "/locationbanner.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      cityName: "City Name 4",
      bannerSrc: "/locationbanner.svg",
      bottomSrc: "/locationbottom.svg",
    },
  ];

  return (
    <div
      className="relative text-white h-screen"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div className="">
        <Image
          src="/india.svg"
          alt="map"
          width={1000}
          height={1000}
          className={`transition-opacity duration-500 w-full h-[100vh] ${
            showContent ? "opacity-50" : "opacity-100"
          }`}
        />
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
          showContent ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          background: "linear-gradient(180deg, #1B6EA1 0%, #29A2D5 100%)"           
        }}
      >
        <h1 className="text-center text-4xl mb-20">School By Cities</h1>

        <div className="flex justify-center items-center gap-20 flex-wrap">
          {cities.map((city, index) => (
            <div key={index} className="space-y-3 text-center">
              <div className={`animate-bounce-delayed-${index} custom-shadow`}>
                <Image
                  src={city.bannerSrc}
                  alt="location banner"
                  width={180}
                  height={200}
                  className="w-[180px] h-[200px] mx-4"
                />
              </div>
              <div className={`${index} custom-shadow-bottom`}>
                <Image
                  src={city.bottomSrc}
                  alt="location bottom"
                  width={200}
                  height={12}
                  className="w-full h-[12px]"
                />
              </div>
              <p>{city.cityName}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce-delayed {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-40px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-delayed-0 {
          animation: bounce-delayed 5s infinite;
          animation-delay: 1.5s;
        }
        .animate-bounce-delayed-1 {
          animation: bounce-delayed 5s infinite;
          animation-delay: 2.5s;
        }
        .animate-bounce-delayed-2 {
          animation: bounce-delayed 5s infinite;
          animation-delay: 3.5s;
        }
        .animate-bounce-delayed-3 {
          animation: bounce-delayed 5s infinite;
          animation-delay: 4.5s;
        }
          .custom-shadow {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
        }
        .custom-shadow-bottom {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }
      `}</style>
    </div>
  );
};

export default MapGoEdu;