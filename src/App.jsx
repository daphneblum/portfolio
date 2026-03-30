import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      document.body.classList.add('scrolling-active');

      // Reset the timer every time the user scrolls
      clearTimeout(timeout);

      // Hide the scrollbar after 1.5 seconds of inactivity
      timeout = setTimeout(() => {
        document.body.classList.remove('scrolling-active');
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    document.body.classList.remove('scrolling-active');
  }, []);
    
  

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
        <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className = "relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
