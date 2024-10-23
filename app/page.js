
import "./globals.css";
import HeroGoEdu from "@/components/HeroGoEdu";
import FormGoEdu from "@/components/FormGoEdu";
import WhyChooseUsGoEdu from "../components/WhyChooseUsGoEdu";
import AboutGoEdu from "@/components/AboutGoEdu";
import TestimonailGoEdu from "@/components/TestimonailGoEdu";
import MapGoEdu from "@/components/MapGoEdu";
import MobileAnimation from "@/components/MobileAnimation";
import FeaturedGoEduLaptop from "@/components/FeaturedGoEduLaptop";
export default function Home() {
  return (
    <>
      <head>
        <meta charset="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>Find the Best Boarding Schools in Seconds | GoEdu </title>

        <meta
          name="description"
          content="Find your dream boarding school in seconds with GoEdu. Unlock a world of educational possibilities. Your path to the perfect education begins here."
        />

        <meta
          name="keywords"
          content="School Admissions, School consultancy, School consultancy, Online School Listings, Admissions Guidance, Boarding School Listings, Trusted School Consultancy, School Admission Information, Finding the Right Boarding School "
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GoEduIndia" />
        <meta
          name="twitter:description"
          content="Find your dream boarding school in seconds with GoEdu. Unlock a world of educational possibilities. Your path to the perfect education begins here."
        />
        <meta
          name="twitter:title"
          content="Find the Best Boarding Schools in Seconds | GoEdu"
        />
        <meta name="twitter:url" content="https://x.com/GoEduindia" />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/infoGoEdu/image/upload/v1703243169/GoEdu/GoEduHomeD.png"
        />

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Find the Best Boarding Schools in Seconds | GoEdu"
        />
        <meta
          property="og:description"
          content="Find your dream boarding school in seconds with GoEdu. Unlock a world of educational possibilities. Your path to the perfect education begins here."
        />
        <meta property="og:url" content="https://www.GoEdu.in/" />
        <meta property="og:site_name" content="GoEdu" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/infoGoEdu/image/upload/v1703243169/GoEdu/GoEduHomeD.png"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1033752393439199');
                fbq('track', 'PageView');
              `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1033752393439199&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GoEdu",
              alternateName: "GoEdu",
              url: "https://www.GoEdu.in/",
              logo: "https://res.cloudinary.com/infoGoEdu/image/upload/v1703311458/GoEdu/logo1.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "9557695360",
                contactType: "",
                areaServed: "IN",
                availableLanguage: "en",
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=100092405190812",
                "https://x.com/GoEduIndia?s=20",
                "https://www.instagram.com/GoEduindia/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
                "https://www.GoEdu.in/",
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          class="schemantra"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              "@id": "ContactPoint",
              alternateName: "GoEdu",
              areaServed: "India",
              availableLanguage: "English",
              email: "info@GoEdu.in",
              telephone: "9557695360",
              url: "https://www.GoEdu.in/",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://www.GoEdu.in/about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Conatct",
                  item: "https://www.GoEdu.in/contact",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Blog",
                  item: "https://blog.GoEdu.in/",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Boarding schools in Dehradun",
                  item: "https://www.GoEdu.in/category/boarding-schools-in-dehradun",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Boarding schools in Bangalore",
                  item: "https://www.GoEdu.in/category/boarding-schools-in-bengaluru",
                },
              ],
            }),
          }}
        />
      </head>
      <>
        {/* <div className="hidden xl:block">
          <Hero
            need="home"
            image={
              "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877211/GoEdu/Eduimages/landing.png"
            }
            height={"100vh"}
          />
        </div> */}
        {/* <div className="hidden md:block xl:hidden">
          <Hero
            image={
              "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877211/GoEdu/Eduimages/landingpage.png"
            }
            height={"100vh"}
          />
        </div> */}
        {/* <div className="md:hidden">
          <Hero
            image={
              "https://res.cloudinary.com/eduminatti-com/image/upload/v1725877210/GoEdu/Eduimages/landingsmall.png "
            }
            height={"100vh"}
          />
        </div> */}


        <div>
        
          <HeroGoEdu />
          
          <FormGoEdu />
        
          <MapGoEdu />
          <FeaturedGoEduLaptop />
          <WhyChooseUsGoEdu />
          <div className="md:hidden">

          <MobileAnimation />
          </div>
          <AboutGoEdu />
          <TestimonailGoEdu />
        </div>

        {/* <div className="w-[84vw] mx-auto my-[50px]">
          <FeatureSchool />
          <CitySchool />
        </div>
        <EnquireNow />
        <PayForm />
        <div className="w-[84vw] hidden sm:block mx-auto my-[100px]">
          <About />
          <Testimonials />
        </div>
        <div className="w-[84vw] block sm:hidden mx-auto my-[30px]">
          <About />
          <Testimonials />
        </div> */}
      </>
    </>
  );
}
