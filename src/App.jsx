import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Speakers from './components/Speakers';
import Workshop from './components/Workshop';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CompanyProfile from './components/CompanyProfile';

// Home Page Component
const HomePage = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let animationTimeouts = [];
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      const dots = document.querySelectorAll('.animated-dot');
      
      // Clear any existing timeouts
      animationTimeouts.forEach(timeout => clearTimeout(timeout));
      animationTimeouts = [];
      
      dots.forEach((dot, index) => {
        // Remove existing animation classes immediately
        dot.classList.remove('dot-scroll-up', 'dot-scroll-down');
        
        // Force reflow to ensure class removal takes effect
        // eslint-disable-next-line no-unused-expressions
        dot.offsetHeight;
        
        // Add scroll direction animation with staggered timing
        const timeout = setTimeout(() => {
          if (scrollDirection === 'down') {
            dot.classList.add('dot-scroll-down');
          } else {
            dot.classList.add('dot-scroll-up');
          }
          
          // Remove animation class after animation completes
          const cleanupTimeout = setTimeout(() => {
            dot.classList.remove('dot-scroll-up', 'dot-scroll-down');
          }, 800); // Match animation duration
          
          animationTimeouts.push(cleanupTimeout);
          
        }, index * 30); // Reduced stagger time for more responsive feel
        
        animationTimeouts.push(timeout);
      });
      
      lastScrollY = currentScrollY;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      animationTimeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <>
      <Hero />
      <Countdown />
      <Speakers />
      <Workshop />
      <EventDetails />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
