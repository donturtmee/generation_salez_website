// src/pages/TermsAndConditions.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  const updated = "28 august 2025";

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
      {/* spațiu sub navbar-ul fix; ajustează dacă e nevoie */}
      <section className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-10">
        <article className="rounded-2xl bg-black/40 backdrop-blur-md ring-1 ring-white/5 p-5 sm:p-7">
          <header className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Termeni și condiții
            </h1>
            <p className="text-xs sm:text-sm text-white/60 mt-1">
              Ultima actualizare: {updated}
            </p>
          </header>

          <div className="space-y-4 sm:space-y-5">
            {/* Intro */}
            <P>
              Bine ai venit pe <strong>generationsalez.ro</strong> („Site-ul”).
              Prin accesarea sau utilizarea Site-ului accepți acești Termeni și
              Condiții („Termenii”). Dacă nu ești de acord, te rugăm să nu
              folosești Site-ul.
            </P>

            {/* Cuprins */}
            <nav className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white mb-2">Cuprins</p>
              <ul className="text-sm leading-7 list-disc pl-5 text-white/80">
                <li>
                  <a href="#definitii" className="hover:text-white">
                    1. Definiții
                  </a>
                </li>
                <li>
                  <a href="#acceptare" className="hover:text-white">
                    2. Acceptarea termenilor
                  </a>
                </li>
                <li>
                  <a href="#servicii" className="hover:text-white">
                    3. Servicii
                  </a>
                </li>
                <li>
                  <a href="#cont" className="hover:text-white">
                    4. Conturi și comunicare
                  </a>
                </li>
                <li>
                  <a href="#oferte" className="hover:text-white">
                    5. Oferte, prețuri și plăți
                  </a>
                </li>
                <li>
                  <a href="#drepturi" className="hover:text-white">
                    6. Drepturi de proprietate intelectuală
                  </a>
                </li>
                <li>
                  <a href="#utilizare" className="hover:text-white">
                    7. Utilizare acceptabilă
                  </a>
                </li>
                <li>
                  <a href="#linkuri" className="hover:text-white">
                    8. Link-uri către terți
                  </a>
                </li>
                <li>
                  <a href="#raspundere" className="hover:text-white">
                    9. Limitarea răspunderii
                  </a>
                </li>
                <li>
                  <a href="#garantii" className="hover:text-white">
                    10. Declarații și garanții
                  </a>
                </li>
                <li>
                  <a href="#despagubiri" className="hover:text-white">
                    11. Despăgubiri
                  </a>
                </li>
                <li>
                  <a href="#lege" className="hover:text-white">
                    12. Legea aplicabilă și jurisdicția
                  </a>
                </li>
                <li>
                  <a href="#modificari" className="hover:text-white">
                    13. Modificarea termenilor
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    14. Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* 1 */}
            <H2 id="definitii">1. Definiții</H2>
            <P>
              „Noi”, „Operatorul” sau „Generation Salez” se referă la entitatea
              care administrează Site-ul. „Utilizator” e orice persoană care
              accesează sau folosește Site-ul. „Servicii” înseamnă servicii
              digitale precum dezvoltare web, design, consultanță sau produse
              software prezentate pe Site.
            </P>

            {/* 2 */}
            <H2 id="acceptare">2. Acceptarea termenilor</H2>
            <P>
              Prin accesarea Site-ului confirmi că ai citit, ai înțeles și ești
              de acord să respecți acești Termeni. Putem actualiza Termenii
              periodic; versiunea curentă va fi publicată pe această pagină.
            </P>

            {/* 3 */}
            <H2 id="servicii">3. Servicii</H2>
            <P className="mb-1">
              Informațiile despre Servicii au scop informativ. Nicio informație
              de pe Site nu constituie în sine o ofertă irevocabilă. Orice
              proiect se derulează în baza unei oferte personalizate și/sau a
              unui contract semnat.
            </P>
            <P>
              Ne rezervăm dreptul de a modifica sau întrerupe temporar/permanent
              anumite elemente ale Site-ului sau descrieri de Servicii, fără
              notificare prealabilă.
            </P>

            {/* 4 */}
            <H2 id="cont">4. Conturi și comunicare</H2>
            <P>
              Site-ul poate include formulare de contact. Ești responsabil(ă) de
              acuratețea datelor transmise. Putem reveni către tine folosind
              datele furnizate pentru a-ți răspunde la solicitare.
            </P>

            {/* 5 */}
            <H2 id="oferte">5. Oferte, prețuri și plăți</H2>
            <UL>
              <li>
                Prețurile afișate (dacă există) sunt orientative și pot fi
                modificate.
              </li>
              <li>
                Oferta fermă se comunică în scris și este valabilă în termenul
                indicat.
              </li>
              <li>
                Termenii comerciali (plată, livrare, PI, garanții) sunt
                stabiliți în contract.
              </li>
            </UL>

            {/* 6 */}
            <H2 id="drepturi">6. Drepturi de proprietate intelectuală</H2>
            <P>
              Conținutul Site-ului (texte, grafică, logo-uri, elemente vizuale,
              cod sursă) este protejat de legislația privind drepturile de autor
              și mărcile comerciale. Nu ai voie să copiezi, distribui, modifici
              sau exploatezi conținutul fără acordul nostru prealabil, cu
              excepțiile permise de lege.
            </P>

            {/* 7 */}
            <H2 id="utilizare">7. Utilizare acceptabilă</H2>
            <UL>
              <li>
                Nu vei utiliza Site-ul în scopuri ilegale, frauduloase sau
                abuzive.
              </li>
              <li>
                Nu vei încerca acces neautorizat la sisteme/conturi și nu vei
                afecta funcționarea.
              </li>
              <li>
                Nu vei transmite conținut care încalcă drepturile altora sau
                normele legale.
              </li>
            </UL>

            {/* 8 */}
            <H2 id="linkuri">8. Link-uri către terți</H2>
            <P>
              Site-ul poate conține link-uri către site-uri ale terților. Nu
              controlăm și nu ne asumăm responsabilitatea pentru conținutul sau
              politicile acestora. Citește termenii și politicile fiecărui site
              vizitat.
            </P>

            {/* 9 */}
            <H2 id="raspundere">9. Limitarea răspunderii</H2>
            <P>
              În măsura permisă de lege, nu vom fi răspunzători pentru daune
              indirecte, incidentale, speciale sau consecvențiale, pierderi de
              profit sau date rezultate din utilizarea sau incapacitatea de
              utilizare a Site-ului. Site-ul este oferit „ca atare”, fără
              garanții de disponibilitate continuă sau lipsă de erori.
            </P>

            {/* 10 */}
            <H2 id="garantii">10. Declarații și garanții</H2>
            <P>
              Nu garantăm că Site-ul va fi întotdeauna disponibil, securizat sau
              lipsit de erori. Putem efectua actualizări sau lucrări de
              mentenanță ce pot afecta temporar accesul.
            </P>

            {/* 11 */}
            <H2 id="despagubiri">11. Despăgubiri</H2>
            <P>
              Ești de acord să ne despăgubești pentru orice pretenții rezultate
              din încălcarea de către tine a acestor Termeni sau a legislației
              aplicabile, în măsura permisă de lege.
            </P>

            {/* 12 */}
            <H2 id="lege">12. Legea aplicabilă și jurisdicția</H2>
            <P>
              Acești Termeni sunt guvernați de legea română. Orice litigiu va fi
              soluționat de instanțele competente din România, dacă părțile nu
              ajung la o soluție amiabilă.
            </P>

            {/* 13 */}
            <H2 id="modificari">13. Modificarea termenilor</H2>
            <P>
              Putem actualiza acești Termeni pentru a reflecta schimbări
              legislative sau operaționale. Versiunea revizuită va fi publicată
              aici, cu data ultimei actualizări.
            </P>

            {/* 14 */}
            <H2 id="contact">14. Contact</H2>
            <P>
              Pentru întrebări legate de acești Termeni, scrie-ne la{" "}
              <a
                href="mailto:contact@generationsalez.ro"
                className="text-[#FAC308] underline underline-offset-4 hover:opacity-90"
              >
                contact@generationsalez.ro
              </a>
              .
            </P>

            {/* link util */}
            <div className="pt-2">
              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-2 text-[15.5px] sm:text-base text-white/90 hover:text-white transition"
              >
                Politica de confidențialitate
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
