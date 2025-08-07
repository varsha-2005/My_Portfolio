"use client";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { Timeline } from "@/components/TimeLine";
import { useRouter } from "next/navigation";
import { userData } from "@/lib/data1/UserData";
import { motion } from "framer-motion";

const Page = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl sm:mx-10 my-2 sm:my-8">
      {/* Main Heading */}
      <motion.h2
        className="text-3xl font-bold text-white relative inline-block pb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Journey
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></span>
      </motion.h2>

      <div className="relative mt-5">
        {/* Professional Experience */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <FaBriefcase className="mr-3 text-yellow-400" />
              Professional Experience
            </h2>
            <div className="h-px flex-1 bg-yellow-500 ml-4"></div>
          </div>

          <div className="sm:ml-5">
            {userData.user.internship.map((intern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Timeline
                  date={intern.period}
                  title={intern.title}
                  description={intern.description}
                  company={intern.company}
                  skills={intern.skills}
                  icon={<FaGraduationCap className="text-black" />}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <FaGraduationCap className="mr-3 text-yellow-400" />
              Education
            </h2>
            <div className="h-px flex-1 bg-yellow-500 ml-4"></div>
          </div>

          <div className="ml-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Timeline
                date={userData.user.education.period}
                title={userData.user.education.course}
                description={userData.user.education.description}
                company={userData.user.education.college}
                skills={userData.user.education.skills}
                icon={<FaGraduationCap className="text-black" />}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Button with Animation */}
      <motion.div
        className="flex justify-end mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/projects")}
          className="px-6 py-3 rounded-xl text-xl text-gray-500 font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Project &rarr;
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Page;
