"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

const swiperSlides = [
  {
    id: 1,
    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg ",
    name: "Parul Rawat",
    description:
      "As a concerned sibling, Edu123 was a lifesaver in the daunting quest for the right boarding school in India. Highly recommended for siblings navigating the complex landscape of boarding school admissions.",
  },
  {
    id: 2,

    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
    name: "Priyangini",
    description:
      "I stumbled upon Edu123 in my search for the ideal boarding school for my niece. The platform's extensive listings and transparent information made the decision-making process smooth.",
  },
  {
    id: 3,
    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
    name: "Priya",
    description:
      "Edu123 exceeded my expectations during our search for the perfect boarding school in India. The comprehensive listings provided a wealth of information, making the decision-making process much smoother. ",
  },
  {
    id: 4,
    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
    name: "Shivam Panwar",
    description:
      "Goedu caught my attention while researching boarding schools in India, and I'm thrilled with the results. The platform's listings are thorough, and the consultants are knowledgeable. ",
  },
];
const swiperSlides1 = [
  {
    id: 1,
    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.53.37_PM.jpg ",
    name: "Parul Rawat",
    description:
      "As a concerned sibling, Edu123 was a lifesaver in the daunting quest for the right boarding school in India. Highly recommended for siblings navigating the complex landscape of boarding school admissions.",
  },
  {
    id: 2,

    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_4.01.42_PM.jpg",
    name: "Priyangini",
    description:
      "I stumbled upon Edu123 in my search for the ideal boarding school for my niece. The platform's extensive listings and transparent information made the decision-making process smooth.",
  },
  {
    id: 3,
    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.59.49_PM.jpg",
    name: "Priya",
    description:
      "Edu123 exceeded my expectations during our search for the perfect boarding school in India. The comprehensive listings provided a wealth of information, making the decision-making process much smoother. ",
  },
  {
    id: 4,
    imageSrc:
      "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877951/Edu123/Eduimages/WhatsApp_Image_2024-09-09_at_3.54.31_PM.jpg",
    name: "Shivam Panwar",
    description:
      "Edu123 caught my attention while researching boarding schools in India, and I'm thrilled with the results. The platform's listings are thorough, and the consultants are knowledgeable. ",
  },
];

export const Testimonials = () => {
  return (
    <>
      <div className=" hidden sm:block space-y-[20px] lg:space-y-[40px]">
        <div>
          <p className="text-[24px] sm:text-[28px] font-semibold">
            Testimonials
          </p>
        </div>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper mb-4  [1100px] [300px]"
        >
          {swiperSlides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="w-[435px] h-[178px]  md:w-full md:h-[300px] flex bg-[#fff]  rounded-lg"
            >
              <div className=" min-w-[100px]  bg-white min-h-full "></div>
              <div className="w-[137px] h-[178px] md:w-[261px] md:h-[300px]">
                <Image
                  src={slide.imageSrc}
                  alt="image"
                  width={200}
                  height={200}
                  className="w-[137px] h-[178px] md:min-w-[250px] md:h-[300px] rounded-lg"
                />
              </div>
              <div className="w-[90%] text-left p-4 md:p-8 space-y-4">
                <p className="text-[16px] md:text-[28px] font-semibold">
                  {slide.name}
                </p>
                <p className="text-[10px] lg:text-[16px]">
                  {slide.description}
                </p>
              </div>
              <div className=" min-w-[100px] bg-white h-full "></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div></div>

      <div className=" block sm:hidden mt-8 ">
        <div>
          <p className="text-[24px] sm:text-[28px] font-semibold">
            Testimonials
          </p>
        </div>
        <Swiper
          cssMode={true}
          // navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper mt-3  w-full   "
        >
          {swiperSlides1.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="min-w-[310px] h-[390px]  flex flex-col items-center pt-5  bg-[#fff]    "
            >
              <div className=" w-full h-full  max-w-[292px] flex flex-col gap-2 text-[18px]     ">
                <Image
                  src={slide.imageSrc}
                  alt="image"
                  width={200}
                  height={200}
                  className="max-w-[292px] object-cover max-h-[169px]  rounded-lg"
                />
                <p className=" mt-2 font-semibold text-left">{slide.name}</p>
                <div>
                  <p className="text-[12px] text-left ">{slide.description}</p>
                </div>
              </div>
              <div className="min-h-[40px] bg-white w-full"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
