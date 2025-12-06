import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Cloud,
  Server,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/project-2.png";
import PROJECT_IMG_3 from "../assets/images/project-3.png";
import PROJECT_IMG_4 from "../assets/images/project-4.png";
import PROJECT_IMG_5 from "../assets/images/project-5.png";
import PROJECT_IMG_6 from "../assets/images/project-6.png";


export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "shadcn/ui", level: 90, color: "bg-blue-600" },
      { name: "Material-ui", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 85, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "PostMan", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 92, color: "bg-orange-500" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
      { name: "MongoDB", level: 88, color: "bg-green-600" },
      { name: "MySQL", level: 85, color: "bg-blue-700" },
      { name: "PostgreSQL", level: 25, color: "bg-red-500" },
      { name: "Prisma", level: 20, color: "bg-indigo-600" },
      { name: "Firebase", level: 25, color: "bg-yellow-600" },
    ],
  },
  {
    title: "Deployment",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Hostinger", level: 60, color: "bg-blue-600" },
      { name: "Netlify", level: 78, color: "bg-orange-600" },
      { name: "Vercel", level: 69, color: "bg-gray-900" },
      { name: "render", level: 65, color: "bg-orange-700" },
      { name: "git/github", level: 80, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML5",
  "CSS3",
  "C",
  "C++",
  "JAVA",
  "Vite",
  "Magic-UI",
  "Razorpay",
  "Stripe",
  "Figma",
  "Cloudinary",
  "SEO",
  "Socket.io"
];

export const STATS = [
  { number: "24+", label: "Projects Completed" },
  { number: "1+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "A MERN-based food delivery app that includes user authentication, restaurant and menu browsing, cart and order management, real-time order status updates, and secure checkout with integrated payment gateways.",
    image: PROJECT_IMG_1,
    tags: ["React", "Tailwind", "Express.js", "Node.js", "MongoDB"],
    liveUrl: "https://food-delivary-app-front.onrender.com/",
    githubUrl: "https://github.com/bari199/Food-delivary-App",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Chat Application using MERN stack ",
    description:
      "A real-time chat application built with the MERN stack and Socket.io, featuring user authentication, instant messaging, online status updates, and a responsive UI.",
    image: PROJECT_IMG_2,
    tags: ["React", "Node.js", "MongoDB", "Tailwind","Express.js"],
    liveUrl: "https://build-real-time-full-stack-chat-app-lilac.vercel.app/",
    githubUrl: "https://github.com/bari199/Build-Real-Time-Full-Stack-Chat-Application",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "E-commerce Websites",
    description:
      "A MERN-based e-commerce platform with secure payments using Stripe and Razorpay, along with full cart, checkout, order tracking, and admin product management.",
    image: PROJECT_IMG_3,
    tags: ["Express.js", "React.js", "Node.js", "MongoDb", "tailwind.css", "Jwt", "Stripe", "Razorpay"],
    liveUrl: "https://e-commerce-client-delta-opal.vercel.app/",
    githubUrl: "https://github.com/bari199/E-commerce",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "E-shop App",
    description:
      "A smart AI-powered Interview Preparation App using the MERN stack — along with the Gemini API for intelligent Q&A generation",
    image: PROJECT_IMG_4,
    tags: ["React.js", "Framer-Motion", "AOS", "Tailwind.css"],
    liveUrl: "https://marvelous-baklava-a58645.netlify.app/",
    githubUrl: "#",
    featured: true,
    category: "Web App",
  },

  {
    id: 5,
    title: "Blog App with AI",
    description:
      "A responsive portfolio and blog app with smooth animations, Express backend APIs, and integrated Gemini AI for content creation.",
    image: PROJECT_IMG_5,
    tags: ["Next.js", "TypeScript", "Node.js", "MongoDb","Gemini-AI"],
    liveUrl: "",
    githubUrl: "https://github.com/bari199/AI-MERN-BLOG-APP.git",
    featured: true,
    category: "Web App",
  },

  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations, responsive layouts, and backend support for form submissions. Built using React, Framer Motion, AOS, and Express.js.",
    image: PROJECT_IMG_6,
    tags: ["React.js", "Famer Motion", "Node.js", "express.js"],
    liveUrl: "",
    githubUrl: "https://github.com/bari199/Modern-Developer-Portfolio-with-React-Tailwind-CSS-Framer-Motion.git",
    featured: false,
    category: "Web App",
  },

  // {
  //   id: 7,
  //   title: "Polling App",
  //   description:
  //     "Polling app with features like user authentication, creating polls, voting, bookmarking, closing polls, and managing bookmarked or voted polls. Perfect for mastering MERN stack development!",
  //   image: PROJECT_IMG_7,
  //   tags: ["React", "Framer Motion", "Tailwind", "Vercel"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  //   category: "Frontend",
  // },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-learning",
    description:
      "Began learning programming fundamentals and explored web development basics like HTML, CSS, and JavaScript. Currently building projects using React, Tailwind CSS, and Node.js while strengthening my understanding of modern frontend and backend workflows.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "Academic Projects & Skill Building",
    company: "College",
    description:
      "Worked on small web development projects and strengthened core concepts in DSA, OOP, and database management. Gained hands-on practice with programming languages like C, C++, Java, and Python while building a strong foundation in problem-solving.",
    icon: GraduationCap,
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Major College Project",
    company: "Self Driven",
    description:
      "Started developing academic projects including a E-commerce Website and explored React, APIs, and basic backend functionalities.",
    icon: Rocket,
    color: "bg-purple-500",
  },
  {
    year: "2024",
    title: "Hands-On Project Experience",
    company: "CSE Department",
    description:
      "Started developing academic projects including a full-stack Food Delivery Application using the MERN stack, implementing secure authentication with JWT, online payments with Stripe, and an intuitive admin panel for product and order management. Gained hands-on experience in building scalable APIs, handling user roles, and creating a responsive and functional user interface.",
    icon: Briefcase,
    color: "bg-orange-500",
  },
  {
    year: "2025",
    title: "Job Seeking & Portfolio Building",
    company: "Present",
    description:
      "Final-year Computer Science student focusing on full-stack development, refining portfolio, and preparing for industry roles.",
    icon: Zap,
    color: "bg-cyan-500",
  },
];


export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const SOCIAL_LINKS = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: " https://github.com/bari199",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: FiLinkedin,
      url: "https://www.linkedin.com/in/md-abdul-bari-3a41062a2/",
      color: "hover:text-blue-900",
      bgColor: "hover:bg-blue-900/10",
    },
    {
      name: "Twitter",
      icon: FiTwitter,
      url: "https://x.com/SkmdAbdulbari1",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/10",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:bari1999smab@gmail.com",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500/10",
    },
  ];

  export const CONTACT_INFO = [
    {
      icon: MapPin,
      label: "Location",
      value: "India, WB, Howrah, 711310",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bari1999smab@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 - 827 689 7846",
    },
  ];