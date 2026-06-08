"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import React from "react";
import {
  hero,
  bronzeWinner,
  goldWinner,
  innovation,
  rxweb,
  tezjs,
  revelaging,
} from "../../../../public/assets/innovation";
import Link from "next/link";

const learningInnovationSections = [
  {
    title: "Research-Driven Learning Approach",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "We believe education must continuously evolve according to changing academic patterns, modern learning methods, student psychology, technology integration, and career-oriented learning requirements.",
    points: [
      "Changing Academic Patterns",
      "Modern Learning Methods",
      "Student Psychology & Learning Behavior",
      "Digital & Technology-Based Education",
      "Skill-Oriented Training Requirements",
      "Competitive Exam Trends",
      "Career & Industry Demands",
    ],
  },

  {
    title: "Continuous Educational Innovation",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "We continuously improve our educational services by developing innovative teaching methodologies and learning models that enhance student outcomes.",
    points: [
      "Personalized Learning Methods",
      "Student-Centered Teaching Approaches",
      "Flexible Learning Models",
      "Practical & Activity-Based Learning",
      "One-to-One Customized Teaching",
      "Online & Hybrid Learning Solutions",
      "Performance Monitoring Techniques",
    ],
  },

  {
    title: "Development of Modern Learning Solutions",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "Our research and development initiatives focus on improving educational accessibility, engagement, and learning effectiveness for students of all ages.",
    points: [
      "Improving Student Engagement",
      "Enhancing Teacher Matching Systems",
      "Developing Better Learning Experiences",
      "Simplifying Access to Quality Education",
      "Strengthening Communication Between Learners & Educators",
      "Creating Flexible & Convenient Learning Support",
    ],
  },

  {
    title: "Innovation Across Multiple Learning Categories",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "We continuously enhance learning solutions across diverse academic, professional, and skill-development categories.",
    points: [
      "School & College Tuition",
      "Competitive Exam Preparation",
      "Language Learning",
      "Computer & IT Training",
      "Creative Arts & Performing Arts",
      "Professional & Industrial Training",
      "Special Education Support",
      "Skill Development Programs",
    ],
  },

  {
    title: "Technology & Learning Integration",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "We combine traditional teaching values with modern educational technologies to provide flexible, engaging, and effective learning experiences.",
    points: [
      "Online Learning Support",
      "Digital Communication Tools",
      "Flexible Scheduling Systems",
      "Interactive Learning Methods",
      "Practical Skill Development",
      "Student Progress Tracking",
    ],
  },

  {
    title: "Student-Focused Research & Improvement",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "Our innovation strategy is centered on understanding student needs and continuously improving learning outcomes and personal development.",
    points: [
      "Understanding Individual Learning Needs",
      "Improving Academic Performance",
      "Building Student Confidence",
      "Supporting Career Development",
      "Encouraging Creativity & Skill Growth",
      "Promoting Lifelong Learning",
    ],
  },

  {
    title: "Our Commitment to Educational Growth",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "At Home TuitionAcademy, innovation is not only about technology—it is about continuously improving the way students learn and educators teach. We remain committed to developing effective, personalized, and future-focused learning solutions.",
    points: [
      "Effective Learning Solutions",
      "Personalized Educational Support",
      "Future-Focused Teaching Methods",
      "Student & Parent Satisfaction",
      "Continuous Service Improvement",
      "Accessible Learning Opportunities",
    ],
  },

  {
    title: "Why Choose Our Learning Approach?",
    image:
      "/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp",
    description:
      "Our learning approach combines research, innovation, flexibility, and student-centered teaching practices to deliver meaningful educational outcomes.",
    points: [
      "Trusted Educational Experience Since 2017",
      "Research-Driven Teaching Methods",
      "Personalized Learning Solutions",
      "Flexible Home & Online Learning Support",
      "Continuous Educational Improvement",
      "Student-Centered Development Approach",
      "Practical & Result-Oriented Learning Environment",
      "Wide Network of Skilled Educators & Trainers",
    ],
  },
];

const data = [
  {
    title: "AI-Powered Rapid Prototyping",
    desc: "Leverage pre-trained models and generative AI to cut development cycles by 60%, turning concepts into testable prototypes in days—not months.",
  },
  {
    title: "Modular Tech Stacks",
    desc: "Plug-and-play architecture with reusable microservices, APIs, and cloud-native components to scale solutions instantly without rebuilding from scratch.",
  },
  {
    title: "Automated Compliance & Testing",
    desc: "Embedded security scans and CI/CD pipelines ensure flawless, regulation-ready deployments at speed—reducing manual checks by 80%.",
  },
  {
    title: "AI for Business Automation",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
];

const Streamlining = [
  {
    title: "Internal Programs and Hackathons",
    desc: "We hold regular hackathon and upskilling sessions presided by industry’s best experts. Our experts have acquired 200+ cloud and many other relevant industry certifications.",
  },
  {
    title: "Accelerating Innovation Reach",
    desc: "We’ve placed our seniormost management resource in the key market area of North America to facilitate wider responsiveness and quick strategizing for outsourced projects.",
  },
  {
    title: "CoEs for Scalable Delivery",
    desc: "Apart from our HQ at Ekyarth, we have five strategically placed CoEs in USA, Canada, Australia and Morocco to enhance first-person collaboration with clients for prompt delivery.",
  },
];

const Innovation = () => {
  return (
    <main className="bg-white text-gray-800 mt-20">
      <section className="py-16 container px-5  md:gap-4 gap-10 md:px-0 grid md:grid-cols-2 grid-cols-1 items-center">
        <div>
          <h1 className="md:text-lg text-sm  font-bold  text-primary ">
            Innovation Research &amp; Development
          </h1>
          <p className="text-2xl md:text-3xl text-black font-bold tracking-wide py-4 md:pr-16">
            Advancing Personalized Learning Through Innovation Since 2017
          </p>
          <p className="text-[1rem] text-black font-medium tracking-wide md:pr-10">
            At Home TuitionAcademy, we continuously focus on innovation,
            research, and development to improve the quality of personalized
            education and learning experiences. Our goal is to understand
            evolving educational trends, student learning patterns, teaching
            methodologies, and skill development requirements to provide modern,
            flexible, and result-oriented learning solutions.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-sm mt-4 gap-2  w-fit mx-auto xl:mx-0"
          >
            Let&apos;s Tell You How
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
        <div className="relative w-full h-96 md:h-96  md:pl-10">
          <Image src={hero} alt={hero} fill className="object-contain" />
        </div>
      </section>

      <section className="py-20 container px-5">
        {learningInnovationSections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center mb-24"
          >
            {/* Image Section */}
            <div
              className={`relative w-full h-[300px] md:h-[400px] ${
                index % 2 !== 0 ? "md:order-2" : ""
              }`}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Content Section */}
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
                    className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-3"
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

      {/* <section className=" bg-primary ">
        <div className="container  md:py-20 md:px-20 gap-7 px-5 py-10">
          <h1 className="text-white text-xl md:text-3xl  font-semibold  text-center">
            From Vision to Reality – Faster
          </h1>
          <p className="text-white text-[1rem] font-medium tracking-wide text-center md:px-36  pt-4">
            Partnering with cutting-edge technologies—AI, ML, IoT, blockchain—we
            redefine possibilities. By breaking conventional boundaries, we set
            new benchmarks for innovation in agile, forward-thinking ecosystems.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center  gap-8 ">
          <div className="relative w-full h-96 md:h-[470px] order-2">
            <Image
              src={revelaging}
              alt="revelaging"
              fill
              className="object-contain"
            />
          </div>
          <div className=" md:order-2 order-1">
            <h2 className="md:text-3xl text-2xl font-bold text-black text-center md:text-start">
              Leveraging Applied Research for Co-creation
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4 text-center md:text-start">
              Our innovation labs bring together cross-functional experts who
              apply rigorous research methodologies in an independent
              environment to explore cutting-edge technologies and their
              business implications.
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed text-center md:text-start">
              We bridge clients and partners to harness advancements in AI,
              quantum computing, data engineering, hybrid cloud, and security.
              Through strategic Centers of Excellence, we tackle complex global
              challenges with aligned, distributed teams.
            </p>
          </div>
        </div>

        <div className="bg-primary rounded-md  md:rounded-br-[100px] flex flex-col items-center justify-center md:py-20 py-5 px-4 md:mt-20 mt-10">
          <h1 className="md:text-3xl text-xl font-bold text-white text-center">
            Want Data to Validate Tech Innovation?
          </h1>
          <p className="text-white text-center text-[1.1rem] font-medium tracking-wide py-4 md:px-36">
            Relentless iteration powered by data. We align R&D with real-world
            feedback to build flawless software solutions.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-sm mt-4 gap-2 !bg-white !text-primary  w-fit mx-auto xl:mx-0"
          >
            Get Fail-proof Tech Strategies
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
      </section>

      <section className="py-10 container px-5">
        <div className="grid md:grid-cols-2 items-center md:gap-20 gap-10 ">
          <div className="md:pr-14">
            <h1 className="text-black font-bold text-xl md:text-3xl tracking-wide pb-10">
              Innovation Accelerators: From Idea to Impact at Speed
            </h1>
            <div className="relative w-full   md:h-72 h-96 rounded-sm rounded-br-[100px]">
              <Image
                src={innovation}
                alt="innovation"
                fill
                className="bg-cover rounded-sm rounded-br-[100px]"
              />
            </div>
          </div>
          <div className=" overflow-y-auto no-scrollbar ">
            <div className="h-[450px]">
              {data.map(({ title, desc }, index) => {
                return (
                  <div key={index} className="pt-5 border-b border-whiteBlue">
                    <h2 className="text-[1.1rem]  font-semibold text-black  hover:text-primary tracking-wide mb-3 flex items-center gap-2 hover:gap-3">
                      <span className="text-primary text-xl ">
                        {" "}
                        <BsArrowRight />
                      </span>
                      {title}
                    </h2>
                    <p className="text-black text-[0.9rem]  font-medium tracking-wide pb-5 pl-7">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-5 md:px-0 bg-white container ">
        <div className="bg-primaryLight rounded-md  md:rounded-br-[100px] flex flex-col items-center justify-center md:py-16  py-5 ">
          <h1 className="md:text-3xl text-xl font-semibold text-black md:px-56 text-center tracking-wide ">
            Empower Software Projects with Deep Industry R&amp;D
          </h1>

          <Link
            href="/contact-us"
            className="primary-btn-sm mt-4 gap-2   w-fit mx-auto xl:mx-0"
          >
            Where Are You Stuck?
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
        <h2 className="md:text-3xl text-2xl font-bold text-black text-center  pt-20 pb-14">
          Streamlining The Impact of Purpose-driven Innovation
        </h2>
        <div className="grid md:grid-cols-2 items-center  border-b border-grays pb-14 ">
          <div className="relative w-full h-96 md:h-[370px]">
            <Image
              src={goldWinner}
              alt="gold-winner"
              fill
              className="object-contain md:pr-20"
            />
          </div>
          <div className="">
            <p className="text-black font-bold text-[1.1rem] tracking-wide">
              Most Innovative IT Company
            </p>

            <p className="text-black font-medium tracking-wide text-[1rem] pt-4">
              The{" "}
              <strong className="text-primary">Titan Business Awards</strong>{" "}
              hosted by IAA accredited us as the{" "}
              <strong className="text-primary">
                Most Innovative IT Company
              </strong>
              . This recognition came in for our contribution in developing the
              open-source, clean code architecture,{" "}
              <strong className="text-primary">IT Soft</strong>. Conferring us
              a ‘Gold’ status, Titan Business Awards acknowledged our commitment
              towards helping businesses achieve ethical growth for thriving in
              adverse market conditions.
            </p>
          </div>
        </div>
      </section> */}

      {/* <section className="container px-5 md:px-36 pb-10 md:pb-20">
        <h1 className="text-center font-bold text-black text-2xl md:text-3xl tracking-wide">
          Streamlining The Impact of Purpose-driven Innovation
        </h1>
        <div>
          {Streamlining.map(({ title, desc }, index) => {
            return (
              <div
                key={index}
                className={`flex  flex-col md:flex-row  items-center md:gap-20 gap-3  md:space-y-10   border-grays  ${
                  index === 2 ? "" : "border-b pb-10"
                }`}
              >
                <h2 className="text-primary font-semibold text-2xl tracking-wide md:w-4/12 pt-6">
                  {title}
                </h2>
                <p className="text-black font-medium tracking-wide text-[1rem] md:w-8/12">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* <section className="py-20 bg-primary  flex flex-col items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2 tracking-wide text-white">
          Challenge the Status Quo.
        </h2>
        <p className="text-lg text-white font-medium tracking-wide mb-6 text-center">
          Build market-breaking software with us, guided by our software vision.
        </p>

        <Link
          href="/contact-us"
          className="primary-btn-sm mt-4 gap-2 !bg-white !text-primary   w-fit mx-auto xl:mx-0"
        >
          Know How We Add Value{" "}
          <span className="text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </Link>
        
      </section> */}
    </main>
  );
};

export default Innovation;
