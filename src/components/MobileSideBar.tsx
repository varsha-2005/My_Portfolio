"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userData } from "@/lib/data1/UserData"

export default function MSideBar() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", name: "About" },
    { href: "/resume", name: "Resume" },
    { href: "/projects", name: "Portfolio" },
    { href: "/skills", name: "Skills" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <div className="sm:hidden flex flex-col gap-2 sm:gap-4 w-full">
      {/* Sidebar Content */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full bg-[#2121212e] py-6 px-5 flex flex-col items-center rounded-2xl border-2 border-orange-400 relative"
      >
        {/* Toggle Button for Contact Info */}
        <div className="flex justify-between  w-full ">
          <nav className=" bg-[#2121212e]">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-yellow-400 hover:text-yellow-300 transition-colors p-2"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </nav>
          <button
            onClick={() => setShowContactInfo(!showContactInfo)}
            className=" text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            {showContactInfo ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex items-center justify-center gap-5 sm:gap-10 w-full mb-2 ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="rounded-[40px] overflow-hidden bg-[#333] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="w-20 h-20 sm:w-20 sm:h-20 bg-gray-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
              RH
            </div>
          </motion.div>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-xl font-bold mt-2 sm:mt-4 text-center"
            >
             {userData.user.name}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-[#333] text-sm sm:text-sm px-3 sm:px-4 py-1 mt-1 sm:mt-3 rounded-full text-center"
            >
           {userData.user.domain}
            </motion.p>
          </div>
        </div>
        <div className="block sm:hidden w-full">
          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#2121212e]  overflow-hidden"
              >
                <div className="flex flex-col p-2 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded-md ${
                        pathname === link.href
                          ? "text-yellow-400 bg-[#333]"
                          : "text-white hover:bg-[#333]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Info with Animation */}
        <AnimatePresence>
          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 w-full overflow-hidden"
            >
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  EMAIL
                </p>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-yellow-400 min-w-[16px]" />
                  <span className="text-xs sm:text-sm">
                 {userData.user.email}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  PHONE
                </p>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-yellow-400 min-w-[16px]" />
                  <span className="text-xs sm:text-sm">+91 {userData.user.phone}</span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  BIRTHDAY
                </p>
                <div className="flex items-center space-x-3">
                  <FaBirthdayCake className="text-yellow-400 min-w-[16px]" />
                  <span className="text-xs sm:text-sm">{userData.user.Birthday}</span>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                  LOCATION
                </p>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-yellow-400 min-w-[16px]" />
                  <span className="text-xs sm:text-sm">
                  {userData.user.Birthday}
                  </span>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-4 mt-8 items-center justify-center sm:justify-start w-full"
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>
    </div>
  );
}
