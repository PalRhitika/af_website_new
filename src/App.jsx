// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import TechLeadHersLayout from './pages/tlh/TechLeadHersLayout';
import TLHHome from './pages/tlh/TLHHome';
import SachetNariLayout from './pages/sachet/SachetNariLayout';
import SNHome from './pages/sachet/SNHome';
import HealthResearch from './pages/ourwork/HealthResearch';
import ClimateResillience from './pages/ourwork/ClimateResillience';
import ImpactStories from './pages/impactstories/Impactstories';
import CommunityInterventions from './pages/ourwork/CommunityInterventions';
import WhoWeAre from './pages/WhoWeAre';
import DigitalLiteracy from './pages/ourwork/DigitalLiteracy';
import CommonPage from './pages/CommonPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="health/research" element={<HealthResearch />} />
        <Route path="health" element={<CommonPage />} />
        <Route path="education" element={<CommonPage />} />
        <Route path="health/community-interventions" element={<CommunityInterventions />} />
        <Route path="impact-stories" element={<ImpactStories />} />
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="education/digital-literacy" element={<DigitalLiteracy />} />



        <Route path="climate-resilience" element={<ClimateResillience />} />
        <Route path="education/techleadhers" element={<TechLeadHersLayout />} >

          <Route index element={<TLHHome />} />
          {/* <Route path="why" element={<TLHWhy />} />
          <Route path="cohort-i" element={<TLHCohortI />} />
          <Route path="cohort-ii" element={<TLHCohortII />} />
          <Route path="sessions" element={<TLHSessions />} />
          <Route path="graduation" element={<TLHGraduation />} /> */}
        </Route>
        <Route path="education/sachet-nari" element={<SachetNariLayout />}>
          <Route index element={<SNHome />} />
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
