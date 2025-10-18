import React from "react";
import TopSocialHeader from "../../components/TopSocialHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SNNav from "./SNNav";
import SNHome from "./SNHome";
import SNWhy from "./SNWhy";
import SNGallery from "./SNGallery";
const SachetNariLayout = () => {
  return (
    <>
      <TopSocialHeader />
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
        {/* Timeline Navigation */}
        <div className="sticky mx-auto max-w-2xl rounded-full top-25 z-30 bg-white/80 backdrop-blur-md py-2 px-2 md:px-6 border-b border-gray-200 shadow-sm">
          <SNNav />
        </div>

        {/* TLH Sections */}
        <main className="space-y-20 md:space-y-32  pb-0 w-full overflow-x-hidden pt-[90px]">
          <section id="home" className="px-4 md:px-8 mb-3"><SNHome /></section>
          <section id="why" className="px-4 md:px-8 mb-3"><SNWhy /></section>
          <section id="gallery" className="px-4 md:px-8 mb-3"><SNGallery /></section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default SachetNariLayout;
