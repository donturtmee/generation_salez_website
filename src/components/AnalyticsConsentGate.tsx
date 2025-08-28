// src/components/AnalyticsConsentGate.tsx
import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: any[]) => void;
  }
}

const GA_ID = import.meta.env.VITE_GA_ID;

function loadGA() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (window.gtag) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: any[]) => {
    window.dataLayer.push(args);
  };

  if (
    !document.querySelector(
      `script[src^="https://www.googletagmanager.com/gtag/js?id="]`
    )
  ) {
    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export default function AnalyticsConsentGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        const parsed = JSON.parse(
          localStorage.getItem("cookie_consent") || "{}"
        );
        setEnabled(!!parsed?.analytics);
      } catch {
        setEnabled(false);
      }
    };
    check();
    window.addEventListener("storage", check);
    window.addEventListener("cookie:change", check);
    return () => {
      window.removeEventListener("storage", check);
      window.removeEventListener("cookie:change", check);
    };
  }, []);

  useEffect(() => {
    if (!GA_ID) return;

    if (enabled) {
      loadGA();
      if (window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
        });
      }
    } else {
      if (window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "denied",
          analytics_storage: "denied",
        });
      }
    }
  }, [enabled]);

  return null;
}
