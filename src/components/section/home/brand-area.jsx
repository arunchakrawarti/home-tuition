"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const BrandArea = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <section className="w-full flex flex-col text-center gap-4 sm:gap-6 py-6 overflow-hidden">
      
      {/* Heading */}
      <h2 className="heading px-4">
        Academic Boards, Courses & Exams We Support
      </h2>

      {/* Slider */}
      <div className="w-full overflow-hidden">
        <Slider {...settings} className="outline-none">
          {clients?.map((data, index) => (
            <div
              key={index}
              className="px-2 sm:px-3 outline-none"
            >
              
              {/* Card */}
              <div className="bg-primaryLightest h-[110px] sm:h-[130px] md:h-[150px] rounded-2xl sm:rounded-3xl flex items-center justify-center px-4 sm:px-6 overflow-hidden">
                
                <Image
                  title={data?.name}
                  alt={data?.name}
                  width={250}
                  height={120}
                  src={`/assets/clients/${data?.logo}`}
                  className="max-h-[200px] sm:max-h-[230px] md:max-h-[250px] lg:max-h-[270px] w-auto object-contain"
                  priority
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
    name: "Client 1",
    logo: "1.png",
  },
  {
    name: "Client 2",
    logo: "2.png",
  },
  {
    name: "Client 3",
    logo: "3.png",
  },
  {
    name: "Client 4",
    logo: "4.png",
  },
  {
    name: "Client 5",
    logo: "5.png",
  },
  {
    name: "Client 6",
    logo: "6.png",
  },
  {
    name: "Client 7",
    logo: "7.png",
  },
  {
    name: "Client 8",
    logo: "8.png",
  },
];