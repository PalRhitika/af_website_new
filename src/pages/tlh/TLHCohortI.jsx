import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  };
};

const TLHCohortI = () => {
  const [showFull, setShowFull] = useState(false);

  const toggleShow = () => setShowFull(!showFull);

  return (
    <section
      id="cohort1"
      className="bg-gradient-to-b from-pink-50 via-white to-pink-100 py-4 px-6 md:px-16 text-gray-800"
    >
      {/* Header */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-6"
      >
        <img
          src="../src/assets/img/tlhlogo.png"
          alt="TechLeadHers"
          className="mx-auto w-28 md:w-36 mb-6"
        />
        <h2 className="text-4xl md:text-5xl font-bold text-pink-700 mb-3">
          First Cohort: Pioneering the Path
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          The inaugural Tech LeadHers Fellowship marked a bold start — empowering
          12 young women with skills, mentorship, and purpose. Through teamwork,
          real-world projects, and leadership practice, they grew into confident
          changemakers shaping the future of tech.
        </p>
      </motion.div>

      {/* Cohort Image */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <img
          src="../src/assets/img/graduation.jpg"
          alt="Graduation"
          className="rounded-2xl shadow-lg w-full md:w-3/4 lg:w-1/2 hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Teams Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-4">
          Teams from First Cohort
        </h3>
        <div className="mx-auto w-24 border-b-4 border-pink-400"></div>
      </div>

      {/* TEAM 1 - Mero Mitini */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 mb-8"
      >
        <div className="flex-1 text-left">
          <h4 className="text-2xl font-semibold text-pink-700 mb-3">
            Team Mero Mitini
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Team Mero Mitini from the Tech LeadHers Fellowship First Cohort is
            dedicated to advancing women's empowerment! Guided by mentor Sagun
            Dhungana, Niva Maharjan, Dristi Maharjan, and Shreyeska Silwal are
            creating a meaningful platform to support women — especially
            homemakers — by connecting them with opportunities and community
            events.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="../src/assets/img/mitini.jpeg"
            alt="Team Mero Mitini"
            className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* TEAM 2 - Eco Elite */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-8 bg-pink-50 p-6 rounded-2xl shadow-sm"
      >
        <div className="flex-1">
          <img
            src="../src/assets/img/ecoelite.jpeg"
            alt="Team Eco Elite"
            className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 text-left">
          <h4 className="text-2xl font-semibold text-pink-700 mb-3">
            Team Eco Elite
          </h4>
          <p className="text-gray-700 leading-relaxed">
            Guided by Raj Bikram Maharjan, this passionate trio — Aditika Singh,
            Shreeya Tamang, and Trisha Chaudhary — focused on sustainability and
            waste management. Their initiative educates Grade 4 and 5 students
            on waste segregation and environmental awareness.
          </p>
        </div>
      </motion.div>

      {/* Expanded Teams */}
      <AnimatePresence>
        {showFull && (
          <>
            {/* TEAM 3 - Swostik */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 40 }}
              className="flex flex-col md:flex-row items-center justify-between gap-10 mb-8"
            >
              <div className="flex-1 text-left">
                <h4 className="text-2xl font-semibold text-pink-700 mb-3">
                  Team Swostik
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Guided by Akash Rai, Team Swostik — Jyoti Kumari Raut, Kritika
                  Pant, and Roza Shrestha — promoted local tourism through digital
                  innovation. Their platform connects youth volunteers and
                  tourists, fostering appreciation for cultural heritage.
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="../src/assets/img/swostik.jpeg"
                  alt="Team Swostik"
                  className="rounded-2xl  shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* TEAM 4 - Aaviya Sarathi */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: 40 }}
              className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 bg-pink-50 p-6 rounded-2xl shadow-sm"
            >
              <div className="flex-1">
                <img
                  src="../src/assets/img/sarathi.jpeg"
                  alt="Team Aaviya Sarathi"
                  className="rounded-2xl  shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-2xl font-semibold text-pink-700 mb-3">
                  Team Aaviya Sarathi
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Mentored by Sagam Uprety, Jyoti Joshi, Prasana Maharjan, and
                  Sona Angdembe created a platform preserving elderly wisdom and
                  promoting inclusion. Their project records seniors’ life
                  stories, reducing social isolation and strengthening intergenerational bonds.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div className="text-center mt-5">
        <button
          onClick={toggleShow}
          className="px-6 py-3 bg-pink-600 text-white rounded-full font-medium shadow-md hover:bg-pink-700 transition"
        >
          {showFull ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default TLHCohortI;
