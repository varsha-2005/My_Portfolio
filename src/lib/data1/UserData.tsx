import {
  FaReact,
  FaMobileAlt,
  FaBrain,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const userData = {
  user: {
    id: 1,
    name: "Varsha G",
    domain: "Full Stack Developer",
    email: "varshagym123@gmail.com",
    phone: "8903467499",
    Birthday: "2005-02-17",
    Location: "Vellore, Tamil Nadu",
    pic: "https://img.freepik.com/premium-vector/vector-graphic-girl-icon-portrait-ui-user-interface-persona_780136-29.jpg?w=1380",
    AboutMe:
      "I am a passionate Full-Stack Developer with expertise in building modern, scalable web and mobile applications. With hands-on experience in React.js, React Native, and Flutter, I develop responsive, high-performance user interfaces for both platforms. My backend skills include building robust APIs using Node.js and Express, paired with efficient, real-time databases like MongoDB and Firebase. As a MERN stack developer, I manage the full development lifecycle from frontend to backend. Additionally, I have a growing interest in emerging technologies like Generative AI and Machine Learning, enabling me to integrate intelligent, AI-driven features into applications. Whether it's developing dynamic websites, mobile apps, or experimenting with AI, I thrive on solving real-world problems through code.",

    Highlights: [
      "Full-Stack Developer with expertise in React.js, React Native",
      "Proficient in building responsive, high-performance user interfaces",
      "Experienced in backend development with Node.js, Express, MongoDB, and Firebase",
      "Skilled in developing dynamic websites and mobile applications",
      "Passionate about integrating AI-driven features into applications",
      "Strong problem-solving skills with a focus on real-world applications",
    ],

    mainSkills: [
      {
        icon: <FaReact className="text-cyan-400" />,
        title: "Full Stack Developer",
        description:
          "Experienced in building complete web applications using the MERN stack — from crafting dynamic frontends with React.js to developing secure, scalable backends with Node.js, Express, and MongoDB.",
      },
      {
        icon: <FaMobileAlt className="text-blue-400" />,
        title: "App Developer",
        description:
          "Skilled in cross-platform mobile application development using React Native and Flutter, delivering smooth, high-performance apps for both Android and iOS platforms.",
      },
      {
        icon: <FaBrain className="text-yellow-400" />,
        title: "AI Enthusiast",
        description:
          "Passionate about exploring Generative AI and Machine Learning, with practical experience integrating intelligent, AI-driven features into web and mobile applications.",
      },
      {
        icon: <FaCode className="text-purple-500" />,
        title: "Problem Solver",
        description:
          "Driven by curiosity and logical thinking, I enjoy breaking down complex problems and building innovative, real-world solutions through clean, efficient code.",
      },
    ],

    socialLinks: {
      github: {
        link: "https://github.com/varsha-2005",
        icon: <FaGithub className="text-white" />,
      },
      linkedIn: {
        link: "https://www.linkedin.com/in/varshag1702/",
        icon: <FaLinkedin className="text-blue-400" />,
      },
      twitter: {
        link: "https://x.com/VARSHAGNANA1702",
        icon: <FaTwitter className="text-blue-400" />,
      },

      leetcode: {
        link: "https://leetcode.com/u/Wj4KOSRLAN/",
        icon: <SiLeetcode className="text-yellow-400" />,
      },
    },

    education: {
      period: "2022 - 2026",
      course: "Btech in Artificial Intelligence and Data Science",
      college: "Saveetha Engineering College, Chennai",
      description:
        "Currently pursuing a Bachelor of Technology degree with a focus on software engineering, database systems, and mobile application development. Gained hands-on experience through academic projects and research work, developing a solid foundation in full-stack development and modern software practices.",
      skills: ["software engineering", "Database", "Development"],
      cgpa: "8.31",
    },

    internship: [
      {
        period: "June 2024 - July 2024",
        title: "Full Stack Development Intern (Python)",
        company: "Retech Solutions Pvt. Ltd., Chennai",
        description:
          "Successfully completed a 1-month full-stack development internship focused on Python and Django. Developed a Django-based Car Rental and Booking System with features for user authentication, car availability tracking, and booking management. Gained hands-on experience in backend development using Django, working with databases, and implementing CRUD operations. Improved understanding of MVC architecture, server-side logic, and RESTful API integration. Demonstrated strong problem-solving skills and collaborated with a team under industry guidance.",
        skills: [
          "Python",
          "Django",
          "MVC",
          "REST API",
          "CRUD",
          "Backend Development",
        ],
      },
    ],
    additionalStats: [
      {
        title: "Leetcode",
        value: "150+ problems solved",
        icon: <SiLeetcode className="text-yellow-400" />,
        description: "Competitive programming and algorithm practice",
        color: "amber",
      },
      {
        title: "GitHub",
        value: "50+ repositories",
        icon: <FaGithub className="text-gray-300" />,
        description: "Open-source contributions and personal projects",
        color: "gray",
      },
      {
        title: "Projects",
        value: "15+ completed",
        icon: <FaCode className="text-purple-500" />,
        description: "Diverse projects ranging from web apps to mobile apps",
        color: "purple",
      },
      {
        title: "Followers",
        value: "100+",
        icon: <FaLinkedin className="text-blue-400" />,
        description: "Professional network on LinkedIn",
        color: "blue",
      },
    ],
  },
};
