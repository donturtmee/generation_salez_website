import {BrowserRouter} from "react-router-dom";
import {About, Contact, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works} from "./components";

const App = () => {
  return (
      <BrowserRouter>
        {/* Top area transparent */}
        <div className="relative z-0">
          <Navbar />
          <Hero />

          {/* Rest of site can use the dark site background */}
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
      </BrowserRouter>
  );
};

export default App;
