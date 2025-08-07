"use client";
import { useState } from "react";
import {  FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { ProjectData } from "@/lib/datas/ProjectData";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { containerVariants } from "@/lib/frammer/Frammer";


const Portfolio = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const [showSelectList, setShowSelectList] = useState(false);

  const handleFilter = (category: string) => {
    setFilter(category);
    setShowSelectList(false);
  };

  const filteredProjects =
    filter === "all"
      ? ProjectData.projects
      : ProjectData.projects.filter((project) => project.category === filter);

  const activeFilterStyle = "text-orange-400 font-medium";
  const inactiveFilterStyle =
    "text-gray-400 hover:text-gray-300 transition-colors";

  return (
    <div className="max-w-7xl w-full sm:px-10 my-2 sm:my-8">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-2xl py-6 shadow-xl"
      >
        <header className="mb-5">
          <h2 className="text-3xl font-bold text-white relative inline-block pb-2">
            My Portfolio
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl">
            Explore my collection of projects showcasing expertise in web
            development, design, and application development.
          </p>
        </header>

        {/* Desktop Filter */}
        <div className="hidden md:flex items-center gap-6 mb-12">
          <button
            className={`text-sm uppercase tracking-wider ${
              filter === "all" ? activeFilterStyle : inactiveFilterStyle
            }`}
            onClick={() => handleFilter("all")}
          >
            All Projects
          </button>
          {Array.from(
            new Set(ProjectData.projects.map((project) => project.category))
          ).map((category) => (
            <button
              key={category}
              className={`text-sm uppercase tracking-wider ${
                filter === category ? activeFilterStyle : inactiveFilterStyle
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Mobile Filter */}
        <div className="md:hidden mb-8 relative z-10">
          <button
            className="flex items-center justify-between w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-gray-300"
            onClick={() => setShowSelectList(!showSelectList)}
          >
            <span>{filter === "all" ? "All Projects" : filter}</span>
            <FiChevronDown
              className={`transition-transform ${
                showSelectList ? "rotate-180" : ""
              }`}
            />
          </button>

          {showSelectList && (
            <div className="absolute mt-2 w-full bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-xl">
              {[
                "all",
                ...Array.from(
                  new Set(ProjectData.projects.map((proj) => proj.category))
                ),
              ].map((category) => (
                <button
                  key={category}
                  className={`block w-full text-left px-4 py-3 hover:bg-gray-700/50 ${
                    filter === category
                      ? "text-orange-400 bg-gray-700/30"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleFilter(category)}
                >
                  {category === "all" ? "All Projects" : category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </motion.article>

      <motion.div
        className="flex justify-end mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onClick={() => router.push("/skills")}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 rounded-xl text-xl text-gray-500 font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          skills &rarr;
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Portfolio;
