import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/Project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";
import { RiJavascriptFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";

import { SiMongodb } from "react-icons/si";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "HARSHIT SHARMA",
  greet: "Hello there! 👋🏻",
  description:
    "I am a MERN stack developer specializing in creating dynamic web applications using MongoDB, Express, React, and Node.js. I also have a passion for designing and building drones and airplanes, focusing on innovative and efficient aerial technology"
};

export const PROJECTS = [
  {
    id: 1,
    name: "Job Portal",
    description:
      "A Job POrtal website built with React and Tailwind CSS to connecting job seekers with employers.",
    image: projectImage1,
    githubLink: "https://github.com/harshit3665/Job-Portal.git",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using React and  a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/harshit3665/e-commerce.git",
  },
  {
    id: 3,
    name: "Google Gemini",
    description:
      "A Google Gemini website built with React and Tailwind CSS for seacrh  our questions",
    image: projectImage3,
    githubLink: "https://github.com/harshit3665/gemini.git",
  },
  {
    id: 4,
    name: "Book Store",
    description:
      "Discover a vast collection of books across all genres with our easy-to-navigate bookstore website, crafted in HTML and CSS for a smooth browsing experience.",
    image: projectImage5,
    githubLink: "https://github.com/harshit3665/ebookProject.git",
  },
  {
    id: 5,
    name: "Agri-tech Website",
    description:
      "Explore a modern AgriTech website offering information and solutions for sustainable agriculture, crafted in HTML and CSS for a clean and responsive experience.",
    image: projectImage4,
    githubLink: "https://github.com/harshit3665/green-genius.git",
  },
  {
    id: 6,
    name: "VTOL Drone",
    description:
      "A versatile VTOL drone designed for seamless vertical takeoff and landing, combining the agility of a helicopter with the speed and range of a fixed-wing aircraft.",
    image: projectImage6,
    
  },
];

export const BIO = [
 "I'm Harshit Sharma, a Computer Science Engineering student specializing in Cyber Security at Poornima College of Engineering, with a strong interest in web development. I enjoy exploring how to build secure and innovative web solutions, combining my passion for both cybersecurity and development to create efficient and safe digital experiences."
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },

  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <GiCommercialAirplane className="text-4xl text-sky-400 lg:text-5xl" />,
    name: "Aeromodelling",
    experience: "2+ years",
  },
  {
    icon: <SiPostman  className="text-4xl text-orange-500 lg:text-5xl" />,
    name: "Postman",
    experience: "1+ year",
  },
  
];

export const EXPERIENCES = [
  {
    title: "MERN Stack Developer",
    company: "International Tramp",
    duration: "July-2024 to Aug-2024",
    description:
      "A MERN stack developer builds full-stack web applications using MongoDB, Express.js, React, and Node.js. They handle both front-end and back-end development, ensuring smooth integration of databases, server logic, and user interfaces.",
  },
  {
    title: "Aeromodeller",
    company: "Udaan Aeromodelling Culb",
    duration: "Present",
    description:
      "As a member of the aeromodelling club, I actively participate in building and designing model aircraft, including airplanes, helicopters, and drones. I enjoy flight testing my creations to refine their performance and enhance my skills in aerodynamics and piloting. The club also provides valuable opportunities for collaboration, workshops, and competitions, fostering a supportive community of fellow enthusiasts.",
  },
  
];

export const EDUCATION = [
  
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Poornima College Of Engineering",
    duration: "Present",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
