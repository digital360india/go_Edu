import Link from "next/link";
import React from "react";

export const FooterLinks = () => {
  return (
    <div className="w-full bg-[#F3F3F3]  text-[#323232] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-8">
          Explore Top Boarding Cities
        </h2>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 md:gap-16 text-[12px] md:text-[14px] relative">
          {/* Left Column */}
          <div className="flex-1">
            <h3 className="font-semibold mb-4 text-center ">
              Boarding Schools in Popular Cities
            </h3>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div className="flex flex-col gap-2">
                <Link href="https://www.goedu.in/category/boarding-schools-in-dehradun">
                  Boarding Schools in Dehradun
                </Link>
                <Link href="https://www.goedu.in/category/boarding-schools-in-mussoorie">
                  Boarding Schools in Mussoorie
                </Link>
                <Link href="https://www.goedu.in/category/boarding-schools-in-shimla">
                  Boarding Schools in Shimla
                </Link>
                <Link href="https://www.goedu.in/category/boarding-schools-in-bengaluru">
                  Boarding Schools in Bengaluru
                </Link>
                <Link href="https://www.goedu.in/category/boarding-schools-in-india">
                  Boarding Schools in India
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="https://www.goedu.in/category/boarding-schools-in-jaipur">
                  Boarding Schools in Jaipur
                </Link>
                <Link href="https://www.goedu.in/category/boarding-schools-in-panchgani">
                  Boarding Schools in Panchgani
                </Link>

                <Link href="https://www.goedu.in/category/boarding-schools-in-nainital">
                  Boarding Schools in Nainital
                </Link>

                <Link href="https://www.goedu.in/category/boarding-schools-in-hyderabad">
                  Boarding Schools in Hyderabad
                </Link>
                <Link href="https://www.goedu.in/category/boarding-schools-in-pune">
                  Boarding Schools in Pune
                </Link>
              </div>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1.5px] bg-[#323232] mx-4 my-auto h-[200px]" />

          {/* Right Column */}
          <div className="flex-1">
            <h3 className="font-semibold mb-4 text-center ">
              Girls Boarding Schools in Popular Cities
            </h3>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
              <div className="flex flex-col gap-2">
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-dehradun">
                  Girls Boarding Schools in Dehradun
                </Link>
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-mussoorie">
                  Girls Boarding Schools in Mussoorie
                </Link>
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-shimla">
                  Girls Boarding Schools in Shimla
                </Link>
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-bengaluru">
                  Girls Boarding Schools in Bengaluru
                </Link>
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-india">
                  Girls Boarding Schools in India
                </Link>
               
                
              </div>
              <div className="flex flex-col gap-2">
                
               
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-jaipur">
                  Girls Boarding Schools in Jaipur
                </Link>
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-panchgani">
                  Girls Boarding Schools in Panchgani
                </Link>
               
              
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-nainital">
                  Girls Boarding Schools in Nainital
                </Link>
                
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-hyderabad">
                  Girls Boarding Schools in Hyderabad
                </Link>
                <Link href="https://www.goedu.in/category/girls-boarding-schools-in-pune">
                  Girls Boarding Schools in Pune
                </Link>
               
                
               
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs md:text-sm mt-10">
          copyright@GoEdu_2025
        </div>
      </div>
    </div>
  );
};
