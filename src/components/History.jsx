import React from "react";
import { motion } from "framer-motion";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { GiJusticeStar } from "react-icons/gi";

const historyCards = [
  {
    icon: <HiOutlineLightBulb className="text-4xl text-pink-500 mb-4" />,
    title: "Establishment and Vision",
    desc: "Founded in 2020 as a non-profit organization with the goal of empowering, supporting, and enabling communities through diverse outreach programs.",
    bg: "bg-pink-50",
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl text-yellow-500 mb-4" />,
    title: "Approach and Impact",
    desc: "Focused on a bottom-up approach by engaging directly with underprivileged and underrepresented communities to create sustainable mechanisms for societal balance.",
    bg: "bg-green-50",
  },
  {
    icon: <GiJusticeStar className="text-4xl text-purple-500 mb-4" />,
    title: "Commitment to Addressing Disparities",
    desc: "Dedicated to reducing disparities in health and education sectors by adopting Sustainable Development Goals.",
    bg: "bg-blue-50",
  },
];

function History() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-white-50 via-gray-50 to-white overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#266d67]">
          Our <span className="text-[#266d67]">History</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Empowering communities since 2020 through sustainable and impactful initiatives.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* History Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {historyCards.map((card, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-2xl shadow-lg ${card.bg} flex flex-col items-center text-center hover:scale-105 transition-transform duration-300`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {card.icon}
            <h3 className="text-xl font-bold mb-2 text-gray-800">{card.title}</h3>
            <p className="text-gray-700">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default History;
