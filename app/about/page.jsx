
import AboutGoEDU2 from "@/components/AboutGoEDU2";


export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in India! ",
  };
}

const About = () => {
  return (
    <>

      <AboutGoEDU2 />

     

    </>
  );
};

export default About;
