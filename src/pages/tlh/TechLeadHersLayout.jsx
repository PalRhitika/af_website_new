import React from "react";
import TopSocialHeader from "../../components/TopSocialHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TLHTimeline from "./TLHTimeline";
import TLHHome from "./TLHHome";
import TLHWhy from "./TLHWhy";
import TLHCohort1 from "./TLHCohortI";
import TLHCohort2 from "./TLHCohortII";
import TLHSessions from "./TLHSessions";
import TLHGraduation from "./TLHGraduation";

const TechLeadHersLayout = () => {
  return (
    <>
      <TopSocialHeader />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
        {/* Timeline Navigation */}
        <div className="sticky mx-auto max-w-4xl rounded-full top-25 z-30 bg-white/80 backdrop-blur-md py-2 px-2 md:px-6 border-b border-gray-200 shadow-sm">
          <TLHTimeline />
        </div>

        {/* TLH Sections */}
        <main className="space-y-20 md:space-y-32 py-10 w-full overflow-x-hidden">
          <section id="home" className="px-4 md:px-8 pt-[90px] "><TLHHome /></section>
          <section id="why" className="px-4 md:px-8"><TLHWhy /></section>
          <section id="cohort1" className="px-4 md:px-8"><TLHCohort1 /></section>
          <section id="cohort2" className="px-4 md:px-8"><TLHCohort2 /></section>
          <section id="sessions" className="px-4 md:px-8"><TLHSessions /></section>
          <section id="graduation" className="px-4 md:px-8"><TLHGraduation /></section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default TechLeadHersLayout;
