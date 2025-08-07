import {
  FaReact,
  FaCss3Alt,

  FaNodeJs,
  FaDatabase,
  FaAd,
  FaMobileAlt,
  FaGitAlt,
  FaGithub,
  FaCode,

  FaFigma,
  FaRobot,
  FaBrain,
  FaPiedPiper,
  FaHtml5,
  FaNode,
  FaJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { RiFirebaseFill, RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiPostman, SiTypescript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const skillsData = {
  skills: {
    language: [
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
      },
      {
        name: "Java",
        icon: <FaJava className="text-red-500" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-purple-500" />,
      },
      {
        name: "Python",
        icon: <FaPython className="text-green-400" />,
      },
      {
        name: "Dart",
        icon: <FaMobileAlt className="text-blue-400" />,
      },
      {
        name: "C",
        icon: <FaCode className="text-blue-500" />,
      },
    ],
    frontend: [
      {
        name: "React js",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Next js",
        icon: <RiNextjsLine className="text-cyan-400" />,
      },
      {
        name: "Tailwind CSS",
        icon: <FaCss3Alt className="text-blue-500" />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript className="text-purple-500" />,
      },
      {
        name: "HTML ",
        icon: <FaHtml5 className="text-gray-500" />,
      },
      {
        name: "JS",
        icon: <FaJs className="text-yellow-400" />,
      },
    ],
    backend: [
      {
        name: "Node js",
        icon: <FaNode className="text-green-500" />,
      },
      {
        name: "Express js",
        icon: <SiExpress className="text-green-500" />,
      },
      {
        name: "Firebase",
        icon: <RiFirebaseFill className="text-yellow-400" />,
      },
      {
        name: "FastAPI",
        icon: <FaPiedPiper className="text-green-400" />,
      },
      {
        name: "REST API",
        icon: <FaDatabase className="text-yellow-400" />,
      },
    ],
    app: [
      {
        name: "React Native",
        icon: <TbBrandReactNative className="text-blue-400" />,
      },
      {
        name: "Flutter",
        icon: <FaFlutter className="text-blue-400" />,
      },
    ],
    database: [
      {
        name: "MongoDB",
        icon: <FaDatabase className="text-green-500" />,
      },
      {
        name: "SQL",
        icon: <FaDatabase className="text-blue-500" />,
      },
      {
        name: "Firebase",
        icon: <RiFirebaseFill className="text-yellow-400" />,
      },
    ],
    tools: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub className="text-white" />,
      },
      {
        name: "VS Code",
        icon: <FaCode className="text-blue-400" />,
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400" />,
      },
      {
        name: "Figma",
        icon: <FaFigma className="text-pink-500" />,
      },
    ],
    ai: [
      {
        name: "Langchain",
        icon: <FaCode className="text-purple-400" />,
      },
      {
        name: "OpenAI",
        icon: <FaRobot className="text-green-400" />,
      },
      {
        name: "Hugging Face",
        icon: <FaBrain className="text-yellow-400" />,
      },
    ],
    skillProficiency: [
      {
        name: "React JS/React Native",
        icon: <FaReact className="text-cyan-400" />,
        level: 80,
      },
      {
        name: "Flutter",
        icon: <FaMobileAlt className="text-blue-400" />,
        level: 80,
      },
      {
        name: "Firebase",
        icon: <FaDatabase className="text-yellow-400" />,
        level: 80,
      },
      {
        name: "Express/Node",
        icon: <FaNodeJs className="text-green-500" />,
        level: 80,
      },
      {
        name: "FastAPI",
        icon: <FaAd className="text-pink-500" />,
        level: 80,
      },
      {
        name: "MongoDB",
        icon: <FaDatabase className="text-green-500" />,
        level: 80,
      },
      {
        name: "Langchain",
        icon: <FaCode className="text-purple-400" />,
        level: 80,
      },
    ],
  },
};
