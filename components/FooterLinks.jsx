import Link from "next/link";
import React from "react";

export const FooterLinks = () => {
  return (
    <div className="w-[98.9vw] text-[14px] text-[#323232] bg-[#F3F3F3] pb-2 h-fit">
      <div className=" px-2 sm:px-10 ">
        <div className="text-center text-[24px] underline font-bold"><p>Explore top Cities</p></div>
        <div className=" flex flex-col sm:flex-row gap-2 sm:gap-0   p-6 ">
          <div className="flex  flex-col  sm:items-center lg:w-[25vw]       ">
            <div className="flex flex-col">
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-dehradun"
                }
              >
                Boarding Schools in Dehradun
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-mussoorie"
                }
              >
                Boarding Schools in Mussoorie
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-shimla"
                }
              >
                Boarding Schools in Shimla
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-bengaluru"
                }
              >
                Boarding Schools in Bengaluru
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-india"
                }
              >
                Boarding Schools in India
              </Link>
            </div>
          </div>

          <div className="lg:w-[25vw]     sm:flex sm:justify-center ">
            <div className="flex flex-col">
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-chandigarh"
                }
              >
                Boarding Schools in Chandigarh
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-mumbai"
                }
              >
                Boarding Schools in Mumbai
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-faridabad"
                }
              >
                Boarding Schools in Faridabad
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-nainital"
                }
              >
                Boarding Schools in Nainital
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-varanasi"
                }
              >
                Boarding Schools in Varanasi
              </Link>
            </div>
          </div>

          <div className="   flex  sm:justify-center lg:w-[25vw]">
            <div className="flex flex-col">
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-kolkata"
                }
              >
                Boarding Schools in Kolkata
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-udaipur"
                }
              >
                Boarding Schools in Udaipur
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-jaipur"
                }
              >
                Boarding Schools in Jaipur
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-panchgani"
                }
              >
                Boarding Schools in Panchgani
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-sikar"
                }
              >
                Boarding Schools in Sikar
              </Link>
            </div>
          </div>

          <div className=" flex sm:justify-center sm:mt-0  lg:w-[27vw]">
            <div className="flex flex-col">
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-hyderabad"
                }
              >
                Boarding Schools in Hyderabad
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-pune"
                }
              >
                Boarding Schools in Pune
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-delhi"
                }
              >
                Boarding Schools in Delhi
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-darjeeling"
                }
              >
                Boarding Schools in Darjeeling
              </Link>
              <Link
                href={
                  "https://www.edu123.in/category/boarding-schools-in-ajmer"
                }
              >
                Boarding Schools in Ajmer
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center  pb-4">
        <p>copyright@edumynation.com</p>
      </div>
      </div>
    </div>
  );
};
