import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";

export const Footer = () => {
  return (
    <div className="w-[98.9vw]  bg-[#02618f] pb-2 h-fit">
      <div className=" px-2 sm:px-10 ">
        <div className=" flex flex-col sm:flex-row gap-2 sm:gap-0   p-6 md:p-8 ">
          <div className="flex  flex-col  sm:items-center gap-3 lg:w-[25vw]       ">
            <div>
              {/* <img
            className="w-20 -ml-1 "
            src="https://res.cloudinary.com/eduminatti-com/image/upload/v1722253072/Edu123/Eduimages/Edulogo.png"
            alt=""
          /> */}
              <div>
                <p className="text-white font-semibold my-4 text-[18px] text-left">
                  {" "}
                  Social Links
                </p>
              </div>
              <div className="text-xl text-white flex gap-10 mt-2  md:mt-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=100092405190812"
                  target="_blank"
                >
                  <BsFacebook />
                </Link>
                <Link
                  href="https://www.instagram.com/edu123india/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                >
                  <BsInstagram />
                </Link>
                {/* <Link href="/" target="_blank">
              <BsLinkedin />
            </Link> */}

                <Link href="https://x.com/Edu123India?s=20" target="_blank">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    fill="white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="px-4  text-white  lg:w-[25vw]  text-[18px] gap-4 hidden sm:flex sm:justify-center ">
            <div>
              <div>
                <p className="text-white font-semibold my-4 text-left">
                  {" "}
                  Important Links
                </p>
              </div>
              <div className="flex  gap-10 text-left text-[14px] ">
                <div className="flex flex-col space-y-4">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/sitemap.xml"}>Sitemap</Link>
                </div>
                <div className="flex flex-col space-y-4 ">
                  <Link href={"/"}>Blogs</Link>
                  <Link href={"/privacy-policy"}>Privacy Policies</Link>

                  <Link href={"/terms-and-condition"}>Terms & Condition</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="  text-white flex  sm:justify-center   text-[18px] lg:w-[25vw]">
            <div>
              <div>
                <p className="text-white font-semibold my-4 text-left">
                  {" "}
                  Contact
                </p>
              </div>
              <div className="flex items-center gap-3 mb-4 text-[14px]">
                <HiOutlineMail className="text-xl" />
                <Link href="mailto:info@edu123.in">info@edu123.in</Link>
              </div>
              <div className="flex items-center gap-3 mb-4 text-[14px]">
                <FiPhone className="text-xl" />
                <Link href="tel:+9557695360" target="_blank">
                  +9557695360
                </Link>
              </div>
            </div>
          </div>


          <div className=" flex sm:justify-center text-white text-[18px] -mt-4 sm:mt-0  lg:w-[27vw]">
            <div>
              <div>
                <p className="text-white font-semibold my-4 text-left">
                  {" "}
                  Address
                </p>
              </div>
              <div className=" flex gap-3  text-[14px]">
                <GoLocation size={20} />
                <div className=" sm:w-[200px] ">

                  <p>3rd Floor Amar Plaza</p>
                  <p>Near St.Judes School,</p>
                  <p> West Canal Road, Dehradun -248002</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
