"use client";
import React from "react";

const DynamicCircularGraph = ({ value, labels, icons }) => {
  const circleRadius = 50;
  const circumference = 2 * Math.PI * circleRadius;
  const textColors = ["#70CB00", "#FACC13", "#FF0000", "#70CB00"];

  return (
    <div className="flex flex-col gap-8 ">
      {value.map((val, i) => {
        const strokeDashoffset = circumference * (1 - val / 100);
        const textColor = textColors[i % textColors.length];

        return (
          <>
          <div className="flex items-center">

          <div key={i} className="relative z-20 flex flex-col  ">
            {/* The circular graph */}
            <svg className="w-28 h-28" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e6e6e6"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke={textColor}
                strokeWidth="10"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  transition:"stroke-dashoffset 0.5s ease",
                }}
              />
            </svg>

            {/* Icon in the center */}
            <img
              src={icons[i]}
              alt={labels[i]}
              className="absolute  bg-white rounded-full w-20 h-20"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
               
              }}
            />

            {/* Label */}
            
          </div>
          <div className="flex absolute p-20">

            <div className=" mt-2 bg-gradient-to-b w-72 text-center rounded-r-full from-[#F1F4F9] to-[#C6D1E3] py-6" >
              <p className="text-[16px] text-[#323232]">{labels[i]}</p>
            </div>

            {/* Percentage value */}
            <div className=" mt-1 flex items-center p-2">
              <span
                className="text-xl font-semibold"
                style={{ color: textColor }}
              >
                {val}%
              </span>
            </div>
            </div>
          </div>
          </>
        );
      })}
    </div>
  );
};

export default DynamicCircularGraph;
