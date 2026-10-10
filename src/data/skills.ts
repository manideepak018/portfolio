export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["Python", "Java", "JavaScript", "C", "SQL"] },
  { title: "Frontend", skills: ["React", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "Express", "Flask", "REST APIs"] },
  { title: "Data & ML", skills: ["pandas", "NumPy", "scikit-learn", "Matplotlib"] },
  { title: "Databases", skills: ["MongoDB", "MySQL"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Jupyter"] },
];
