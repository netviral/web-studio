import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

import Home from './pages/Home';

// Lazy load pages for code splitting
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const WhyUs = lazy(() => import('./pages/WhyUs'));

import Footer from './components/Footer';
import GenericTemplate from './pages/templates/GenericTemplate';
import { serviceContent } from './data/servicesData';
import { industriesData } from './data/industriesData';
import { personasData } from './data/personasData';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <ScrollToTop />

        <Suspense fallback={<div className="loading-spinner" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:id" element={<GenericTemplate data={serviceContent} type="service" />} />
            <Route path="/industries/:id" element={<GenericTemplate data={industriesData} type="industry" />} />
            <Route path="/personas/:id" element={<GenericTemplate data={personasData} type="persona" />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
