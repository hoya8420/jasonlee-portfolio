import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Snapsave from './Snapsave';
import RiverComponent from './components/River';
import Phd from './Phd';
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop component
import './App.css'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <AnimatePresence mode='wait'>
          <Routes>
            {/* Root route - Home Page */}
            <Route
              path="/"
              element={
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.45, ease: 'easeInOut' }}
                >
                  <Hero />
                  <RiverComponent />
                  <Projects />
                  <Footer />
                </motion.div>
              }
            />
            
            {/* Redirect /home to / */}
            <Route path="/home" element={<Navigate to="/" />} />

            {/* About Page */}
            <Route
              path="/about"
              element={
                <motion.div
                  key="about"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.7, ease: 'easeInOut' }}
                >
                  <About />
                </motion.div>
              }
            />

            {/* Snapsave Page */}
            <Route
              path="/snapsave"
              element={
                <motion.div
                  key="snapsave"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.7, ease: 'easeInOut' }}
                >
                  <Snapsave />
                </motion.div>
              }
            />

            {/* PhD Page */}
            <Route
              path="/phd"
              element={
                <motion.div
                  key="phd"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1, duration: 0.7, ease: 'easeInOut' }}
                >
                  <Phd />
                </motion.div>
              }
            />

            {/* Catch-all route for undefined paths */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
