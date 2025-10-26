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
    title: "Covid Relief Fund",
    modal_title :"Covid Relief Fund: How Did This Come to Our Attention?",
    image: "/assets/img/covid.jpg",
    image2:"/assets/img/fundr1.jpg",
    image3:"/assets/img/fr2.jpg",
    image4:"/assets/img/fr3.jpeg",
    shortDescription:
      "Aaviyanta Foundation launched the COVID Relief Fund to support the community by providing medical aid, food supplies, and hospital assistance. Through generous donations, NPR 2 Lakh was raised and donated to Chhetrapati Hospital to help expand its capacity and serve patients in need.",
    fullDescription: `
                 How did this come to our attention? When a second wave of the
                  COVID-19 pandemic swept across Nepal, the daily infection rate
                  exponentially increased to around 10,000 cases per day. Due to
                  our poorly managed health care system, many were unable to get
                  the medical help they needed. Hospitals were overwhelmed and
                  were running out of medical oxygen, ICU beds, ventilators and
                  medicines. Therefore new admissions are being turned down.
                  People were losing their lives in ambulances travelling from
                  one hospital to another.
                  <br /> <br />
                  Along with this medical crisis, Nepal was facing a
                      Humanitarian crisis as well, where the daily wage workers
                      did not have access to food and other essential supplies.
                      And with most of our country’s resources being utilised
                      for this medical emergency, there were fears that the
                      humanitarian crisis could get even greater than during the
                      first wave of COVID-19 pandemic.
                      <br /> <br />
                      <br />
                      Aaviyanta foundation wanted to support the community of
                      Kathmandu, with whatever little we had, to combat this
                      COVID crisis. More resources were required to respond to
                      this outbreak. Therefore, we set up an Aaviyanta COVID
                      relief fund project and reached out to friends and family
                      abroad to donate. The funds raised through this project
                      were used for holding the Medicine Bank, Food Bank and
                      also to support hospitals. We raised NPR 2 Lakh Thousand.
                      <br /> <br />
                      <h2>Donation</h2>
                      <br /> <br />
                      An amount of NPR 2 Lakh was donated to support Chhetrapati
                      Hospital, a community run hospital in Kathmandu which has
                      been providing free treatment to its patients. With
                      resources required to operate COVID ward, ICUs and
                      isolation centres, they were running out of beds, hence
                      Aaviyanta Foundation donated the amount to get beds for
                      the incoming patients.
                  `,
  },
  {
    id: 2,
    title: "Medicine bank",
    modal_title: "Medicine Bank: How Did This Come to Our Attention?",
    image: "/assets/img/medicinebank.jpg",
    image2:"/assets/img/mb2.jpg",
    image3:"/assets/img/mb3.jpg",
    image4:"/assets/img/mb4.jpg",
    shortDescription:
      "Aaviyanta Foundation distributed essential medicines to residents of Manav Sewa Ashram (Bhaktapur) and counseled them on proper usage. We also supported Chhetrapati Hospital by donating medicines through our network of pharmaceutical partners.",
    fullDescription: `
  Different Old Age homes and orphanages in Nepal are struggling
                  to provide basic health needs as COVID pandemic has affected
                  support from donors. Therefore, we distributed medicines to
                  residents of manav sewa ashram(Bhaktapur branch) suffering
                  from chronic disease like epilepsy, depression,hypertension
                  etc and counselled them on the correct usage of donated
                  Medicines as well. An initiative by aaviyanta foundation to
                  provide medicines for free to people in need with neither
                  access nor accessibility.
                  <br />
                  Due to the shortage of medicines faced by many hospitals we
                  also donated many medicines to Chhetrapati Hospital through
                  our contacts at various pharmaceutical companies. <br />
                  `,
  },
  {
    id: 3,
    title: "Food Bank",
    modal_title: " Food Bank: How Did This Come to Our Attention?",
    image: "/assets/img/foodbank.jpg",
    image2:"/assets/img/fb2.jpg",
    image3:"/assets/img/fb3.jpg",
    image4:"/assets/img/fb4.jpg",
    shortDescription:
      "During the COVID-19 lockdown, Aaviyanta Foundation launched a Food Package Distribution Program to support families who lost their income. In collaboration with the Lions Club of Kathmandu Social Friends, essential grocery and hygiene kits were distributed to 21 daily-wage families in Bansbari, providing a month’s relief and hope amid the crisis.",
    fullDescription: `
To support needy families who lost their income due to
                  government-imposed lockdowns during the COVID-19 pandemic,
                  Aaviyanta Foundation launched a Food Package Distribution
                  Program. This initiative aimed to assist vulnerable
                  communities struggling to manage daily meals amidst the
                  crisis.
                  <br /> <br />
                  The COVID Relief Fund extended its services to marginalized
                  and low-income groups by distributing essential grocery and
                  hygiene kits. The prohibitory orders left thousands of
                  daily-wage earners jobless, with hunger becoming a more
                  immediate concern than the fear of the virus.
                  <br /> <br />
                  In collaboration with the Lions Club of Kathmandu Social
                  Friends, food packages were distributed to 21 families of
                  daily-wage earners in Bansbari, on the outskirts of Kathmandu.
                  Each package provided a month's support, offering a small yet
                  impactful effort to ease the hardships caused by the lockdown.
                  <br /> <br />
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

const CommunityInterventions = () => {
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
          Community Interventions
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

    </div>
      <Footer/>
      </>
  );
};

export default CommunityInterventions;
