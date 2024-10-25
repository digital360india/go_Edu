// "use client";

// import React, { useEffect, useState } from "react";

// function FAQ({ categoryData }) {
//   const [data1, setData1] = useState("");
//   const [catFaq, setCatFaq] = useState([]);

//   useEffect(() => {
//     if (categoryData !== undefined && categoryData !== null) {
//       try {
//         const sanitizedJson = categoryData.FAQ.replace(
//           /[\x00-\x1F\x7F-\x9F]/g,
//           ""
//         );
//         const obj = JSON.parse(sanitizedJson);
//         setCatFaq(obj);
//       } catch (error) {
//         console.error("Error parsing JSON:", error);
//       }
//     }
//   }, [categoryData]);

//   return (
//     <>
//       <div className=" pb-5 lg:pb-20 text-black w-[86vw] mx-auto ">
//         <div className="flex  gap-2 lg:text-3xl text-2xl mt-10 sm:mt-24 mb-2 sm:mb-10">
//           <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#000000]">
//             FAQs
//           </h2>
//         </div>
//         <div className="contianer ">
//           {catFaq.map((faq, index) => (
//             <div key={index}>
//               <ul className="flex flex-col">
//                 <li
//                   className="bg-white my-2 border-b-[3px] rounded-lg"
//                   style={{ borderColor: "#1B6EA1" }}
//                   x-data={`accordion(${index + 1})`}
//                 >
//                   <h2
//                     className="flex flex-row justify-between w-[350px] md:w-[600px] lg:w-[86vw] font-semibold p-3 cursor-pointer"
//                     onClick={() => {
//                       setData1(data1 === index + 1 ? "" : `${index + 1}`);
//                     }}
//                   >
//                     <span className="text-[#323232] text-[1rem] w-[350px] lg:w-[750px]">
//                       {faq.ques}
//                     </span>
//                     <svg
//                       className="w-8 h-8 fill-current text-[#000000]  transform transition-transform duration-500"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
//                     </svg>
//                   </h2>
//                   {data1 === `${index + 1}` && (
//                     <div className="duration-900 transform transition-transform scroll-smooth">
//                       <p className="p-3 text-[#323232] text-[1rem] transition duration-700 ease-in-out">
//                         {faq.ans}
//                       </p>
//                     </div>
//                   )}
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

      // <div className="bg-[#1B6EA1] w-full h-auto px-4 sm:px-8 md:px-[100px] pt-14 flex flex-col items-center">
      //   <div className="flex items-center justify-center w-full sm:w-[600px]">
      //     <div className="flex-1 border-t-2 border-white"></div>
      //     <h1 className="font-bold text-white text-[18px] sm:text-[24px] px-4 text-center ">
      //       Schools In XYZ
      //     </h1>
      //     <div className="flex-1 border-t-2 border-white"></div>
      //   </div>

      //   <p className="text-white text-[12px] sm:text-[14px] pt-8 text-justify sm:max-w-[600px]">
      //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue
      //     turpis, ultrices sit amet luctus id, condimentum nec metus.
      //     Suspendisse potenti. Sed feugiat nulla in nibh mattis, eu dignissim
      //     ipsum semper. Sed mollis urna vel est cursus cursus. Suspendisse sit
      //     amet quam at odio tempus tempus at eu ipsum. Maecenas mollis non dolor
      //     et aliquam. Sed elementum magna dolor, eu eleifend felis dignissim a.
      //     Ut eros elit, facilisis scelerisque viverra sed, dapibus semper urna.
      //     Mauris ut malesuada lacus. Sed eget laoreet libero. Integer ut
      //     efficitur nunc, et bibendum orci. Sed fringilla fermentum convallis.
      //     Aliquam erat volutpat. Duis non ullamcorper ipsum, eu bibendum nulla.
      //     Suspendisse eu risus ante. Ut eu dolor ante. Mauris bibendum porta
      //     dolor ut iaculis. Aliquam placerat non tellus in varius. Sed facilisis
      //     interdum rutrum. Aliquam sit amet tortor eget neque luctus pulvinar.
      //     Maecenas tempus, nisl et facilisis maximus, ex velit bibendum purus,
      //     ac sagittis nisi ipsum non felis. Quisque facilisis, nisi a maximus
      //     feugiat, orci est semper neque, vitae posuere tellus est vel nibh.
      //     Etiam in consequat mauris.
      //   </p>

      //   <p className="text-white text-[12px] sm:text-[14px] text-center pt-8 pb-8">
      //     Author Name
      //   </p>

      //   <hr className="w-full max-w-[600px] border-t-2 border-white hidden md:block pb-10" />
      // </div>
//     </>
//   );
// }

// export default FAQ;




"use client";

import React, { useEffect, useState } from "react";

function FAQ({ categoryData }) {
  const [activeIndex, setActiveIndex] = useState(null); 
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

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  return (

    <>
    
    
    <div className="pb-5 lg:pb-20 text-black w-[86vw] mx-auto">
      <div className="flex gap-2 lg:text-3xl text-2xl mt-10 sm:mt-24 mb-2 sm:mb-10">
        <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#000000]">
          FAQs
        </h2>
      </div>
      <div className="container">
        {catFaq.map((faq, index) => (
          <div key={index}>
            <ul className="flex flex-col">
              <li
                className="bg-white my-2 border-b-[3px] rounded-lg"
                style={{ borderColor: "#1B6EA1" }}
              >
                <h2
                  className="flex flex-row md:justify-between w-full md:w-[600px] lg:w-[86vw] font-semibold p-3 cursor-pointer"
                  onClick={() => toggleFAQ(index)} 
                >
                  <span className="text-[#323232] text-[1rem] w-[350px] lg:w-[750px]">
                    {faq.ques}
                  </span>
                  <svg
                    className={`w-8 h-8 fill-current text-[#000000] transform transition-transform duration-500 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </h2>
                {activeIndex === index && (
                  <div
                    className="overflow-hidden transition-max-height transform transition-transform  duration-700 ease"
                    style={{ maxHeight: activeIndex === index ? "500px" : "0px" }} 
                  >
                    <p className="p-3 text-[#323232] text-[1rem]">
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




    
    <div className="bg-[#1B6EA1] w-full h-auto px-4 sm:px-8 md:px-[100px] pt-14 flex flex-col items-center">
        <div className="flex items-center justify-center w-full sm:w-[600px]">
          <div className="flex-1 border-t-2 border-white"></div>
          <h1 className="font-bold text-white text-[18px] sm:text-[24px] px-4 text-center ">
            Schools In XYZ
          </h1>
          <div className="flex-1 border-t-2 border-white"></div>
        </div>

        <p className="text-white text-[12px] sm:text-[14px] pt-8 text-justify sm:max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue
          turpis, ultrices sit amet luctus id, condimentum nec metus.
          Suspendisse potenti. Sed feugiat nulla in nibh mattis, eu dignissim
          ipsum semper. Sed mollis urna vel est cursus cursus. Suspendisse sit
          amet quam at odio tempus tempus at eu ipsum. Maecenas mollis non dolor
          et aliquam. Sed elementum magna dolor, eu eleifend felis dignissim a.
          Ut eros elit, facilisis scelerisque viverra sed, dapibus semper urna.
          Mauris ut malesuada lacus. Sed eget laoreet libero. Integer ut
          efficitur nunc, et bibendum orci. Sed fringilla fermentum convallis.
          Aliquam erat volutpat. Duis non ullamcorper ipsum, eu bibendum nulla.
          Suspendisse eu risus ante. Ut eu dolor ante. Mauris bibendum porta
          dolor ut iaculis. Aliquam placerat non tellus in varius. Sed facilisis
          interdum rutrum. Aliquam sit amet tortor eget neque luctus pulvinar.
          Maecenas tempus, nisl et facilisis maximus, ex velit bibendum purus,
          ac sagittis nisi ipsum non felis. Quisque facilisis, nisi a maximus
          feugiat, orci est semper neque, vitae posuere tellus est vel nibh.
          Etiam in consequat mauris.
        </p>

        <p className="text-white text-[12px] sm:text-[14px] text-center pt-8 pb-8">
          Author Name
        </p>

        <hr className="w-full max-w-[600px] border-t-2 border-white hidden md:block pb-10" />
      </div>
    </>
  );
}

export default FAQ;
