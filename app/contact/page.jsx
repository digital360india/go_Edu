import Hero from "@/components/Hero";
import { BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { TfiLocationPin } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { SlEnvolope } from "react-icons/sl";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Contact Us",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in India! ",
  };
}

const Contact = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="sm:mt-5 mt-16 sm:p-[35px] md:p-[100px] ">
        <div className=" sm:bg-[#F8F8F8] p-[40px] space-y-5 mt-10">
          <h2 className=" text-[22px] sm:text-[28px] font-semibold">
            Contact Us
          </h2>
          <div className=" mt-16 md:mt-24 text-black ">
            <div className="flex flex-col items-center gap-2">
              <ul className=" w-full  p-5 sm:w-[270px] sm:h-[450px] lg:w-[750px] sm:p-9 lg:p-8  lg:h-[310px] flex flex-col gap-4 bg-white">
                <li className="flex gap-3">
                  
                </li>
                <li className="flex gap-3 items-center">
                  {" "}
                  <IoCallOutline className="h-8 w-5" />
                  <a href="tel:+91-01353530324">+91-01353530324</a>
                </li>
                <li className="flex gap-3">

                  <IoCallOutline className="h-8 w-5" />
                  <a href="tel:+91-9557695360">+91-9557695360</a>
                </li>
                <li className="flex items-center gap-3">
                  <SlEnvolope className="h-8 w-5 " />
                  <div>info@goedu.in</div>
                </li>
               

                <div className="flex justify-between">
                  <div className="flex gap-4 pt-5  ">
                    <a
                      href="https://www.instagram.com/goedu_india/?igsh=MWtyaGFocGo4cHA0bQ%3D%3D"
                      target="_blank"
                    >
                      <BsInstagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/GoEdu/61552427439719/"
                      target="_blank"
                    >
                      <BiLogoFacebook className="w-5 h-5" />
                    </a>

                    
                  </div>
                  <img
                    className="lg:-mt-28 w-16 h-16 lg:w-40 lg:h-40"
                    src="https://www.eduminatti.com/enquireAvatar.png"
                    alt=""
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
