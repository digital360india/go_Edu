import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";


export const Footer = () => {
  return (
    <div className="  bg-[#F3F3F3] text-[#323232] ">
      <div className="px-7 ">
        <div className=" flex flex-col justify-between sm:flex-row gap-2 sm:gap-0   p-6 md:p-8 ">

          <div className="flex  flex-col  sm:items-center gap-3 lg:w-[25vw]       ">
            <div className="space-y-5 text-[14px] font-semibold">
              <Image
                width={1000}
                height={1000}
                alt="logo"
                src="/goEdulogo.svg"
                className="w-[100px] h-[57px]"
              />

              <div className="space-y-2">
                <div className="flex gap-2">

             
                <Image
                  width={1000}
                  height={1000}
                  alt="logo"
                  src="/Location.svg"
                  className="w-[20px] h-[20px]"
                />
                <p>XYZ, street, lane, State, Country</p>   </div>

                <div className="flex gap-2">

              
                <Image
                  width={1000}
                  height={1000}
                  alt="logo"
                  src="/Phone.svg"
                  className="w-[20px] h-[20px]"
                />
                <p><a href="tel:+XY-1234567890">+XY-1234567890</a> </p> </div>


                <div className="flex gap-2">
                <Image
                  width={1000}
                  height={1000}
                  alt="logo"
                  src="/Mail.svg"
                  className="w-[20px] h-[20px]"
                />
              <p><a href="mailto:xyz@gmail.com">xyz@gmail.com</a></p></div>
              </div>
            </div>
          </div>

          <div className="px-4    lg:w-[25vw]  text-[18px] gap-4 hidden sm:flex sm:justify-center ">
            <div>
              <div>
                <p className=" font-semibold my-4 text-left text-[1.5rem]">
              
                  Important Links
                </p>
              </div>
              <div className="flex  gap-10 text-left text-[14px] font-semibold ">
                <div className="flex flex-col space-y-3">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/about"}>About</Link>
                  <Link href={"/sitemap.xml"}>Sitemap</Link>
                </div>
                <div className="flex flex-col space-y-3 ">
                  <Link href={"/"}>Blogs</Link>
                  <Link href={"/privacy-policy"}>Privacy Policies</Link>

                  <Link href={"/terms-and-condition"}>Terms & Condition</Link>
                </div>
              </div>
            </div>
          </div>

        

      

          <div>
            
            <div>
              <p className=" font-semibold my-4 text-left text-[1.5rem]">
                Follow us on
              </p>
            </div>
            <div className="text-xl  flex gap-7 mt-2  md:mt-4">
              <Link
                href=""
                target="_blank"
              >
                <BsFacebook />
              </Link>

              <Image src="/TwitterX.svg"  width={1000} height={1000} className="w-[23px] h-[23px]" />


              <Link href="/" target="_blank">
                <BsLinkedin />
              </Link>


              <Link
                href=""
                target="_blank"
              >
                <BsInstagram />
              </Link>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
