
import { motion } from "framer-motion";
import Link from "next/link";
import { CertificationProps } from "@/types/types";

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};



export default function CertificationCard({
  title,
  institution,
  date,
  description,
  skills,
  icon,
  link,
  linkText,
}: CertificationProps) {
  return (
    <motion.div
      key={title}
      variants={item}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 backdrop-blur-md shadow-lg"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-3 sm:gap-5 h-12 sm:h-16 mb-3 sm:mb-4"
      >
        <div className="text-2xl sm:text-3xl">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
      </motion.div>

      <p className="text-sm sm:text-base text-gray-400 mb-1">
        Issued by: <span className="text-white">{institution}</span>
      </p>
      <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
        Date: {date}
      </p>

      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-700 text-gray-200 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full hover:bg-gray-600 transition-all duration-200"
          >
            {skill}
          </div>
        ))}
      </div>

      {link && linkText && (
        <Link
          href={link}
          className="inline-block mt-1 sm:mt-2 px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-black text-sm sm:text-base font-medium rounded-lg sm:rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow hover:shadow-lg"
        >
          {linkText}
        </Link>
      )}
    </motion.div>
  );
}
