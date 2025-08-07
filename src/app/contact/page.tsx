"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { itemVariant } from "@/lib/frammer/Frammer";
import { MotionInput } from "@/lib/helper/input";

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className=" max-w-6xl mx-auto p-1 sm:px-6 sm:py-12">
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-custom-1 z-9 w-full max-w-3xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white relative inline-block pb-2 ">
          Contact
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></span>
        </h2>

        <section className="my-6 sm:my-8 relative h-48 sm:h-64 rounded-xl sm:rounded-2xl border border-jet overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62258.682555437934!2d79.1025898!3d12.9165172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad378225290bfd%3A0x2ce1e5dc6611e211!2sVellore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1719398997262!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </section>

        <section className="contact-form">
          <h3 className="text-white-2 text-lg sm:text-xl font-semibold capitalize mb-4 sm:mb-5">
            Contact Form
          </h3>

          <motion.form
            onSubmit={handleSubmit}
            className="form w-full"
            data-form
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6 w-full">
              <MotionInput
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Full name"
              />

              <MotionInput
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />

              <MotionInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email address"
              />
            </div>

            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-eerie-black-2 text-white-2 text-sm font-normal p-3 sm:p-4 border border-jet rounded-lg sm:rounded-xl outline-none w-full min-h-[80px] sm:min-h-[100px] h-24 sm:h-32 max-h-40 sm:max-h-52 mb-4 sm:mb-6 focus:border-orange-yellow-crayola resize-y"
              placeholder="Your Message"
              required
              data-form-input
              variants={itemVariant}
            ></motion.textarea>

            <motion.button
              type="submit"
              disabled={
                !formData.fullname || !formData.email || !formData.message
              }
              className="relative w-full bg-gradient-to-br from-hsl-0-0-25 via-hsl-0-0-19 to-hsl-0-0-25 text-orange-yellow-crayola flex justify-center items-center gap-2 py-3 sm:py-4 px-4 sm:px-5 rounded-lg sm:rounded-xl text-xs sm:text-sm shadow-custom-3 z-10 transition-all duration-200 ease-in-out form-btn hover:bg-gradient-to-br hover:from-hsl-45-100-71 hover:to-hsl-35-100-68 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-gradient-to-br disabled:hover:from-hsl-0-0-25 disabled:hover:via-hsl-0-0-19 disabled:hover:to-hsl-0-0-25"
              data-form-btn
              variants={itemVariant}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="currentColor"
              >
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.9c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </section>

        <div className="flex justify-end mt-6 sm:mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-base sm:text-xl text-gray-500 font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            About &rarr;
          </motion.button>
        </div>
      </motion.article>
    </div>
  );
}

