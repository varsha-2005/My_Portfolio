"use client";
import { SkillCardProps, SkillCardColor } from "@/types/types";

export const SkillCard = ({ skill, color = "blue" }: SkillCardProps) => {
  const colorMap: Record<
    SkillCardColor,
    { bg: string; text: string; progress: string }
  > = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      progress: "from-blue-400 to-blue-600",
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      progress: "from-purple-400 to-purple-600",
    },
    teal: {
      bg: "bg-teal-500/10",
      text: "text-teal-400",
      progress: "from-teal-400 to-teal-600",
    },
  };

  return (
    <div className="bg-gray-900/50 hover:bg-gray-900/70 border border-gray-800 rounded-xl p-6 transition-all duration-300 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className={`p-3 rounded-lg ${colorMap[color].bg} mr-4`}>
            {skill.icon}
          </div>
          <h3 className="text-xl font-bold text-white">{skill.name}</h3>
        </div>
        <span className={`text-sm font-medium ${colorMap[color].text}`}>
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color].progress}`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};
