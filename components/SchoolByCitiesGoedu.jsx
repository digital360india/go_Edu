import React from "react";
import schoolbycities from "@/public/schoolbycities.svg";
import Image from "next/image";
import Link from "next/link";

const SchoolByCitiesGoedu = () => {
  const cities = [
    {
      name: "india",
      bannerSrc: "/indiaschool.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "mussoorie",
      bannerSrc: "/mussorie.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "dehradun",
      bannerSrc: "/dehradun.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "bangalore",
      bannerSrc: "/banglore.svg",
      bottomSrc: "/locationbottom.svg",
    },
    {
      name: "shimla",
      bannerSrc: "/shimla.svg",
      bottomSrc: "/locationbottom.svg",
    },
  ];

  return (
    <>
      {/* mobile school by cities */}

      <div>
      <div className="w-full h-auto bg-no-repeat bg-cover  bg-[url('/schoolbycities.svg')]">

          <div className="py-8 md:p-12">
            <h3 className="text-center text-[#323232] text-2xl font-bold  ">
              School By Cities
            </h3>

            <div className="md:grid md:grid-cols-2 flex justify-center  items-center flex-wrap md:gap-12 mt-6">
              {cities.map((city, index) => (
                <div key={index} className=" text-center">
                  <div className={`bounce-slow ${index} custom-shadow`}>
                    <Link href={`/category/boarding-schools-in-${city.name}`}>
                      <Image
                        src={city.bannerSrc}
                        alt="location banner"
                        width={1000}
                        height={1000}
                        className="w-[120px] h-[150px] mx-6 md:mx-4"
                      />
                    </Link>
                  </div>
                  <div
                    className={`resize-bottom ${index} custom-shadow-bottom flex justify-center items-center`}
                  >
                    <Image
                      src={city.bottomSrc}
                      alt="location bottom"
                      width={1000}
                      height={1000}
                      className="w-[105px] h-[6px] mx-2 md:mx-6"
                    />
                  </div>
                  <Link href={`/category/boarding-schools-in-${city.name}`}>
                    {/* <p className="mt-4">{city.name}</p> */}
                    <p className="mt-4 mx-10">
                      {city.name.charAt(0).toUpperCase() + city.name.slice(1)}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes bounce-slow {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-40px);
            }
            60% {
              transform: translateY(-10px);
            }
          }
          @keyframes resize-width {
            0%,
            20%,
            50%,
            80%,
            100% {
              transform: scaleX(1);
            }
            40% {
              transform: scaleX(0.7);
            }
            60% {
              transform: scaleX(0.9);
            }
          }
          .resize-bottom {
            animation: resize-width 3.5s infinite;
          }
          .bounce-slow {
            animation: bounce-slow 3.5s infinite;
          }
          .custom-shadow {
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
          }
          .custom-shadow-bottom {
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
          }
        `}</style>
      </div>
    </>
  );
};

export default SchoolByCitiesGoedu;
