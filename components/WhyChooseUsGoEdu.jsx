import Image from "next/image";
import React from "react";

const WhyChooseUsGoEdu = () => {
  return (
    <>
      <div className="bg-[#FFFFF] hidden md:block">
        <h1 className="text-center text-[#323232] text-[2.25rem] mt-10">
          Why Choose Us?
        </h1>

        <div className="flex justify-center items-center">
          <div className="space-y-12 w-[200px] h-[410px]">
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">Lorem Ipsum</h1>
              <p className="text-[#898989] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Felis nec mi dignissim
                pharetra placerat faucibus cursus. Erat est massa ultricies
                porttitor vivamus consequat sit facilisis
              </p>
            </div>
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">Lorem Ipsum</h1>
              <p className="text-[#898989] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Felis nec mi dignissim
                pharetra placerat faucibus cursus. Erat est massa ultricies
                porttitor vivamus consequat sit facilisis
              </p>
            </div>
            <div className="w-[200px] h-[135px]">
              <h1 className="text-[#323232] text-[1rem]">Lorem Ipsum</h1>
              <p className="text-[#898989] text-[12px]">
                Lorem ipsum dolor sit amet consectetur. Felis nec mi dignissim
                pharetra placerat faucibus cursus. Erat est massa ultricies
                porttitor vivamus consequat sit facilisis
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/leftframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="">
            <Image
              src="/whychooseus.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[440px] h-[550px]"
            />
          </div>

          <div>
            <Image
              src="/rightframe.svg"
              width={1000}
              height={1000}
              alt="img"
              className="w-[150px] h-[420px]"
            />
          </div>

          <div className="space-y-14 w-[200px] h-[410px]">
            <div className="w-[200px] h-[138px] pt-1">
              <h1 className="text-[#323232] text-[1rem]">Lorem Ipsum</h1>
              <p className="text-[#898989] text-[12px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet, rem!
              </p>
            </div>
            <div className="w-[200px] h-[130px]">
              <h1 className="text-[#323232] text-[1rem]">Lorem Ipsum</h1>
              <p className="text-[#898989] text-[12px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet, rem!
              </p>
            </div>
            <div className="w-[200px] h-[135px]">
              <h1 className="text-[#323232] text-[1rem]">Lorem Ipsum</h1>
              <p className="text-[#898989] text-[12px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eveniet, rem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsGoEdu;
