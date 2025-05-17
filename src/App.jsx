import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import PageWrapper from './pages/PageWrapper';

import useLenis from './hooks/useLenis';

const App = () => {
  useLenis();
  const location = useLocation();

  return (
    <div className="bg-zinc-900 min-h-screen w-full pt-[100px] flex flex-col px-[2.5vw] items-center">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
          <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;