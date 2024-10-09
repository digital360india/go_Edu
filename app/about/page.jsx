import Hero from "@/components/Hero";

export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const About = () => {
  return (
    <>
      {/* <Hero /> */}
      <div className="mt-16 sm:mt-5 sm:p-[35px] md:p-[100px] ">
        <div className=" sm:bg-[#F8F8F8] p-[40px] space-y-5">
          <p className=" text-[22px] sm:text-[28px] mb-0 sm:mb-10 font-semibold">About Us</p>
         <div className=" flex flex-col sm:flex-row     ">
          <div className=" order-2 sm:order-1 w-full flex flex-col gap-2 justify-center    sm:w-[75%]">
            <p className=" text-[16px] sm:text-[24px] font-semibold">WHO WE ARE</p>
            <p className=" text-[12px] sm:text-[16px]">Edu 123 is a pioneering online platform dedicated to connecting students and parents with the finest boarding schools across India. Our portal is a comprehensive resource, offering detailed listings and insights into each institution, making the decision-making process for parents and students both efficient and informed.</p>
          </div>
          <div className=" order-1 sm:order-2  flex justify-center  sm:w-[25%]">
            <img src="https://res.cloudinary.com/eduminatti-com/image/upload/v1726732485/Edu123/Eduimages/Untitled_98_x_98_px_2.png" className=" w-[180px] h-[160px]" alt="" />
          </div>
         </div>
         <hr className=" hidden sm:block  border border-gray-300 " />
         <div className=" flex flex-col sm:flex-row gap-y-4 sm:gap-y-0  ">
         <div className="   flex  justify-center sm:justify-start mt-5 sm:mt-0  sm:w-[25%]">
            <img src="./passion.svg" className=" w-[180px] h-[160px]" alt="" />
          </div>
          <div className="  w-full flex flex-col gap-2 justify-center   sm:w-[75%]">
            <p className=" text-[16px] sm:text-[24px] font-semibold">OUR PASSION FOR EDUCATION</p>
            <p className=" text-[12px] sm:text-[16px]">At Edu 123, we are square measure driven by our commitment to instructional excellence and our belief in the transformative power of boarding faculties. Our team works indefatigably to ensure that our platform reflects the variety and quality of boarding education offered in Bharat, business to an enormous array of wants and preferences.</p>
          </div>
        
         </div>
         <hr className=" hidden sm:block  border border-gray-300 " />
         <div className=" flex flex-col sm:flex-row  gap-y-4 sm:gap-y-0  ">
          <div className=" order-2 sm:order-1 w-full flex flex-col gap-2 justify-center   sm:w-[75%]">
            <p className=" text-[16px] sm:text-[24px] font-semibold">TRANSPARENT AND HONEST APPROACH</p>
            <p className=" text-[12px] sm:text-[16px]">We believe in maintaining transparency and honesty in our interactions. Edu 123 provides folks and students with correct, up-to-date info concerning every private school. Our platform is intended to supply a transparent, unbiased read, serving to help you discover the most uncomplicated match for your instructional aspirations.</p>
          </div>
          <div className=" order-1 sm:order-2  flex justify-center mt-5 sm:mt-0  sm:w-[25%]">
            <img src="./transparent.svg" className=" w-[200px] h-[209px]" alt="" />
          </div>
         </div>
         <hr className=" hidden sm:block  border border-gray-300 " />
         <div className=" flex flex-col sm:flex-row gap-y-4 sm:gap-y-0  ">
         <div className="   flex  justify-center sm:justify-start mt-5 sm:mt-0  sm:w-[25%]">
            <img src="./mission.svg" className=" w-[180px] h-[160px]  " alt="" />
          </div>
          <div className="  w-full flex flex-col gap-2 justify-center   sm:w-[75%]">
            <p className=" text-[16px] sm:text-[24px] font-semibold">OUR MISSION</p>
            <p className=" text-[12px] sm:text-[16px]">Our mission at Edu 123 is to change the hunt for the proper private boarding school. We attempt to be the leading resource for private school education in India, giving each folk and student an accessible platform that saves time and energy. We offer boarding facilities a dynamic area to showcase their distinctive offerings to a nationwide audience.</p>
          </div>
        
         </div>
         <hr className=" hidden sm:block  border border-gray-300 " />
         <div className=" flex flex-col sm:flex-row gap-y-4 sm:gap-y-0   ">
          <div className=" order-2 sm:order-1 w-full flex flex-col gap-2 justify-center   sm:w-[75%]">
            <p className=" text-[16px] sm:text-[24px] font-semibold">CONNECTING FACULTIES AND FAMILIES</p>
            <p className=" text-[12px] sm:text-[16px]">Edu 123 bridges India's high-boarding faculties and families seeking the most straightforward education for their youngsters. We provide faculties an opportunity to succeed with a broader audience, whereas folks and students get access to a curated choice of colleges that meet our high standards.</p>
          </div>
          <div className=" order-1 sm:order-2  flex justify-center mt-5 sm:mt-0   sm:w-[25%]">
            <img src="./connect.svg" className=" w-[180px] h-[160px]" alt="" />
            
          </div>
         </div>
         <hr className=" hidden sm:block  border border-gray-300 " />
         <div className=" flex flex-col sm:flex-row gap-y-4 sm:gap-y-0  ">
         <div className="   flex  justify-center sm:justify-start mt-5 sm:mt-0  sm:w-[25%]">
            <img src="./consult.svg" className=" w-[180px] h-[160px]" alt="" />
            
          </div>
          <div className="  w-full flex flex-col gap-2 justify-center   sm:w-[75%]">
            <p className=" text-[16px] sm:text-[24px] font-semibold">FREE CONSULTATION AND SUPPORT</p>
            <p className=" text-[12px] sm:text-[16px]">We offer free consultation services to folks and students, guiding them through choosing the correct private school. Our team of consultants can often answer queries and supply support, ensuring that each family makes associate degree au fait call.</p>
          </div>
        
         </div>
         {/* <hr className=" hidden sm:block  border border-gray-300 " /> */}
        </div>
      </div>
    </>
  );
};

export default About;
