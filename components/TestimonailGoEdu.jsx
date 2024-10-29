// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import Testemonialsbg from "@/public/Testemonialsbg.svg";

// const TestimonailGoEdu = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     {
//       name: "Yogesh Pal",
//       image: "/testimonial.svg",
//       description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae.",
//     },
//     { name: "John Doe", image: "/consult.svg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
//     { name: "Jane Smith", image: "/whychooseus.svg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
//     { name: "Jane 1", image: "/testimonial.svg", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
//     { name: "Jane 2", image: "/4.png", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
//     { name: "Jane 3", image: "/5.png", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis tempore illum ratione. Nobis quod itaque, ipsa repellendus voluptas vitae." },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <div
//       className="w-full   bg-no-repeat bg-cover bg-center relative overflow-hidden"
//       style={{ backgroundImage: `url(${Testemonialsbg.src})` }}
//     >
//       <div>
//         <h1 className="text-[46px] text-[#323232] font-light p-14">Testimonials</h1>
//       </div>

//       <div className="flex justify-between  transition-transform duration-1000 ease-in-out">
//         <div className="transform scale-75  transition-transform duration-500 ease-in-out">
//           <Image
//             src={
//               testimonials[
//                 (currentIndex - 1 + testimonials.length) % testimonials.length
//               ].image
//             }
//             height={1000}
//             width={1000}
//             alt="Previous Testimonial"
//             className="w-[200px] h-[200px]"
//           />
//         </div>

//         <div className="transform scale-125 transition-transform duration-500 ease-in-out">
//           <Image
//             src={testimonials[currentIndex].image}
//             height={1000}
//             width={1000}
//             alt="Current Testimonial"
//             className="w-[200px] h-[200px] mt-20"
//           />
//         </div>

//         <div className="transform scale-75  transition-transform duration-500 ease-in-out">
//           <Image
//             src={testimonials[(currentIndex + 1) % testimonials.length].image}
//             height={1000}
//             width={1000}
//             alt="Next Testimonial"
//             className="w-[200px] h-[200px]"
//           />
//         </div>
//       </div>

//       <div className="flex justify-between px-10">
//         <div className="flex gap-10 mt-32">
//           <Image
//             src="/leftbutton.svg"
//             height={1000}
//             width={1000}
//             alt="Previous"
//             className="w-[50px] h-[47px] cursor-pointer"
//             onClick={handlePrev}
//           />
//           <Image
//             src="/rightbutton.svg"
//             height={1000}
//             width={1000}
//             alt="Next"
//             className="w-[50px] h-[47px] cursor-pointer"
//             onClick={handleNext}
//           />
//         </div>

//         <div className="text-[#000000] w-[442px] h-[255px]">
//           <h1 className="text-[24px]">{testimonials[currentIndex].name}</h1>
//           <p className="text-[1rem]">
//             {testimonials[currentIndex].description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonailGoEdu;

"use client";
import React, { useState } from "react";
import Testemonialsbg from "@/public/Testemonialsbg.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const TestimonialGoEdu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
      name: "Priya",
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
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) =>
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-center gap-5 mt-6">
        <button
          aria-label="Previous Testimonial"
          onClick={previous}
          className=" rounded-full w-12 h-12 flex items-center justify-center"
        >
          <Image
            src="/leftbutton.svg"
            alt="Previous"
            width={1000}
            height={1000}
            className="w-12 h-12"
          />
        </button>
        <button
          aria-label="Next Testimonial"
          onClick={next}
          className=" rounded-full w-12 h-12 flex items-center justify-center"
        >
          <Image
            src="/rightbutton.svg"
            alt="Next"
            width={1000}
            height={1000}
            className="w-12 h-12"
          />
        </button>
      </div>
    );
  };
  return (
    <>
      <div
        className="w-full h-full bg-no-repeat bg-cover bg-center relative overflow-hidden hidden md:block"
        style={{ backgroundImage: `url(${Testemonialsbg.src})` }}
      >
        <div className="text-center py-10">
          <h1 className="text-4xl text-[#323232] font-light">Testimonials</h1>
        </div>

        <div className="relative w-full flex justify-center items-center overflow-hidden ">
          <div
            className="w-[600px] h-[300px] flex transition-transform duration-500 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => {
              const isCenter = index === currentIndex;
              const scale = isCenter ? 1 : 0.7;
              const translateY = isCenter ? "20px" : "0px";
              // const heightogimg = isCenter ? "h-[250px]" : "  h-[170px]";
              const marginTop = isCenter ? "mt-24" : "mt-0";

              return (
                <div
                  key={index}
                  className={`w-full flex-shrink-0  transition-all duration-500 ${marginTop}`}
                >
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${index}`}
                    className={`w-[230px] h-[250px] mx-auto transition-transform duration-500 `}
                    style={{
                      transform: `scale(${scale}) translateY(${translateY}px)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between px-10 py-8">
          <div className="flex gap-10 mt-10">
            <button
              aria-label="Previous Testimonial"
              onClick={handlePrev}
              className="w-[50px] h-[47px] cursor-pointer"
            >
              <img src="/leftbutton.svg" alt="Previous" />
            </button>
            <button
              aria-label="Next Testimonial"
              onClick={handleNext}
              className="w-[50px] h-[47px] cursor-pointer"
            >
              <img src="/rightbutton.svg" alt="Next" />
            </button>
          </div>

          <div className="text-[#000000] w-[442px] h-[200px]">
            <h1 className="text-2xl">{testimonials[currentIndex].name}</h1>
            <p className="text-[1rem]">
              {testimonials[currentIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="block md:hidden bg-[#F3F3F3B2] w-full py-10">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-[#000000] mb-5">
            Testimonials
          </h1>
        </div>

        <Carousel
          responsive={responsive}
          showDots={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
          arrows={false}
          customButtonGroup={<CustomButtonGroup />}
          renderButtonGroupOutside={true}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 px-10"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={1000}
                height={1000}
                className="w-[300px] h-[280px]"
              />
              <h2 className="text-xl text-[#000000] font-semibold">
                {testimonial.name}
              </h2>
              <p className="text-sm text-[#000000] text-justify">
                {testimonial.description}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialGoEdu;
