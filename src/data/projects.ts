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
    title: "Sales Analytics Dashboard",
    summary: "An interactive sales analytics dashboard built with Streamlit.",
    detail:
      "An interactive sales analytics dashboard designed to explore sales performance, business KPIs, trends, and visual insights through interactive data visualizations. Completed as part of the Future Interns Data Science & Analytics internship.",
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Data Visualization"],
    image: "project-images/sales-analytics.svg",
    github: "https://github.com/manideepak018/Sales-Analytics-Dashboard",
    demo: "https://sales-analytics-dashboard-janzapdmwsewwmg3cozukn.streamlit.app/",
  },
  {
    title: "Customer Retention & Churn Analytics",
    summary: "A customer analytics dashboard for retention and churn patterns.",
    detail:
      "A customer analytics dashboard for exploring retention patterns, churn behavior, customer segments, and subscription-related trends. Completed as part of the Future Interns Data Science & Analytics internship.",
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Customer Analytics"],
    image: "project-images/churn-analytics.svg",
    github: "https://github.com/manideepak018/CustomerRetentionsChurnAnalytics",
    demo: "https://customerretentionschurnanalytics-dyb4wz6j9vewgetbashbpg.streamlit.app/",
  },
  {
    title: "Marketing Funnel Conversion Analytics",
    summary: "An interactive funnel dashboard for conversion stages and drop-offs.",
    detail:
      "An interactive marketing funnel dashboard that analyzes conversion stages, drop-offs, channel performance, device performance, and lead journeys. Completed as part of the Future Interns Data Science & Analytics internship.",
    tags: ["Python", "Streamlit", "Pandas", "Plotly", "Funnel Analytics"],
    image: "project-images/marketing-funnel.svg",
    github: "https://github.com/manideepak018/MarketingFunnelConversionAnalytics",
    demo: "https://marketingfunnelconversionanalytics-udidpsde7uukbcw8qd4w6g.streamlit.app/",
  },
  {
    title: "Diabetes Risk Prediction",
    summary: "A Flask app that scores diabetes risk from health inputs.",
    detail:
      "Trained a Random Forest classifier on the Pima Indians dataset, handled missing values and scaled the features, then served the saved model through a Flask form. Entering values like glucose, BMI and age returns a prediction with the model's confidence.",
    tags: ["Python", "Flask", "scikit-learn", "pandas"],
    image: "project-images/diabetes.png",
    github: "https://github.com/manideepak018/DiabetesPrediction",
    demo: "https://diabetes-prediction-three-brown.vercel.app/",
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
    title: "Digital Library",
    summary: "A browsable catalogue of books for a college library.",
    detail:
      "A React front end for searching and filtering a book collection by title, author and category, with a detail view for each book. Built while learning component state and list rendering.",
    tags: ["React", "JavaScript", "CSS"],
    image: "project-images/digital-library.png",
  },
];
