"use client";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import React from "react";
import Link from "next/link";

const Ndata = [
  {
    title: "25+",
    desc: "Yeaars of Digital Engineering & Innovation",
  },
  {
    title: "3000+",
    desc: "Clients Across Startups and Fortune 500s",
  },
  {
    title: "30+",
    desc: "Global Locations Served",
  },
  {
    title: "98%",
    desc: "Net Client Satisfaction Ratio Across Projects",
  },
];

const data = [
  {
    title: "Bold & Visionary",
    desc: "Breaking barriers with bold tech exploration and precision engineering. We pioneer scalable, next-gen solutions that revolutionize how businesses operate—today and tomorrow.",
  },
  {
    title: "Concise & Action-Driven",
    desc: "Innovating without limits. Our R&D team engineers futuristic, scalable solutions to redefine efficiency and drive progress.",
  },
  {
    title: "Aspirational",
    desc: "Where curiosity meets engineering excellence: Our R&D team turns visionary ideas into transformative solutions, empowering businesses to thrive in a dynamic world.",
  },
  {
    title: " Future of Work",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
  {
    title: " Future of Tech Ethiics",
    desc: " Out data Solutions are designed to build data integrity for your systems. We employ industry is best data engineering practices for warehousing and processing.",
  },
];

const coreValues = [
  {
    img: "/assets/Itsoftword/our-vision/img (6).svg",
    title: "Cross-Industry Partnerships",
    desc: "Foster alliances with diverse sectors—governments, NGOs, and private enterprises—to co-create inclusive solutions.",
  },
  {
    img: "/assets/Itsoftword/our-vision/img (5).svg",
    title: "Open Innovation Platforms",
    desc: "Launch collaborative digital hubs where underrepresented groups can contribute ideas, access resources, and scale impact.",
  },
  {
    img: "/assets/Itsoftword/our-vision/img (4).svg",
    title: "Equitable Tech Access",
    desc: "Democratize tools like AI and cloud computing through subsidized programs for marginalized communities and SMEs.",
  },
  {
    img: "/assets/Itsoftword/our-vision/img (3).svg",
    title: "Diverse Talent Pipelines",
    desc: "Partner with educational institutions to upskill women, minorities, and rural populations for future-ready roles.",
  },
  {
    img: "/assets/Itsoftword/our-vision/img (2).svg",
    title: "Inclusive Design Frameworks",
    desc: "Embed accessibility and cultural sensitivity into product development, ensuring solutions work for all users.",
  },
  {
    img: "/assets/Itsoftword/our-vision/img (1).svg",
    title: "Transparent Governance",
    desc: "Establish ethical guidelines and shared metrics to track progress on inclusion goals across collaborations.",
  },
];

const talentNetworkSections = [
  {
    title: "Qualified & Experienced Professionals",
    image:
      "/assets/vision-mission/image1.png",
    description:
      "Our talent network includes highly qualified and experienced professionals from diverse educational and training backgrounds.",
    points: [
      "School Teachers",
      "College Professors",
      "Subject Specialists",
      "Competitive Exam Faculty",
      "Language Trainers",
      "Computer & IT Experts",
      "Music & Dance Trainers",
      "Art & Craft Instructors",
      "Acting & Theatre Coaches",
      "Photography & Filmmaking Professionals",
      "Fashion Designing Trainers",
      "Industrial Training Experts",
      "Special Education Professionals",
    ],
  },

  {
    title: "Expertise Across Multiple Learning Categories",
    image:
      "/assets/vision-mission/image2.png",
    description:
      "We provide skilled educators and trainers across a wide range of academic, professional, and skill-based learning categories.",
    points: [
      "School Tuition",
      "College & University Tuition",
      "Diploma & Professional Courses",
      "Competitive Exam Preparation",
      "Spoken English & Languages",
      "Foreign Language Training",
      "Computer & IT Skills",
      "Music, Dance & Creative Arts",
      "Technical & Industrial Training",
      "Personality Development",
      "Special Education Learning Support",
    ],
  },

  {
    title: "Carefully Selected Teaching Professionals",
    image:
      "/assets/vision-mission/image4.png",
    description:
      "Every educator and trainer in our network is carefully selected based on quality, expertise, and dedication to student success.",
    points: [
      "Subject Knowledge & Expertise",
      "Teaching Experience",
      "Communication Skills",
      "Student-Friendly Approach",
      "Professionalism & Discipline",
      "Practical & Result-Oriented Teaching Methods",
      "Patience & Personalized Attention",
    ],
  },

  {
    title: "Personalized Teacher & Trainer Matching",
    image:
      "/assets/vision-mission/image3.png",
    description:
      "We focus on connecting learners with the most suitable educators according to their learning goals and preferences.",
    points: [
      "Tutors According to Student Needs",
      "Nearby Locality Teachers",
      "Flexible Learning Support",
      "Beginner to Advanced Level Training",
      "One-to-One Personalized Learning",
      "Online & Home TuitionOptions",
      "Quick Teacher Availability",
    ],
  },

  {
    title: "Supporting Learning Beyond Academics",
    image:
      "/assets/vision-mission/image6.png",
    description:
      "Our talent network helps students and learners develop essential life skills and career-oriented competencies beyond academics.",
    points: [
      "Academic Excellence",
      "Communication Skills",
      "Creativity & Confidence",
      "Professional Skills",
      "Technical Knowledge",
      "Personality Development",
      "Career-Oriented Learning",
    ],
  },

  {
    title: "Why Our Talent Network Stands Out?",
    image:
      "/assets/vision-mission/image7.png",
    description:
      "We are committed to delivering quality educational support through experienced professionals, personalized guidance, and flexible learning solutions.",
    points: [
      "Trusted Educational Support Since 2017",
      "Experienced & Qualified Professionals",
      "Wide Network Across Mumbai, Navi Mumbai & Thane",
      "Expertise Across Multiple Subjects & Skills",
      "Personalized Learning Approach",
      "Practical & Result-Oriented Guidance",
      "Flexible Home & Online Learning Options",
      "Student-Centered Teaching Environment",
    ],
  },
];

const OurVision = () => {
  return (
    <main className="bg-white text-gray-800">
      <section className="py-16 container px-5">
        <div>
          <h1 className="md:text-lg text-sm  font-bold  text-primary text-center pt-10">
            Our Talent Network
          </h1>
          <p className="text-2xl md:text-3xl text-black font-semibold tracking-wide text-center md:px-24 py-3">
            Experienced Educators, Trainers & Learning Experts Since 2017
          </p>
        </div>
        <div className="relative w-full h-36 md:h-96 mt-10 ">
          <Image
            src="/assets/our-culture/imagefirst.png"
            alt="Vision Banner"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-sm md:text-lg text-black font-medium tracking-wide text-center md:px-44 py-5 leading-6">
          Home TuitionAcademy is powered by a strong network of talented,
          experienced, and dedicated educators, trainers, mentors, and industry
          professionals who are passionate about teaching and student
          development. Our talent network includes qualified teachers and
          experts from diverse academic, professional, creative, and technical
          backgrounds, helping learners receive the right guidance according to
          their individual goals and learning requirements.
        </p>
      </section>

      <section className="py-20 container px-5">
        {talentNetworkSections.map((section, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 gap-10 items-center mb-24"
          >
            {/* Left / Right Image */}
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
        <div className="container md:grid grid-cols-2 md:py-24 md:px-20 gap-7 px-5 py-6">
          <h1 className="text-white text-xl md:text-3xl  font-semibold md:border-r border-gray ">
            building trust through futuristic outlook, digital excellence
          </h1>
          <p className="text-white text-[1rem] font-medium tracking-wide ">
            making ethical commitments that support innovation, The company is
            committed to ethical practices that empower people and businesses
            with long-lasting.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-0 bg-white container">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="relative w-full h-72 md:h-[450px]">
            <Image
              src="/assets/vision-mission/Championing Good Governance for a Sustainable Tech-Driven Future.webp"
              alt="Innovation"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="md:text-3xl text-xl font-bold text-black">
              Championing Good Governance for a Sustainable Tech-Driven Future
            </h2>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed py-4">
              Relentlessly pushing boundaries through cutting-edge technology
              and innovative engineering. Our R&D team designs scalable,
              future-ready solutions that transform business efficiency—setting
              new standards for industries worldwide
            </p>
            <p className="text-black text-[1rem] font-medium tracking-wide leading-relaxed">
              Constantly pushing boundaries through technology exploration and
              solution engineering. Our R&D team builds scalable and futuristic
              products that redefine business efficiency.
            </p>
          </div>
        </div>

        <div className="bg-primary rounded-md  md:rounded-br-[100px] flex flex-col items-center justify-center md:py-20 py-5 md:mt-20 mt-10">
          <h1 className="md:text-3xl text-xl font-bold text-white">
            Let is Spin the Narrative!
          </h1>
          <p className="text-white text-center text-[1.1rem] font-medium tracking-wide py-4">
            We rendefine the power of tech with its best-fit tailored usage.
          </p>

          <Link
            href="/contact-us"
            className="primary-btn-sm !bg-white gap-2 !text-primary  w-fit mx-auto xl:mx-0"
          >
            Drive optimum Business Value
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
      </section>

      <section className="py-10 container px-5">
        <div className="grid md:grid-cols-2 items-center md:gap-20 gap-10 ">
          <div>
            <h1 className="text-black font-bold text-xl md:text-3xl tracking-wide pb-10">
              Committing to A Tech-first Future for Businesses
            </h1>
            <div className="relative w-full   md:h-96 h-72 rounded-sm rounded-br-[100px]">
              <Image
                src="/assets/vision-mission/Committing to A Tech-first Future for Businesses.webp"
                alt="Sustainability"
                fill
                className="bg-cover rounded-sm rounded-br-[100px]"
              />
            </div>
          </div>
          <div className=" overflow-y-auto no-scrollbar ">
            <div className="h-[500px]">
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
      </section>

      <section className="bg-grayLight py-10 md:py-20">
        <h2 className="text-2xl md:text-3xl text-black font-bold tracking-wide  text-center  mb-2">
          Numbers That Speak of Our Impact
        </h2>
        <p className="text-[0.9rem] text-center text-black font-medium tracking-wide">
          We create a shared mission, empoering our clients to make a
          difference.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 container pt-10 ">
          {Ndata.map(({ title, desc }, index) => {
            return (
              <div
                key={index}
                className={`border-grays px-5
    ${index % 2 === 0 ? "border-r" : ""}
    ${index === Ndata?.length - 1 ? "md:border-none" : "md:border-r"}`}
              >
                <h1 className="text-center font-bold text-3xl md:text-4xl pb-6 text-primary">
                  {title}
                </h1>
                <p className="text-center text-[1rem] font-medium tracking-wide text-black">
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 px-5 md:px-28 bg-white container">
        <div className="grid md:grid-cols-7 items-center">
          <div className="relative w-full h-72 md:h-[250px] md:col-span-3 rounded-sm">
            <Image
              src="/assets/vision-mission/We strive to build tech-powered, high-efficiency, fair, and transparent bussiness processes.webp"
              alt="Innovation"
              fill
              className="bg-cover"
            />
          </div>
          <div className="bg-primaryDark  md:col-span-4 h-52 md:h-[250px] rounded-r-sm rounded-br-[60px] md:px-16 px-5  flex flex-col justify-center items-start">
            <p className="text-[1.1rem] text-white font-meduim tracking-wide">
              We strive to build tech-powered, high-efficiency, fair, and
              transparent bussiness processes.
            </p>

            <Link
              href="/contact-us"
              className="primary-btn-sm mt-4 !bg-white gap-2 !text-primary  w-fit mx-auto xl:mx-0"
            >
              Know About Our Culture
              <span className="text-xl">
                <LiaLongArrowAltRightSolid />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 px-5 md:px-5 container">
        <h2 className="md:text-3xl text-2xl font-bold text-center text-black mb-10">
          Accelerators for Wider Collaboration and Inclusion
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {coreValues.map(({ title, desc, img }, index) => (
            <div
              key={index}
              className="bg-white border border-grays rounded-md  p-7  text-lg font-medium text-gray-700"
            >
              <Image src={img} width={40} height={10} alt="icons" />
              <h2 className="text-black font-bold text-xl md:text-xl tracking-wide py-4">
                {title}
              </h2>
              <p className="text-black text-[1rem] md:text-[0.9rem] font-medium tracking-wide leading-6">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/contact-us"
            className="primary-btn-sm mt-4 gap-2  w-fit mx-auto xl:mx-0"
          >
            Innovate With Us
            <span className="text-xl">
              <LiaLongArrowAltRightSolid />
            </span>
          </Link>
        </div>
      </section>

      <section className="py-20 bg-primary  flex flex-col items-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2 tracking-wide text-white">
          Challenge the Status Quo.
        </h2>
        <p className="text-lg text-white font-medium tracking-wide mb-6 text-center">
          Build disruptive tech, powered by our expertise.
        </p>

        <Link
          href="/contact-us"
          className="primary-btn-sm mt-2 gap-2 !bg-white !text-primary  w-fit mx-auto xl:mx-0"
        >
          Know How We Add Value
          <span className="text-xl">
            <LiaLongArrowAltRightSolid />
          </span>
        </Link>
      </section> */}
    </main>
  );
};

export default OurVision;
