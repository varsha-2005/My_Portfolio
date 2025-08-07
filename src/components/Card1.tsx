"use client";
import { motion } from "framer-motion";
import React from "react";
import { StatsCardProps } from "@/types/types";

export const Card1 = ({
  icon,
  title,
  value,
  description,
  color,
}: StatsCardProps) => {
  const colorMap = {
    blue: "from-blue-400 to-blue-600",
    amber: "from-amber-400 to-amber-600",
    gray: "from-gray-400 to-gray-600",
    purple: "from-purple-400 to-purple-600",
    green: "from-green-400 to-green-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative h-full overflow-hidden rounded-2xl bg-[#1A1A1A] p-6 shadow-xl transition-all duration-300 hover:shadow-2xl"
    >
      {/* Gradient background overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${colorMap[color]} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 flex items-center gap-4">
          <div className={`rounded-lg bg-gradient-to-br shadow-md`}>{icon}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>

        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        className={`absolute -right-4 -top-4 h-20 w-20 rounded-full ${colorMap[color]} opacity-20 blur-xl`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
    </motion.div>
  );
};
