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
    url: "http://SaurinPrajapati.com/",
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
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
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
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
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
      title: "C Training",
      subtitle: "- Kannan M Moudgalya",
      logo_path: "iit_bombay_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1XlR7xz21LJKaCmF9S7br3zwERrcjmFcm/view?usp=sharing",
      alt_name: "IIT Bombay",
      color_code: "#CFECF3",
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
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
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
