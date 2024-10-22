"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { StarRatingschool, StarRating } from "./StarRating";
import { Testimonials } from "./Testimonials";
import { Line } from "rc-progress";
import ReviewForm from "./ReviewForm";
import Enquire from "./Enquire";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { base } from "@/app/api/airtable";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const getProgressBarColor = (value) => {
  if (value < 25) {
    return "#FF0000";
  } else if (value < 75) {
    return "#FFD700";
  } else {
    return "#008000";
  }
};

const CircularProgressWithIcon = ({ value, svgSrc, svgAlt }) => {
  const progressBarColor = getProgressBarColor(value);
  return (
    <div className="relative z-20 w-[100px] h-[100px] bg-gradient-to-b  from-[#F1F4F9] to-[#C6D1E3] rounded-full">
      {/* Circular Progress Bar */}
      <CircularProgressbar
        value={value}
        text={`${Math.round(value)}%`}
        styles={buildStyles({
          pathColor: progressBarColor,
          trailColor: "#F8F8F8",
          textColor: "#02618f",
          textSize: "18px",
        })}
      />

      {/* SVG Icon Centered */}
      <div className="absolute inset-0 flex justify-center items-center ">
        <Image
          src={svgSrc}
          width={1000}
          height={1000}
          alt={svgAlt}
          className="w-[100px] h-[100px]"
        />
      </div>
    </div>
  );
};

const facility = [
  {
    imageSrc: "/Swimming.svg",
    facility: "Swimming Pool",
    check: "Swimming_Pool",
  },
  {
    imageSrc: "/online class.svg",
    facility: "Online Classes",
    check: "Online_Classes",
  },
  {
    imageSrc: "/photography.svg",
    facility: "Audio / Video",
    check: "Photography",
  },
  {
    imageSrc: "/robotics.svg",
    facility: "Robotics",
    check: "Robotics_Lab",
  },
  {
    imageSrc: "/smartclass.svg",
    facility: "Smart Classes",
    check: "Smart_Classes",
  },
  {
    imageSrc: "/shooting.svg",
    facility: "Shooting",
    check: "Indoor_Games",
  },
  {
    imageSrc: "/Basketball.svg",
    facility: "Basketball Court",
    check: "Basketball_Court",
  },
  {
    imageSrc: "/table-tannis.svg",
    facility: "Tennis Court",
    check: "Tennis_Court",
  },
  {
    imageSrc: "/Playground.svg",
    facility: "Playground",
    check: "Play_Ground",
  },

  {
    imageSrc: "/Badminton.svg",
    facility: "Badminton Court",
    check: "Badminton_Court",
  },
];
// const ReviewCard = ({ userName, userImg, schoolRating, reviewmessage }) => (
//   <div className="p-4 rounded-lg mb-4 ">
//     <div className="flex items-center mb-2">
//       <img
//         className="w-8 h-8 rounded-full mr-2"
//         src={userImg}
//         alt={`${userName}'s Profile`}
//       />
//       <div className="flex md:block gap-10">
//         <p className="text-lg  font-semibold">{userName}</p>
//         <div className="flex  sm:mt-0 items-center">
//           <StarRating rating={schoolRating} review={-1} />
//         </div>
//       </div>
//     </div>
//     <p>{reviewmessage}</p>
//   </div>
// );

const ReviewCard = ({ userName, userImg, schoolRating, reviewmessage }) => (
  <div className="m-20 rounded-lg mb-4">
    <div className="flex space-x-10 mb-2">
      <div className="w-20 h-[67px] rounded-[50%]">
        <img
          className="w-20 h-20 rounded-full"
          src={userImg}
          alt={`${userName}'s Profile`}
        />
      </div>
      <div className="w-full h-auto space-y-4">
        <p className="text-start">{userName}</p>

        <StarRating rating={schoolRating} review={-1} />

        <p className="text-[#323232] text-start">{reviewmessage}</p>
      </div>
    </div>
  </div>
);

const SchoolDetails = ({ school, reviews, city, id }) => {
  const [showFullText, setShowFullText] = useState(false);

  // for colors in progressbar
  const infrastructureValue = school?.Infrastructure || 0;
  const textColor = getProgressBarColor(infrastructureValue);

  const administrationValue = school?.Administration || 0;
  const textColor2 = getProgressBarColor(administrationValue);

  const academicsValue = school?.Academics || 0;
  const textColor3 = getProgressBarColor(academicsValue);

  const ExtracurricularValue = school?.Extracurricular || 0;
  const textColor4 = getProgressBarColor(ExtracurricularValue);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };
  const [total, setTotal] = useState(0);
  const [starv, setStarv] = useState(5);
  const [toggle, setToggle] = useState(2);
  const session = useSession();
  const [toggle1, setToggle1] = useState(false);

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    document.body.style.overflow = "hidden";
    setPopupOpen(true);
  };

  const closePopup = () => {
    document.body.style.overflow = "auto";
    setPopupOpen(false);
  };

  function handle() {
    // console.log(session?.status);
    if (session?.status == "authenticated") {
      setToggle1(true);
    } else {
      signIn("google");
    }
  }
  useEffect(() => {
    let total1 = 0;
    reviews.map((r) => {
      total1 += r.schoolRating / reviews.length;
    });
    setTotal(total1);
  }, []);

  async function averge() {
    const sum = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.infrastructure || 0);
    }, 0);
    const sum1 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.academics || 0);
    }, 0);
    const sum2 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.extracurricular || 0);
    }, 0);
    const sum3 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.administration || 0);
    }, 0);
    const sum4 = reviews.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem?.schoolRating || 0);
    }, 0);

    const average = sum / reviews.length;
    const average1 = sum1 / reviews.length;
    const average2 = sum2 / reviews.length;
    const average3 = sum3 / reviews.length;
    const average4 = sum4 / reviews.length;

    try {
      const res = await base(school?.sheetName).update([
        {
          id,
          fields: {
            Infrastructure: average.toString(),
            Academics: average1.toString(),
            Extracurricular: average2.toString(),
            Administration: average3.toString(),
            rating: average4.toString(),
            numOfReviews: reviews.length.toString(),
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    averge();
  }, []);

  //right scroll
  const [slideClass, setSlideClass] = useState("translate-x-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollY) {
      setSlideClass("translate-x-full");
    } else {
      setSlideClass("translate-x-0");
    }

    setLastScrollY(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <>
      <section className="hidden md:block">
        <div
          className="relative     grid place-content-center bg-no-repeat h-[60vh] mt-10"
          style={{
            backgroundImage: ` url("/aboutbanner.svg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" ">
            <div className="text-[#1B6EA1] text-center flex flex-col md:justify-center md:items-center ">
              <div className="flex flex-col gap-6 font-bold p-2">
                <p className="text-4xl shd1 text-left  md:text-center">
                  {school?.name}
                </p>
                <div className="text-left flex justify-center ">
                  <button
                    className="w-[180px]  shadow-md h-[40px] bg-[#02618f] text-white rounded-lg"
                    onClick={openPopup}
                  >
                    Enquire Now
                  </button>
                  <Enquire
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    school={school?.name}
                  />
                </div>
              </div>
              <StarRatingschool
                rating={Math.ceil(school?.rating)}
                need="yes"
                review={school?.numOfReviews}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="block md:hidden">
        <div
          className="relative  grid place-content-center bg-no-repeat h-[65vh] mt-10"
          style={{
            backgroundImage: `url("https://res.cloudinary.com/eduminatti-com/image/upload/v1726733028/Edu123/Eduimages/mobile_banner.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" ">
            <div className="text-white text-center flex flex-col justify-center items-center ">
              <div className="flex flex-col gap-6 font-bold p-2">
                <p className="text-3xl shd1 text-center">{school?.name}</p>
                <div className="text-left flex justify-center ">
                  <button
                    className="w-[180px]  shadow-md h-[40px] bg-[#02618f] text-white rounded-lg"
                    onClick={openPopup}
                  >
                    Enquire Now
                  </button>
                  <Enquire
                    isOpen={isPopupOpen}
                    onClose={closePopup}
                    school={school?.name}
                  />
                </div>
              </div>
              <StarRating
                rating={Math.ceil(school?.rating)}
                need="yes"
                review={school?.numOfReviews}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full  mx-auto mt-10">
        <div>
          <div className="flex justify-center space-x-20 sticky top-0 bg-white">
            <section className="space-y-5 w-[570px] ">
              <p className=" text-[24px] sm:text-[32px] -mb-4 sm:mb-0 w-[239px] h-[54px] text-left ">
                About School
              </p>
              <hr className="w-[550px] h-0.5 bg-black" />

              <Enquire
                isOpen={isPopupOpen}
                onClose={closePopup}
                school={school?.name}
              />
              <p className="text-left  md:hidden  text-[14px]">
                {showFullText
                  ? school?.Long_Description
                  : school?.Long_Description.slice(0, 317)}
                <span> </span>
                {!showFullText && school?.Long_Description.length > 316 && (
                  <span
                    className="text-[#02618f] font-bold cursor-pointer"
                    onClick={toggleReadMore}
                  >
                    Read more...
                  </span>
                )}
                {showFullText && (
                  <span
                    className="text-[#02618f] cursor-pointer"
                    onClick={toggleReadMore}
                  >
                    Read less...
                  </span>
                )}
              </p>

              {/* <p className="hidden md:block md:text-left text-[16px] h-[300px] overflow-y-scroll">
              {showFullText
                ? school?.Long_Description
                : school?.Long_Description.slice(0, 800)}
              <span> </span>
              {!showFullText && school?.Long_Description.length > 800 && (
                <span
                  className="text-[#02618f] cursor-pointer"
                  onClick={toggleReadMore}
                >
                  read more
                </span>
              )}
              {showFullText && (
                <span
                  className="text-[#02618f] cursor-pointer"
                  onClick={toggleReadMore}
                >
                  read less
                </span>
              )}
            </p> */}

              <p className="hidden md:block text-[16px] h-[323px] w-[570px] text-[#898989] text-justify p-4 overflow-y-scroll">
                {school?.Long_Description}
              </p>

              <section className="space-y-2    md:space-y-5">
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {school?.feefrom && (
                      <div className="mt-4">
                        <div className=" gap-2 md:gap-4 flex">
                          <Image
                            src="/currency-rupee.svg"
                            alt="Rupee Icon"
                            className="w-[30px] h-[30px] text-[#898989]"
                            width={1000}
                            height={1000}
                          />
                          <p className="text-[16px] md:grid md:place-content-center text-[#898989]">
                            Annual Fee{" "}
                          </p>
                        </div>
                        <p className="text-[16px] pl-8 text-[#323232]">
                          ₹{school?.feefrom} - ₹{school?.feeto}
                        </p>
                      </div>
                    )}
                    <div className="m-[10px]">
                      <div className="hidden md:flex items-center gap-3">
                        <Image
                          src="/map.svg"
                          alt="Rupee Icon"
                          className="w-[30px] h-[30px] text-[#898989]"
                          width={1000}
                          height={1000}
                        />
                        <p className="text-[#898989]">Address</p>
                      </div>
                      <p className="pl-8">
                        {school?.Address},{school?.Town}
                      </p>
                    </div>{" "}
                  </div>
                </div>
              </section>
            </section>

            <section className=" hidden  sm:block gap-8 rounded-t-[30px]   bg-[#F3F3F3]">
              <div className="bg-[#F3F3F3]">
                <div className="w-[40px] h-[40px] ml-6">
                  <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-[#27AAE1]">
                    1
                  </p>
                </div>
                <hr className=" h-0.5 pt-[1px] bg-[#1B6EA1] ml-6 mr-6 mb-16 mt-4" />
                <img
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/G-${school?.Image_Code}.png`}
                  alt="img"
                  className="w-[570px] h-[285px] mb-5"
                />
              </div>

              {/* <section className="bg-[#02618f] mb-32 text-white rounded-md p-4 h-[127px] flex justify-center items-center rounded-l-full">
                <div className="text-center text-xs md:text-[16px] grid place-content-center">
                  <div className="space-x-9 flex">
                    <div className="space-y-4">
                      <div className="font-semibold">School Type</div>
                      {school?.day_schools ? (
                        <p>Day-Boarding</p>
                      ) : (
                        <p>Full-Boarding</p>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="font-semibold">Board</div>
                      <p>
                        {school?.cbse_schools && "CBSE "}
                        {school?.icse_isc_schools && "ICSE/ISC "}
                        {school?.cie_schools && "CIE "}
                        {school?.ib_schools && "IB "}
                        {school?.igcse_schools && "IGCSE"}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="font-semibold">Classes</div>
                      <p>
                        {school?.classfrom} to {school?.classto}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="font-semibold">School Gender</div>
                      {school?.coed_schools ? (
                        <p>Co-Ed</p>
                      ) : school?.girls_schools ? (
                        <p>Girls School</p>
                      ) : (
                        <p>Boys School</p>
                      )}
                    </div>
                  </div>
                </div>
              </section> */}

              <div>
                <section
                  className={`bg-[#02618f] mb-32 text-white rounded-md p-4 h-[127px] flex justify-center items-center rounded-l-full top-20 right-0 transform transition-transform duration-[1800ms] ease-in-out ${slideClass}`}
                >
                  <div className="text-center text-xs md:text-[16px] grid place-content-center">
                    <div className="space-x-9 flex">
                      <div className="space-y-4">
                        <div className="font-semibold">School Type</div>
                        {school?.day_schools ? (
                          <p>Day-Boarding</p>
                        ) : (
                          <p>Full-Boarding</p>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div className="font-semibold">Board</div>
                        <p>
                          {school?.cbse_schools && "CBSE "}
                          {school?.icse_isc_schools && "ICSE/ISC "}
                          {school?.cie_schools && "CIE "}
                          {school?.ib_schools && "IB "}
                          {school?.igcse_schools && "IGCSE"}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="font-semibold">Classes</div>
                        <p>
                          {school?.classfrom} to {school?.classto}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="font-semibold">School Gender</div>
                        {school?.coed_schools ? (
                          <p>Co-Ed</p>
                        ) : school?.girls_schools ? (
                          <p>Girls School</p>
                        ) : (
                          <p>Boys School</p>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          </div>

          <div className="flex justify-center  space-x-32 sticky top-0 bg-white h-[80vh] ">
            <section className=" ">
              <p className="text-[24px] sm:text-[32px] w-[293px] h-[54px] md:mb-[10px] mt-6 text-[#323232] ">
                School Statistics
              </p>
              <hr className="w-[520px] h-0.5 bg-black mb-6" />
              <div className=" flex-wrap gap-y-5  gap-x-0   sm:gap-y-0   text-[14px] md:text-[18px] space-y-12">
                {/* <div className="md:flex text-center w-1/2 sm:w-auto items-center justify-center">
                <div className="space-y-2 flex flex-col items-center">
                  <div className="flex items-center  justify-center space-x-5">
                    <Image
                      src="/infra.svg"
                      width={1000}
                      height={1000}
                      className="w-[66px] h-[66px]"
                      alt="imgsvg"
                    />

                    <p>Infrastructure</p>
                    <p>
                      {school?.Infrastructure &&
                        `${Math.round(school.Infrastructure)}%`}
                    </p>
                  </div>

                  <div className="relative h-[23px] md:h-[40px] w-[40px] sm:w-auto p-[1px] rounded-full border border-[#02618f70]  ">
                    <Line
                      className=" w-[130px] md:w-[280px] h-[100%] rounded-full "
                      percent={school?.Infrastructure}
                      strokeWidth={4}
                      strokeColor="#02618f70"
                      trailWidth={4}
                      trailColor="#F8F8F8"
                    />
                   
                  </div>
                </div>
              </div> */}

                <div className="md:flex text-center w-1/2 sm:w-auto items-center ">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex items-center justify-center ">
                      {/* SVG Icon and Circular Progress Bar */}
                      <CircularProgressWithIcon
                        value={school?.Infrastructure || 0}
                        svgSrc="/infra.svg"
                        svgAlt="Infrastructure Icon"
                      />

                      {/* Description */}
                      <p className="bg-gradient-to-b  from-[#F1F4F9] to-[#C6D1E3] w-[250px] h-[65px] p-4 rounded-r-full">
                        Infrastructure
                      </p>
                      <p style={{ color: textColor }} className="pl-8">
                        {school?.Infrastructure &&
                          `${Math.round(school.Infrastructure)}%`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="md:flex text-center w-1/2 sm:w-auto  items-center justify-center">
                <div className="space-y-2 flex flex-col items-center">
                  <div className="flex items-center justify-center space-x-5">
                    <Image
                      src="/administration.svg"
                      width={1000}
                      height={1000}
                      className="w-[66px] h-[66px]"
                      alt="imgsvg"
                    />
                    <p>Administration</p>
                    <p>
                      {school?.Administration &&
                        `${Math.round(school.Administration)}%`}
                    </p>
                  </div>

                  <div className="relative h-[23px] w-[90%] sm:w-auto  md:h-[40px] p-[1px] rounded-full border border-[#02618f70]  ">
                    <Line
                      className=" w-[132px] md:w-[280px] h-[100%] rounded-full "
                      percent={school?.Administration}
                      strokeWidth={4}
                      strokeColor="#02618f70"
                      trailWidth={4}
                      trailColor="#F8F8F8"
                    />
                    
                  </div>
                </div>
              </div> */}
                <div className="md:flex text-center w-1/2 sm:w-auto items-center ">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex items-center justify-center ">
                      {/* SVG Icon and Circular Progress Bar */}
                      <CircularProgressWithIcon
                        value={school?.Administration || 0}
                        svgSrc="/administration.svg"
                        svgAlt="administration Icon"
                      />

                      {/* Description */}
                      <p className="bg-gradient-to-b  from-[#F1F4F9] to-[#C6D1E3] w-[250px] h-[65px] p-4 rounded-r-full">
                        Administration
                      </p>
                      <p style={{ color: textColor2 }} className="pl-8">
                        {school?.Administration &&
                          `${Math.round(school.Administration)}%`}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="md:flex text-center w-1/2 sm:w-auto  items-center justify-center">
                <div className="space-y-2 flex flex-col items-center">
                  <div className="flex items-center justify-center space-x-5">
                    <Image
                      src="/academics.svg"
                      width={1000}
                      height={1000}
                      className="w-[66px] h-[66px]"
                      alt="imgsvg"
                    />

                    <p>Academics</p>
                    <p>
                      {school?.Academics && `${Math.round(school.Academics)}%`}
                    </p>
                  </div>

                  <div className="relative w-[90%] sm:w-auto  h-[23px] md:h-[40px] p-[1px] rounded-full border border-[#02618f70]  ">
                    <Line
                      className=" w-[132px] md:w-[280px] h-[100%] rounded-full "
                      percent={school?.Academics}
                      strokeWidth={4}
                      strokeColor="#02618f70"
                      trailWidth={4}
                      trailColor="#F8F8F8"
                    />
                   
                  </div>
                </div>
              </div> */}

                <div className="md:flex text-center w-1/2 sm:w-auto items-center ">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex items-center justify-center ">
                      <CircularProgressWithIcon
                        value={school?.Academics || 0}
                        svgSrc="/academics.svg"
                        svgAlt="academics Icon"
                      />

                      <p className="bg-gradient-to-b  from-[#F1F4F9] to-[#C6D1E3] w-[250px] h-[65px] p-4 rounded-r-full">
                        Academics
                      </p>
                      <p style={{ color: textColor3 }} className="pl-8">
                        {school?.Academics &&
                          `${Math.round(school.Academics)}%`}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="md:flex text-center w-1/2 sm:w-auto  items-center justify-center">
                <div className="space-y-2 flex flex-col items-center">
                  <div className="flex items-center justify-center space-x-5">
                    <Image
                      src="/extracur.svg"
                      width={1000}
                      height={1000}
                      className="w-[66px] h-[66px]"
                      alt="imgsvg"
                    />

                    <p>Extracurricular</p>
                    <p>
                      {school?.Extracurricular &&
                        `${Math.round(school.Extracurricular)}%`}
                    </p>
                  </div>

                  <div className="relative h-[23px] w-[90%] sm:w-auto  md:h-[40px] p-[1px] rounded-full border border-[#02618f70]  ">
                    <Line
                      className=" w-[132px] md:w-[280px] h-[100%] rounded-full "
                      percent={school?.Extracurricular}
                      strokeWidth={4}
                      strokeColor="#02618f70"
                      trailWidth={4}
                      trailColor="#F8F8F8"
                    />

                   
                  </div>
                </div>
              </div> */}

                <div className="md:flex text-center w-1/2 sm:w-auto items-center ">
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex items-center justify-center ">
                      {/* SVG Icon and Circular Progress Bar */}
                      <CircularProgressWithIcon
                        value={school?.Extracurricular || 0}
                        svgSrc="/extracur.svg"
                        svgAlt="extraextracurr Icon"
                      />

                      {/* Description */}
                      <p className="bg-gradient-to-b  from-[#F1F4F9] to-[#C6D1E3] w-[250px] h-[65px] p-4 rounded-r-full">
                        Extracurricular
                      </p>
                      <p style={{ color: textColor4 }} className="pl-8">
                        {school?.Extracurricular &&
                          `${Math.round(school.Extracurricular)}%`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className=" hidden  sm:block rounded-t-[30px]   bg-[#F3F3F3]  ">
              <div className=" rounded-t-[30px] shadow-black   bg-[#F3F3F3]">
                <div className="w-[40]px h-[40px] ml-6">
                  <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-[#27AAE1]">
                    2
                  </p>
                </div>
                <hr className=" h-0.5 pt-[1px] bg-[#1B6EA1] ml-6 mr-6 mb-16 mt-4" />
                <img
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/H-${school?.Image_Code}.png`}
                  className="w-[570px] h-[285px] mb-40"
                />
              </div>
            </section>
          </div>

          <div className="flex justify-center  space-x-20 sticky top-0 bg-white h-[70vh]">
            <section className=" ">
              <p className="text-[24px]  sm:text-[32px] w-[323px] h-[54px] mb-[20px] mt-6 md:mb-[10px] ">
                Student Facilities
              </p>
              <hr className="w-[550px] h-0.5 bg-black mb-6" />
              <div className="  grid gap-5 grid-cols-3 ">
                {facility.map(
                  (facility) =>
                    school[`${facility.check}`] === "checked" && (
                      <div className="flex flex-col  items-center space-y-3 ">
                        <div className=" rounded-xl">
                          <img
                            src={facility.imageSrc}
                            alt="image"
                            className=" h-[54px] w-[98px] sm:w-[173px] sm:h-[120px] "
                          />
                        </div>
                        <p className="grid text-center place-content-center text-[#02618f] text-[12px] sm:text-[16px]">
                          {facility.facility}
                        </p>
                      </div>
                    )
                )}
              </div>
            </section>

            <section className=" hidden  sm:block gap-8 rounded-t-[30px]   bg-[#F3F3F3] ">
              <div className=" rounded-t-[30px]  bg-[#F3F3F3]">
                <div className="w-[40px] h-[40px] ml-6">
                  <p className="w-[40px] h-[40px] text-center pt-2 mt-8 rounded-full border border-[#27AAE1]">
                    3
                  </p>
                </div>
                <hr className=" h-0.5 pt-[1px] bg-[#1B6EA1] ml-6 mr-6 mb-16 mt-4" />
                <img
                  src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/I-${school?.Image_Code}.png`}
                  className="w-[570px] h-[285px] mb-40"
                />
              </div>
            </section>
          </div>
        </div>
        <section className=" sm:hidden    gap-8 overflow-scroll md:overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-lg"
          >
            <SwiperSlide className="">
              <img
                src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/G-${school?.Image_Code}.png`}
                className="w-[400px] h-[333px] rounded-3xl"
              />
              <div className="min-h-10"></div>
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/H-${school?.Image_Code}.png`}
                className="w-[400px] h-[333px] rounded-3xl"
              />
              <div className="min-h-10"></div>
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/I-${school?.Image_Code}.png`}
                className="w-[400px] h-[333px] rounded-3xl"
              />
              <div className="min-h-10"></div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="sticky top-0">
          <div className="flex justify-between bg-[#1B6EA1] rounded-b-[100px] h-[487px] p-12 ">
            <div className="">
              <p className="text-[24px] sm:text-[28px] text-[#FFFFFF]">
                Reviews
              </p>
              <div className="">
                {/* <p className="text-[28px]">{school?.rating.toFixed(1)}/5</p> */}
                <StarRating
                  rating={Math.ceil(school?.rating)}
                  review={school?.numOfReviews}
                />
              </div>
            </div>
            <div className="">
              <button
                className="w-[223px] h-[40px] bg-[#1B6EA1] text-white rounded-2xl border  border-white"
                onClick={handle}
              >
                Write a review
              </button>
              <ReviewForm
                toggle1={toggle1}
                id={id}
                school={school}
                user={session?.data?.user}
                setToggle1={setToggle1}
              />
            </div>
          </div>
        </section>

        {/* <section>
          <div className=" block sm:flex  sm:flex-wrap mt-8 ">
            {reviews.map(
              (review, index) =>
                toggle > index && (
                  <div className="w-full sm:w-1/2">
                    <ReviewCard key={index} {...review} />
                  </div>
                )
            )}
          </div>

          {toggle == 2 ? (
            <button
              className="w-[160px] h-[40px] bg-[#02618f] text-white rounded-lg"
              onClick={() => setToggle(reviews.length)}
            >
              View More
            </button>
          ) : (
            <button
              className="w-[160px] h-[40px] bg-[#02618f] text-white rounded-lg"
              onClick={() => setToggle(2)}
            >
              View Less
            </button>
          )}
        </section> */}

        <div className="mx-10">
          <section
            className="bg-white w-full h-[300px] mb-28 rounded-t-[100px] rounded-b-[20px] sticky"
            style={{ boxShadow: "0px -15px 15px 0px #0C263F40" }}
          >
            <div>
              <hr className="w-[520px] h-20 bg-white opacity-0 mb-6 " />
            </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
            >
              {/* <hr className="w-[520px] h-20 bg-[#27AAE1] " /> */}

              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewCard {...review} />
                  {index % 1 === 0 && (
                    <div className="w-[2px] h-[180px] bg-[#898989] absolute top-20 "></div>
                  )}
                </SwiperSlide>
              ))}

              <Image
                src="/goeduleft.svg"
                width={1000}
                height={1000}
                alt="right"
                className="w-[50px] h-[50px] swiper-button-prev"
              />
              <Image
                src="/goeduright.svg"
                width={1000}
                height={1000}
                alt="right"
                className="w-[50px] h-[50px] swiper-button-next"
              />
            </Swiper>
          </section>
        </div>

        {/* <Testimonials /> */}
      </div>
    </>
  );
};

export default SchoolDetails;
