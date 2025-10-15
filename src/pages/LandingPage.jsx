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
function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <TopSocialHeader />
      <Navbar />
      <main className="overflow-x-hidden">
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
    </div>
  );
}

export default LandingPage
