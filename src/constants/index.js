
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mealsmash,
  pyxis,
  bullyse,
  punjab,
  mysql,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Experience separately
import leadconcept from "../assets/company/leadconcept.png";
import ise from "../assets/company/isetech.png";
import nexgen from "../assets/company/nexgenlogo.png";
import interloper from "../assets/company/interloper.png"
import ikonic from "../assets/company/ikonic.png"


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Laravel Developer",
    company_name: "LeadConcept Solutions",
    icon: leadconcept,
    iconBg: "#383E56",
    date: "Nov 2020 - July 2022",
    points: [
      "Developing and maintaining web applications using PHP technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Laravel & Vue Developer",
    company_name: "ISETech Company",
    icon: ise,
    iconBg: "#383E56",
    date: "Aug 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using Laravel and Vue technologies.",
      "Collaborated with multidisciplinary teams—including UI/UX designers, product managers, and fellow developers—to build user-focused digital products.",
      "Implemented responsive and accessible designs, ensuring optimal performance across all major browsers and devices.",
      "Conducted code reviews and contributed to peer development, promoting best practices and maintaining high code quality standards.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Nexgen Ventures Pakistan",
    icon: nexgen,
    iconBg: "#383E56",
    date: "Nov 2022 - Apr 2024",
    points: [
      "Developing and maintaining web applications using Laravel and Vue technologies.",
      "Collaborated closely with cross-disciplinary teams to translate requirements into scalable, maintainable web solutions with a strong emphasis on user experience.",
      "Built and optimized mobile-first interfaces with a focus on accessibility, load performance, and consistent behavior across platforms and screen sizes.",
      "Contributed to continuous codebase improvement through structured reviews, refactoring efforts, and knowledge sharing within agile development cycles.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Interloper Inc",
    icon: interloper,
    iconBg: "#383E56",
    date: "Apr 2024 - Oct 2024",
    points: [
      "Developed and maintained scalable web applications using Core PHP, Laravel, and Vue.js, with a strong focus on performance and security.",
      "Partnered with diverse stakeholders to deliver feature-rich web applications aligned with user needs and business goals.",
      "Engineered adaptive front-end layouts and dynamic components that enhanced usability and maintained performance integrity across devices.",
      "Played a key role in codebase stewardship, driving improvements in readability, testability, and long-term maintainability.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "IKONIC",
    icon: ikonic,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Designed and maintained dynamic web applications using Core PHP, Laravel, Vue.js, and WordPress, ensuring secure, high-performance solutions tailored to client needs.",
      "Collaborated with stakeholders and cross-functional teams to build user-centric features and interfaces that aligned with both technical specifications and business objectives.",
      "Developed custom WordPress themes and plugins, extending site functionality while adhering to best practices for security, scalability, and performance.",
      "Built responsive front-end layouts with reusable components, ensuring seamless performance and accessibility across all major browsers and device types.",
      "Contributed to clean, maintainable codebases, promoting consistency through code reviews, documentation, and adherence to development standards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hassan proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hassan does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Hassan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "4Bagger – Sports Tournament Management Platform",
    description:
      "4Bagger is a feature-rich, multi-user platform designed for managing sports teams and tournaments. The application enables coaches to create teams and assign players from a predefined pool. Directors can organize tournaments, manage team participation, and oversee fee collection through an integrated payment system.nt shopping experience.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "white-text-gradient",
      },
      {
        name: "Authorize.net",
        color: "pink-text-gradient",
      },
      {
        name: "REST APIs",
        color: "green-text-gradient",
      },
 
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pitstoptuning – Automotive E-commerce Platform",
    description:
      "Pitstoptuning is an automotive e-commerce platform designed for the sale of vehicle spare parts and accessories. It features a centralized admin dashboard where administrators manage product catalogs, user accounts, orders, and site content.grade, repair.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job4U.pk – Job Portal Platform",
    description:
      "We contributed as a Backend Laravel and Frontend Vue.js Developer on the Job4U.pk platform—a comprehensive job portal connecting employers and job seekers. Responsibilities included architecting and maintaining scalable backend services using the Laravel framework, and implementing dynamic, user-friendly front-end interfaces with Vue.js.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Vue.js",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
  {
    name: "MealSmash – Online Food Ordering Platform",
    description:
      "MealSmash is a product-focused platform designed to bridge the gap between local food vendors and customers by offering a streamlined online ordering experience. The system includes an admin dashboard, a vendor portal, a customer-facing web interface, and a cross-platform Flutter mobile app for end usersties included architecting and maintaining scalable backend services using the Laravel framework, and implementing dynamic, user-friendly front-end interfaces with Vue.js.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter mobile app",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: mealsmash,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pyxis – On-Demand Driver Service Platform",
    description:
      "Pyxis is a user-centric platform designed to simplify and manage driver-based transportation services. The solution features a Flutter mobile application and supports multiple user roles—including Super Admin, Admin, and End User—to provide seamless coordination between service providers and users.ystem includes an admin dashboard, a vendor portal, a customer-facing web interface, and a cross-platform Flutter mobile app for end usersties included architecting and maintaining scalable backend services using the Laravel framework, and implementing dynamic, user-friendly front-end blade.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter mobile app",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: pyxis,
    source_code_link: "https://github.com/",
  },
  {
    name: "BullseyeQPay",
    description:
      "The BullseyeQPay web application enables users to send and receive payments seamlessly through multiple methods, including Stripe, Coinbase, PayPal, and bank transfers. To streamline the transaction process, the platform routes payment requests directly to the integrated payment gateways.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter mobile app",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: bullyse,
    source_code_link: "https://github.com/",
  },
  {
    name: "Punjab Aviation – Corporate Website",
    description:
      "Developed a modern, responsive corporate website for a private aviation company. The project combined a customized WordPress frontend with a Laravel-based multi-tenant backend system. Integrated third-party APIs to enable real-time airline ticket booking and display available airline details. Also implemented service inquiry forms and a dynamic media gallery to enhance user engagement.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter mobile app",
        color: "white-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: punjab,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
