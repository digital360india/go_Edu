import React from "react";
import Article from "./Article";
import SchoolCard from "./SchoolCard";

export default function CategoryPage({ categoryData }) {
  return (
    <div className="flex md:flex-col flex-col-reverse">
      <div>
        <Article categoryData={categoryData} />
      </div>
      <div className="w-[95vw] sm:w-[100vw] mx-auto">
        <SchoolCard categoryData={categoryData} />
      </div>
    </div>
  );
}
