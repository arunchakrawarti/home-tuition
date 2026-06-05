// "use client";
// import React from "react";
// import {
//   FaBookOpen,
//   FaNewspaper,
//   FaChalkboardTeacher,
//   FaBullhorn,
//   FaLightbulb,
//   FaHandsHelping,
//   FaFeatherAlt,
//   FaUsersCog,
// } from "react-icons/fa";

// const blogItems = [
//   {
//     icon: <FaBookOpen className="text-primaryDark text-[1rem]" />,
//     title: "Insights & Industry Trends",
//     desc: "Latest happenings across tech, design, and innovation to keep you ahead.",
//     hoverColor: "hover:text-primary",
//   },
//   {
//     icon: <FaNewspaper className="text-successDark text-[1rem]" />,
//     title: "Case Studies & Reports",
//     desc: "Real-world projects, performance breakdowns, and client journeys.",
//     hoverColor: "hover:text-success",
//   },
//   {
//     icon: <FaChalkboardTeacher className="text-infoLight text-[1rem]" />,
//     title: "Tech Tutorials & Best Practices",
//     desc: "Step-by-step guides, coding techniques, and architecture decisions.",
//     hoverColor: "hover:text-infoLight",
//   },
//   {
//     icon: <FaBullhorn className="text-warningDark text-[1rem]" />,
//     title: "Announcements & Updates",
//     desc: "Exciting product releases, features, and internal growth stories.",
//     hoverColor: "hover:text-warning",
//   },
//   {
//     icon: <FaLightbulb className="text-dangerDark text-[1rem]" />,
//     title: "Innovation & Future Vision",
//     desc: "Ideas, experiments, and emerging trends reshaping digital future.",
//     hoverColor: "hover:text-danger",
//   },
//   {
//     icon: <FaHandsHelping className="text-meteoriteDark text-[1rem]" />,
//     title: "Open Source & Community",
//     desc: "How we give back: contributions, libraries, and dev collaborations.",
//     hoverColor: "hover:text-meteorite",
//   },
//   {
//     icon: <FaFeatherAlt className="text-primary text-[1rem]" />,
//     title: "Design Thinking & UX Patterns",
//     desc: "Creative journeys, UI explorations, and user-first approaches.",
//     hoverColor: "hover:text-purple-600",
//   },
//   {
//     icon: <FaUsersCog className="text-primary text-[1rem]" />,
//     title: "Culture & Team Learnings",
//     desc: "Inside stories of our team, process, challenges, and wins.",
//     hoverColor: "hover:text-blue-500",
//   },
// ];

// const BlogDrop = () => {
//   return (
// <>
//   <div className="flex justify-end">
//         <div className="w-[750px] p-5 bg-white rounded-lg shadow-xl border-t border-whiteBlue">
//       <h3 className="text-lg font-bold mb-4 border-b border-grayLight pb-2 text-primaryDark">
//         From Our Blog
//       </h3>
//       <ul className="space-y-4 text-gray-700 grid md:grid-cols-2 gap-3">
//         {blogItems.map((item, index) => (
//           <li
//             key={index}
//             className={`flex items-start gap-4 cursor-pointer transition-colors duration-200 group ${item.hoverColor}`}
//           >
//             <div className="mt-1 ">{item.icon}</div>
//             <div>
//               <h4 className="text-[0.8rem] font-semibold mb-1 group-hover:underline">
//                 {item.title}
//               </h4>
//               <p className="text-sm leading-snug text-gray">{item.desc}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </>
//   );
// };

// export default BlogDrop;



import Link from "next/link";
import React, { useState } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const blogCategories = [
  {
    title: "Insights & Industry Trends",
    posts: [
      {
        title: "Top Education Trends in 2026",
        desc: "Explore the latest teaching methods and digital learning trends.",
      },
      {
        title: "Future of Online Home Tuition",
        desc: "How technology is transforming personal education.",
      },
    ],
  },
  {
    title: "Case Studies & Reports",
    posts: [
      {
        title: "Student Success Stories",
        desc: "Real-life examples of improved academic performance.",
      },
      {
        title: "Teacher Performance Analysis",
        desc: "Insights into tutoring outcomes and engagement.",
      },
    ],
  },
  {
    title: "Tech Tutorials & Best Practices",
    posts: [
      {
        title: "Best Study Techniques",
        desc: "Simple learning habits to improve retention and focus.",
      },
      {
        title: "Online Learning Setup Guide",
        desc: "Create the perfect environment for digital classes.",
      },
    ],
  },
  {
    title: "Announcements & Updates",
    posts: [
      {
        title: "New Courses Added",
        desc: "Recently launched tuition and skill development programs.",
      },
      {
        title: "Platform Feature Updates",
        desc: "Latest improvements and updates in our services.",
      },
    ],
  },
  {
    title: "Innovation & Future Vision",
    posts: [
      {
        title: "AI in Education",
        desc: "How artificial intelligence is reshaping learning.",
      },
      {
        title: "Future Classroom Experience",
        desc: "A look into next-generation smart education systems.",
      },
    ],
  },
  {
    title: "Open Source & Community",
    posts: [
      {
        title: "Community Learning Programs",
        desc: "Collaborative educational initiatives and workshops.",
      },
      {
        title: "Free Learning Resources",
        desc: "Useful study material and educational communities.",
      },
    ],
  },
  {
    title: "Design Thinking & UX Patterns",
    posts: [
      {
        title: "Student-Friendly Interfaces",
        desc: "Designing engaging and easy-to-use education platforms.",
      },
      {
        title: "Better User Learning Experience",
        desc: "Improving accessibility and usability for students.",
      },
    ],
  },
  {
    title: "Culture & Team Learnings",
    posts: [
      {
        title: "Teacher Collaboration Stories",
        desc: "How tutors share knowledge and improve together.",
      },
      {
        title: "Behind the Education Team",
        desc: "Meet the people building impactful learning systems.",
      },
    ],
  },
];

const BlogDrop = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-end">
      <div className="w-full max-w-[950px] h-[450px] overflow-hidden bg-white rounded-lg md:shadow-xl flex flex-col md:flex-row border-t border-blight">

        {/* Left Side */}
        <div className="w-full md:w-4/12 border-b md:border-b-0 md:border-r border-grayLight py-4 md:py-8 md:px-4 overflow-y-auto">

          <h2 className="text-lg font-semibold mb-4 text-primary hidden md:block px-2">
            Blog Categories
          </h2>

          <ul className="flex flex-col">
            {blogCategories.map((item, idx) => (
              <li
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer text-sm font-medium px-3 md:px-4 py-2.5 flex justify-between items-center transition ${
                  activeIndex === idx
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {item.title}

                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-8/12 py-4 md:py-8 px-4 md:px-6 overflow-y-auto">

          <h3 className="text-lg md:text-lg font-bold text-dark mb-4 md:mb-6 flex items-center gap-1">
            {blogCategories[activeIndex].title}

            <span className="text-primary text-xl font-light">
              <LiaLongArrowAltRightSolid />
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {blogCategories[activeIndex].posts.map((post, index) => (
              <div
                key={index}
                className="rounded p-4 hover:bg-grayLightest transition"
              >
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 mb-1">
                    {post.title}
                  </h4>

                  <p className="text-gray-600 text-sm">
                    {post.desc}
                  </p>

                  <Link
                    href="/blog"
                    className="text-primary hover:underline font-semibold text-sm mt-2 inline-block"
                  >
                    Explore Now
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDrop;