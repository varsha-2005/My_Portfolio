"use client";
import Image from "next/image";
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { userData } from "@/lib/data1/UserData";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SideBar() {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className="w-80 bg-[#2121212e] py-10 px-8 hidden sm:flex flex-col items-center rounded-2xl m-4 border-2 border-orange-400 z-10 h-screen"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className=" rounded-[40px] overflow-hidden bg-[#333] flex items-center justify-center p-10 "
      >
        <Image
          src="vercel.svg"
          alt="Profile"
          width={100}
          height={100}
          className="rounded-full"
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-xl font-bold mt-4"
      >
        {userData.user.name}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-[#333] text-sm px-4 py-1 mt-4 rounded-full"
      >
        {userData.user.domain}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 space-y-6 w-full"
      >
        <div>
          <p className="text-gray-400 text-sm mb-1">EMAIL</p>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-yellow-400" />
            <span className="truncate">{userData.user.email}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">PHONE</p>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-yellow-400" />
            <span>{userData.user.phone}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">BIRTHDAY</p>
          <div className="flex items-center space-x-3">
            <FaBirthdayCake className="text-yellow-400" />
            <span>{userData.user.Birthday}</span>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-1">LOCATION</p>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>{userData.user.Location}</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex space-x-4 mt-8"
      >
        {Object.entries(userData.user.socialLinks).map(
          ([key, { link, icon }]) => (
            <Link
              key={key}
              href={link}
              className="text-gray-400 hover:text-yellow-400 text-2xl"
            >
              {icon}
            </Link>
          )
        )}
      </motion.div>
    </motion.aside>
  );
}
