// "use client";
// import React, { useState, useEffect } from "react";
// import goedu11 from "@/public/goedu11.png";
// import Image from "next/image";
// import ConsultationPopup from "./ConsultationPopup";

// const HeroGoEdu = () => {
// const messages = [
//   "Hi there! How can we help?",
//   "Click me to book a Consultation!",
//   "Find the best school with GoEdu!",
// ];

//   const text = {
//     line1: ["Find", "the"],
//     line2: ["Perfect", "School"],
//     line3: ["for", "Every", "Dream"],
//   };

//   const [displayText, setDisplayText] = useState({
//     line1: "",
//     line2: "",
//     line3: "",
//   });

//   const [currentLine, setCurrentLine] = useState("line1");
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

//   useEffect(() => {
//     const currentLineWords = text[currentLine];
//     const currentWord = currentLineWords[currentWordIndex];

//     if (!currentWord) {
//       const nextLine = {
//         line1: "line2",
//         line2: "line3",
//         line3: "complete",
//       }[currentLine];

//       if (nextLine !== "complete") {
//         setTimeout(() => {
//           setCurrentLine(nextLine);
//           setCurrentWordIndex(0);
//           setCurrentLetterIndex(0);
//         }, 500);
//       }
//       return;
//     }

//     if (currentLetterIndex < currentWord.length) {
//       const timer = setTimeout(() => {
//         setDisplayText((prev) => ({
//           ...prev,
//           [currentLine]: prev[currentLine] + currentWord[currentLetterIndex],
//         }));
//         setCurrentLetterIndex((prev) => prev + 1);
//       }, 0.001);
//       return () => clearTimeout(timer);
//     } else {
//       if (currentWordIndex < currentLineWords.length - 1) {
//         setTimeout(() => {
//           setDisplayText((prev) => ({
//             ...prev,
//             [currentLine]: prev[currentLine] + " ",
//           }));
//           setCurrentWordIndex((prev) => prev + 1);
//           setCurrentLetterIndex(0);
//         }, 10);
//       } else {
//         setTimeout(() => {
//           setCurrentWordIndex(currentLineWords.length);
//         }, 10);
//       }
//     }
//   }, [currentLine, currentWordIndex, currentLetterIndex]);

//   const getCursor = (line) => {
//     return currentLine === line ? (
//       <span className="inline-block w-0.5 h-8 bg-[#0C263F] animate-blink ml-1"></span>
//     ) : null;
//   };

//   const [currentMessage, setCurrentMessage] = useState(0);
//   const [isOpenpopup, setIsOpenpopup] = useState(false);

//   const toggleBookingPopup = () => {
//     setIsOpenpopup(true);
//   };

//   const toggleBookingClosePopup = () => {
//     setIsOpenpopup(false);
//   };

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentMessage((prevMessage) =>
//       prevMessage === messages.length - 1 ? 0 : prevMessage + 1
//     );
//   }, 5000);

//   return () => clearInterval(interval);
// }, [messages.length]);

//   return (
//     <>
//       <div className="mt-20">
//         {/* <div
//           className="w-full h-[710px] md:h-[75vh] bg-no-repeat bg-cover bg-center"
//           style={{ backgroundImage: `url(${goedu11.src})` }}
//         > */}
//         <div>
//           <Image src="/goedu11.png" width={1000} height={1000} alt="image" className="w-full h-full"/>
//           <div>
//             <div className="hidden md:flex px-[250px] absolute bottom-0">
//               <div className="owl-message-container animate-slide-up z-10">
//                 <Image
//                   src="/messageowl.svg"
//                   width={1000}
//                   height={1000}
//                   alt="owl"
//                   className="w-[250px] h-[250px] "
//                 />
//               </div>
// <div className="relative owl-message-container animate-slide-up">
//   <div
//     className="relative w-[200px] h-[200px] mt-4 cursor-pointer"
//     onClick={toggleBookingPopup}
//   >
//     <Image
//       src="/messagebox.svg"
//       width={1000}
//       height={1000}
//       alt="message box"
//       className="w-full h-full"
//     />
//     <p className="absolute top-[70px] w-[150px] cursor-pointer left-[18px] text-center text-[12px] text-black font-semibold">
//       {messages[currentMessage]}
//     </p>
//   </div>
// </div>
//             </div>
//           </div>
//         </div>
// {isOpenpopup && (
//   <ConsultationPopup setClose={toggleBookingClosePopup} />
// )}
//       </div>

//       <style jsx>{`
//         .owl-message-container {
//           position: relative;
//           transform: translateY(100%);
//           opacity: 0;
//         }

//         .animate-slide-up {
//           animation: slide-up 1.5s ease-in-out forwards;
//         }

//         @keyframes slide-up {
//           0% {
//             transform: translateY(30%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeroGoEdu;

"use client";
import React from "react";
import Image from "next/image";

const HeroGoEdu = () => {
  return (
    <>
      <div className="mt-14 md:mt-20 flex justify-center items-center relative">
        <Image
          src="/goedu11.png"
          width={1000}
          height={1000}
          alt="image"
          className="w-full h-auto hidden lg:block"
        />

        <Image
          src="/goedu12.png"
          width={1000}
          height={1000}
          alt="image"
          className="w-full h-auto lg:hidden"
        />

        <div className="absolute -bottom-24 lg:right-5 animate-slide-left">
          <Image
            src="/messageowl2.png"
            width={1000}
            height={1000}
            alt="owl"
            className="w-[300px] h-[500px]  xl:w-[450px] xl:h-[640px] cursor-pointer"
          />
        </div>
      </div>

      <style jsx>{`
        .animate-slide-left {
          animation: slide-left 1.5s ease-in-out forwards;
        }

        @keyframes slide-left {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default HeroGoEdu;
