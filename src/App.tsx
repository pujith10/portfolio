import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Research } from "./sections/Research";
import { TechStack } from "./sections/TechStack";
import { ImpactMetrics } from "./sections/ImpactMetrics";

import { Certificates } from "./sections/Certificates";
import { Resume } from "./sections/Resume";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen bg-primary text-white transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <Navbar />
        <main>
          <Hero />
          <ImpactMetrics />
          <Experience />
          <TechStack />
          <Projects />
          <Research />
          <Certificates />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
