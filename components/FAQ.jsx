"use client";

import React, { useEffect, useState } from "react";

function FAQ({ categoryData }) {
  const [data1, setData1] = useState("");
  const [catFaq, setCatFaq] = useState([]);

  useEffect(() => {
    if (categoryData !== undefined && categoryData !== null) {
      try {
        const sanitizedJson = categoryData.FAQ.replace(
          /[\x00-\x1F\x7F-\x9F]/g,
          ""
        );
        const obj = JSON.parse(sanitizedJson);
        setCatFaq(obj);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  }, [categoryData]);

  return (
    <div className=" pb-5 lg:pb-20 text-black w-[86vw] mx-auto ">
      <div className="flex  gap-2 lg:text-3xl text-2xl mt-10 sm:mt-24 mb-2 sm:mb-10">
        {/* <span>
          <div className="lg:border-3 border-[2px] lg:w-44 w-20 border-[#540000]"></div>
        </span> */}
        <h2 className="text-[24px] sm:text-[28px] font-semibold">FAQs</h2>
        {/* <span>
          <div className="lg:border-3 border-[2px] lg:w-44 w-20 border-[#540000]"></div>
        </span> */}
      </div>
      <div className="contianer ">
        {catFaq.map((faq, index) => (
          <div key={index}>
            <ul className="flex flex-col">
              <li
                className="bg-white my-2 border-b-[3px]"
                x-data={`accordion(${index + 1})`}
              >
                <h2
                  className="flex flex-row justify-between w-[350px] md:w-[600px] lg:w-[86vw] font-semibold p-3 cursor-pointer"
                  onClick={() => {
                    setData1(data1 === index + 1 ? "" : `${index + 1}`);
                  }}
                >
                  <span className="text-gray-500 w-[350px] lg:w-[750px]">
                    {faq.ques}
                  </span>
                  <svg
                    className="w-8 h-8 fill-current text-[#540000]  transform transition-transform duration-500"
                    viewBox="0 0 20 20"
                  >
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </h2>
                {data1 === `${index + 1}` && (
                  <div className="duration-900 transform transition-transform scroll-smooth">
                    <p className="p-3 text-gray-900 transition duration-700 ease-in-out">
                      {faq.ans}
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
