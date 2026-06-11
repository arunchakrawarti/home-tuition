"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const BrandArea = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5.3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
        },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col text-center gap-3 sm:gap-5 pb-5 pt-2">
      <h2 className="heading">Academic Boards, Courses & Exams We Support</h2>

      {/* Slider */}
      <div className="w-full py-2">
        <Slider {...settings} className="outline-none">
          {clients?.map((data, index) => (
            <div
              key={index}
              className="px-2 outline-none overflow-hidden"
            >
              {/* Bigger Card */}
              <div className="bg-primaryLightest h-[150px] sm:h-[120px] rounded-3xl flex items-center justify-center px-6">
                <Image
                  title={data?.name}
                  alt={data?.name}
                  width={320}
                  height={180}
                  src={`/assets/clients/${data?.logo}`}
                  className="h-[120px] sm:h-[200px] w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BrandArea;

const clients = [
  {
    name: "",
    logo: "1.png",
  },
  {
    name: "",
    logo: "2.png",
  },
  {
    name: "",
    logo: "3.png",
  },
  {
    name: "",
    logo: "4.png",
  },
  {
    name: "",
    logo: "5.png",
  },
  {
    name: "",
    logo: "6.png",
  },
  {
    name: "",
    logo: "7.png",
  },
  {
    name: "",
    logo: "8.png",
  },
];