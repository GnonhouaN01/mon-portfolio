export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "TailwindCSS", level: 90 },
      { name: "Redux", level: 80 }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "Django", level: 70 },
      { name: "Laravel", level: 65 }
    ]
  },
  {
    name: "Outils",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Jest", level: 80 },
      { name: "Webpack", level: 75 },
      { name: "Figma", level: 70 }
    ]
  }
];