import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "../components/Navbar";
import TopSocialHeader from "../components/TopSocialHeader";
import Footer from "../components/Footer";
import {  motion} from "motion/react"
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

/* ------------------------------ DATA STRUCTURE ------------------------------ */
const commonData = {
  health: {
    title: "Health Initiatives",
    sections: [
      {
        id: 1,
        title: "Health Research",
        image: "/assets/img/research1.png",
        link: "/health/research",
        shortDescription:
          "Aaviyanta Foundation’s general health screening addresses the lack of quality healthcare in elderly homes across Nepal, ensuring timely access to care and support.",

      },
      {
        id: 2,
        title: "Community Interventions",
        image: "/assets/img/story5.png",
        link: "/health/community-interventions",
        shortDescription:
          "Dental health shapes overall wellbeing. Our dental screening initiative reaches communities where access to oral care is limited.",
      },
    ],
  },

  education: {
    title: "Education & Awareness Initiatives",
    sections: [
      {
        id: 1,
        title: "Digital Literacy and Safety",
        image: "/assets/img/digitalliteracy1.png",
        link:"/education/digital-literacy",
        shortDescription:
          "Building digital safety awareness across schools and communities to promote responsible online behavior.",
      },
      {
        id: 2,
        title: "Tech Leadhers Flagship Program",
        link:"/education/techleadhers",
        image: "/assets/img/biweekly.png",
        shortDescription:
          "An initiative to bridge the gender gap in technology by training and mentoring young women.",
      },
      {
        id: 3,
        title: "Sachet Nari",
        link:'/education/sachet-nari',
        image: "/assets/img/sachetnari/Bootcamp/5.jpg",
        shortDescription:
          "Sachet Nari is a campaign promoting gender awareness, leadership, and equality through storytelling and dialogue.",
      },
    ],
  },
};



/* ------------------------------ MAIN COMPONENT ------------------------------ */
const CommonPage = () => {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  // Determine which dataset to use based on link
  const pageKey = location.pathname.includes("/health")
    ? "health"
    : location.pathname.includes("/education")
    ? "education"
    : null;

  const pageData = pageKey ? commonData[pageKey] : null;

  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "auto";
  }, [selectedItem]);

  if (!pageData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-gray-500">No matching data for this route.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen pt-10 bg-gradient-to-b from-blue-50 to-teal-50 flex flex-col items-center">
        <TopSocialHeader />
        <Navbar />
        <div className="flex-1 pt-[90px] pb-20">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-10 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {pageData.title}
          </motion.h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 max-w-6xl">
            {pageData.sections.map((focus, i) => (
                         <Link to={focus.link} key={i}>
                           <motion.div
                             key={i}
                             initial={{ opacity: 0, y: 30 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.5, delay: i * 0.1 }}
                             className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
                           >
                             <div className="overflow-hidden">
                               <img
                                 src={focus.image}
                                 alt={focus.title}
                                 className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                               />
                             </div>
                             <div className="p-6 text-center">
                               <h3 className="text-2xl font-semibold text-[#266d67] mb-3">
                                 {focus.title}
                               </h3>
                               {/* <p className="text-gray-700 leading-relaxed text-base">
                                 {focus.shortDescription}
                               </p> */}
                             </div>
                           </motion.div>
                         </Link>
                       ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CommonPage;
