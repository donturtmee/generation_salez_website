// src/pages/FAQ.jsx
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const updated = "28 august 2025";

  return (
    <main className="bg-transparent">
      {/* spațiu sub navbar-ul fix */}
      <section className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-10">
        <article className="rounded-2xl bg-black/40 backdrop-blur-md ring-1 ring-white/5 p-5 sm:p-7">
          <header className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Întrebări frecvente
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Ultima actualizare: {updated}
            </p>
          </header>

          <Accordion
            variant="splitted"
            selectionMode="single"
            className="text-white mt-2"
            itemClasses={{
              base: [
                "bg-white/5",
                "border",
                "border-white/10",
                "rounded-xl",
                "transition-all",
                "duration-300",
                "data-[open=true]:bg-white/10",
                "data-[open=true]:border-white/20",
              ].join(" "),
              heading: "px-4 py-3 sm:px-5 sm:py-4",
              trigger: "gap-3",
              title: "text-[15px] sm:text-lg font-semibold text-white",
              content:
                "text-white/80 text-[14px] sm:text-base leading-relaxed px-4 sm:px-5 pb-4 sm:pb-5 pt-0",
              indicator: "text-white/80",
            }}
            motionProps={{
              variants: {
                enter: {
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.25 },
                },
                exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
              },
            }}
          >
            <AccordionItem
              key="1"
              aria-label="Ce servicii oferiți?"
              title="Ce servicii oferiți?"
            >
              Oferim servicii de dezvoltare web, design UI/UX, optimizare
              performanță, implementare analytics și mentenanță. Toate
              proiectele sunt personalizate pe nevoile business-ului tău.
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Cum cer o ofertă?"
              title="Cum cer o ofertă?"
            >
              Trimite un mesaj din pagina{" "}
              <Link
                to="/contact"
                className="text-[#FAC308] underline underline-offset-4"
              >
                Contact
              </Link>{" "}
              cu detalii despre proiect (obiective, buget, deadline). Revenim în
              1–2 zile lucrătoare cu întrebări și o propunere.
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Care este durata unui proiect?"
              title="Care este durata unui proiect?"
            >
              Variează după complexitate. Un site de prezentare durează de
              obicei 2–4 săptămâni; proiectele cu funcționalități avansate pot
              dura 6–12+ săptămâni. Stabilim timeline-ul în ofertă.
            </AccordionItem>

            <AccordionItem
              key="4"
              aria-label="Cum are loc plata?"
              title="Cum are loc plata?"
            >
              În mod obișnuit: avans la pornire și tranșe pe milestone-uri.
              Condițiile finale sunt trecute în oferta/contractul proiectului.
            </AccordionItem>

            <AccordionItem
              key="5"
              aria-label="Oferiți mentenanță?"
              title="Oferiți mentenanță?"
            >
              Da. Putem asigura actualizări, backup, monitorizare, remedieri și
              îmbunătățiri continue pe bază de abonament sau la cerere.
            </AccordionItem>

            <AccordionItem
              key="6"
              aria-label="Ce tehnologii folosiți?"
              title="Ce tehnologii folosiți?"
            >
              În principal React/Vite, Tailwind, Node.js/Express și integrare cu
              servicii terțe (ex. e-mail, plăți, analytics). Alegem stack-ul în
              funcție de cerințe.
            </AccordionItem>

            <AccordionItem
              key="7"
              aria-label="Cum gestionați cookie-urile și analytics?"
              title="Cum gestionați cookie-urile și analytics?"
            >
              Analytics se încarcă doar cu consimțământ. Respectăm semnalul
              Global Privacy Control (GPC). Poți modifica opțiunile din bannerul
              de cookie sau pagina{" "}
              <Link
                to="/privacy-policy"
                className="text-[#FAC308] underline underline-offset-4"
              >
                Politica de confidențialitate
              </Link>
              .
            </AccordionItem>

            <AccordionItem
              key="8"
              aria-label="Pot migra site-ul existent?"
              title="Pot migra site-ul existent?"
            >
              Da. Analizăm tehnic site-ul actual, propunem un plan de migrare
              (conținut, SEO, redirecționări) și îl implementăm cu timp minim de
              indisponibilitate.
            </AccordionItem>

            <AccordionItem
              key="9"
              aria-label="Cum luați în calcul SEO și performanța?"
              title="Cum luați în calcul SEO și performanța?"
            >
              Aplicăm bune practici (structură semantică, meta-date, viteze de
              încărcare, imagini optimizate, accesibilitate). Putem face și
              audit Lighthouse/Pagespeed și optimizări dedicate.
            </AccordionItem>

            <AccordionItem
              key="10"
              aria-label="Cum vă pot contacta?"
              title="Cum vă pot contacta?"
            >
              Scrie-ne la{" "}
              <a
                href="mailto:contact@generationsalez.ro"
                className="text-[#FAC308] underline underline-offset-4"
              >
                contact@generationsalez.ro
              </a>{" "}
              sau folosește formularul din pagina{" "}
              <Link
                to="/contact"
                className="text-[#FAC308] underline underline-offset-4"
              >
                Contact
              </Link>
              .
            </AccordionItem>
          </Accordion>

          {/* linkuri utile */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            <Link
              to="/privacy-policy"
              className="text-sm sm:text-base text-white/90 hover:text-white underline"
            >
              Politica de confidențialitate
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm sm:text-base text-white/90 hover:text-white underline"
            >
              Termeni și condiții
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
