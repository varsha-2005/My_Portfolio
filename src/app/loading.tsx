"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-screen w-full justify-center items-center bg-black text-white z-100"
    >
      <div className="text-center">
        <h2 className="text-7xl font-bold mb-4">Loading...</h2>
        <div className="h-10 w-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
      </div>
    </motion.div>
  );
  
}
