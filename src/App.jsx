// App.jsx
import {About, Contact, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works} from "./components";

const App = () => {
  return (
      // ✅ No BrowserRouter here
      <div className="relative z-0">
        <Navbar />
        <Hero />

        <div className="bg-primary">
          <About />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
  );
};

export default App;
