/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vignesh's Portfolio",
  description:
    "Engineering is an artform that can enhance lives. I'm a proud, passionate and perseverant computer science engineer who has holistically explored many fields like Web Development, DevOps, Machine Learning, and Distributed Computing. I've received my true calling from Research and Development in Artificial Intelligence and want to pursue it to the deepest depths.",
  og: {
    title: "Vignesh S Portfolio",
    type: "website",
    url: "http://trevahok.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Vignesh Srinivasakumar",
  logo_name: "Vignesh S",
  nickname: "Trevahok",
  subTitle: "Coding is an artform that can enhance lives.",
  resumeLink:
    "https://www.icloud.com/iclouddrive/0Bt6_QAFQ2V3cwSrzq8nofHgQ#Vignesh_S._resume",
  portfolio_repository: "https://github.com/trevahok/masterPortfolio",
  githubProfile: "https://github.com/Vignesh1919",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/trevahok",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/trevahok/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:vighneshss@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/trevahok/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
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
      ],
    },
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
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
        color: "#f89f1b",
      },
      profileLink: "https://www.leetcode.com/trevahok",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/trevahok",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/trevahok",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@vighneshss",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vellore Institute of Technology, Chennai",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "vitc.png",
      alt_name: "VITC",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have chosen Electives such as Machine Learning, High Performance Computing, Parallel and Distributed Computing and Large Scale Data Processing passionately.",
      ],
      website_link: "http://chennai.vit.ac.in",
    },
    {
      title: "Alwin Memorial Public School, Chennai",
      subtitle: "High School Diploma",
      logo_path: "alwin.png",
      alt_name: "AMPS",
      duration: "2013 - 2017",
      descriptions: [
        "⚡12th grade: Scored 95% in CBSE and Ranked 2nd Schoolwide",
        "⚡10th grade: 10CGPA in CBSE",
      ],
      website_link: "http://alwinmemorialpublicschool.com",
    },
  ],
};

const events = {
  events: [
    {
      title: "Appreciation from PM of India Narendra Modi",
      subtitle: "Toycathon",
      logo_path: "toycathon.jpg",
      event_link:
        "https://www.coursera.org/account/accomplishments/certificate/GP3SP2WQVVVW",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/GP3SP2WQVVVW",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Deep Learning",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/NJK3M8HTEBR5",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ZJZDWUL9DMV7",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Sequence Models",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/WJ4JP3ZF9PPG",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title:
        "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/QANE8YGLSX74",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/TR6RGJNFWAJW",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/7X9P8VETUWEQ",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "Coursera",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/RVK5UE4ADVT4",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Neo4j Certified Professional",
      subtitle: "Neo4j",
      logo_path: "neo4j.png",
      certificate_link:
        "https://graphacademy.neo4j.com/certificates/0b3b1ba7f4cd6e244fa8ed1cd619913da4d1bdcaf6beadb112ca9fcfe891a400.pdf",
      alt_name: "Coursera",
      color_code: "#9AAAAA",
    },
    {
      title: "PayPal VAP certification on REST API fundamentals",
      subtitle: "PayPal",
      logo_path: "paypal.png",
      certificate_link: "",
      alt_name: "PayPal",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've worked with budding startups and fortune 500 companies in Web Dev, DevOps and Data Analytics. Each shapeď me into a better engineer and a better person. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software Engineer 2",
          company: "PayPal, Chennai",
          company_url: "https://www.paypal.com/",
          logo_path: "paypal.png",
          duration: "Aug 2022 - PRESENT",
          location: "Chennai, Tamil Nadu",
          description:
            "Worked with Spring Boot, ExpressJS, Spring Reactor, Message Queues, CloudEvents, and OpenAPI for key initiatives for the Japan Market as part of Growth Market team.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer 1",
          company: "PayPal, Chennai",
          company_url: "https://www.paypal.com/",
          logo_path: "paypal.png",
          duration: "Aug 2021 - PRESENT",
          location: "Chennai, Tamil Nadu",
          description:
            "Worked with Spring Boot, ExpressJS, Spring Reactor, Message Queues, CloudEvents, and OpenAPI for key initiatives for the Japan Market as part of Growth Market team.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer Intern",
          company: "PayPal, Chennai",
          company_url: "https://www.paypal.com/",
          logo_path: "paypal.png",
          duration: "Feb 2021 - Aug 2021",
          location: "Chennai, Tamil Nadu",
          description:
            "Createď PayPal Playground to test different types of merchant integrations in the browser without installation.",
          color: "#0879bf",
        },
        {
          title: "Software Engineer Intern",
          company: "Guvi Geek Networks, Chennai",
          company_url: "https://www.guvi.in/",
          logo_path: "guvi.png",
          duration: "May 2019 - June 2019",
          location: "Chennai, Tamil Nadu",
          description:
            "Created Dashboard Analytics and Adaptive Learning Algorithm called ARC which helps learners with a non-standardized tests that adapts to the user's current learning level. https://www.guvi.in/micro-arc",
          color: "#9b1578",
        },
        {
          title: "DevOps Engineer Intern",
          company: "Nurtem, fremont",
          company_url: "https://www.nurtem.com/",
          logo_path: "nurtem.png",
          duration: "Apr 2019 - May 2019",
          location: "Chennai, Tamil Nadu",
          description:
            "Worked on Kubernetes, Docker containers along with CI/CD pipelines using Spinnaker and Jenkins to automate deployment process of the startup's workflow consisting of ReactJS server, Jenkins Test suite along with Django backend on Google Cloud Platform.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Website Lead for PayPal-wide Tournament",
          company: "PayPal",
          logo_path: "paypal.png",
          description:
            "Innovation@PayPal community's star-event, Global Innovation Tournament's website lead for 2022 tournament leading 4 developers and creating a new format for the tournament.",
          color: "#4285F4",
        },
        {
          title: "Mentor",
          company: "PayPal",
          logo_path: "paypal.png",
          description:
            "For 6 interns and gave orientation speech for over 200 new graduates at PayPal",
          color: "#D83B01",
        },
        {
          title: "Main Organizer",
          company: "VIT",
          logo_path: "vitc.png",
          description:
            "VIT's Inter-College Hackathon called Not-a-thon during TechnoVIT TechFest.",
          color: "#000000",
        },
        {
          title: "Alumnus Guest Lecturer",
          company: "VIT",
          logo_path: "vitc.png",
          description:
            "Gave a guest lecture VIT Chennai in 2022 for Object Oriented Programming",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects, Publications and Patents",
  description:
    "My projects makes use of vast variety of latest technology tools. I strongly believe research is the key to any great outcome.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "AI based Diet Management using IoT system - App. No. 202041031475",
      createdAt: "Issued on Jul 31,2020",
      description:
        "An AI based diet management system to monitor, track and correct diet using an hand-held IoT device. Written on Artificial Intelligence published in xyz ",
      url:
        "https://ipindiaservices.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Application of NeuroEvolution in Autonomous Cars",
      createdAt: "International Virtual Conference on Industry 4.0 ",
      description:
        "Research on the application of NeuroEvolution in self driving cars simulated using Unreal Environment and NEAT algorithm.",
      url: "https://link.springer.com/chapter/10.1007/978-981-16-1244-2_26",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyCze=",
      name: "An alternative C++-based HPC system for Hadoop MapReduce",
      createdAt: "DeGruyter's Open Computer Science Journal",
      description:
        "Research on C++-based HPC system for MapReduce paradigm to implement Machine Learning algorithms.",
      url:
        "https://www.degruyter.com/document/doi/10.1515/comp-2022-0246/html?lang=en",
    },
    {
      id: "MDEwOlJlcG9zaXRdcnkyNDU0NjcyCze=",
      name:
        "Deep Residual Network based food recognition for enhanced Augmented Reality application",
      createdAt: "Arxiv",
      description:
        "Deep ResNet based food recognition and classification to best suit its use in AR apps.",
      url: "https://arxiv.org/ftp/arxiv/papers/2005/2005.04292.pdf",
    },
    {
      id: "MDEeOlJlcG9zaXRdcnkyNDU0NjcyCze=",
      name: "Reinforcement Learning based self-driving car",
      createdAt: "",
      description:
        "Stable Baselines trained autonomous driving car that works with 2D visual input in a virtual environment.",
    },
    {
      id: "MDEeOlJlcG9zaXRdcnkyNDU0NjcyCze=",
      name: "Recommendation engine",
      createdAt: "",
      description:
        "SentenceTransformer based recommendation engine that can suggest ideas based on category and filters for text based content. Product based filtering using Jaccard's similarity index and collaborative filtering based recommendations for movies and foods.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze=",
      name: "NotFFCS",
      createdAt: "",
      description:
        "Notffcs is a college helper app that helps manage attendance, marks, timetable, notifications and class information all from an app instead of visiting the official website. It had 1.5k users at its peak.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze=",
      name: "Block Based Voting",
      createdAt: "",
      description:
        "A prototype using pure python implementation of a blockchain based decentralised network for safe elections using custom flooding and consensus protocols",
    },
  ],
};

const achievementsHeader = {
  title: "Achievements",
  description: "Some of my most notable achievements",
  avatar_image_path: "projects_image.svg",
};
const achievements = {
  data: [
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Appreciation from PM of India Narendra Modi - Toycathon 2021",
      createdAt: "",
      description:
        " VR environment that teaches Yoga and corrects your pose using AI based on PoseNet.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Smart India Hackathon 2020 - National Grand Finalist",
      createdAt: "",
      description:
        "Developed a PoseNet based Yoga AI instructor to monitor and correct learning experience in real-time in a VR environment.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Smart India Hackathon 2019 - National Level - Grand Finalist",
      createdAt: "",
      description:
        " Developed an automation process for medicine processing instruments data using Python.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Venmo Ideathon 2022 - First Place",
      createdAt: "",
      description:
        "Best presentation for an ideathon to improve Venmo experience.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "SRM HackSummit - First Place",
      createdAt: "",
      description:
        "Developed an AI based diagnostic solution to assist doctors quickly identify and elevate serious cases using Image Processing CNNs using Python",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Renaissance Startup Hackathon 2019 - First Place",
      createdAt: "",
      description:
        "Developed a Facial Feature Tracking based Driver alertness assistant with interactive dashboard for Ride hailing companies.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: " Microsoft Innovation Club Hackathon 2019 - Second Place",
      createdAt: "",
      description:
        "Developed self-driving racing car using Lidar inputs and NEAT genetic algorithm in a virtual environment.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Valeo Codeathon 2019 - First Place",
      createdAt: "",
      description:
        "Developed a lab experiment assistant tool that provides an interface to create and generate worksheets and PDFs.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Valeo Codeathon 2020 - First Place",
      createdAt: "",
      description:
        " Developed a code debugging helper that can tag and generate GitHub issues from code compilations and runtimes.",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "Invente TechFest at SSN University",
      createdAt: "",
      description:
        "First Place in Web-a-holic & First Place in Competitive programming competition ",
    },
    {
      id: "MDEeflJlcG9zaXRdcnkyNDU0NjcyCze",
      name: "University rank 2",
      createdAt: "",
      description:
        "Python Spoken Tutorial at Vellore Institute of Technology, Chennai.",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "vignesh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@trevahok",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle: "",
    avatar_image_path: "",
    location_map_link: "",
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
  events,
  achievements,
  achievementsHeader,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
