import CompareCard from "@/components/CompareCard";
import Hero from "@/components/Hero";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="hidden md:block">
        <Hero
          image={
            "https://res.cloudinary.com/eduminatti-com/image/upload/v1726733029/Edu123/Eduimages/banner_desktop_2.jpg"
          }
          height={"67vh"}
        />
      </div>
      <div className="md:hidden">
        <Hero
          image={
            "https://res.cloudinary.com/eduminatti-com/image/upload/v1726733028/Edu123/Eduimages/mobile_banner.png"
          }
          height={"70vh"}
        />
      </div>
      <div>
        <CompareCard />
      </div>
    </div>
  );
}
