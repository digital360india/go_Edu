// "use client";
// import Image from "next/image";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const testimonials = [
//   {
//     name: "Parul Rawat",
//     image:
//       "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg",
//     description:
//       "Choosing the right school felt overwhelming until we found Go Edu. Their personalized approach and genuine recommendations put our minds at ease. We felt truly supported every step of the way.",
//   },
//   {
//     name: "Priyangini",
//     image:
//       "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
//     description:
//       "I'm so grateful for Go Edus counseling team! They understood our needs and guided us through everything, from mock tests to final recommendations. Thanks to them, we found the perfect school match.",
//   },
//   {
//     name: "Priya",
//     image:
//       "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
//     description:
//       "We were so confused before coming across Go Edu. Their clear, honest advice helped us understand our options and make the best decision with confidence. I couldn't have asked for a better experience!",
//   },
//   {
//     name: "Shivam Panwar",
//     image:
//       "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
//     description:
//       "From assessments to admission support, Go Edu made the entire process so easy. Their attention to detail and commitment to authenticity gave us complete confidence in our school choice. Highly recommend!",
//   },
// ];

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3, // Show 3 testimonials at a time on desktop
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2, // Show 2 testimonials on tablet
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1, // Show 1 testimonial on mobile
//   },
// };

// const customButton = () => {
//   return (
//     <>
//       <div>
//         <div>
//           <Image
//             src="/leftbutton.svg"
//             alt="button"
//             width={1000}
//             height={1000}
//             className="w-[70px] h-[70px]"
//           />
//         </div>
//         <div>
//           <Image
//             src="/rightbutton.svg"
//             alt="button"
//             width={1000}
//             height={1000}
//             className="w-[70px] h-[70px]"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// const TestimonailGoEdu = () => {
//   return (
//     <div className="bg-[#1B6EA1] p-10 min-h-[100vh]">
//       <h2 className="text-[#FFFFFF] text-[20px]">Get Inspired by stories</h2>
//       <h2 className="text-[#FFFFFF] text-[46px]">
//         Experience of Clients with Us...
//       </h2>
//       <div className="pt-8">
//         <Carousel
//           responsive={responsive}
//           infinite={true}
//           arrows={false}
//           autoPlay={true}
//           autoPlaySpeed={3000}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div className="  h-[500px]  flex justify-center items-center">
//               <div
//                 key={index}
//                 className="bg-white  w-[360px] h-[350px] p-8 mx-4 rounded-lg relative overflow-visible" // set relative positioning
//                 style={{
//                   boxShadow: "0px 2px 10px 0px #00000040",
//                 }}
//               >
//                 <div className="absolute  -top-14 -left-8">
//                   <Image
//                     src="/doublecomma.svg"
//                     width={1000}
//                     height={1000}
//                     alt="testimonial quote"
//                     className="w-[100px] h-[100px]"
//                   />
//                 </div>
//                 <p className="text-[1rem] text-[#323232] text-justify mt-[50px]">
//                   {testimonial.description}
//                 </p>
//                 <div className="flex items-center justify-between pt-6">
//                   <p className="text-[#000000] text-[20px] font-semibold">
//                     {testimonial.name}
//                   </p>
//                   <Image
//                     src={testimonial.image}
//                     width={70}
//                     height={70}
//                     alt={testimonial.name}
//                     className="w-[70px] h-[70px] rounded-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default TestimonailGoEdu;

"use client";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    name: "Parul Rawat",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg",
    description:
      "Choosing the right school felt overwhelming until we found Go Edu. Their personalized approach and genuine recommendations put our minds at ease. We felt truly supported every step of the way.",
  },
  {
    name: "Priyangini",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
    description:
      "I'm so grateful for Go Edus counseling team! They understood our needs and guided us through everything, from mock tests to final recommendations. Thanks to them, we found the perfect school match.",
  },
  {
    name: "Priya Danu",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
    description:
      "We were so confused before coming across Go Edu. Their clear, honest advice helped us understand our options and make the best decision with confidence. I couldn't have asked for a better experience!",
  },
  {
    name: "Shivam Panwar",
    image:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
    description:
      "From assessments to admission support, Go Edu made the entire process so easy. Their attention to detail and commitment to authenticity gave us complete confidence in our school choice. Highly recommend!",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/leftbutton.svg"
        alt="left arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 cursor-pointer hidden md:block"
    >
      <Image
        src="/rightbutton.svg"
        alt="right arrow"
        width={1000}
        height={1000}
        className="w-[50px] h-[50px]"
      />
    </div>
  );
};

const TestimonialGoEdu = () => {
  return (
    <div className="bg-[#1B6EA1] p-1 ">
      <div className="px-8 pt-8  md:px-14 md:pt-14">

      <h2 className="text-[#FFFFFF] text-[14px] md:text-[20px]">Get Inspired by stories</h2>
      <h2 className="text-[#FFFFFF] text-[24px] md:text-[46px]">
        Experience of Clients with Us...
      </h2>
      </div>
      <div className="md:pt-8">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-[400px] md:h-[440px] flex justify-center items-center"
            >
              <div
                className="bg-white w-[370px] h-[300px] md:h-[360px] mx-6 p-8 md:mx-14 rounded-lg relative "
                style={{
                  boxShadow: "0px 2px 10px 0px #00000040",
                }}
              >
                <div className="absolute -top-14 -left-8">
                  <Image
                    src="/doublecomma.svg"
                    width={1000}
                    height={1000}
                    alt="testimonial quote"
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <p className="text-[12px] md:text-[1rem] text-[#323232] text-justify mt-[25px] md:mt-[35px]">
                  {testimonial.description}
                </p>
                <div className="flex items-center justify-between pt-6">
                  <p className="text-[#000000] text-[20px] font-semibold">
                    {testimonial.name}
                  </p>
                  <Image
                    src={testimonial.image}
                    width={1000}
                    height={1000}
                    alt={testimonial.name}
                    className="md:w-[70px] md:h-[70px] w-[60px] h-[60px] rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialGoEdu;
