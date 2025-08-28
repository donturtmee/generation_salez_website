import { css, figma, html, javascript, reactjs, typescript } from "../assets";

import webdevIcon from "../assets/webdevIcon.svg";
import mobile from "../assets/mobile.svg";
import backend from "../assets//backend.svg";
import design from "../assets/design.svg";
import amazoniq from "../assets/amazoniq.png";
import consult from "../assets/consult.png";
import roasted from "../assets/roasted.png";
import mediator from "../assets/mediator.png";
import arome from "../assets/arome.png";
import zeppelin from "../assets/zeppelin.png";

export const navLinks = [
  {
    id: "about",
    title: "Servicii",
  },
  {
    id: "works",
    title: "Proiecte",
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
    name: "Lucian Niculescu",
    // REMOVE ME
    // designation: "",
    company: "Consult Juridic",
    image: "/logo.svg",
  },
  {
    testimonial:
      "Profesioniști și creativi – site-ul nostru funcționează impecabil.",
    name: "Maria Chițu",
    // REMOVE ME
    // designation: "",
    company: "Amazoniq Coffee",
    image: "/logo.svg",
  },
  {
    testimonial:
      "Echipa Generation Salez livrează rapid și cu atenție la detalii.",
    name: "Dan Moga",
    // REMOVE ME
    // designation: "",
    company: "Roasted Coffee",
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
    image: amazoniq,
    source_code_link: "https://amazoniqcoffee.ro/",
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
    image: consult,
    source_code_link: "https://www.consult-juridic.eu/",
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
    textColor: "black",
    image: roasted,
    source_code_link: "https://roasted.ro/",
  },
  {
    name: "Mediator Steluța Năstase",
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
    image: mediator,
    source_code_link: "https://www.stelutanastase.eu/",
  },
  {
    name: "Arome și Esențe",
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
    textColor: "black",
    image: arome,
    source_code_link: "https://aromesiesente.ro/",
  },
  {
    name: "Zeppelin Schule",
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

    image: zeppelin,
    source_code_link: "https://www.zeppelinschule.ro/",
  },
];

export { services, technologies, testimonials, projects };
