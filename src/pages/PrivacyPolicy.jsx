// src/pages/PrivacyPolicy.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const updated = "28 august 2025";

  // componente mici pentru consistență tipografică
  const H2 = ({ id, children }) => (
    <h2
      id={id}
      className="scroll-mt-24 text-xl sm:text-2xl font-semibold text-white mt-8 mb-3"
    >
      {children}
    </h2>
  );
  const P = ({ children, className = "" }) => (
    <p
      className={`text-[15.5px] sm:text-base leading-relaxed text-white/90 ${className}`}
    >
      {children}
    </p>
  );
  const UL = ({ children }) => (
    <ul className="list-disc pl-5 space-y-2 text-[15.5px] sm:text-base leading-relaxed text-white/90">
      {children}
    </ul>
  );

  return (
    <main className="bg-transparent">
      {/* Spațiu sub navbar-ul fix; ajustează valorile dacă navbar-ul tău e mai înalt */}
      <section className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-10">
        {/* Card cu contrast ușor, colțuri rotunde și blur */}
        <article className="rounded-2xl bg-black/40 backdrop-blur-md ring-1 ring-white/5 p-5 sm:p-7">
          <header className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Politica de confidențialitate
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Ultima actualizare: {updated}
            </p>
          </header>

          {/* Intro */}
          <div className="space-y-4 sm:space-y-5">
            <P>
              Această Politică explică modul în care{" "}
              <strong>Generation Salez</strong> („noi”) colectează și
              prelucrează date cu caracter personal în legătură cu site-ul
              <span className="whitespace-nowrap"> generationsalez.ro</span>.
              Respectăm Regulamentul (UE) 2016/679 („GDPR”) și legislația
              aplicabilă în România.
            </P>

            {/* Cuprins */}
            <nav className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white mb-2">Cuprins</p>
              <ul className="text-sm leading-7 list-disc pl-5 text-white/80">
                <li>
                  <a href="#operator" className="hover:text-white">
                    1. Operatorul datelor
                  </a>
                </li>
                <li>
                  <a href="#date" className="hover:text-white">
                    2. Ce date colectăm
                  </a>
                </li>
                <li>
                  <a href="#temei" className="hover:text-white">
                    3. Temeiuri & scopuri
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="hover:text-white">
                    4. Cookie-uri
                  </a>
                </li>
                <li>
                  <a href="#analytics" className="hover:text-white">
                    5. Google Analytics
                  </a>
                </li>
                <li>
                  <a href="#partajare" className="hover:text-white">
                    6. Cui divulgăm datele
                  </a>
                </li>
                <li>
                  <a href="#retentie" className="hover:text-white">
                    7. Păstrarea datelor
                  </a>
                </li>
                <li>
                  <a href="#drepturi" className="hover:text-white">
                    8. Drepturile tale
                  </a>
                </li>
                <li>
                  <a href="#modificari" className="hover:text-white">
                    9. Modificări
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    10. Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* 1. Operator */}
            <H2 id="operator">1. Operatorul datelor</H2>
            <P>
              Operatorul de date este <strong>Generation Salez</strong>.
              <br />
              Pentru orice întrebări legate de protecția datelor, scrie-ne la{" "}
              <a
                href="mailto:contact@generationsalez.ro"
                className="text-[#FAC308] underline underline-offset-4 hover:opacity-90"
              >
                contact@generationsalez.ro
              </a>
              .
            </P>

            {/* 2. Date colectate — strict ce ai menționat */}
            <H2 id="date">2. Ce date colectăm</H2>
            <UL>
              <li>
                <strong>
                  Date furnizate direct prin formularul de contact
                </strong>{" "}
                — nume și prenume, adresă de e-mail și mesajul transmis.
                Informațiile ajung prin e-mail la{" "}
                <span className="whitespace-nowrap">
                  contact@generationsalez.ro
                </span>
                .
              </li>
              <li>
                <strong>Cookie-uri de analiză (Google Analytics)</strong> —
                setate numai cu consimțământul tău, pentru a măsura traficul și
                utilizarea site-ului.
              </li>
            </UL>
            <P className="mt-1">
              Nu solicităm și nu prelucrăm intenționat categorii speciale de
              date (sensibile) și nu efectuăm decizii automate cu efect juridic
              asupra ta.
            </P>

            {/* 3. Temeiuri & scopuri */}
            <H2 id="temei">3. Temeiuri & scopuri</H2>
            <UL>
              <li>
                <strong>Interes legitim</strong> — gestionarea și securizarea
                site-ului, răspuns la solicitări venite prin formularul de
                contact.
              </li>
              <li>
                <strong>Consimțământ</strong> — pentru cookie-urile opționale de
                analiză (Google Analytics). Îl poți retrage oricând din setările
                de cookie ale site-ului.
              </li>
            </UL>

            {/* 4. Cookie-uri */}
            <H2 id="cookies">4. Cookie-uri</H2>
            <P>
              Folosim cookie-uri esențiale (strict necesare) pentru funcționarea
              site-ului și cookie-uri opționale pentru analiză (Google
              Analytics), doar cu consimțământul tău. Preferințele pot fi
              modificate în orice moment din setările/bannerul de cookie-uri.
            </P>

            {/* 5. Analytics */}
            <H2 id="analytics">5. Google Analytics</H2>
            <P>
              Google Analytics ne ajută să înțelegem cum este utilizat site-ul
              (pagini vizitate, evenimente). Datele sunt colectate prin
              identificatori online (ex. cookie-uri) și pot fi agregate și
              pseudonimizate. Dacă nu consimți, Analytics nu este încărcat.
            </P>

            {/* 6. Partajare */}
            <H2 id="partajare">6. Cui divulgăm datele</H2>
            <UL>
              <li>
                Furnizori de găzduire și infrastructură IT
                (mentenanță/backup/securitate).
              </li>
              <li>
                Furnizori de e-mail (pentru comunicările generate de formularul
                de contact).
              </li>
              <li>
                Google (ca furnizor al serviciului Analytics), doar dacă ai
                consimțit.
              </li>
              <li>Autorități publice, atunci când legea impune acest lucru.</li>
            </UL>

            {/* 7. Retenție */}
            <H2 id="retentie">7. Păstrarea datelor</H2>
            <UL>
              <li>
                <strong>Mesaje din formular</strong>: până la 24 de luni de la
                ultimul schimb relevant.
              </li>
              <li>
                <strong>Cookie-uri Analytics</strong>: conform duratelor
                indicate de Google în setările de cookie.
              </li>
            </UL>

            {/* 8. Drepturi */}
            <H2 id="drepturi">8. Drepturile tale</H2>
            <UL>
              <li>acces, rectificare, ștergere („dreptul de a fi uitat”);</li>
              <li>restricționare și opoziție la prelucrare;</li>
              <li>portabilitatea datelor;</li>
              <li>retragerea consimțământului pentru Analytics, oricând;</li>
              <li>
                plângere la ANSPDCP —{" "}
                <a
                  href="https://www.dataprotection.ro/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FAC308] underline underline-offset-4 hover:opacity-90"
                >
                  dataprotection.ro
                </a>
                .
              </li>
            </UL>

            {/* 9. Modificări */}
            <H2 id="modificari">9. Modificări</H2>
            <P>
              Putem actualiza periodic această Politică. Versiunea curentă va fi
              disponibilă pe această pagină, împreună cu data ultimei
              actualizări de mai sus.
            </P>

            {/* 10. Contact */}
            <H2 id="contact">10. Contact</H2>
            <P>
              Pentru întrebări sau exercitarea drepturilor, scrie-ne la{" "}
              <a
                href="mailto:contact@generationsalez.ro"
                className="text-[#FAC308] underline underline-offset-4 hover:opacity-90"
              >
                contact@generationsalez.ro
              </a>
              .
            </P>

            {/* linkuri utile */}
            <div className="pt-2">
              <Link
                to="/terms-and-conditions"
                className="inline-flex items-center gap-2 text-[15.5px] sm:text-base text-white/90 hover:text-white transition"
              >
                Termeni și condiții
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
