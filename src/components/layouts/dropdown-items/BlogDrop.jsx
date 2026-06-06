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



"use client";

import Link from "next/link";

import React, { useEffect, useState } from "react";

import axios from "axios";

import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import { limitTextLength } from "~/utils/limitText";

import { replaceTemplateVars } from "~/utils/replaceTemplateVars";

const BlogDrop = () => {
  const [loading, setLoading] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  // DYNAMIC CATEGORY + BLOGS
  const [blogCategories, setBlogCategories] = useState([]);

  // FETCH DATA
  const fetchBlogs = async () => {
    try {
      setLoading(true);

      // GET ALL CATEGORIES
      const categoryResponse = await axios.get(
        `${process.env.BACKEND_API_BASE_URL}/api/public/category`,
      );

      const categories = categoryResponse?.data?.data || [];

      // GET BLOGS CATEGORY WISE
      const categoriesWithBlogs = await Promise.all(
        categories.map(async (category) => {
          try {
            const blogResponse = await axios.get(
              `${process.env.BACKEND_API_BASE_URL}/api/public/blog`,
              {
                params: {
                  category: category.slug,
                  limit: 4,
                },
              },
            );

            return {
              ...category,

              title: category?.name,

              posts: blogResponse?.data?.data || [],
            };
          } catch (error) {
            console.error(`Blog fetch error ${category.slug}`, error);

            return {
              ...category,
              title: category?.name,
              posts: [],
            };
          }
        }),
      );

      setBlogCategories(categoriesWithBlogs);
    } catch (error) {
      console.error("Category fetch error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="w-full h-[400px] overflow-y-auto bg-white rounded-lg md:shadow-xl flex flex-col md:flex-row border-t border-blight">
      {/* LEFT SIDE */}

      <div className="w-full md:w-3/12 border-b md:border-b-0 md:border-r border-grayLight py-4 md:py-8 md:px-6">
        <h2 className="text-lg font-semibold mb-4 text-primary hidden md:block">
          Blog Categories
        </h2>

        <ul className="flex flex-col">
          {blogCategories.map((item, idx) => (
            <li
              key={item?._id || idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer text-sm font-medium px-3 md:text-sm md:px-4 py-2.5 flex justify-between items-center transition ${
                activeIndex === idx
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <span>{item?.title}</span>

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

      {/* RIGHT SIDE */}

      <div className="w-full md:w-9/12 py-4 md:py-8 px-1 md:px-6">
        <h3 className="text-lg md:text-lg font-bold text-dark mb-4 md:mb-6 flex items-center gap-1">
          {blogCategories[activeIndex]?.title}

          <span className="text-primary text-xl font-light">
            <LiaLongArrowAltRightSolid />
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blogCategories[activeIndex]?.posts?.length > 0 ? (
            blogCategories[activeIndex]?.posts?.map((blog, i) => {
              const heading = replaceTemplateVars(blog?.title || "", {
                pre: "",
                loc: "",
                post: "",
              });

              const description = replaceTemplateVars(
                blog?.shortDescription || blog?.description || "",
                {
                  pre: "",
                  loc: "",
                  post: "",
                },
              );

              return (
                <div
                  key={blog?._id || i}
                  className="rounded p-4 hover:bg-grayLightest transition"
                >
                  <div className="w-full">
                    <h4 className="first-letter:capitalize font-semibold text-sm md:text-sm text-gray-800 mb-2">
                      {limitTextLength(heading, 50)}
                    </h4>

                    <p className="first-letter:capitalize text-gray-600 text-sm md:text-sm mb-3">
                      {limitTextLength(description, 100)}
                    </p>

                    <Link
                      href={`/blog/${blog?.slug}`}
                      className="text-primary hover:underline font-semibold text-sm md:text-sm inline-flex items-center gap-1"
                    >
                      Explore Now
                      <span>
                        <LiaLongArrowAltRightSolid />
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 text-center text-gray-500 py-10">
              {loading ? "Loading blogs..." : "No Blogs Found"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDrop;
