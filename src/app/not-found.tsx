"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto px-4">
      <div className="bg-[#1b1b1b] rounded-2xl p-10 mx-24 px-10 max-w-5xl text-center">
        <span className="text-yellow-400 text-6xl mb-6 block">404</span>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for doesnot exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
