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
    title: "Digital Literacy Project",
    modal_title :"Digital Literacy Project: How Did This Come to Our Attention?",
    image: "/assets/img/digitalliteracy.png",
    shortDescription:
      "Aaviyanta Foundation’s general health screening addresses the lack of quality healthcare in elderly homes across Nepal, ensuring timely access to care and support.",
    fullDescription: `
                   Digital landscape is a huge area with opportunities and
                  possibilities. Although it is popular amongst youth, even
                  senior citizens reap the benefits of technology these days.
                  Aaviyanta Foundation has started an awareness project where it
                  teaches the importance of Online safety to senior citizens
                  using social media platforms, to stay connected with their
                  family abroad, from harm of cyber criminals. Also, some
                  individuals like doing online business, and hence teaching
                  them ways to collaborate with other people and do ethical
                  business through internet is also explored in the program
                  <br /> <br />
                  We do so by giving them sessions on:
                  <br />
                  <ul>
                    <li type="bullet">
                      ✿ Familiarity with terms and common platforms
                    </li>
                    <li type="bullet">✿ Adapting to new technology</li>
                    <li type="bullet">✿ Collaboration & Business</li>
                  </ul>
                  `,
  },
  {
    id: 2,
    title: "Digital Safety Project",
    modal_title: "Digital Safety Project: How Did This Come to Our Attention?",
    image: "/assets/img/dentalscreening.jpg",
    shortDescription:
      "Dental health shapes overall wellbeing. Our dental screening initiative reaches communities where access to oral care is limited.",
    fullDescription: `
 The increased online dependency for people around the world is
                  creating opportunities for cyber-criminals to use digital
                  spaces and social media as a tool to commit crimes, such as;
                  harassing, looting, and intimidating other social media users.
                  There has been an increasingly large concern over the last
                  several years around cyber crimes created through the use of
                  social media platforms. The problem came more to the surface
                  during the COVID-19-induced lock down with “caged criminals”
                  targeting their victims online. They either try to defame
                  women on social media or create fake accounts or stalk young
                  girls or force them to do dangerous challenges or intend
                  towards online sexual relationships for fun.
                  <br /><br/>
                  These crimes often occur within
                      women and gender-diverse communities because they are seen
                      as easier to manipulate and exploit. Many individuals
                      don't know how to respond to such incidents, and most
                      avoid reporting cybercrimes due to social stigma.
                      <br /><br />
                      Safe education and awareness on such topics can enable
                      people to avoid unsafe situations. As we cannot change the
                      minds of criminals, we can learn the right processes to
                      protect ourselves and take precautions to avoid becoming
                      vulnerable.
                      <br /> <br />
                      The objective of this project is to teach individuals how
                      to safely and securely navigate the online world and
                      social media platforms. Our goal is to help people remain
                      vigilant, avoid falling into online traps, and raise
                      awareness in their communities.
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

const DigitalLiteracy = () => {
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
          Digital Literacy Project
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

    </div>
      <Footer/>
      </>
  );
};

export default DigitalLiteracy;
