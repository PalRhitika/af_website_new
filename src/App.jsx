// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TechLeadHersLayout from './pages/tlh/TechLeadHersLayout';
import TLHHome from './pages/tlh/TLHHome';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="education/techleadhers" element={<TechLeadHersLayout />}>
        <Route index element={<TLHHome />} />
        {/* <Route path="why" element={<TLHWhy />} />
        <Route path="cohort-i" element={<TLHCohortI />} />
        <Route path="cohort-ii" element={<TLHCohortII />} />
        <Route path="sessions" element={<TLHSessions />} />
        <Route path="graduation" element={<TLHGraduation />} /> */}
      </Route>
        {/* Future pages can be added here */}
        {/* <Route path="/what-we-do" element={<WhatWeDo />} /> */}
        {/* <Route path="/who-we-are" element={<WhoWeAre />} /> */}
        {/* <Route path="/impact-stories" element={<ImpactStories />} /> */}
      </Routes>
    </Router>
  );
}
export default App
