export interface Experience {
  role: string;
  org: string;
  period: string;
  points: string[];
  certificate?: { label: string; href: string; credentialId?: string };
}

export const experience: Experience[] = [
  {
    role: "Data Science & Analytics Intern",
    org: "Future Interns",
    period: "Sep – Oct 2026 · 1 month",
    points: [
      "Completed a one-month internship program in Data Science & Analytics.",
      "Related analytics work: sales performance, customer retention and churn, and marketing funnel conversion dashboards.",
    ],
    certificate: {
      label: "View certificate",
      href: "certificates/future-interns-certificate.pdf",
      credentialId: "CIN: FIT/SEP26/DS23554",
    },
  },
  {
    role: "Data Science & AI/ML Trainee",
    org: "Grafx IT Solutions",
    period: "Nov 2025 – May 2026",
    points: [
      "Six-month industrial training in Python for data science.",
      "Worked through data cleaning, visualisation and model building with pandas, NumPy and scikit-learn.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "Pinnacle Industries",
    period: "Aug – Sep 2025",
    points: [
      "Built a sentiment analysis model on customer review text.",
      "Handled text preprocessing, feature extraction and model evaluation.",
    ],
  },
  {
    role: "Cybersecurity Job Simulation",
    org: "Deloitte (Forage)",
    period: "Jul 2025",
    points: ["Completed a guided simulation on log analysis and incident response."],
  },
  {
    role: "Python Summer Intern",
    org: "APSSDC",
    period: "May – Jun 2025",
    points: [
      "Covered Python fundamentals and object-oriented programming.",
      "Wrote small console applications as practice exercises.",
    ],
  },
];
