"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { homePageContent } from "../../../../public/db/contents.home";

const { technologies } = homePageContent;

const TechnologiesArea = ({
  heading = "Learn Grow Achieve",
}) => {
  const [data, setData] = useState({
    current: "Home Tuition",
    categories: technologies,
  });

  const frontendItems =
    data?.categories?.find(
      (category) => category?.category === data?.current
    )?.items || [];

  return (
    <section className="w-full flex flex-col gap-7 sm:gap-10 xl:gap-8 py-8 lg:py-10 px-4 sm:px-6">
      {/* Heading */}
      <h2 className="heading text-center container mx-auto">
        {heading}
      </h2>
      <p className="container mx-auto text-center text-2xl font-semibold">
  Expert tutors, personalized learning plans, and flexible schedules to support every learner&#39;s success.
</p>

      {/* Categories */}
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="flex w-max min-w-full gap-3 sm:gap-4 px-2 sm:px-4 md:justify-center">
          {data?.categories?.map(({ category }, index) => {
            return (
              <button
                key={index}
                onClick={() =>
                  setData((prev) => ({
                    ...prev,
                    current: category,
                  }))
                }
                className={`${
                  category === data?.current
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700"
                }
                flex-shrink-0 whitespace-nowrap rounded-full py-2 px-4 sm:px-5 text-sm font-medium  transition-all duration-300`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards */}
      <div className="container mx-auto flex items-center justify-center gap-4 sm:gap-6 xl:gap-8 flex-wrap">
        {frontendItems?.map((category, index) => {
          const { name, icon, route = "#" } = category;

          const logoUrl = icon
            ? `/assets/hero-technologies/${icon}`
            : "https://w7.pngwing.com/pngs/549/955/png-transparent-angularjs-javascript-jquery-directive-python-software-foundation-angle-triangle-logo.png";

          return (
            <Link
              href={route}
              key={index}
              target="_blank"
              className="flex flex-col items-center gap-3 text-center bg-white  rounded-2xl p-4 w-[120px] sm:w-[140px]  hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                alt={name}
                height={70}
                width={70}
                src={logoUrl}
                className="h-[68px] w-[68px] object-contain mx-auto"
              />

              <h3 className="text-md font-medium leading-5 text-gray-800">
                {name}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TechnologiesArea;