"use client";
import { TimelineItemProps } from "@/types/types";
export const Timeline = ({
  
  title,
  company,
  description,
  skills,
  icon,
  
  isLast,
  isEducation = false,
}:TimelineItemProps) => {
  return (
    <div className="relative pl-10 pb-8 group">
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1 h-5 w-5 rounded-full flex items-center justify-center 
         bg-yellow-100 `}
      >
        {icon}
      </div>

      {/* Timeline line */}
      {!isLast && (
        <div
          className={"absolute left-[9px] top-6 bottom-0 w-1  bg-yellow-500"
          }
        ></div>
      )}

   

      {/* Content */}
      <div
        className={`p-6 rounded-xl border transition-all duration-300
          ${
            isEducation
              ? "border-green-500/20 hover:border-green-500/40"
              : "border-blue-500/20 hover:border-blue-500/40"
          }
          bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm`}
      >
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <h4 className="text-lg font-semibold text-gray-300 mb-3">{company}</h4>
        <p className="text-gray-400 mb-4">{description}</p>

        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium
                  ${
                    isEducation
                      ? "bg-green-500/10 text-green-300"
                      : "bg-blue-500/10 text-blue-300"
                  }`}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
