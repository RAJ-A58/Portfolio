import React from 'react';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import CompetitiveStats from './components/CompetitiveStats.jsx';
import Skills from './components/Skills.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="portfolio-app">
      {/* Interactive Magnetic Cursor (desktop fine pointer only) */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Core Showcase Sections */}
      <main>
        <Hero />
        <Experience />
        <Projects />
        <CompetitiveStats />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Minimalist Engineering Footer */}
      <Footer />
    </div>
  );
}

export default App;
