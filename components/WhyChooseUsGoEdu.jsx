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
              <h1 className="text-[#323232] text-[1rem]">
                Authentic Recommendations
              </h1>
              <p className="text-[#898989] text-[12px]">
                We prioritize your child&apos;s unique needs over school preferences.
                Our unbiased recommendations are based solely on what suits your
                child best, ensuring a genuine selection process.
              </p>
            </div>
            <div className="w-[200px] h-[141px]">
              <h1 className="text-[#323232] text-[1rem]">Expert Counseling</h1>
              <p className="text-[#898989] text-[12px]">
                Our experienced consultants guide you through each step,
                offering personalized counseling to help you feel confident
                about every decision you make for your child&apos;s future.
              </p>
            </div>
            <div className="w-[200px] h-[135px]">
              <h1 className="text-[#323232] text-[1rem]">
                Mock Tests & Assessments
              </h1>
              <p className="text-[#898989] text-[12px]">
                We offer mock tests and customized assessments to evaluate your
                child&apos;s strengths and needs, allowing for a more accurate school
                placement tailored to their potential.
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
              <h1 className="text-[#323232] text-[1rem]">
                Comprehensive School Insights
              </h1>
              <p className="text-[#898989] text-[12px]">
                Go Edu provides detailed information on each school, from
                academic programs to extracurriculars, so you can make fully
                informed choices for your child&apos;s education.
              </p>
            </div>
            <div className="w-[200px] h-[130px]">
              <h1 className="text-[#323232] text-[1rem]">
                Transparent and Trustworthy Service
              </h1>
              <p className="text-[#898989] text-[12px]">
                Built on trust, our approach is straightforward and transparent.
                We charge parents, not schools, to ensure our advice is honest,
                reliable, and truly in your child&apos;s best interest.
              </p>
            </div>
            <div className="w-[200px] h-[135px]">
              <h1 className="text-[#323232] text-[1rem]">End-to-End Support</h1>
              <p className="text-[#898989] text-[12px]">
                From initial consultations to application guidance and admission
                follow-ups, we&apos;re here to support you throughout the entire
                school selection process, making it stress-free and successful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsGoEdu;
