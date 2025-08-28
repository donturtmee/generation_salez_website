import {
  Hero,
  About,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "../components";

export default function Home() {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>

      <About />
      <Tech />
      <Works />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}
