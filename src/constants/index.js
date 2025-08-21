import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  figma,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import webdevIcon from "../assets/webdevIcon.svg"
import mobile from "../assets/mobile.svg"
import backend from "../assets//backend.svg"
import design from "../assets/design.svg"


export const navLinks = [
  {
    id: "about",
    title: "Despre Noi",
  },
  {
    id: "work",
    title: "Experiență",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Dezvoltare Web",
    icon: webdevIcon,
  },
  {
    title: "Aplicații Mobile",
    icon: mobile,
  },
  {
    title: "Design Digital",
    icon: design,
  },
  {
    title: "Dezvoltare Backend",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  
];



const testimonials = [
  {
    testimonial:
      "Generation Salez ne-a adus rezultate vizibile încă din primele luni.",
    name: "Andrei Popescu",
    // REMOVE ME
    // designation: "",
    company: "Retail Fashion",
    image: "/logo.svg",
  },
  {
    testimonial:
      "Profesioniști și creativi – site-ul nostru funcționează impecabil.",
    name: "Ioana Marinescu",
    // REMOVE ME
    // designation: "",
    company: "Startup Tech",
    image: "/logo.svg",
  },
  {
    testimonial:
      "Echipa Generation Salez livrează rapid și cu atenție la detalii.",
    name: "Mihai Ionescu",
    // REMOVE ME
    // designation: "",
    company: "Logistics Solutions",
    image: "/logo.svg",
  },
];

const projects = [
  {
    name: "Amazoniq",
    description:
      "Agenție care ajută companiile să își crească vizibilitatea online.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Consult-Juridic",
    description:
      "Agenție care ajută companiile să își crească vizibilitatea online.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Roasted",
    description:
      "Agenție care ajută companiile să își crească vizibilitatea online.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, testimonials, projects };
