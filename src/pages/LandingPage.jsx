import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import MissionVision from '../components/MissionVision';
import OurWork from '../components/OurWork';
import TechLeadhers from '../components/TechLeadhers';
import Supporters from '../components/Supporters';
import SachetNari from '../components/SachetNari';
import History from '../components/History';
import Footer from '../components/Footer';
import CopyrightBar from '../components/CopyrightBar';
import TopSocialHeader from '../components/TopSocialHeader';
import Modal from "react-modal";
import { motion } from "framer-motion";
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  useEffect(() => {
    // Show modal after a short delay (optional)
    const timer = setTimeout(() => setShowModal(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 w-full overflow-x-hidden">
      <TopSocialHeader />
      <Navbar />
      <main className="overflow-x-hidden w-full">
        <HeroCarousel />
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <MissionVision />
          <OurWork />
          <TechLeadhers />
          <SachetNari />
          <Supporters />
          <History />
        </div>
      </main>
      <Footer />
      <CopyrightBar />
      {/* Popup Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        contentLabel="TechLeadhers Program Announcement"
        style={{
          content: {
            maxWidth: '500px',
            maxHeight: '85vh',
            margin: 'auto',
            borderRadius: '1rem',
            padding: '0',
            overflow: 'hidden',
            background: 'white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          },
          overlay: {
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 9999,
          },
        }}
      >
      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative flex flex-col items-center text-center"
        >
        {/* Top-right circular close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-50 hover:scale-105 transition-transform cursor-pointer"
        >
          <span className="sr-only">Close</span>
          <svg className="w-5 h-5 text-pink-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
          {/* Flyer Image */}
          <img
            src="/assets/img/tlhflyer.jpg"
            alt="TechLeadhers Flyer"
            className="w-full object-cover h-full"
          />

          {/* Content */}
          <div className="p-6">
            <Link
              to="education/techleadhers"
              className="bg-pink-600 hover:bg-white hover:text-white text-white font-semibold px-5 py-2 rounded-full transition"
            >
              Know More
            </Link>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
}

export default LandingPage
