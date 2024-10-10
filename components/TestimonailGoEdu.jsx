import Image from "next/image";
import React from "react";

const TestimonailGoEdu = () => {
  return (
    <>
      <div>
        <div>
          <h1 className="text-[46px] text-[#323232] font-light">
            Testemonials
          </h1>
        </div>

        <div>
          <Image
            src="/ellipse.svg"
            height={1000}
            width={1000}
            alt="frame"
            className="w-full h-[400px]"
          />
        </div>
        <div className="flex justify-center items-center relative bottom-60">
          <Image
            src="/frametest.svg"
            height={1000}
            width={1000}
            alt="frame"
            className="w-[335px] h-[460px]"
          />
          <div className="absolute">
            <Image
              src="/testimonial.svg"
              height={1000}
              width={1000}
              alt="frame"
              className="w-[200px] h-[200px]"
            />
          </div>
          <div className="absolute left-10 top-14">
            <Image
              src="/testimonial.svg"
              height={1000}
              width={1000}
              alt="frame"
              className="w-[200px] h-[200px]"
            />
          </div>
          <div className="absolute right-10 top-14">
            <Image
              src="/testimonial.svg"
              height={1000}
              width={1000}
              alt="frame"
              className="w-[200px] h-[200px]"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-10">
            <Image
              src="/leftbutton.svg"
              height={1000}
              width={1000}
              alt="frame"
              className="w-[50px] h-[47px]"
            />
            <Image
              src="/rightbutton.svg"
              height={1000}
              width={1000}
              alt="frame"
              className="w-[50px] h-[47px]"
            />
          </div>

          <div className="text-[#000000] w-[442px] h-[255px] text-justify">
            <h1 className="text-[28px]">Name</h1>
            <p className="text-[1rem]">
              Lorem ipsum dolor sit amet consectetur. Vel et arcu ipsum
              tincidunt venenatis dolor id. Adipiscing amet ut aliquet pharetra.
              Ultrices habitant enim hac arcu. Nascetur a orci vestibulum massa
              varius. Lorem ipsum dolor sit amet consectetur. Vel et arcu ipsum
              tincidunt venenatis dolor id. Adipiscing amet ut aliquet pharetra.
              Ultrices habitant enim hac arcu. Nascetur a orci vestibulum massa
              varius.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonailGoEdu;
