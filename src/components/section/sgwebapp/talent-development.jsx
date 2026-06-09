"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AwardArea from "../home/award-area";
import TechnologiesArea from "../home/technologies-area";
import { HeroEmployee } from "../../../../public/assets/our-culture";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Team from "~/components/common/Team";

const LeaderCard = ({
  position = 1,
  name = "",
  designation = "",
  voice = "",
  linkedin = "#",
  twitter = "#",
  avatar = "https://img.freepik.com/free-photo/three-people-polygraph-examiners-works-office-with-his-lie-detector-s-equipment_146671-17264.jpg?t=st=1734947336~exp=1734950936~hmac=fe2ee7873b2c6d51687ef79db95932dbddde389194bf4ab90778710d7f308f42&w=1480",
}) => {
  const isLeft = position % 2 == 0;
  return (
    <div className={`w-full`}>
      <div className="w-full flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-center xl:gap-16">
        <div className="flex-center sm:hidden">
          <Image
            src={avatar}
            alt={name}
            height={300}
            width={300}
            quality={50}
            className="w-[40%] aspect-square rounded-full object-cover"
          />
        </div>

        {isLeft && (
          <div className="col-span-1 hidden sm:block">
            <Image
              src={avatar}
              alt={name}
              height={300}
              width={300}
              quality={50}
              className="w-full aspect-square rounded-full object-cover"
            />
          </div>
        )}

        <div className="w-full col-span-2 flex flex-col gap-3 text-center sm:text-start">
          <h2 className="font-semibold text-lg text-black capitalize">
            {name}
          </h2>
          <p className="font-medium text-grayDark text-sm">{designation}</p>
          <p className="font-medium text-black text-md">{voice}</p>

          <div className="w-full flex justify-center sm:justify-start flex-row gap-3">
            <Link href={linkedin}>
              <div className="h-10 aspect-square flex-center bg-[#0077B5] text-white rounded-full text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </div>
            </Link>
            <Link href={twitter}>
              <div className="h-10 aspect-square flex-center bg-black rounded-full text-white text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {!isLeft && (
          <div className="col-span-1 hidden sm:block">
            <Image
              src="https://img.freepik.com/free-photo/three-people-polygraph-examiners-works-office-with-his-lie-detector-s-equipment_146671-17264.jpg?t=st=1734947336~exp=1734950936~hmac=fe2ee7873b2c6d51687ef79db95932dbddde389194bf4ab90778710d7f308f42&w=1480"
              alt="image-alt"
              height={300}
              width={300}
              quality={50}
              className="w-full aspect-square rounded-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};
const TalentDevelopment = () => {
  const facts = [
    {
      count: "24+",
      text: "Years in Business",
    },
    {
      count: "650+",
      text: "Solution Experts",
    },
    {
      count: "300+",
      text: "Satisfied Clients",
    },
    {
      count: "500+",
      text: "Successful Projects",
    },
  ];

  const [edge, setEdge] = useState({
    list: [
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            ></path>
          </svg>
        ),
        title: "Knowledge",
        description:
          "We believe in delivering the best with every project. We take pride in our  home tuitionStarmark’ in every solution we develop. From the quality of our communication, business decisions and services – we aim to deliver the highest standards empowered by our deep knowledge and understanding of technology.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path>
          </svg>
        ),
        title: "innovation",
        description:
          "We breathe innovation in our daily lives - with a culture that encourages continuous learning, exploring capabilities and acquiring knowledge beyond projects, resources and teams. Our teams love to explore a multitude of opportunities with the power of technology. That’s how we drive breakthroughs.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M16 2v4"></path>
            <path d="M3 10h18"></path>
            <path d="M8 2v4"></path>
            <path d="M17 14h-6"></path>
            <path d="M13 18H7"></path>
            <path d="M7 14h.01"></path>
            <path d="M17 18h.01"></path>
          </svg>
        ),
        title: "Conduct",
        description:
          "Over and above everything is our commitment to integrity, transparency and quality standards. For us at Itsoftword, our clients’ reputation is an extension of ours. We value their trust in us and build our solutions with a strong strait of social responsibility. Our leaders believe in leaving behind ethical footprints of our work.",
      },
      {
        icon: (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"></path>
          </svg>
        ),
        title: "Collaboration",
        description:
          "We encourage taking creative risks and learn from failures, if any! Our team comprises of experts from diverse disciplines, principles and backgrounds. We encourage our teams to work closely with the in-house teams of our clients to achieve the goals of the software project. Our immersive collaboration, matured development processes and strategic thinking has made us power partners for 3000+ businesses around the world.",
      },
    ],
    id: 0,
  });

  const learningMethodologySections = [
    {
      title: "Student-Centered Learning Approach",
      image:
        "/assets/vision-mission/image10.png",
      description:
        "Our teaching methodology focuses on creating a personalized learning experience that helps students build strong concepts, confidence, and continuous academic growth.",
      points: [
        "Individual Learning Needs",
        "Personalized Attention",
        "Concept Clarity",
        "Practical Understanding",
        "Confidence Building",
        "Regular Practice & Revision",
        "Continuous Academic Improvement",
      ],
    },

    {
      title: "Personalized Teacher Matching Process",
      image:
        "/assets/vision-mission/image11.png",
      description:
        "We carefully match students with suitable tutors and trainers according to their academic requirements, learning preferences, and educational goals.",
      points: [
        "Class & Academic Level",
        "Board & Curriculum",
        "Subject Requirements",
        "Learning Style & Comfort",
        "Preferred Timings",
        "Nearby Locality",
        "Budget & Learning Goals",
      ],
    },

    {
      title: "Understanding Student Requirements",
      image:
        "/assets/vision-mission/image12.png",
      description:
        "Before starting the learning process, we evaluate the student's background, performance, strengths, challenges, and academic objectives.",
      points: [
        "Academic Background",
        "Current Performance",
        "Strengths & Weaknesses",
        "Learning Challenges",
        "Educational Goals",
      ],
    },

    {
      title: "Customized Learning Planning",
      image:
        "/assets/vision-mission/image13.png",
      description:
        "Our educators create customized learning plans designed to improve subject understanding, exam preparation, and overall performance.",
      points: [
        "Subject-Wise Strategies",
        "Concept-Based Learning",
        "Revision Schedules",
        "Practice Sessions",
        "Exam Preparation Techniques",
      ],
    },

    {
      title: "One-to-One Interactive Learning",
      image:
        "/assets/vision-mission/image14.png",
      description:
        "We encourage active student participation through personalized sessions, doubt-solving discussions, and flexible teaching methods.",
      points: [
        "Active Student Participation",
        "Doubt Solving Sessions",
        "Practical Understanding",
        "Communication & Interaction",
        "Flexible Teaching Methods",
      ],
    },

    {
      title: "Performance Monitoring & Improvement",
      image:
        "/assets/vision-mission/image15.png",
      description:
        "Regular performance evaluation helps students identify improvement areas and stay motivated throughout their learning journey.",
      points: [
        "Regular Progress Tracking",
        "Performance Analysis",
        "Continuous Feedback",
        "Improvement Planning",
        "Motivation & Confidence Building",
      ],
    },

    {
      title: "Practical & Result-Oriented Teaching Methods",
      image:
        "/assets/vision-mission/image16.png",
      description:
        "Our methodology combines theory, practical application, and skill-building techniques to deliver measurable learning outcomes.",
      points: [
        "Theoretical Understanding",
        "Practical Application",
        "Activity-Based Learning",
        "Skill Development Techniques",
        "Exam-Oriented Preparation",
        "Creative & Analytical Thinking",
      ],
    },

    {
      title: "Flexible Learning Solutions",
      image:
        "/assets/vision-mission/image17.png",
      description:
        "We provide flexible learning options that allow students to learn according to their schedule, preferences, and educational needs.",
      points: [
        "Home TuitionServices",
        "Online Learning Sessions",
        "Flexible Timings",
        "Customized Course Structures",
        "Beginner to Advanced Learning Support",
        "Individual & Group Learning Options",
      ],
    },

    {
      title: "Multi-Category Learning Expertise",
      image:
        "/assets/vision-mission/image18.png",
      description:
        "Our teaching approach supports a wide range of academic, professional, creative, and skill-based learning categories.",
      points: [
        "School & College Tuition",
        "Competitive Exam Coaching",
        "Language Learning",
        "Computer & IT Training",
        "Music, Dance & Creative Arts",
        "Professional & Skill Development Courses",
        "Special Education Support",
      ],
    },

    {
      title: "Our Commitment to Quality Learning",
      image:
        "/assets/vision-mission/image19.png",
      description:
        "We remain committed to delivering trusted educational support that encourages confidence, independent thinking, and lifelong learning.",
      points: [
        "Providing Trusted & Qualified Educators",
        "Delivering Personalized Learning Experiences",
        "Supporting Academic & Skill Development",
        "Creating Positive Learning Environments",
        "Encouraging Confidence & Independent Thinking",
        "Promoting Consistent Growth & Success",
      ],
    },

    {
      title: "Why Our Methodology Works?",
      image:
        "/assets/vision-mission/image20.png",
      description:
        "Our methodology is designed to provide personalized attention, continuous support, and practical learning experiences that help students achieve their goals.",
      points: [
        "Student-Focused Learning Approach",
        "Personalized One-to-One Attention",
        "Experienced & Supportive Educators",
        "Flexible & Convenient Learning Options",
        "Practical & Result-Oriented Teaching",
        "Continuous Progress Monitoring",
        "Strong Academic & Skill Development Focus",
        "Trusted Educational Support Since 2017",
      ],
    },
  ];

  return (
    <main className="w-full  pt-[16%] sm:pt-[12%] xl:pt-[7%] pb-16">
      {/* hero  */}
      <section className="container flex flex-col gap-4 lg:gap-5 px-5 sm:px-2">
        <section className="py-16   md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <h1 className="md:text-lg text-sm  font-bold  text-primary ">
              Our Approach & Methodology
            </h1>
            <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
              Personalized, Practical & Student-Centered Learning Since 2017
            </p>
            <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
              At Home TuitionAcademy, our approach is focused on understanding
              every learner’s unique academic level, learning style, goals,
              strengths, and improvement areas. We believe that every student
              learns differently, which is why we provide personalized
              one-to-one learning solutions designed to create better
              understanding, confidence, performance, and long-term growth.
            </p>

            {/* <Link
              href="/contact-us"
              className="primary-btn-sm mt-4 gap-2  w-fit mx-auto xl:mx-0"
            >
              Experience True Tech Integrity
              <span className="text-xl">
                <LiaLongArrowAltRightSolid />
              </span>
            </Link> */}
          </div>
          <div className="relative w-full h-96 md:h-[360px]  md:pl-36">
            <Image
              src={HeroEmployee}
              alt="hero-employee"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* <p className="font-medium text-grayDark text-base sm:text-lg text-center lg:px-16 xl:px-28 lg:mt-10">
          We make your move to new-age tech solutions frictionless with tech
          investments that bring real revenue.
        </p> */}

        {/* <div className="w-full py-7 sm:py-10 lg:py-16 xl:py-20">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="text-center sm:text-start">
              <h2 className="heading-sm">
                Consistently Adding Value to Diverse Industries
              </h2>
            </div>
            <div className="flex items-center md:pl-5 md:border-l border-grayBorder">
              <p className="text-sm sm:text-base text-black text-center sm:text-start">
                Since 2000, software solutions developed by home tuitionhave been
                tested across diverse industries. Businesses ranging from
                well-funded startups to SMBs, and enterprises trust us for
                Innovation in Technology Development, acknowledging our
                capabilities and skills in their domains.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="w-full flex flex-col sm:grid grid-cols-2 sm:gap-10 xl:flex xl:flex-col xl:gap-4 xl:pr-20">
            <Image
              src="/assets/tallent/Tech Intelligence That Fosters Sustained Growth.webp"
              height={300}
              width={200}
              alt="about hero image"
              quality={50}
              className="w-full h-auto "
            />

            <p className="font-semibold text-md xl:text-base first-letter:text-2xl first-letter:text-primary leading-normal">
              Our goal is to arm fast-moving businesses with relevant emerging
              technologies that give them an edge over their competition. We
              also build tailored capabilities for our clients to harness the
              power of these technologies. Our clients treat us as an innovation
              center’, unquestionably trusting our tech consultation and
              strategies to craft resilient solutions.
            </p>
          </div>

          <div className="w-full flex flex-col gap-5 sm:gap-8 lg:gap-10  sm:p-10 bg-primaryLightest rounded-xl">
            <h2 className="heading-sm text-grayDark">
              Tech Intelligence That Fosters Sustained Growth
            </h2>

            <div className="flex flex-col gap-3">
              <p className="text-sm sm:text-base text-grayDark">
                We have been serving the global IT market, redefining tech
                capabilities with advanced leverage of emerging technologies.
                With time we have reshaped business process and ROI streams for
                over 3000 clients around the globe. With decades of deep
                technical knowledge and mature processes – from concept to
                delivery, we are instruments of growth for all our stakeholders.
                <br />
                <br />
                Our clients have deep trust in our IT consulting process. They
                vouch for our project execution abilities because we deliver
                value with every software solution we build. We handhold our
                clients with sustainable tech solutions that address unique
                businesses challenges which come in their way.
              </p>

              <Link
                href="/contact-us"
                className="text-sm font-semibold text-primary flex flex-row items-center gap-1 hover:gap-2 transition-all duration-100 ease-in-out"
              >
                Ask For a Consultation{" "}
                <span className="text-2xl mt-[1px]">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div> */}
      </section>

      <section className="py-20 container px-5">
        {learningMethodologySections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center mb-24"
          >
            {/* Image */}
            <div
              className={`relative w-full h-[300px] md:h-[450px] ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className={index % 2 !== 0 ? "md:order-1" : ""}>
              <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
                {section.title}
              </h2>

              <p className="text-gray-600 leading-7 mb-6">
                {section.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {section.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3 hover:border-primary transition-all duration-300"
                  >
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span className="text-black font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* fact area  */}
      {/* <section className="w-full  bg-black  py-7 sm:py-12 lg:py-16 my-10 xl:my-16">
        <div className="container grid sm:grid-cols-4 grid-cols-2 gap-5 sm:gap-0">
          {facts?.map((fact, index) => (
            <div
              key={index}
              className={`${
                index !== facts?.length - 1 && "sm:border-r border-grayBorder"
              } w-full px-5 sm:px-7  flex-center flex-col text-center gap-1 sm:gap-3`}
            >
              <h3 className="font-extrabold text-[2.3rem] sm:text-[2.5rem] bg-gradient-to-r from-primary  to-danger inline-block text-transparent bg-clip-text">
                {fact?.count}
              </h3>

              <p className="text-sm font-medium text-white">{fact?.text}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* <section className="container px-5 sm:px-2">
        <div className="w-full grid sm:grid-cols-2 gap-4 xl:gap-10">
          <div className="w-full flex flex-col gap-4">
            <h2 className="heading-sm">Cultivating Our Performance Edge</h2>
            <p className="text-sm sm:text-base text-grayDark">
              Next-gen technologies are already on the horizon. We tap into
              their power to help businesses reinvent themselves, their
              capabilities and their entire digital landscapes.
            </p>
          </div>
          <div className="w-full flex flex-col">
            {edge?.list?.map((item, index) => (
              <div
                onClick={() =>
                  setEdge((prev) => ({
                    ...prev,
                    id: prev.id == index ? null : index,
                  }))
                }
                key={index}
                className="w-full py-5 border-b border-grayLight  cursor-pointer flex flex-col gap-5"
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <span className="text-primary text-xl lg:text-2xl">
                      {item?.icon}
                    </span>

                    <h3
                      className={`${
                        edge?.id === index ? "text-primary" : "text-grayDark"
                      } text-md sm:text-base lg:text-lg font-semibold capitalize transition-all duration-200 ease-linear`}
                    >
                      {item?.title}
                    </h3>
                  </div>
                  <span
                    className={`${
                      edge?.id === index
                        ? "text-primary rotate-180"
                        : "text-grayDark"
                    } text-lg sm:text-xl transition-all duration-200 ease-linear`}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                    </svg>
                  </span>
                </div>

                {edge?.id == index && (
                  <p className="text-sm sm:text-md text-grayDark">
                    {item?.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <AwardArea /> */}

      {/* CTA : 1  */}
      {/* <section className="w-full py-5 sm:py-14 xl:py-20 px-5 lg:px-0">
        <div className="container rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5 bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold leading-[1.3]">
            We are consciously leading the tech community from disruption to
            sustainable growth.
          </h2>

          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 sm:mt-6"
          >
            Let’s Tell You How →
          </Link>
        </div>
      </section> */}

      {/* <div className="container py-7 sm:py-10 lg:py-16 xl:py-20 px-5  lg:px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:items-center">
          <div className="text-center sm:text-start">
            <h2 className="heading-sm">
              Consistently Actualizing Seamless Global Delivery
            </h2>
          </div>
          <div className="flex items-center md:pl-5 md:border-l border-grayBorder">
            <p className="text-sm sm:text-base text-black text-center sm:text-start">
              Radixweb leads the IT market as a global provider of custom
              enterprise software solutions, offshore development services and
              IT consultation. We have already served more than 3000 clients
              across 25 countries and counting. We have five strategic office
              locations apart from our HQ that serve as dynamic touch points for
              our clientele. Our entire workforce is dedicated to driving
              business value by integrating technology.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5 lg:py-0 px-5  lg:px-2">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:items-center sm:gap-8 lg:gap-10 xl:gap-16">
          <Image
            src="/assets/tallent/Consistently Actualizing Seamless Global Delivery.webp"
            alt="image-alt"
            height={200}
            width={300}
            quality={50}
            className="w-full h-auto rounded-xl xl:rounded-2xl"
          />

          <div className="flex flex-col gap-3">
            <h2 className="text-md sm:text-base text-black">
              Explore a brief anatomy of our resources:
            </h2>

            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  85% Seniors and Mid-level Experts
                </span>
              </div>
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  70% with us for 5+ Years
                </span>
              </div>{" "}
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  90% Trained in Emerging Technology
                </span>
              </div>{" "}
              <div className="w-full flex flex-row items-center gap-3">
                <div className="bg-primaryLight rounded-full p-[3px]">
                  <div className="bg-primary rounded-full p-[3px]" />
                </div>
                <span className="text-sm sm:text-md text-black">
                  Senior Most Consulting Resource Stationed in North America
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* leader  */}
      {/* <Team /> */}

      {/* <TechnologiesArea heading="Explore Our Advanced Tech Stack" /> */}
      {/* CTA : 02  */}
      {/* <section className="w-full px-5 lg:px-0 mt-4">
        <div className="container rounded-2xl xl:rounded-3xl flex-center text-center flex-col gap-5  bg-primaryLightest border border-primaryLight py-12 px-7 sm:px-10 lg:px-16">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          <p className="text-sm sm:text-md">
            Revitalize your business with a powerful digital product that
            rapidly captures the market and delivers remarkable results.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-md w-fit mx-auto xl:mx-0 sm:mt-6"
          >
            Let&apos;s Discuss Your Idea →
          </Link>
        </div>
      </section> */}
    </main>
  );
};

export default TalentDevelopment;
