import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
