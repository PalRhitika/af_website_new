import React, { useState } from "react";
import { motion } from "framer-motion";

const TLHCohortII = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  return (
    <section className="bg-gradient-to-b from-pink-100 via-white to-pink-50 py-12 px-6 md:px-16 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <img
            src="../src/assets/img/tlhlogo.png"
            alt="TechLeadHers"
            className="w-32 md:w-40"
          />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-pink-600">
          Second Cohort: Building Momentum
        </h2>
        <p className="text-gray-700 mt-4 text-lg md:text-lg max-w-3xl mx-auto leading-relaxed">
          Ten brilliant women continued the TechLeadHers journey, taking the
          legacy forward with creativity, leadership, and real-world impact.
        </p>
      </motion.div>

      {/* Cohort Overview */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between mb-16 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="md:w-1/2 text-gray-700 text-lg md:text-lg leading-relaxed">
          <p>
            Following the success of the first cohort, the second group applied
            their growing expertise to real-world challenges. Each participant
            showcased exceptional technical and leadership growth, reaffirming
            that with mentorship and opportunity, women can lead innovation at
            every level.
          </p>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="../src/assets/img/second_cohort_pic.jpg"
            alt="Second Cohort"
            className="rounded-3xl shadow-lg w-full md:w-4/5"
          />
        </motion.div>
      </motion.div>

      {/* Teams Section */}
      <div className="text-center mb-12">
        <h3 className="text-3xl font-semibold text-pink-600">
          Teams from Second Cohort
        </h3>
        <div className="w-24 h-1 bg-pink-400 mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="space-y-20">
        {/* Team Aarambha */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 mb-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="../src/assets/img/aarambha.jpg"
            alt="Team Aarambha"
            className="rounded-2xl shadow-md w-full md:w-1/2"
          />
          <div className="md:w-1/2">
            <h4 className="text-2xl font-bold text-pink-600 mb-2">
              Team Aarambha
            </h4>
            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
              Tackling Kathmandu’s transport chaos, Team Aarambha built
              <span className="font-semibold"> Sawari Sathi</span>—an app
              guiding commuters with real-time bus info, routes, and fares. Led
              by mentor <strong>Prawesh Shrestha</strong>, Apsara, Dikshya, and
              Sumina made city travel simpler and smarter.
            </p>
          </div>
        </motion.div>

        {/* Team Kala Yatra */}
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-10 mb-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-1/2">
            <h4 className="text-2xl font-bold text-pink-600 mb-2">
              Team Kala Yatra
            </h4>
            <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
              Bridging culture and tourism, they created
              <span className="font-semibold"> Festivilla</span>—an app that
              connects tourists to local festivals and homestays. Guided by{" "}
              <strong>Sangam Uprety</strong>, Ichhita and Shreeya built a
              platform celebrating authentic experiences.
            </p>
          </div>
          <img
            src="../src/assets/img/kalayatra.jpg"
            alt="Team Kala Yatra"
            className="rounded-2xl shadow-md w-full md:w-1/2"
          />
        </motion.div>

        {/* Expandable Teams */}
        {showFullDescription && (
          <>
            {/* Team Sikshara */}
            <motion.div
              className="flex flex-col md:flex-row items-center gap-10 mb-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="../src/assets/img/sikshara.jpg"
                alt="Team Sikshara"
                className="rounded-2xl shadow-md w-full md:w-1/2"
              />
              <div className="md:w-1/2">
                <h4 className="text-2xl font-bold text-pink-600 mb-2">
                  Team Sikshara
                </h4>
                <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
                  Team Sikshara built <strong>Khop</strong>—a vaccination tracker
                  for parents and hospitals. Mentored by{" "}
                  <strong>Sanjeev Manandhar</strong>, Ashika and Sami created a
                  healthcare solution promoting timely immunization and data
                  centralization.
                </p>
              </div>
            </motion.div>

            {/* Team Uddhar */}
            <motion.div
              className="flex flex-col-reverse md:flex-row items-center gap-10 mb-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:w-1/2">
                <h4 className="text-2xl font-bold text-pink-600 mb-2">
                  Team Uddhar
                </h4>
                <p className="text-gray-700 text-lg md:text-lg leading-relaxed">
                  Addressing flood disasters, Team Uddhar launched{" "}
                  <strong>Uddhar</strong>—an app that sends flood alerts and
                  enables rescue requests. Under mentor <strong>Akash Rai</strong>,
                  Pragati, Prenisha, and Saishna made safety tech accessible to
                  vulnerable communities.
                </p>
              </div>
              <img
                src="../src/assets/img/uddhar.jpg"
                alt="Team Uddhar"
                className="rounded-2xl shadow-md w-full md:w-1/2"
              />
            </motion.div>
          </>
        )}

        {/* Toggle Button */}
        <div className="text-center mt-10">
          <button
            onClick={toggleDescription}
            className="px-6 py-2 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-all duration-300 shadow-md"
          >
            {showFullDescription ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      {/* Looking Ahead Section */}
      <motion.div
        className="text-center mt-24 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-3xl font-semibold text-pink-600 mb-4">
          Looking Ahead
        </h3>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          The Tech LeadHers Fellowship is more than a program—it’s a movement.
          With every new cohort, Aaviyanta Foundation takes a step closer to a
          more equitable and diverse tech industry, powered by women leading
          innovation for all.
        </p>
      </motion.div>
    </section>
  );
};

export default TLHCohortII;
