export interface Project {
  title: string;
  summary: string;
  detail: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Sales Performance Analysis | Future Interns Task 1",
    summary: "An exploratory sales analytics project focused on business performance.",
    detail:
      "Analyzes sales data to surface performance patterns across products and regions. The repository includes the analysis, charts, and project documentation. Open the project repository to explore the actual outputs and methodology.",
    tags: ["Python", "pandas", "Data Visualization", "Sales Analytics"],
    image: "project-images/sales-analytics.svg",
    github: "https://github.com/manideepak018/FUTURE_DS_01",
  },
  {
    title: "Customer Retention & Churn | Future Interns Task 2",
    summary: "A customer analytics project exploring churn, retention, and customer value.",
    detail:
      "Explores customer churn and retention patterns, including customer value analysis. The project uses synthetic customer data, clearly documented in the repository, with charts, exported analysis files, and dashboards.",
    tags: ["Python", "pandas", "Churn Analysis", "Retention", "CLV"],
    image: "project-images/churn-analytics.svg",
    github: "https://github.com/manideepak018/FUTURE_DS_02",
  },
  {
    title: "Online Voting System",
    summary: "A web app for running a small election end to end.",
    detail:
      "Voters sign in, cast one vote, and see results once polling closes. An admin page handles candidates and opens or closes the election. Built with React on the front end and Node, Express and MongoDB on the back end, with JWT for sessions.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "project-images/online-voting.png",
    github: "https://github.com/manideepak018/Online-Voting-System",
  },
  {
    title: "Diabetes Risk Prediction",
    summary: "A Flask app that scores diabetes risk from health inputs.",
    detail:
      "Trained a Random Forest classifier on the Pima Indians dataset, handled missing values and scaled the features, then served the saved model through a Flask form. Entering values like glucose, BMI and age returns a prediction with the model's confidence.",
    tags: ["Python", "Flask", "scikit-learn", "pandas"],
    image: "project-images/diabetes.png",
    github: "https://github.com/manideepak018/Diabetes-Prediction",
  },
  {
    title: "Digital Library",
    summary: "A browsable catalogue of books for a college library.",
    detail:
      "A React front end for searching and filtering a book collection by title, author and category, with a detail view for each book. Built while learning component state and list rendering.",
    tags: ["React", "JavaScript", "CSS"],
    image: "project-images/digital-library.png",
  },
];
