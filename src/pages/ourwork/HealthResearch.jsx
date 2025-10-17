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
    title: "General Health",
    modal_title :"General Health Screening: How Did This Come to Our Attention?",
    image: "../src/assets/img/story3.png",
    image2:"../src/assets/img/mm.jpg",
    image3:"../src/assets/img/health2.jpg",
    image4:"../src/assets/img/health4.jpeg",
    shortDescription:
      "Aaviyanta Foundation’s general health screening addresses the lack of quality healthcare in elderly homes across Nepal, ensuring timely access to care and support.",
    fullDescription: `
                  Ageing is a global health concern, and with the rising elderly
                  population, old age homes are increasing in Nepal. However, a
                  study in Kathmandu revealed that many of these homes provide
                  inadequate facilities, leaving the elderly deprived of proper
                  care, support, and basic needs for a comfortable life. Many of
                  these homes struggle to offer even the most essential
                  services, further exacerbating the challenges faced by elderly
                  residents.
                  <br /> <br />
                  Few studies have focused on the health of elderly residents in
                  old age homes. Access to timely and quality healthcare is
                  crucial for the elderly, as age brings more health risks.
                  However, the poor financial conditions, lack of resources, and
                  delayed funds in these homes make providing good medical care
                  a challenge. Additionally, the lack of trained staff and
                  proper medical infrastructure further compounds the issue.
                  <br /> <br />
                   Healthy ageing is a target of Nepal, which signed the
                      Madrid Convention in 2002. An elderly person’s ability to
                      stay healthy and independent depends on a supportive
                      environment, including well-designed living conditions,
                      access to economic resources, and an appropriate
                      healthcare system. To address this, Aaviyanta Foundation
                      aims to conduct health camps at least once every two
                      months to improve the health of elderly residents in these
                      homes.
                      <br />                      <br />
                      A health screening program is a mobile health service
                      where doctors or organizations provide consultations and
                      distribute medications at local levels. It is a widely
                      used method in developing countries to reach underserved
                      populations and provide healthcare services directly to
                      them.
                      <br /> <br />
                      The ability of an elderly to stay healthy and independent
                      is directly proportional to the provision of the
                      supportive environment that includes well-designed living
                      conditions, access to economic sources and an appropriate
                      health care system.
                      <br /> <br />
                      Health programs are held in rural, urban, and remote
                      areas, including schools, universities, prisons, old age
                      homes, and orphanages. They focus on specific health
                      issues like hypertension, diabetes, STDs, psychiatric
                      illnesses, malnutrition, and rheumatic heart disease, or
                      general health. These programs are organized by hospitals,
                      NGOs, INGOs, associations, clubs, pharmaceutical
                      companies, and individuals.
                      <br /> <br />
                      Aaviyanta Foundation is a registered NGO dedicated to
                      reducing disparities in health and education in Nepal. We
                      take a bottom-up approach, working directly with
                      underprivileged communities, uniting people for a cause,
                      and creating sustainable solutions for societal balance.
                      To achieve our goals, we have been organizing free medical
                      health programs at Manav Seva and old age homes in the
                      Kathmandu Valley.
                  `,
  },
  {
    id: 2,
    title: "Dental Screening",
    modal_title: " Dental Screening: How Did This Come to Our Attention?",
    image: "../src/assets/img/dentalscreening.jpg",
    image2:"../src/assets/img/dental2.jpg",
    image3:"../src/assets/img/dentail3.jpg",
    image4:"../src/assets/img/dental4.jpg",
    shortDescription:
      "Dental health shapes overall wellbeing. Our dental screening initiative reaches communities where access to oral care is limited.",
    fullDescription: `
 The mouth, a vital part of the human body, plays a crucial
                  role in maintaining overall health, impacting both physical
                  and mental well-being. Oral health problems can lead to
                  serious conditions, such as heart disease and diabetes.
                  Despite improvements globally, challenges remain, especially
                  in disadvantaged communities in both developed and developing
                  countries. These areas face limited access to dental care,
                  poor education, and poverty. Special attention through the
                  Dental Health Program is needed to address these issues and
                  promote oral health awareness.
                  <br /> <br />
                  Around 70 children and 163 adults benefited from the program.
                  Over half of the children had good oral hygiene, while 35%
                  required dental treatment. Similarly, 51.8% of adults had good
                  oral hygiene, with the rest needing dental care.showing some
                  positive care habits, while the remaining adults needed dental
                  attention.
                  <br /> <br />
                  Both privileged and underprivileged populations showed a
                      need for dental treatment. Clinical examinations revealed
                      untreated caries and periodontal disease, often due to
                      illiteracy, poor awareness, and lack of services, even
                      among those from different professional backgrounds or
                      vulnerable communities.
                      <br /> <br />
                      The lack of proper oral hygiene practices highlights the
                      need for greater awareness. To improve overall oral
                      health, we must promote awareness, disease prevention, and
                      enhance oral health care delivery systems.
                      <br /> <br />
                      Aaviyanta Foundation began its first humanitarian
                      initiative through the Dental Program at an orphanage.
                      <br />
                      Since 2020, in collaboration with UNR Dental Clinic, nine
                      free dental screenings have been conducted across
                      Kathmandu valley, with five at orphanages, two at Manav
                      Seva, and one at an elderly home. Due to COVID-19
                      protocols, travel outside the valley was restricted this
                      year. The team included a dental surgeon, two dental
                      hygienists, and three volunteers.
                      <br />
                      The program's goals are:
                      <ul>
                        <li type="bullet">
                          ✿ To assess dental health and treatment needs among
                          children, the elderly, and homeless people in shelter
                          homes.
                        </li>
                        <li type="bullet">
                          ✿ To determine the prevalence of dental diseases within
                          the community.
                        </li>
                        <li type="bullet">
                          ✿ To develop strategies for promoting dental hygiene and
                          oral health for future generations.
                        </li>
                      </ul>
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

const HealthResearch = () => {
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
          Health Research Initiatives
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

        {/* Gallery Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-teal-600 mb-4 border-l-4 border-teal-400 pl-3">
            Program Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[selectedResearch.image2, selectedResearch.image3, selectedResearch.image4]
              .filter(Boolean)
              .map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={img}
                    alt={`Program ${idx + 1}`}
                    className="w-full h-52 object-cover hover:opacity-90 transition"
                  />
                </motion.div>
              ))}
          </div>
        </div>

        {/* Highlight Box */}
        <motion.div
          className="mt-10 bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-teal-800 font-medium text-lg italic text-center">
            “Empowering communities through awareness, compassion, and care — Aaviyanta Foundation’s
            mission continues to build healthier futures for Nepal.”
          </p>
        </motion.div>
      </div>
    </motion.div>
  )}
</Modal>

      <Footer/>
    </div>
      </>
  );
};

export default HealthResearch;
