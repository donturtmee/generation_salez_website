import { Outlet } from "react-router-dom";
import { Navbar, AnalyticsConsentGate, CookieConsent } from "../components";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout() {
  return (
    <>
      <div className="relative z-0 bg-primary min-h-dvh flex flex-col">
        <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>
        <ScrollToTop />
        <Footer />
      </div>

      {/* componente globale, la final ca să fie peste pagină */}
      <AnalyticsConsentGate />
      <CookieConsent />
    </>
  );
}
