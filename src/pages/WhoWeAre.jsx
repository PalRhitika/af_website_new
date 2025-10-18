
import MissionVision from "../../src/components/MissionVision";

import TopSocialHeader from "../components/TopSocialHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Values from "../components/Values";
import WeFocus from "../components/WeFocus";

function WhoWeAre() {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-green-100 w-full overflow-hidden">
      <TopSocialHeader/>
      <Navbar/>
      {/* Mission & Vision Section */}
      <div className=" pt-[70px]">
      <MissionVision />
        </div>
    <Values/>
    <WeFocus/>

      <Footer/>
    </div>
  );
}

export default WhoWeAre;
