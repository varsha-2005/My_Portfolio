import { motion } from "framer-motion";
import { itemVariants } from "@/lib/frammer/Frammer";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import {  ProjectCardProps } from "@/types/types";

export default function ProjectCard({ project,key }: ProjectCardProps) {
    return (
      <motion.div
        variants={itemVariants}
        animate="active"
        key={key}
        whileHover={{ scale: 1.03 }}
        className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
      >
        <div className="relative h-60 overflow-hidden">
          <Image
            src={project.image ?? "vercel.svg"}
            alt={project.link ?? "Project image"}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <span className="inline-block px-3 py-1 bg-gray-900/80 text-orange-400 text-xs rounded-full uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-4 bg-orange-500 rounded-full text-white shadow-lg hover:bg-orange-600 transition-colors">
              <FiPlus className="text-xl" />
            </button>
          </div>
        </div>
      </motion.div>
    );
}