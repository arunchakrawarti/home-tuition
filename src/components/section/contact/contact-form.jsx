"use client";

import { useState } from "react";
import { contactSubmit } from "~/utils/api";
import { errorToast, successToast } from "~/utils/toastMessage";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    source: "website",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "mobile") {
      // Only numbers allowed and max 10 digits
      const mobileValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        mobile: mobileValue,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.mobile.length !== 10) {
      errorToast("Please enter a valid 10 digit mobile number");
      return;
    }

    setLoading(true);

    try {
      await contactSubmit(formData);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
        source: "website",
      });

      successToast("Query submitted successfully");
    } catch (error) {
      errorToast("Failed to submit query!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-[15%] sm:pt-[15%] xl:pt-[7%] pb-10">
      <div className="sm:border border-grayLight grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 max-w-6xl mx-auto bg-white mt-4 before:absolute before:right-0 before:w-[300px] before:bg-grayLight before:h-full max-md:before:hidden">
        <div>
          <h2 className="text-black text-3xl font-extrabold">
            Get In Touch
          </h2>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities?
            Our experienced team is ready to engage with you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                type="text"
                placeholder="Full Name"
                className="px-2 py-3 bg-white w-full text-black text-sm border-b border-grayLight focus:border-primary outline-none"
              />

              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                type="tel"
                maxLength={10}
                pattern="[0-9]{10}"
                inputMode="numeric"
                placeholder="Phone No."
                className="px-2 py-3 bg-white w-full text-black text-sm border-b border-grayLight focus:border-primary outline-none"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="Email"
                className="px-2 py-3 bg-white w-full text-black text-sm border-b border-grayLight focus:border-primary outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message"
                rows={4}
                className="px-2 pt-3 bg-white w-full text-black text-sm border-b border-grayLight focus:border-primary outline-none resize-none"
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="mt-8 disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center text-sm w-full px-6 py-4 bg-primary hover:bg-primaryDark text-white transition-all duration-200"
            >
              {loading ? (
                "Submitting..."
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    className="mr-2"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fillRule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>

          <ul className="mt-4 flex flex-wrap justify-center gap-6">
            <li className="flex items-center text-primary">
              <a
                href="mailto:hometuitionsnearme@gmail.com"
                className="text-sm"
              >
                <strong>hometuitionsnearme@gmail.com</strong>
              </a>
            </li>

            <li className="flex items-center text-primary">
              <a href="tel:7715889123" className="text-sm">
                <strong>+91 7715889123</strong>
              </a>
            </li>
          </ul>
        </div>

        <div className="z-10 relative h-full max-md:min-h-[350px]">
          <iframe
            src="https://www.google.com/maps?q=Office+B-8/1,+Mangal+Kunj,+Borivali+West,+Mumbai,+Maharashtra+400092&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
          />
        </div>
      </div>
    </main>
  );
};

export default ContactForm;