import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Author",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="">
        <div className="flex flex-col  items-center p-16">
          <h1 className="text-4xl lg:text-5xl text-center font-bold py-4 lg:py-10">
            Author
          </h1>

          <div className="px-2 lg:px-10 py-5 flex  bg-white rounded-lg flex-col lg:flex lg:flex-row  w-[400px] md:w-[800px] lg:w-[1200px]  items-center gap-10">
            <div className="relative h-[350px] w-[300px] rounded-2xl shadow-2xl">
              <img
                src="/author.jpeg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold  text-white">
                  Vaibhav Negi
                </h1>
                <p className="text-sm text-gray-300 pb-2">Author</p>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[900px]  leading-[1.4rem]">
              <div className="lg:text-start text-center">
                <h2 className="font-bold text-2xl text-black">Vaibhav Negi</h2>
                <p className="text-black">Educational Content Specialist</p>
              </div>
              <p>
                Hello! I'm Vaibhav Negi, a passionate content writer with a
                deep-rooted love for the educational sector. With over 3 years
                of experience in the digital marketing industry, I've honed my
                skills in crafting compelling content that resonates with
                diverse audiences.
              </p>
              <p>
                My professional journey started in the dynamic world of digital
                content, where I quickly discovered my niche in education. Over
                the years, I've contributed to various educational websites,
                providing insightful and informative content that aids students,
                educators, and parents alike. My work spans a range of topics,
                from academic advice to the latest educational trends, ensuring
                that each piece I write is both engaging and enlightening.
              </p>
              <p>
                Specializing in the educational field, I've developed a keen
                understanding of the needs and interests of students and
                educators. This expertise is reflected in my work for Edu123,
                where I focus on creating content that not only informs but also
                inspires. My writings are tailored to the Indian context,
                capturing the essence of the country's rich educational
                landscape.
              </p>
              <p>
                My versatility as a content writer extends beyond education.
                I've also collaborated with Sportskeeda, one of India's premier
                sports news sites, as a freelance content writer. This
                experience has further refined my ability to adapt my writing
                style to different niches, while always maintaining a high
                standard of quality and relevance.
              </p>
              <p>
                At Edu123, I am committed to providing comprehensive and
                accurate information about boarding schools in India. My goal is
                to help parents and students make informed decisions about their
                education by offering detailed insights into various
                institutions, their curriculums, facilities, and cultures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
