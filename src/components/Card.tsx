"use client";
import { motion } from "framer-motion";
import React from "react";
import { CardProps } from "@/types/types";

export default function Card({ icon, title, description }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className=" rounded-2xl p-6 flex space-x-4 items-start cursor-pointer shadow-lg hover:shadow-2xl transition-all backdrop-blur-xl bg-[rgba(26,26,26,0.6)] border border-gray-700"
    >
      <div className="text-yellow-400 text-2xl">{icon}</div>
      <div>
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
