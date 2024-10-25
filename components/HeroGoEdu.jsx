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

  const text = {
    line1: ["Find", "the"],
    line2: ["Perfect", "School"],
    line3: ["for", "Every", "Dream"],
  };

  const [displayText, setDisplayText] = useState({
    line1: "",
    line2: "",
    line3: "",
  });

  const [currentLine, setCurrentLine] = useState("line1");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const currentLineWords = text[currentLine];
    const currentWord = currentLineWords[currentWordIndex];

    if (!currentWord) {
      // Move to next line
      const nextLine = {
        line1: "line2",
        line2: "line3",
        line3: "complete",
      }[currentLine];

      if (nextLine !== "complete") {
        setTimeout(() => {
          setCurrentLine(nextLine);
          setCurrentWordIndex(0);
          setCurrentLetterIndex(0);
        }, 500);
      }
      return;
    }

    if (currentLetterIndex < currentWord.length) {
      // Type next letter
      const timer = setTimeout(() => {
        setDisplayText((prev) => ({
          ...prev,
          [currentLine]: prev[currentLine] + currentWord[currentLetterIndex],
        }));
        setCurrentLetterIndex((prev) => prev + 1);
      }, 0.001); // Speed of typing letters
      return () => clearTimeout(timer);
    } else {
      // Move to next word
      if (currentWordIndex < currentLineWords.length - 1) {
        setTimeout(() => {
          setDisplayText((prev) => ({
            ...prev,
            [currentLine]: prev[currentLine] + " ",
          }));
          setCurrentWordIndex((prev) => prev + 1);
          setCurrentLetterIndex(0);
        }, 10); // Delay between words
      } else {
        // End of line delay
        setTimeout(() => {
          setCurrentWordIndex(currentLineWords.length);
        }, 10);
      }
    }
  }, [currentLine, currentWordIndex, currentLetterIndex]);

  const getCursor = (line) => {
    return currentLine === line ? (
      <span className="inline-block w-0.5 h-8 bg-[#0C263F] animate-blink ml-1"></span>
    ) : null;
  };

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
          className="w-full h-[710px] md:h-[100vh] bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${goedubanner.src})` }}
        >
          <div>
            <div className="flex justify-between">
              {/* <div className="text-[#0C263F] text-[2.3rem] md:text-[2.9rem] pt-44 md:pt-56 px-10 md:px-[100px] z-10">
                <p>Find the</p>
                <p className="font-bold">Perfect School</p>
                <p>
                  for Every <span className="font-bold">Dream</span>
                </p>
              </div> */}

              <div className="text-[#0C263F] text-[30px] md:text-[2.9rem] pt-44 md:pt-56 px-10 md:px-[100px] z-10">
                <p className="h-[3rem] flex items-center m-2 md:m-8">
                  {displayText.line1}
                  {getCursor("line1")}
                </p>
                <p className="font-bold h-[3rem] flex items-center m-2 md:m-8">
                  {displayText.line2}
                  {getCursor("line2")}
                </p>
                <p className="h-[3rem] flex items-center m-2 md:m-8">
                  <span>
                    {displayText.line3.split(" ").slice(0, 2).join(" ")}
                  </span>
                  {displayText.line3.includes("Dream") && (
                    <span className="font-bold ml-2">Dream</span>
                  )}
                  {/* {getCursor("line3")} */}
                </p>
              </div>
              <div className="absolute   right-0 bottom-0 z-0 w-[700px] h-[470px] hidden md:block">
                <Image
                  src="/herosvg.svg"
                  width={1000}
                  height={1000}
                  alt="hero"
                  className="w-[700px] h-[470px] "
                />
              </div>
              {/* <div className="absolute top-[410px]  right-0  z-0  w-[380px] h-[195px] md:hidden">
                <Image
                  src="/bannergoeduhero.svg"
                  width={1000}
                  height={1000}
                  alt="hero"
                  className="w-[380px] h-auto"
                />
              </div> */}
              <div className="absolute top-[410px] right-0 z-0 w-[380px] h-[195px] md:hidden transform translate-y-96 opacity-0 transition duration-700 ease-in-out animate-slideIn">
  <Image
    src="/bannergoeduhero.svg"
    width={1000}
    height={1000}
    alt="hero"
    className="w-[380px] h-auto"
  />
</div>

            </div>

            <div className="hidden md:flex px-[250px] absolute bottom-0">
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
