import {css, figma, html, javascript, reactjs, typescript} from "../assets";

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
import logoAmazoniq from "../assets/logoAmazoniq.svg";
import logoConsult from "../assets/logoConsult.png";
import logoRoasted from "../assets/logoRoasted.png";

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
      "Am colaborat cu Robert pentru realizarea unui site de prezentare în domeniul juridic și pot spune că experiența a fost excelentă. A fost mereu prompt, profesionist și atent la detalii.\n" +
        "\n" +
        "Pe parcursul proiectului, orice problemă a fost tratată cu seriozitate, iar Robert s-a asigurat că găsește mereu o soluție potrivită. M-a impresionat dedicarea lui și dorința reală de a livra un rezultat de calitate.\n" +
        "\n" +
        "Îl recomand cu încredere oricui caută un web developer serios și implicat. Mulțumesc, Robert!\n\n",
    name: "Lucian Niculescu",
    // REMOVE ME
    // designation: "",
    company: "Consult Juridic",
    image: logoConsult,
  },
  {
    testimonial:
      "Sunt super incantata sa observ evolutia lui Robert, Munca pe care a depus-o la website-ul AMAZONIQ (amazoniqcoffee.ro) a fost excelenta. O persoana cu bun simt, respect, care isi respecta cuvantul si deadlin-urile. Colaborarea cu el a fost si este in continuare o placere. Va puteti baza ca daca incepe ceva, nu se va lasa pana cand totul va fi perfect, toate cerintele fiind respectate la virgula 🐒❤.",
    name: "Maria Chițu",
    // REMOVE ME
    // designation: "",
    company: "Amazoniq Coffee",
    image: logoAmazoniq,
  },
  {
    testimonial:
      "Am avut o colaborare excelentă, totul a decurs rapid, clar și cu o foarte mare atenție la detalii. Am avut comunicare constantă pe tot parcursul proiectului, cu termene respectate și propuneri utile care au îmbunătățit website-ul. Inclusiv după lansare gestionează platforma cu update-uri regulate și suport prompt, ceea ce ne scutește timp și ne dă liniște. Recomand cu încredere!",
    name: "Dan Moga",
    // REMOVE ME
    // designation: "",
    company: "Roasted Coffee",
    image: logoRoasted,
  },
];

const projects = [
  {
    name: "Amazoniq",
    description:
      "Cafenea de specialitate, cu design responsive și elemente interactive",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: amazoniq,
    source_code_link: "https://amazoniqcoffee.ro/",
  },
  {
    name: "Consult-Juridic",
    description:
      "Website profesional pentru servicii juridice de consultanță",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: consult,
    source_code_link: "https://www.consult-juridic.eu/",
  },
  {
    name: "Roasted",
    description:
      "Website de prezentare, platformă de gestiune a vânzărilor si a stocurilor ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
    ],
    textColor: "black",
    image: roasted,
    source_code_link: "https://roasted.ro/",
  },
  {
    name: "Mediator Steluța Năstase",
    description:
      "Website de prezentare pentru servicii de mediere, optimizat pentru claritate și acces rapid la informații.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
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
      "E-commerce pentru produse de gătit, cu accent pe conversii și experiența de cumpărare",
    tags: [
      {
        name: "shopify",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    textColor: "black",
    image: arome,
    source_code_link: "https://aromesiesente.ro/",
  },
  {
    name: "Zeppelin Schule",
    description:
      "Website pentru școala privată cu accent pe prezentarea serviciilor educaționale",
    tags: [
      {
        name: "wix",
        color: "blue-text-gradient",
      },
      {
        name: "google ads",
        color: "green-text-gradient",
      },
    ],

    image: zeppelin,
    source_code_link: "https://www.zeppelinschule.ro/",
  },
];

export { services, technologies, testimonials, projects };
