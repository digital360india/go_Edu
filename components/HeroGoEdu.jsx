"use client";
import React, { useState, useEffect } from "react";
import goedubanner from "@/public/goedubanner.svg";
import Image from "next/image";
import ConsultationPopup from "./ConsultationPopup";

const HeroGoEdu = () => {
  const messages = [
    "Hi there! How can we help?",
    "Click me to book a Consultation!",
    "Find the best school with GoEdu!",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [isOpenpopup, setIsOpenpopup] = useState(false);

  const toggleBookingPopup = () => {
    setIsOpenpopup(true);
  };

  const toggleBookingClosePopup = () => {
    setIsOpenpopup(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prevMessage) =>
        prevMessage === messages.length - 1 ? 0 : prevMessage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <>
      <div>
        <div
          className="w-full h-[100vh] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${goedubanner.src})` }}
        >
          <div>
            <div className="flex justify-between">
              <div className="text-[#0C263F] text-[2.9rem] pt-56 px-[100px] z-10">
                <p>Find the</p>
                <p className="font-bold">Perfect School</p>
                <p>
                  for Every <span className="font-bold">Dream</span>
                </p>
              </div>
              <div className="absolute right-0 bottom-0 z-0">
                <Image
                  src="/herosvg.svg"
                  width={1000}
                  height={1000}
                  alt="hero"
                  className="w-[700px] h-[470px]"
                />
              </div>
            </div>

            <div className="flex px-[250px] absolute bottom-0">
              <div className="owl-message-container animate-slide-up z-10">
                <Image
                  src="/messageowl.svg"
                  width={1000}
                  height={1000}
                  alt="owl"
                  className="w-[250px] h-[250px] "
                />
              </div>
              <div className="relative owl-message-container animate-slide-up">
                <div
                  className="relative w-[200px] h-[200px] mt-4 cursor-pointer"
                  onClick={toggleBookingPopup}
                >
                  <Image
                    src="/messagebox.svg"
                    width={1000}
                    height={1000}
                    alt="message box"
                    className="w-full h-full"
                  />
                  <p className="absolute top-[70px] w-[150px] cursor-pointer left-[18px] text-center text-[12px] text-black font-semibold">
                    {messages[currentMessage]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isOpenpopup && (
          <ConsultationPopup setClose={toggleBookingClosePopup} />
        )}
      </div>

      <style jsx>{`
        .owl-message-container {
          position: relative;
          transform: translateY(100%);
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 1.5s ease-in-out forwards;
        }

        @keyframes slide-up {
          0% {
            transform: translateY(30%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        } 
      `}</style>
    </>
  );
};

export default HeroGoEdu;
