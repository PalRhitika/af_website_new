import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import TopSocialHeader from "../../components/TopSocialHeader";
import Footer from "../../components/Footer";
Modal.setAppElement("#root");

const researchData = [
  {
    id: 1,
    title: "Uddhar",
    modal_title :" Revolutionizing Flood Management: A Disaster Alert System for Enhanced Public Safety",
    image: "../src/assets/img/uddharhomepage.jpeg",
    shortDescription:
      " Revolutionizing Flood Management: A Disaster Alert System for Enhanced Public Safety.",
    fullDescription: `
                  The Disaster Alert System is a cutting-edge solution designed to provide timely, location-based alerts and efficient rescue coordination during flood events. Through a user-friendly mobile app and a comprehensive admin dashboard, the system utilizes real-time weather data, geofencing, and GPS technology to deliver accurate warnings and assist in the rapid deployment of rescue efforts.

                  <br /> <br />
                  <strong> Focus Areas :</strong>
                  <br />

                 <p>The project focuses on improving flood management in Kathmandu, particularly in high-risk areas such as the southern and low-lying regions of the city, including the Bagmati River and Teku area. It integrates predictive flood alerts, real-time location tracking, and user-driven rescue requests to offer a proactive approach to flood risk management. The system aims to provide accurate, timely notifications, enabling both residents and rescuers to make informed decisions and act quickly in flood-prone areas.</p>

                  <br />
                  <strong>Impact :</strong> <br />
                  Enhanced Public Safety: The system provides real-time flood alerts to Kathmandu valley residents, reducing risks and enabling timely evacuations.
                  <br /> <br />
                  Optimized Response: By streamlining rescue requests and data sharing, the system improves emergency response times, ensuring swift assistance to affected communities.
                  `,
  },
  {
    id: 2,
    title: "SwachGyan",
    modal_title: "Learning Through Play: Climate Awareness for Young Minds",
    image: "../src/assets/img/climate.jpg",
    shortDescription:
      "Learning Through Play: Climate Awareness for Young Minds",
    fullDescription: `
  A creative initiative to educate youth in government schools
                  on climate resilience using engaging and interactive methods.
                  <br /> <br />
                  At Swachyagyan, we believe that education is the key to fostering positive change. <br/>
🌍 Educate children on waste management and segregation. <br/>
🌍 Empower children to make informed recycling decisions.<br/>
🌍 romote environmental consciousness and responsibility.
<br /> <br />
<strong> Our Goal: </strong><br/>

🌱 Raise awareness about waste management.<br/>
🌱 Equip children with practical waste management skills.<br/>
🌱 Foster environmentally conscious individuals.<br /> <br />

<strong> How We Achieve Our Goal: </strong> <br/>

📚 Educational Workshops and Activities.<br/>
🎨 Creative Recycling Projects.<br/>
🌱 School and Community Programs.<br /> <br />

<strong>Impact :</strong> <br />
                  Engaged over 1,000 students across 15 schools, sparking
                  interest in sustainability and disaster resilience. <br />
                  Encouraged creativity through simulations and hands-on
                  projects, with many students showing interest in STEM careers.
                  <br /> <br />`,
  },
  {
    id: 3,
    title: "Earthquake Simulation",
    modal_title: "Earthquake Preparedness Simulation: Strengthening Safety and Community Resilience",
    image: "../src/assets/img/earthquake.jpg",
    shortDescription:
      " The earthquake simulation is a periodic drill aimed at preparing communities, especially in high-risk areas of Kathmandu Valley, for potential seismic events. It educates residents on key actions during an earthquake, such as staying calm, protecting themselves, and managing additional risks like fires. The simulation will be held regularly to ensure continuous awareness and readiness, including evacuation and family reunification plans.",
    fullDescription: `
 <strong> Focus Areas :</strong>
                  <br />


                 <p>The project focuses on Kathmandu Valley, particularly high-risk areas such as densely populated urban zones and older buildings with structural vulnerabilities. It raises awareness on earthquake safety, family preparedness, fire hazards, and community collaboration. The drill encourages calmness, adherence to evacuation procedures, and neighborly assistance, while ensuring clear communication within families.</p>

                  <br />
                  <strong>Impact :</strong> <br />
                  The simulation enhanced community preparedness, enabling residents to act calmly and effectively during an earthquake, minimizing panic.
                  <br /> <br />
                  It strengthened community bonds, ensuring families could reunite and support each other during and after a seismic event. It also fosters a resilient community, ready to face future challenges.
                  `,
  },
];

const modalStyles = {
  content: {
    maxWidth: "800px",
    maxHeight: "85vh",
    margin: "auto",
    overflowY: "auto",
    borderRadius: "1rem",
    padding: "2rem",
    background: "linear-gradient(135deg, #f9fafb, #e0f7fa)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 1000,
  },
};

const ClimateResillience = () => {
  const [selectedResearch, setSelectedResearch] = useState(null);

  // Disable background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedResearch ? "hidden" : "auto";
  }, [selectedResearch]);

  return (
    <>
    <div className="min-h-screen pt-10 bg-gradient-to-b from-blue-50 to-teal-50 flex flex-col items-center">
      <TopSocialHeader/>
      <Navbar />
      <div className="flex-1 pt-[90px] pb-20">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-teal-700 mb-10 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         Climate Resillience Initiatives
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 max-w-6xl">
          {researchData.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer overflow-hidden"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedResearch(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-teal-700 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.shortDescription}
                </p>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition">
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

     {/* Modal */}
<Modal
  isOpen={!!selectedResearch}
  onRequestClose={() => setSelectedResearch(null)}
  style={modalStyles}
  contentLabel="Research Modal"
>
  {selectedResearch && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="font-sans text-gray-800"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-2">
        <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
          {selectedResearch.modal_title}
        </h2>
        <button
          onClick={() => setSelectedResearch(null)}
          className="text-gray-500 hover:text-red-500 text-3xl font-bold transition"
        >
          ×
        </button>
      </div>

      {/* Hero Image */}
      <div className="relative mb-8">
        <img
          src={selectedResearch.image}
          alt={selectedResearch.title}
          className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="space-y-8 leading-relaxed text-justify">
        <div
          className="text-gray-700 text-lg"
          dangerouslySetInnerHTML={{ __html: selectedResearch.fullDescription }}
        ></div>

      </div>
    </motion.div>
  )}
</Modal>

    </div>
      <Footer/>
      </>
  );
};

export default ClimateResillience;
