import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Description from './components/Description';
import WhyInsurX from './components/WhyInsurX';
import LoadingIndicator from './components/LoadingIndicator';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AgencySolutions from './pages/AgencySolutions';
import BookingPage from './pages/BookingPage';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';

// ScrollToTop component to handle scroll behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const appRef = useRef(null);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (isLoaded && appRef.current) {
      const tl = gsap.timeline();
      
      tl.to(appRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        force3D: true
      });
      
      return () => {
        tl.kill();
      };
    }
  }, [isLoaded]);

  return (
    <div className="smooth-scroll">
      {isLoading && <LoadingIndicator />}
      <div 
        ref={appRef} 
        className="font-inter force-gpu"
        style={{ 
          opacity: 0,
          visibility: 'visible' 
        }}
      >
        <Header />
        <main className="no-layout-shift">
          <Hero />
          <Description />
          <Features />
          <Services />
          <WhyInsurX />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component inside Router */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agency-solutions" element={<AgencySolutions />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;