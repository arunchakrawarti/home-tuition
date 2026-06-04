"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";

const AwardArea = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.65,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  const awards = [
  {
    logo: "1.png",
    name: "School",
    count: "10000+",
  },
  {
    logo: "2.png",
    name: "College",
    count: "6000+",
  },
  {
    logo: "3.png",
    name: "Diploma",
    count: "1500+",
  },
  {
    logo: "4.png",
    name: "Under Graduation",
    count: "1800+",
  },
  {
    logo: "5.png",
    name: "Post Graduation",
    count: "2500+",
  },
  {
    logo: "1.png",
    name: "Competitive Exam",
    count: "2000+",
  },
  {
    logo: "2.png",
    name: "Language Studies",
    count: "3000+",
  },
  {
    logo: "3.png",
    name: "English Speaking",
    count: "2000+",
  },
  {
    logo: "4.png",
    name: "Foreign Language",
    count: "600+",
  },
  {
    logo: "5.png",
    name: "Religious Studies",
    count: "150+",
  },
  {
    logo: "1.png",
    name: "Computer / IT",
    count: "800+",
  },
  {
    logo: "2.png",
    name: "Music",
    count: "600+",
  },
  {
    logo: "3.png",
    name: "Dance",
    count: "800+",
  },
  {
    logo: "4.png",
    name: "Photography / Film Making",
    count: "80+",
  },
  {
    logo: "5.png",
    name: "Theatre / Acting",
    count: "200+",
  },
  {
    logo: "1.png",
    name: "Industrial Training",
    count: "250+",
  },
  {
    logo: "2.png",
    name: "Tailoring / Fashion Design",
    count: "50+",
  },
  {
    logo: "3.png",
    name: "Special Education",
    count: "600+",
  },
  {
    logo: "4.png",
    name: "Art & Craft",
    count: "200+",
  },
  {
    logo: "5.png",
    name: "Regional Language",
    count: "250+",
  },
];
  return (
    <section className="w-full flex flex-col  gap-10 xl:gap-12 py-8 lg:py-10 xl:py-20 bg-primaryLightest ">
      {/* <h2 className=" heading text-center">
        IT Soft builds businesses & drives growth with results
      </h2> */}

      {/* slider  */}

      <div className="container ">
        <Slider ref={sliderRef} {...settings} className="outline-none ">
          {awards?.map((data, index) => (
  <div
    key={index}
    className="outline-none w-full flex flex-col text-center"
  >
    <div className="w-fit mx-auto bg-white px-3 py-3 rounded-xl">
      <Image
        height={100}
        width={100}
        alt={data?.name}
        src={`/assets/awards/${data?.logo}`}
        className="w-[100px] mx-auto"
      />
    </div>

    <div className="bg-primary h-1 rounded-xl w-[50px] mx-auto my-3" />

    <h3 className="text-xl font-bold text-primary">
      {data?.count}
    </h3>

    <span className="text-sm text-meteoriteDark font-medium">
      {data?.name}
    </span>
  </div>
))}
        </Slider>
      </div>

      <div className="flex-row flex-center gap-2">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="text-xl text-primary"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="text-xl text-primary"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default AwardArea;
