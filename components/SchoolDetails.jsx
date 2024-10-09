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

const facility = [
  {
    imageSrc: "/swimming.svg",
    facility: "Swimming Pool",
    check: "Swimming_Pool",
  },
  {
    imageSrc: "/online.svg",
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
    imageSrc: "/smart.svg",
    facility: "Smart Classes",
    check: "Smart_Classes",
  },
  {
    imageSrc: "/indoor.svg",
    facility: "Indoor Games",
    check: "Indoor_Games",
  },
  {
    imageSrc: "/basket.svg",
    facility: "Basketball Court",
    check: "Basketball_Court",
  },
  {
    imageSrc: "/tennis.svg",
    facility: "Tennis Court",
    check: "Tennis_Court",
  },
  {
    imageSrc: "/playground.svg",
    facility: "Playground",
    check: "Play_Ground",
  },

  {
    imageSrc: "/badminton.svg",
    facility: "Badminton Court",
    check: "Badminton_Court",
  },
];
const ReviewCard = ({ userName, userImg, schoolRating, reviewmessage }) => (
  <div className="p-4 rounded-lg mb-4 ">
    <div className="flex items-center mb-2">
      <img
        className="w-8 h-8 rounded-full mr-2"
        src={userImg}
        alt={`${userName}'s Profile`}
      />
      <div className="flex md:block gap-10">
        <p className="text-lg  font-semibold">{userName}</p>
        <div className="flex  sm:mt-0 items-center">
          <StarRating rating={schoolRating} review={-1} />
        </div>
      </div>
    </div>
    <p>{reviewmessage}</p>
  </div>
);

const SchoolDetails = ({ school, reviews, city, id }) => {
  const [showFullText, setShowFullText] = useState(false);

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

  return (
    <>
      <section className="hidden md:block">
        <div
          className="relative     grid place-content-center bg-no-repeat h-[60vh] mt-10"
          style={{
            backgroundImage: ` url("https://res.cloudinary.com/eduminatti-com/image/upload/v1726733029/Edu123/Eduimages/banner_desktop_2.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" ">
            <div className="text-white text-center flex flex-col md:justify-center md:items-center ">
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
          className="relative     grid place-content-center bg-no-repeat h-[65vh] mt-10"
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

      <div className="w-[85vw] my-[25px] sm:my-[100px] mx-auto space-y-[30px] md:space-y-[60px]">
        <section className="space-y-5">
          <p className=" text-[24px] sm:text-[28px] -mb-4 sm:mb-0 font-semibold text-left ">
            About
          </p>
          {/* <button
            className="md:hidden flex flex-col items-center justify-center text-[#fff] bg-[#02618f] text-[16px] w-[140px] h-[40px] rounded-md"
            onClick={openPopup}
          >
            Enquire Now
          </button> */}
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
          <p className="hidden md:block md:text-left text-[16px]">
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
          </p>
        </section>

        <section className=" hidden  sm:flex gap-8  overflow-auto scrollbar-hide ">
          <img
            src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/G-${school?.Image_Code}.png`}
            alt="img"
            className="w-[400px] h-[333px] rounded-3xl"
          />
          <img
            src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/H-${school?.Image_Code}.png`}
            className="w-[400px] h-[333px] rounded-3xl"
          />
          <img
            src={`https://res.cloudinary.com/eduminatti-com/image/upload/v1722065379/Edu123/${city}/I-${school?.Image_Code}.png`}
            className="w-[400px] h-[333px] rounded-3xl"
          />
        </section>

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

        <section className="space-y-2    md:space-y-5">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {school?.feefrom && (
                <div className="flex md:flex-row flex-col gap-2 md:gap-4 text-[rgb(0,0,0)]">
                  <p className="text-[16px] md:grid md:place-content-center">
                    Annual Fee{" "}
                  </p>
                  <p className="text-[24px] font-semibold text-[#02618f]">
                    ₹{school?.feefrom} - ₹{school?.feeto}
                  </p>
                </div>
              )}

              <div className="hidden md:flex items-center gap-3">
                {/* <GoLocation size={24}/> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M31.4902 28.99L22.6527 37.83C22.3044 38.1785 21.8909 38.4549 21.4358 38.6435C20.9807 38.8321 20.4929 38.9292 20.0002 38.9292C19.5075 38.9292 19.0197 38.8321 18.5646 38.6435C18.1095 38.4549 17.696 38.1785 17.3477 37.83L8.5102 28.99C7.00115 27.4811 5.80407 25.6898 4.98731 23.7182C4.17055 21.7467 3.75012 19.6336 3.75 17.4996C3.74988 15.3656 4.17009 13.2525 4.98663 11.2809C5.80318 9.30926 7.00006 7.51779 8.50895 6.00873C10.0178 4.49968 11.8092 3.3026 13.7807 2.48585C15.7522 1.66909 17.8653 1.24865 19.9993 1.24854C22.1333 1.24842 24.2465 1.66863 26.2181 2.48517C28.1897 3.30171 29.9811 4.49859 31.4902 6.00748C32.9994 7.51646 34.1965 9.30795 35.0133 11.2806C35.8301 13.2513 36.2805 15.3646 36.2805 17.4987C36.2805 19.6329 35.8301 21.7462 35.0133 23.7178C34.1965 25.6895 32.9994 27.481 31.4902 28.99ZM28.8402 8.65998C26.4957 6.31547 23.3158 4.99584 20.0002 4.99584C16.6846 4.99584 13.5047 6.31297 11.1602 8.65748C8.81569 11.002 7.49855 14.1818 7.49855 17.4975C7.49855 20.8131 8.81569 23.993 11.1602 26.3375L20.0002 35.175L28.8402 26.34C30.0013 25.1792 30.9223 23.8011 31.5507 22.2843C32.1791 20.7675 32.5025 19.1418 32.5025 17.5C32.5025 15.8582 32.1791 14.2325 31.5507 12.7157C30.9223 11.1989 30.0013 9.82076 28.8402 8.65998ZM20.0002 22.5C19.3344 22.515 18.6722 22.3969 18.0526 22.1526C17.4331 21.9082 16.8686 21.5425 16.3923 21.077C15.916 20.6114 15.5375 20.0554 15.280 19.4416C15.0206 18.8278 14.8873 18.1685 14.8872 17.5025C14.887 16.8365 15.0199 16.1772 15.278 15.5632C15.5362 14.9493 15.9144 14.3931 16.3905 13.9273C16.8665 13.4615 17.4309 13.0956 18.0503 12.8509C18.6698 12.6062 19.3318 12.4878 19.9977 12.5025C21.3041 12.5314 22.5473 13.0705 23.4611 14.0046C24.375 14.9386 24.8868 16.1933 24.8872 17.5C24.8875 18.8067 24.3762 20.0617 23.4629 20.9962C22.5495 21.9306 21.3066 22.4704 20.0002 22.5Z"
                    fill="black"
                  />
                </svg>
                <p>
                  {school?.Address},{school?.Town}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-2 md:space-y-5">
          <div>
            <div className="text-center text-xs md:text-[16px] font-medium">
              <div className="flex flex-wrap md:flex-nowrap justify-between gap-2">
                {school?.cbse_schools && (
                  <div className=" w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white   rounded-md grid place-content-center">
                    <p className="font-semibold">CBSE Board</p>
                  </div>
                )}
                {school?.icse_isc_schools && (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">ICSE/ISC Board</p>
                  </div>
                )}
                {school?.cie_schools && (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">CIE Board</p>
                  </div>
                )}
                {school?.ib_schools && (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">IB Board</p>
                  </div>
                )}
                {school?.igcse_schools && (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">IGCSE Board</p>
                  </div>
                )}

                {school?.day_schools ? (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">Day-Boarding</p>
                  </div>
                ) : (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">Full-Boarding</p>
                  </div>
                )}
                <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                  <p className="font-semibold">
                    {school?.classfrom} to {school?.classto}
                  </p>
                </div>
                {school?.coed_schools ? (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">Co-Ed</p>
                  </div>
                ) : school?.girls_schools ? (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">Girls School</p>
                  </div>
                ) : (
                  <div className="w-full sm:w-[280px] h-[40px] md:h-[60px] bg-[#02618f] text-white  rounded-md grid place-content-center">
                    <p className="font-semibold">Boys School</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="text-[24px] sm:text-[28px] font-semibold mb-[20px] md:mb-[60px]">
            Statistics
          </p>
          <div className="flex flex-wrap gap-y-5  gap-x-0     sm:gap-y-0  justify-between text-[14px] md:text-[18px]">
            <div className="md:flex text-center w-1/2 sm:w-auto items-center justify-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="flex items-center  justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                    fill="none"
                    className="w-[25px] h-[25px] md:w-[38px] md:h-[40px]"
                  >
                    <path
                      d="M23.0712 38.5716H1.35693V11.4287L12.2141 1.42871L23.0712 11.4287V38.5716ZM23.0712 38.5716H36.6426V18.5716H23.0712M12.2141 38.5716V32.8573M8.14265 24.2859H16.2855M8.14265 15.7144H16.2855"
                      stroke="#02618f"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p>Infrastructure</p>
                <div className="relative h-[23px] md:h-[40px] w-[90%] sm:w-auto p-[1px] rounded-full border border-[#02618f70]  ">
                  <Line
                    className=" w-[130px] md:w-[280px] h-[100%] rounded-full "
                    percent={school?.Infrastructure}
                    strokeWidth={4}
                    strokeColor="#02618f70"
                    trailWidth={4}
                    trailColor="#F8F8F8"
                  />
                  <div className="text-[8px] md:text-[18px] text-[#02618f] flex space-x-5 absolute top-1 left-6">
                    <p>
                      {school?.Infrastructure &&
                        `${Math.round(school.Infrastructure)}%`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex text-center w-1/2 sm:w-auto  items-center justify-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                    fill="none"
                    className="w-[25px] h-[25px] md:w-[38px] md:h-[40px]"
                  >
                    <g clipPath="url(#clip0_1290_213)">
                      <path
                        d="M15.4954 16.4553C14.0837 16.4553 12.7037 16.0145 11.53 15.1887C10.3564 14.3629 9.44178 13.1891 8.90202 11.816C8.36225 10.4429 8.22156 8.9321 8.49775 7.47478C8.77393 6.01747 9.45458 4.67914 10.4536 3.62913C11.4525 2.57913 12.725 1.86464 14.1098 1.57608C15.4947 1.28752 16.9297 1.43785 18.2334 2.00805C19.5371 2.57825 20.6508 3.5427 21.4335 4.77936C22.2163 6.01602 22.6331 7.4693 22.631 8.95533C22.6254 10.9446 21.8715 12.8505 20.5342 14.2561C19.1969 15.6616 17.3852 16.4524 15.4954 16.4553ZM15.4954 3.66644C14.5017 3.66644 13.5302 3.97663 12.704 4.55778C11.8777 5.13893 11.2337 5.96494 10.8534 6.93136C10.4731 7.89778 10.3736 8.9612 10.5675 9.98714C10.7614 11.0131 11.2399 11.9555 11.9426 12.6951C12.6453 13.4348 13.5405 13.9385 14.5152 14.1426C15.4898 14.3467 16.5001 14.2419 17.4182 13.8416C18.3363 13.4413 19.121 12.7634 19.6731 11.8937C20.2252 11.0239 20.5199 10.0014 20.5199 8.95533C20.5199 7.55263 19.9905 6.20738 19.0482 5.21552C18.106 4.22366 16.828 3.66644 15.4954 3.66644Z"
                        fill="#02618f"
                      />
                      <path
                        d="M17.3324 35.1999C17.1017 34.957 16.9238 34.6643 16.8108 34.3421C16.6978 34.0199 16.6525 33.6757 16.678 33.3332H4.22244V26.911C5.71912 25.23 7.53447 23.8985 9.55098 23.0027C11.5675 22.1069 13.7402 21.6669 15.9286 21.711H16.6886C16.6401 21.3385 16.6739 20.9592 16.7875 20.6027C16.901 20.2462 17.0911 19.922 17.343 19.6555L17.4697 19.5332C16.9735 19.5332 16.4141 19.4666 15.9286 19.4666C13.3534 19.4022 10.7969 19.941 8.44379 21.044C6.09069 22.147 3.99985 23.7867 2.32244 25.8444C2.1854 26.0367 2.11133 26.2706 2.11133 26.511V33.3332C2.11133 33.9226 2.33375 34.4878 2.72966 34.9046C3.12807 35.3213 3.66254 35.5555 4.22244 35.5555H17.628L17.3324 35.1999Z"
                        fill="#02618f"
                      />
                      <path
                        d="M28.3628 18.0999C28.4154 18.0884 28.4696 18.0884 28.5222 18.0999C28.4695 18.0898 28.4155 18.0898 28.3628 18.0999Z"
                        fill="#02618f"
                      />
                      <path
                        d="M35.551 25.9113L33.4398 25.2335C33.2889 24.69 33.0837 24.1648 32.8276 23.6669L33.8832 21.6002C33.9175 21.5175 33.9258 21.4254 33.9068 21.3375C33.8878 21.2495 33.8425 21.1702 33.7776 21.1113L32.2471 19.5002C32.1892 19.4342 32.1119 19.3907 32.0276 19.3766C31.9434 19.3625 31.8571 19.3786 31.7826 19.4224L29.8404 20.5335C29.3621 20.2805 28.856 20.0232 28.331 19.8557L27.6871 17.6335C27.6597 17.5517 27.6079 17.4815 27.5394 17.4334C27.4708 17.3853 27.3893 17.3619 27.3071 17.3669H25.1432C25.0601 17.3658 24.9789 17.3935 24.9122 17.4457C24.8454 17.4979 24.7968 17.5717 24.7737 17.6557L24.1298 19.878C23.6012 20.0399 23.0913 20.2635 22.6098 20.5446L20.6887 19.4335C20.6159 19.3906 20.5313 19.3749 20.4489 19.389C20.3665 19.4031 20.291 19.4462 20.2348 19.5113L18.6726 21.1113C18.6147 21.1755 18.5774 21.2573 18.566 21.345C18.5547 21.4327 18.5698 21.522 18.6093 21.6002L19.6648 23.6224C19.3857 24.1232 19.1625 24.6564 18.9998 25.2113L16.8887 25.878C16.8089 25.9023 16.7388 25.9535 16.6892 26.0237C16.6396 26.0939 16.6133 26.1794 16.6143 26.2669V28.5446C16.6205 28.6249 16.6503 28.7011 16.6994 28.7628C16.7486 28.8245 16.8147 28.8686 16.8887 28.8891L18.9998 29.5669C19.1558 30.1119 19.3682 30.6373 19.6332 31.1335L18.5776 33.2807C18.5373 33.3318 18.5217 33.4196 18.5332 33.5058C18.5446 33.592 18.5824 33.672 18.641 33.7335L20.1715 35.3446C20.2313 35.4074 20.3084 35.4487 20.3918 35.4627C20.4752 35.4767 20.5606 35.4626 20.636 35.4224L22.6098 34.3113C23.0796 34.5772 23.575 34.7896 24.0876 34.9446L24.721 37.1669C24.7469 37.2491 24.7963 37.3209 24.8624 37.3726C24.9285 37.4243 25.0081 37.4533 25.0904 37.4557H27.2543C27.337 37.455 27.4173 37.4266 27.4837 37.3747C27.5501 37.3227 27.5991 37.25 27.6237 37.1669L28.2676 34.8891C28.7735 34.7339 29.2619 34.5215 29.7243 34.2807L31.7193 35.3669C31.7926 35.4079 31.8767 35.4225 31.9587 35.4084C32.0406 35.3944 32.116 35.3525 32.1732 35.2891L33.7776 33.778C33.8208 33.7128 33.8439 33.6352 33.8439 33.5557C33.8439 33.4763 33.8208 33.3987 33.7776 33.3335L32.7221 31.2446C32.9783 30.7545 33.1836 30.2367 33.3343 29.7002L35.4454 29.0224C35.5253 28.9981 35.5953 28.9469 35.6449 28.8767C35.6945 28.8064 35.7208 28.721 35.7198 28.6335V26.3002C35.7295 26.2252 35.7188 26.1488 35.6889 26.08C35.659 26.0112 35.6112 25.9527 35.551 25.9113ZM26.2304 31.1113C25.5322 31.1135 24.8491 30.8974 24.2677 30.4905C23.6864 30.0836 23.2328 29.5041 22.9647 28.8280C22.6965 28.1469 22.6258 27.3998 22.7615 26.6789C22.8972 25.958 23.2332 25.2957 23.7269 24.7761C24.2206 24.2564 24.8498 23.9027 25.5346 23.7599C26.2195 23.617 26.9293 23.6914 27.5739 23.9737C28.2185 24.256 28.769 24.7334 29.1556 25.3453C29.5422 25.9573 29.7475 26.6764 29.7454 27.4113C29.7426 28.3917 29.3714 29.3311 28.7128 30.0244C28.0542 30.7176 27.1618 31.1084 26.2304 31.1113Z"
                        fill="#02618f"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1290_213">
                        <rect width="38" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>Administration</p>
                <div className="relative h-[23px] w-[90%] sm:w-auto  md:h-[40px] p-[1px] rounded-full border border-[#02618f70]  ">
                  <Line
                    className=" w-[132px] md:w-[280px] h-[100%] rounded-full "
                    percent={school?.Administration}
                    strokeWidth={4}
                    strokeColor="#02618f70"
                    trailWidth={4}
                    trailColor="#F8F8F8"
                  />
                  <div className="text-[8px] md:text-[18px] text-[#02618f] flex space-x-5 absolute top-1 left-6">
                    <p>
                      {school?.Administration &&
                        `${Math.round(school.Administration)}%`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex text-center w-1/2 sm:w-auto  items-center justify-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="40"
                    viewBox="0 0 38 40"
                    fill="none"
                    className="w-[25px] h-[25px] md:w-[38px] md:h-[40px]"
                  >
                    <g clipPath="url(#clip0_1290_221)">
                      <path
                        d="M34.8878 30.8149L34.4458 31.1773L33.9974 30.7999C33.886 30.7061 33.7909 30.5799 33.7263 30.4275C33.6616 30.275 33.6312 30.1047 33.6405 29.9323C33.6497 29.7598 33.698 29.5961 33.777 29.455L32.5032 28.7415L33.777 29.455C33.8559 29.3142 33.9612 29.2031 34.0784 29.1280L34.4364 28.8883L34.8125 29.1347C34.9307 29.2121 35.037 29.3236 35.1165 29.4653C35.1961 29.6073 35.2445 29.7724 35.2532 29.9461C35.2618 30.1199 35.2302 30.2911 35.1639 30.444C35.0977 30.5966 35.0008 30.7224 34.8878 30.8149ZM34.2515 32.8202L34.4249 32.5778L34.6204 32.85L35.5111 34.09L35.5199 34.1024L35.5291 34.1146C35.7064 34.3513 35.8614 34.6048 35.9923 34.8713L34.1625 34.6588L33.3781 37.9917C33.3779 37.9926 33.3777 37.9935 33.3774 37.9944C33.3371 38.1595 33.2492 38.2917 33.1435 38.3783C33.0389 38.4641 32.9214 38.5025 32.8106 38.5025C32.8106 38.5025 32.8105 38.5025 32.8105 38.5025H32.375V36.958C32.3908 35.9116 32.7323 34.9079 33.3356 34.1L33.3448 34.0877L33.3537 34.0752L34.2515 32.8202ZM27.8014 6.32738L35.0524 10.1437L19 20.7045L2.9476 10.1437L19 1.69507L27.8014 6.32738Z"
                        stroke="#02618f"
                        stroke-width="3"
                      />
                      <path
                        d="M7.125 16.6748V20.9498C7.125 23.2248 15.2 29.9998 19 29.9998C22.8 29.9998 30.875 23.2248 30.875 20.9498V16.6748"
                        stroke="#02618f"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1290_221">
                        <rect width="38" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>Academics</p>
                <div className="relative w-[90%] sm:w-auto  h-[23px] md:h-[40px] p-[1px] rounded-full border border-[#02618f70]  ">
                  <Line
                    className=" w-[132px] md:w-[280px] h-[100%] rounded-full "
                    percent={school?.Academics}
                    strokeWidth={4}
                    strokeColor="#02618f70"
                    trailWidth={4}
                    trailColor="#F8F8F8"
                  />
                  <div className="text-[8px] md:text-[18px] text-[#02618f] flex space-x-5 absolute top-1 left-6">
                    <p>
                      {school?.Academics && `${Math.round(school.Academics)}%`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex text-center w-1/2 sm:w-auto  items-center justify-center">
              <div className="space-y-2 flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37"
                    height="39"
                    viewBox="0 0 37 39"
                    fill="none"
                    className="w-[25px] h-[25px] md:w-[38px] md:h-[40px]"
                  >
                    <path
                      d="M30.8335 24.9468C29.9259 27.9856 28.1226 30.6402 25.6855 32.5245C23.2484 34.4089 20.3047 35.4249 17.2822 35.4248C13.5165 35.4248 9.905 33.848 7.24221 31.0413C4.57943 28.2346 3.0835 24.4280 3.0835 20.4586C3.08342 17.2727 4.0473 14.1699 5.83504 11.6011C7.62277 9.03228 10.1412 7.13142 13.0242 6.1748"
                      stroke="#02618f"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.7827 15.8386C32.9713 12.7932 31.4306 10.0189 29.3086 7.78212C27.1865 5.54537 24.5545 3.92138 21.6652 3.06614C19.1307 2.32026 16.9585 4.63751 16.9585 7.40976V18.2875C16.9585 19.6736 18.0253 20.7981 19.3404 20.7981H29.6603C32.2919 20.7981 34.4903 18.5085 33.7827 15.8386Z"
                      stroke="#02618f"
                      stroke-width="3"
                    />
                  </svg>
                </div>
                <p>Extracurricular</p>
                <div className="relative h-[23px] w-[90%] sm:w-auto  md:h-[40px] p-[1px] rounded-full border border-[#02618f70]  ">
                  <Line
                    className=" w-[132px] md:w-[280px] h-[100%] rounded-full "
                    percent={school?.Extracurricular}
                    strokeWidth={4}
                    strokeColor="#02618f70"
                    trailWidth={4}
                    trailColor="#F8F8F8"
                  />
                  <div className="text-[8px] md:text-[18px] text-[#02618f] flex space-x-5 absolute top-1 left-6">
                    <p>
                      {school?.Extracurricular &&
                        `${Math.round(school.Extracurricular)}%`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="text-[24px]  sm:text-[28px] font-semibold mb-[20px] md:mb-[10px] ">
            Facilities
          </p>
          <div className="  grid gap-5 grid-cols-3 sm:grid-cols-5  ">
            {facility.map(
              (facility) =>
                school[`${facility.check}`] === "checked" && (
                  <div className="flex flex-col  items-center  ">
                    <div className=" rounded-xl p-3">
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

        <section>
          <div className="md:flex justify-between mb-8">
            <p className="text-[24px] sm:text-[28px] font-semibold">
              Ratings & Reviews
            </p>
            <div className="flex">
              {/* <p className="text-[28px]">{school?.rating.toFixed(1)}/5</p> */}
              <StarRating
                rating={Math.ceil(school?.rating)}
                review={school?.numOfReviews}
              />
            </div>
          </div>

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

          <div className="mt-8">
            <button
              className="w-[223px] h-[40px] bg-[#02618f] text-white rounded-lg"
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
        </section>

        <Testimonials />
      </div>
    </>
  );
};

export default SchoolDetails;
