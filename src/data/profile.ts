export const profile = {
  name: "Gara Manideepak",
  shortName: "Deepak",
  role: "B.Tech CSE student",
  location: "Visakhapatnam, Andhra Pradesh",
  email: "manideepak977@gmail.com",
  github: "https://github.com/manideepak018",
  linkedin: "https://www.linkedin.com/in/gara-manideepak-48823631a",
  resume: "resume.pdf",
  photo: "profile.png",
  intro:
    "I'm a second-year Computer Science student at Raghu Engineering College. I build full-stack web apps with React and Node, and train models with Python and scikit-learn. Most of what I know has come from building projects and from internships in data science and machine learning.",
  available: "Open to internships",
};

/** Prefixes a path in /public with Vite's base URL so assets work anywhere. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
