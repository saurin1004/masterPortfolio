/* Change this file to get your personal Porfolio */
import { SiLeetcode } from "react-icons/si";
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Saurin's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Saurin Prajapati Portfolio",
    type: "website",
    url: "https://saurin1004.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Saurin Prajapati",
  logo_name: "SaurinPrajapati",
  nickname: "",
  subTitle: "M.S. Computer Science at ASU",
  resumeLink:
    "https://drive.google.com/file/d/1ugEpYTjMbdkCfCk1bdDl4KCmOfJe0QUk/view",
  asuProfile: "https://search.asu.edu/profile/5094956",
  portfolio_repository: "https://github.com/saurin1004/masterPortfolio",
  githubProfile: "https://github.com/saurin1004",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/saurin1004",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/saurin-prajapati/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:SaurinPrajapati98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Hackerrank",
    link: "https://www.hackerrank.com/profile/saurinprajapati",
    fontAwesomeIcon: "fa-hackerrank", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#2cc464", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/saurin1004/",
    reactIcon: SiLeetcode, // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#eba340", // Reference https://simpleicons.org/?q=hackerrank
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Use Java and Spring Boot to build RESTful backend services that connect to databases like Postgres with JDBC. Expose APIs for the frontend.",
        "• Build interactive user interfaces with React. Use JavaScript, HTML, and CSS for frontend code.",
        "• Use tools like Jira, Git, Docker, Postman, SonarQube, and Agile practices for project management, testing, deployment, and quality assurance.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#007A8C",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "JUnit5",
          fontAwesomeClassname: "simple-icons:junit5",
          style: {
            color: "#25A16F",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "• Build data pipelines with Python, Pandas, NumPy, scikit-learn, and XGBoost for preprocessing, model training, tuning, and validation.",
        "• Develop predictive modeling solutions for credit-risk analysis using logistic regression, feature engineering, variable transformation, and customer-level banking data.",
        "• Create ETL workflows and modeling marts with SQL, SAS, and Python to transform demographic, CASA, loan, and transactional datasets into analytics-ready data.",
        "• Perform exploratory analysis, data quality checks, correlation analysis, and model evaluation to deliver business insights and stakeholder-ready outputs.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            backgroundColor: "white",
            color: "#FF6B00",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "ProgrammingLanguagesImg",
      skills: [
        "• I have extensively used Java, Python, and JavaScript on projects. I have experience coding in Java for over five years, Python for over four years, and JavaScript for two years.",
        "• I understand the fundamentals of SQL and have used OracleDB, Postgres, MySQL, and Microsoft SQL Server in projects at Sutra Management.",
        "• I have used Base SAS for data analysis and modeling projects at Sutra Management.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "devicon:c",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "PostgresSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "OracleDB",
          fontAwesomeClassname: "logos:oracle",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Microsoft SQL Server",
          fontAwesomeClassname: "devicon-plain:microsoftsqlserver-wordmark",
          style: {
            color: "#e6283b",
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
          style: {
            width: "48px",
            height: "48px",
          },
        },
        {
          skillName: "Base SAS",
          fontAwesomeClassname: "material-icon-theme:sas",
          style: {
            width: "48px",
            height: "48px",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/saurin1004/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/saurinprajapati",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arizona State University",
      subtitle: "Master of Science in Computer Science",
      logo_path: "asu_logo.png",
      alt_name: "ASU",
      duration: "2024 - 2026",
      gpa: "4.00/4.00",
      descriptions: [
        "Coursework:",
        "• CSE 512 - Distributed Database Systems",
        "• CSE 539 - Applied Cryptography",
        "• CSE 540 - Engineering Blockchain Applications",
        "• CSE 545 - Software Security",
        "• CSE 546 - Cloud Computing",
        "• CSE 559 - Algorithms in Computational Biology",
        "• CSE 565 - Software Verification/Validation/Testing",
        "• CSE 572 - Data Mining",
        "• CSE 575 - Statistical Machine Learning",
        "• CSE 578 - Data Visualization",
      ],
      website_link: "https://www.asu.edu/",
    },
    {
      title: "Institute of Technology, Nirma University",
      subtitle: "Bachelor of Technology in Computer Science and Engineering",
      logo_path: "nirma_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      gpa: "8.14/10.00",
      descriptions: [
        "Relevant Coursework:",
        "• 2CS 301 - Data Structures and Algorithms",
        "• 2CS 302 - Object Oriented Programming",
        "• 2CS 303 - Digital Electronics",
        "• 2CS 401 - Computer Architecture",
        "• 2CS 402 - Database Management Systems",
        "• 2CS 403 - Operating Systems",
        "• 2CS 404 - Programming for Scientific Computing",
        "• 2CS 405 - Web Technologies",
        "• 2CS 501 - Machine Learning",
        "• 2CS 502 - Computer Networks",
        "• 2CS 503 - Design and Analysis of Algorithms",
        "• 2CS 504 - Software Engineering",
        "• 2CS 601 - Theory of Computation",
        "• 2CS 701 - Compiler Construction",
        "• 2CS 702 - Big Data Analytics",
        "• 2CSDE 55 - Agile Software Development",
        "• 2CSDE 67 - Cloud Computing",
        "• 2CSDE 71 - Data Mining",
        "• 2CSDE 80 - Software Testing and Quality Assurance",
        "• 2CSDE 93 - Blockchain Technology",
      ],
      website_link: "https://technology.nirmauni.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://coursera.org/share/b3068e0c50250f04b4e85cd52b15b77a",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/bd97c97263dcca16aad0a19c22529411",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://coursera.org/share/8291006724d0b3d78247bb9148501849",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Data Ecosystem",
      subtitle: "- Tableau Learning Partner",
      logo_path: "tableau_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/JL1W8DKRIH2G",
      alt_name: "deeplearning.ai",
      color_code: "#89D4FF",
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle: "- Rav Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/267208b99cec22489b757a7574e13356",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Tableau",
      subtitle: "- Tableau Learning Partner",
      logo_path: "tableau_logo.png",
      certificate_link:
        "https://coursera.org/share/eb340105fb6eb6864e75e9c64efc4ce4",
      alt_name: "Google",
      color_code: "#89D4FF",
    },
    {
      title: "Python",
      subtitle: "- Harishankaran K",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/acca8c793e98",
      alt_name: "Hackerrank",
      color_code: "#9AD872",
    },
    {
      title: "Algorithmic Toolbox",
      subtitle: "- Alexander S. Kulikov",
      logo_path: "uc_san_diego_logo.png",
      certificate_link:
        "https://coursera.org/share/39b81674792ba917aba9d22fa335cd0a",
      alt_name: "IBM",
      color_code: "#2C5EAD",
    },
    {
      title: "Problem solving",
      subtitle: "- Harishankaran K",
      logo_path: "hackerrank_logo.png",
      certificate_link: "https://www.hackerrank.com/certificates/acca8c793e98",
      alt_name: "Hackerrank",
      color_code: "#9AD872",
    },
    {
      title: "Python Training",
      subtitle: "- Kannan M Moudgalya",
      logo_path: "iit_bombay_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1mXBaCrZEoUtJVuyyFUzzLYyiwYFnzI-s/view?usp=sharing",
      alt_name: "IIT Bombay",
      color_code: "#CFECF3",
    },
    {
      title: "Complete A.I. & Machine Learning, Data Science Bootcamp",
      subtitle: "- Andrei Neagoie",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-fa8206f4-4fc8-445d-90a7-fb3f6a870153/",
      alt_name: "Udemy AI & ML Bootcamp",
      color_code: "#ffffff",
    },
    {
      title: "C Training",
      subtitle: "- Kannan M Moudgalya",
      logo_path: "iit_bombay_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XlR7xz21LJKaCmF9S7br3zwERrcjmFcm/view?usp=sharing",
      alt_name: "IIT Bombay",
      color_code: "#CFECF3",
    },
    {
      title: "The Complete Full-Stack Web Development Bootcamp",
      subtitle: "- Dr. Angela Yu",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-80006468-bcce-4a75-a698-d815a4a8355a/",
      alt_name: "Udemy Full-Stack Web Development Bootcamp",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work and Internships",
      work: true,
      experiences: [
        {
          title: "Software Engineer I",
          company: "Sutra Management",
          company_url: "https://sutra-management.com/",
          logo_path: "sutra_logo.png",
          duration: "July 2023 - July 2024",
          location: "Ahmedabad, India | Hanoi, Vietnam | Dubai, UAE",
          description:
            "As a Software Engineer I at Sutra Management, I worked on backend systems and data pipelines for healthcare and banking platforms used by enterprise clients. My role involved designing and developing ETL data pipelines and dashboards using the SAS ecosystem, Python, and SQL, along with building scalable backend services using Spring Boot and REST APIs. I worked with PostgreSQL  and OracleDB to design database schemas, optimize queries, and support transaction-heavy applications. I also implemented role-based access control and secure authentication flows, and collaborated with cross-functional Agile teams to deliver production-ready software.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Sutra Management",
          company_url: "https://sutra-management.com/",
          logo_path: "sutra_logo.png",
          duration: "January 2023 - June 2023",
          location: "Ahmedabad, India | Noida, India",
          description:
            "As a Software Engineer Intern at Sutra Management, I worked on a behavioral credit risk scorecard project for an unsecured personal loan portfolio. My responsibilities focused on backend data processing, credit risk model development, and feature selection for the scorecard model. I helped prepare and validate customer-level datasets using demographic, banking, CASA, and loan data, and supported the creation of modeling marts across observation and performance windows. I contributed to building a logistic regression PD scorecard to identify likely defaulters, while working with Python, SQL, and automated feature engineering workflows to perform data quality checks, variable transformations, correlation analysis, and model validation. As part of the project, I collaborated with subject matter experts to debug data issues, prepare production deployment artifacts, and present final model outputs and business insights to senior stakeholders.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern - AI/ML",
          company: "Tecblic",
          company_url: "https://tecblic.com/",
          logo_path: "tecblic_logo.png",
          duration: "June 2022 - July 2022",
          location: "Ahmedabad, India",
          description:
            "As a Software Engineer Intern focused on AI/ML at Tecblic, I worked on machine learning pipelines using Python and XGBoost. My responsibilities included preparing and preprocessing datasets, tuning machine learning models, and improving the reliability of model training workflows. I collaborated with engineering teams to debug backend processing issues, improve code maintainability, and support production-oriented ML development. This experience strengthened my understanding of applied machine learning, data preprocessing, and collaborative software development.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "If you have any questions or would like to reach out, please send a mail to @gmail.com.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.SaurinPrajapati.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Tempe, AZ, USA 85281",
    locality: "Tempe",
    country: "USA",
    region: "Arizona",
    postalCode: "85281",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Arizona+State+University/@33.4254065,-111.9314733,17z/data=!4m7!3m6!1s0x872b08db3b33540f:0x666e717f473c3033!8m2!3d33.4267153!4d-111.9292583!15sChhBcml6b25hIFN0YXRlIFVuaXZlcnNpdHlaGiIYYXJpem9uYSBzdGF0ZSB1bml2ZXJzaXR5kgERcHVibGljX3VuaXZlcnNpdHngAQA!16zL20vMHRydg?entry=tts",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
