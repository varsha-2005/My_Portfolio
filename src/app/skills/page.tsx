"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaCode, FaAppStore, FaConnectdevelop, FaCogs } from "react-icons/fa";
import { GiDatabase } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { SkillCard } from "@/components/SkillCard";
import { skillsData } from "@/lib/data1/SkillsData";
import { CertificationData } from "@/lib/data1/Certification";
import CertificationCard from "@/components/CertificationCard";
import { container, item, headingVariant } from "@/lib/frammer/Frammer";

export default function SkillsPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-2 py-8 sm:px-6 sm:py-12"
    >
      <motion.h2
        initial="hidden"
        animate="show"
        variants={headingVariant}
        className="text-2xl sm:text-3xl font-bold text-white relative inline-block pb-2"
      >
        Skills and Certifications
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></span>
      </motion.h2>

      {/* Sections */}
      {[
        {
          title: "Programming Skills",
          icon: <FaCode className="text-blue-400" />,
          skills: skillsData.skills.language,
        },
        {
          title: "Frontend Skills",
          icon: <FaCode className="text-blue-400" />,
          skills: skillsData.skills.frontend,
        },
        {
          title: "Backend Skills",
          icon: <FaConnectdevelop className="text-purple-400" />,
          skills: skillsData.skills.backend,
        },
        {
          title: "App Development",
          icon: <FaAppStore className="text-teal-400" />,
          skills: skillsData.skills.app,
        },
        {
          title: "Database Skills",
          icon: <GiDatabase className="text-teal-400" />,
          skills: skillsData.skills.database,
        },
        {
          title: "Tools",
          icon: <FaCogs className="text-teal-400" />,
          skills: skillsData.skills.tools,
        },
      ].map(({ title, icon, skills }) => (
        <motion.section
          key={title}
          variants={container}
          initial="hidden"
          animate="show"
          className="my-12"
        >
          <motion.h2
            variants={headingVariant}
            className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center"
          >
            {icon} <span className="ml-3">{title}</span>
          </motion.h2>

          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-4 gap-3">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex items-center p-3 sm:p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors cursor-default"
              >
                <div className="text-2xl mr-3">{skill.icon}</div>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}

      {/* Skill Proficiency */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-16"
      >
        <motion.h2
          variants={headingVariant}
          className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center"
        >
          <FaCode className="mr-3 text-blue-400" />
          Skill Proficiency
        </motion.h2>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillsData.skills.skillProficiency.map((skill) => (
            <motion.div key={skill.name} variants={item}>
              <SkillCard skill={skill} color="blue" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Certifications */}
      <motion.section variants={container} initial="hidden" animate="show">
        <motion.div
          variants={headingVariant}
          className="flex items-center mb-8"
        >
          <h2 className="text-2xl font-bold text-white flex items-center">
            <TbCertificate className="mr-3 text-amber-400" />
            Certifications
          </h2>
          <div className="h-px flex-1 bg-amber-500 ml-4"></div>
        </motion.div>

        <motion.div className="grid sm:grid-cols-2 gap-6">
          {CertificationData.certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="transition-transform"
            >
              <CertificationCard {...cert} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex justify-end mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-xl text-xl text-gray-500 font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          onClick={() => router.push("/contact")}
        >
          contact &rarr;
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
