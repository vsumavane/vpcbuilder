import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./components/Home'));
const BuildPC = lazy(() => import('./components/BuildPC'));
const PrebuiltPC = lazy(() => import('./components/PrebuiltPC'));
const ExpenseEvaluation = lazy(() => import('./components/ExpenseEvaluation'));
const HowToBuild = lazy(() => import('./pages/HowToBuild'));
const AboutUs = lazy(() => import('./pages/AboutUs'));

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/build" element={<BuildPC />} />
              <Route path="/prebuilt-pc" element={<PrebuiltPC />} />
              <Route path="/expense-evaluation" element={<ExpenseEvaluation />} />
              <Route path="/how-to-build" element={<HowToBuild />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
