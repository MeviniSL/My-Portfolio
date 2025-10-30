import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp"; 
import project6 from "../assets/projects/project-6.webp";

import ex_img1 from "../assets/ex1.jpg"
import ex_img2 from "../assets/ex2.jpg"
import ex_img3 from "../assets/ex3.jpg"
import ex_img4 from "../assets/ex4.jpg"
import ex_img5 from "../assets/ex5.jpg"
import { image } from "framer-motion/client";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
   {
    year: "2024",
    role: "1. Semi-Finalist – PearlHack V3.0 (Designthon)",
    image:ex_img1,
    description: `Our team Vivi’s Visions was honored to be selected as Semi-Finalists in PearlHack V3.0, a designathon organized by the IEEE WIE Student Branch of SUSL. This event challenged participants to combine creativity and design thinking to solve real-world problems through technology-driven solutions. Throughout the competition, I gained hands-on experience in design strategy, UI/UX thinking, and collaborative problem-solving, all of which strengthened my passion for creative innovation in technology.`,
  },
  {
    year: "2024",
    role: "2. Vice Secretary – IEEE Computer Society Student Chapter, SUSL (2024/25)",
    image:ex_img2,
    description: `I served as the Vice Secretary of the first-ever IEEE Computer Society Executive Committee at Sabaragamuwa University of Sri Lanka. In this pioneering role, I contributed to event coordination, planning, and member engagement activities. Working alongside a dedicated team, I helped organize workshops, awareness sessions, and collaborative programs that promoted innovation, knowledge sharing, and professional development among computer science students.`,
  },
   {
    year: "2025",
    role: "3. Our First Event– “Connect with CS” Awareness Session",
    image:ex_img3,
    description: `As part of the IEEE Computer Society Chapter at SUSL, our team organized “Connect with CS”, an awareness session designed to introduce students to the value and opportunities offered by the IEEE Computer Society. The event featured Prof. Anuradha Jayakody, Past Chair of the IEEE Computer Society Sri Lanka Section, as the Chief Guest. This initiative successfully enhanced student engagement, increased awareness of professional networks, and inspired undergraduates to explore innovation, technology, and leadership within the field of computer science.`,
  },
  {
    year: "2025",
    role: "4. Top 10 Finalist – COMFIX 2025 (Communication Ideathon)",
    image:ex_img4,
    description: `Our team ComQuest proudly secured a place among the Top 10 Finalists at COMFIX 2025, a national-level Communication Ideathon organized by the University of Moratuwa. The competition focused on developing creative and practical communication-based solutions for real-world problems. As a team, we brainstormed, researched, and presented an innovative concept that combined technology and communication strategies, gaining valuable experience in teamwork, problem-solving, and idea presentation.`,
  
  },
 {
    year: "2025",
    role: "5. Community Engagement – SabraXtreme 3.0",
    image:ex_img5,
    description: `Actively contributed as a Program Team Member for SabraXtreme 3.0, assisting in planning, organizing, and executing event activities. Collaborated with fellow team members to ensure smooth coordination, effective communication, and successful delivery of the event, gaining hands-on experience in teamwork, event management, and problem-solving.`,
},

  
];

export const PROJECTS = [
  {
    title: "StreetSoul E-Commerce Website",
    github:"https://github.com/MeviniSL/E--commerce",
    demo:"https://www.linkedin.com/posts/mevini-silva-220b51286_mern-webdevelopment-ecommerce-activity-7387194451653267456-2B4D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWUwPgBQuL85QLoMyH0M1PN9PeMqweji7g",
    image: project1,
    description:
      "Designed a modern and responsive shopping platform with secure JWT-based authentication, product filtering, cart management, and an admin panel for order handling. Focused on delivering a seamless user experience while gaining hands-on experience in full-stack development and integration of frontend and backend systems.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB","Express.js","JWT"],
  },
  {
    title: "Laptop Price Predictor",
    image: project2,
    github:"https://github.com/MeviniSL/Laptop-Price-Predictor",
    demo:"https://www.linkedin.com/posts/mevini-silva-220b51286_firstmlproject-machinelearning-python-activity-7366498551801044993-tegl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWUwPgBQuL85QLoMyH0M1PN9PeMqweji7g",
    description:
      "Built a Laptop Price Prediction System as my first Machine Learning project, predicting laptop prices based on specifications. Applied Linear Regression, Decision Tree, and Random Forest algorithms while using Python with NumPy and Pandas for data handling and analysis. Gained hands-on experience in turning data into actionable insights and comparing model performances.",
    technologies: ["Python", "NumPy", "Pandas", "scikit-learn"],
  },
  {
    title: "Pizza Restaurant Bill Generator",
    image: project3,
    github:"https://github.com/MeviniSL/Pizza-restaurant_Bill-Generator",
    demo:"https://www.linkedin.com/posts/mevini-silva-220b51286_java-programming-softwaredevelopment-activity-7235553572640145408-W55R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWUwPgBQuL85QLoMyH0M1PN9PeMqweji7g",
    description:
      "created a Pizza Restaurant Bill Generator using Java with a Command User Interface (CUI).It lets users choose different pizza types, add extras like cheese or toppings, and automatically calculates the total bill.This project strengthened my Object-Oriented Programming skills and improved my understanding of user interaction in command-line applications.",
    technologies: ["Java","OOP"],
  },
  {
    title: "Smart Dengue Management System",
    image: project4,
    github:"https://github.com/mayuraabhayasinghe/dengue-patient-management-system-grp4",
    demo:"https://www.linkedin.com/posts/mevini-silva-220b51286_dengueguard-capstoneproject-healthtech-activity-7366508541509029890-0TDm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWUwPgBQuL85QLoMyH0M1PN9PeMqweji7g",
    description:
      "Contributed to designing and developing a hospital solution 'Dengueguard' to digitize dengue patient monitoring with real-time alerts, secure records, and automated reporting for quicker decisions. Built the frontend interface and developed parts of the backend to ensure seamless data flow and interaction.",
    technologies: ["React.js", "Bootstrap", "Node.js", "Express.js", "MongoDB","Postman","JWT"],
  },
  {
    title: "News Website",
    image: project5,
    github:"https://github.com/MeviniSL/News_App",
    demo:"https://www.linkedin.com/posts/mevini-silva-220b51286_react-bootstrap-css-activity-7381328359965802496-5lqq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWUwPgBQuL85QLoMyH0M1PN9PeMqweji7g",
    description:"Built a News App using React, Bootstrap, and CSS to display real-time news updates with a clean and responsive interface. Integrated a live news API to fetch articles by category and implemented features like dynamic routing and loading indicators. This project enhanced my frontend development, API integration, and responsive design skills.",
    technologies: ["React.js", "Bootstrap", "CSS", "NewsAPI"],
  },
  {
    title: "Art Center Booking System",
    image: project6,
    github:"https://github.com/Piumalhk/Sabra-Music",
    demo:"https://www.linkedin.com/posts/mevini-silva-220b51286_webdevelopment-laravel-mysql-activity-7377968830645673984-apuM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEWUwPgBQuL85QLoMyH0M1PN9PeMqweji7g",
    description:
      "Contributed to developing a Digital Booking System for Sabaragamuwa University’s Art Center to streamline scheduling and replace manual approvals. Designed a responsive, user-friendly frontend and worked with the team to integrate booking features, improving overall system efficiency and usability.",
    technologies: ["HTML", "CSS", "Javascript", "Laravel(php)", "mySQL","Chart.js"],
  },
];

export const CONTACT = {
  address: "No. 289 , Kalutara South , Kalutara ",
  phoneNo: "071 879 7868 ",
  email: "mevininishshanka21@gmail.com",
};
