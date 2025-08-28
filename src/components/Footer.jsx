// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  // puțin mai mare pe mobil + desktop
  const colTitle =
    "text-[15px] sm:text-base font-semibold tracking-wide text-white mb-3";
  const linkCls =
    "text-[15px] sm:text-[15.5px] text-white/75 hover:text-white transition-colors duration-200";

  return (
    <footer className="relative z-50 bg-[#0b1120] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr,1fr,1fr]">
          {/* Brand + social */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Generation Salez"
                className="w-9 h-9 rounded-lg"
              />
              <span className="text-lg sm:text-xl font-semibold">
                Generation Salez
              </span>
            </div>
            <p className="text-[15px] sm:text-base text-white/70 max-w-sm">
              Soluții moderne pentru prezența ta online.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/generation_salez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 text-white/80 hover:text-white transition"
                title="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={colTitle}>Quick links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className={linkCls}>
                  Acasă
                </a>
              </li>
              <li>
                <a href="/#about" className={linkCls}>
                  Despre noi
                </a>
              </li>
              <li>
                <a href="/#works" className={linkCls}>
                  Proiecte
                </a>
              </li>
              <li>
                <Link to="/contact" className={linkCls}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className={colTitle}>Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className={linkCls}>
                  Politica de confidențialitate
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className={linkCls}>
                  Termeni și condiții
                </Link>
              </li>
            </ul>
          </div>

          {/* Suport */}
          <div>
            <h4 className={colTitle}>Suport</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className={linkCls}>
                  Întrebări frecvente
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkCls}>
                  Suport clienți
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar — CENTRAT pe toate rezoluțiile */}
        <div className="mt-10 pt-6 border-t border-white/10 w-full flex flex-col items-center gap-3 text-center">
          <p className="text-sm sm:text-[15.5px] text-white/65">
            © {year} Generation Salez. Toate drepturile rezervate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:text-[15.5px]">
            <Link
              to="/privacy-policy"
              className="text-white/75 hover:text-white"
            >
              Confidențialitate
            </Link>
            <span className="text-white/30">•</span>
            <Link
              to="/terms-and-conditions"
              className="text-white/75 hover:text-white"
            >
              Termeni
            </Link>
            <span className="text-white/30">•</span>
            <Link to="/faq" className="text-white/75 hover:text-white">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
