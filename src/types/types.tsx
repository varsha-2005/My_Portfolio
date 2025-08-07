import React, { JSX } from "react";
export interface Project {
  id: string | number;
  title: string;
  image?: string;
  link?: string;
  category: string;
}

export interface ProjectCardProps {
  project: Project;
  key: string | number;
}

export interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
  icon: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  isEducation?: boolean;
}

export interface StarData {
  size: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

export type Skill = {
  name: string;
  icon: JSX.Element;
  level: number;
};

export type SkillCardColor = "blue" | "purple" | "teal";

export interface SkillCardProps {
  skill: Skill;
  color?: SkillCardColor;
}

export interface CertificationProps {
  title: string;
  institution: string;
  date: string;
  description: string;
  skills: string[];
  icon: JSX.Element;
  link?: string;
  linkText?: string;
}

export interface StatsCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  description: string;
  color: ColorType;
}
export type ColorType = "blue" | "amber" | "gray" | "purple" | "green";
export interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}