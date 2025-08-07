"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {StarData} from "@/types/types";



export default function Stars({ count = 500 }: { count?: number }) {
  const [stars, setStars] = useState<StarData[]>([]);

  useEffect(() => {
    const generatedStars: StarData[] = Array.from({ length: count }).map(() => ({
      size: Math.random() * 7 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 2,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);
  }, [count]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="bg-amber-200 rounded-full absolute"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            opacity: 0.9,
          }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
