"use client";
import Card from "@/components/Card";
import { Card1 } from "@/components/Card1";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useRouter } from "next/navigation";
import { userData } from "@/lib/data1/UserData";
import { motion } from "framer-motion";
import Link from "next/link";

type ColorType = "purple" | "amber" | "blue" | "gray";

export default function Home() {
  const router = useRouter();

  return (
    <div className="sm:mx-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-2 sm:my-8 "
      >
        <h2 className="text-3xl font-bold text-white relative inline-block pb-2 ">
          About Me
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-gray-300"
        >
          {userData.user.AboutMe}
        </motion.p>
      </motion.div>

      {/* Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mt-10 mb-6">Additional Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {userData.user.additionalStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card1
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                description={stat.description}
                color={stat.color as ColorType}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* What I'm Doing */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-8"
      >
        <h2 className="text-3xl font-bold mt-10 mb-6">What Im Doing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userData.user.mainSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Connect with Me */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-8"
      >
        <h2 className="text-3xl font-bold mt-10 mb-4">Connect with Me</h2>
        <div className="flex flex-wrap gap-4 p-6 items-center sm:justify-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaLinkedinIn className="w-5 h-5 mr-3" />
              LinkedIn
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://leetcode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <SiLeetcode className="w-5 h-5 mr-3" />
              LeetCode
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 text-white font-medium hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaGithub className="w-5 h-5 mr-3" />
              GitHub
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Resume Button */}
      <motion.div
        className="flex justify-end mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => router.push("/resume")}
          className="px-6 py-3 rounded-xl text-xl text-gray-500 font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Resume &rarr;
        </button>
      </motion.div>
    </div>
  );
}
