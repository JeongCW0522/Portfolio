export const frontendSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Tailwind CSS", level: 85 },
];

export const backendSkills = [
  { name: "Node.js", level: 40 },
  { name: "Express", level: 30 },
  { name: "Python", level: 25 },
  { name: "MySQL", level: 30 },
  { name: "Redis", level: 20 },
  { name: "Proxy", level: 20 },
];

export const toolSkills = [
  { name: "GitHub", level: 75 },
  { name: "Docker", level: 40 },
  { name: "VS Code", level: 80 },
  { name: "Figma", level: 30 },
  { name: "Discode", level: 100 },
  { name: "Notion", level: 95 },
];

export const cloudSkills = [
  { name: "AWS", level: 60 },
  { name: "Vercel", level: 70 },
  { name: "Netlify", level: 10 },
];

export const skillCards = [
  {
    title: "Frontend",
    color: "from-purple-500 to-pink-500",
    hoverColor: "hover:border-purple-500",
    skills: frontendSkills,
  },
  {
    title: "Backend",
    color: "from-green-400 to-green-600",
    hoverColor: "hover:border-green-400",
    skills: backendSkills,
  },
  {
    title: "Cloud",
    color: "from-blue-400 to-blue-600",
    hoverColor: "hover:border-blue-500",
    skills: cloudSkills,
  },
  {
    title: "Tools",
    color: "from-orange-400 to-orange-600",
    hoverColor: "hover:border-orange-500",
    skills: toolSkills,
  },
];
