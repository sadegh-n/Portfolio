export const siteConfig = {
  name: "Sadegh Nassiri",
  title: "Data Engineer",
  description: "Portfolio website of Sadegh Nassiri",
  accentColor: "#1d4ed8",
  social: {
    email: "sadeghn@uci.edi",
    linkedin: "https://linkedin.com/in/sadegh-nassiri",
    github: "https://github.com/sadegh-n",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["Python", "SQL", "AWS", "Snowflake", "dbt", "Terraform", "Github", "Power BI", "Excel"],
  projects: [
    {
      name: "Project 1",
      description:
        "tbd",
      link: "tbd",
      skills: ["skill", "skill", "skill"],
    },
    {
      name: "Project 2",
      description:
        "tbd",
      link: "tbd",
      skills: ["skill", "skill", "skill"],
    },
    {
      name: "Project 3",
      description:
        "tbd",
      link: "tbd",
      skills: ["skill", "skill", "skill"],
    },
  ],
  experience: [
    {
      company: "H&S Energy Group",
      title: "Operations Analyst",
      dateRange: "June 2025 - Present",
      bullets: [
        "Engineered automated ETL pipelines using Python (pandas) to ingest raw JSON data from third-party APIs, handling null values and type-casting errors before loading data into SQL Server",
        "Conducted Exploratory Data Analysis (EDA) on transactional datasets to detect outliers in utility spending, identifying a 15% billing discrepancy that led to immediate cost recovery",
        "Optimized legacy SQL stored procedures by analyzing execution plans and adding appropriate indexing, reducing daily report generation time from 20 minutes to 3 minutes",
        "Established Data Governance protocols by creating a ’Data Dictionary’ for the operations team, defining standardized metrics for ’Yield’ and ’Profit’ to ensure consistent reporting across departments",
        "Translate complex technical findings into clear business narratives, presenting weekly performance dashboards to the CFO and VP of Operations to support capital allocation decisions",
        "Championed the adoption of Power BI within the operations team, conducting training sessions to upskill non-technical colleagues on self-service analytics and dashboard usage"
      ],
    },
    {
      company: "Irvine Dermatology",
      title: "Data Analyst",
      dateRange: "March 2024 - April 2025",
      bullets: [
        "Performed extensive data wrangling on raw patient logs, utilizing SQL CTEs to normalize inconsistent naming conventions and standardize address formats for geographical analysis.",
        "Led EDA sessions on historical patient appointment data, uncovering seasonality trends in dermatological procedure volume that informed staffing schedules",
        "Wrote complex SQL queries involving window functions and nested subqueries to calculate patient retention rates and lifetime value (LTV).",
        "Implemented automated Data Quality Assurance (QA) scripts that flagged missing insurance fields (CPT/ICD-10) prior to claim submission, reducing denial rates",
        "Presented monthly ’State of the Practice’ reports to physician partners, visualizing operational bottlenecks and proposing data-driven workflow changes",
        "Proactively self-taught Python automation libraries to replace manual data entry tasks, subsequently training administrative staff on the new automated workflow"
      ],
    }
  ],
  education: [
    {
      school: "Georgia Institute of Technololgy",
      degree: "Master of Science in Analytics",
      dateRange: "2025-2027",
      achievements: [
        "Relevant Coursework: Analytical Models, Computational Data Analysis, Simulation, Data and Visual Analytics"
        ]
    },
    {
      school: "University of California, Irivne",
      degree: "Bachelor of Science in Data Science",
      dateRange: "2020-2024",
      achievements: [
        "Relevant Coursework: Statistical Methods for Data Analysis, Machine Learning and Data Mining, Design and Analysis of Algorithms, Information Visualization, Beyond SQL Data Management"
      ],
    },
  ],
};
