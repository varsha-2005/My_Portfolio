"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-6 py-4 w-[500px] rounded-b-2xl shadow-2xl  z-10 border border-white/20 backdrop-blur-xl bg-white/10">
      <Link
        href="/"
        className={`${
          pathname === "/"
            ? "text-yellow-400 border-b-2 border-yellow-400"
            : "hover:text-yellow-400"
        }`}
      >
        About
      </Link>
      <Link
        href="/resume"
        className={`${
          pathname === "/resume"
            ? "text-yellow-400 border-b-2 border-yellow-400"
            : "hover:text-yellow-400"
        }`}
      >
        Resume
      </Link>
      <Link
        href="/projects"
        className={`${
          pathname === "/projects"
            ? "text-yellow-400 border-b-2 border-yellow-400"
            : "hover:text-yellow-400"
        }`}
      >
        Portfolio
      </Link>
      <Link
        href="/skills"
        className={`${
          pathname === "/skills"
            ? "text-yellow-400 border-b-2 border-yellow-400"
            : "hover:text-yellow-400"
        }`}
      >
        Skills
      </Link>
      <Link
        href="/contact"
        className={`${
          pathname === "/contact"
            ? "text-yellow-400 border-b-2 border-yellow-400"
            : "hover:text-yellow-400"
        }`}
      >
        Contact
      </Link>
    </nav>
  );
}
