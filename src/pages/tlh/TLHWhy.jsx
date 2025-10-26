import React from "react";
import { motion } from "framer-motion";
import TopSocialHeader from "../../components/TopSocialHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" }
    },
  };
};

const TLHWhy = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-pink-100 min-h-screen text-gray-800 overflow-hidden">

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-13 px-6">

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-3"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Why TechLeadhers?
        </motion.h1>
        <motion.p
          className="max-w-3xl text-gray-600 text-lg"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Empowering women to lead the technology revolution in Nepal.
        </motion.p>
      </div>

      {/* Community Engagement */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pt-6 pb-13 gap-10">
        <motion.div
          className="flex-1"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-4">
            Community Engagement: Making a Real-World Impact
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Tech LeadHers Fellowship encourages fellows to use their new skills
            to address real-world challenges. Through community projects and
            awareness campaigns in Kathmandu, participants apply what they learn
            while making a difference in schools and senior centers — learning,
            leading, and giving back.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src="/assets/img/community_engagement.jpg"
            alt="Community Engagement"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Mentorship Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10 bg-pink-50">
        <motion.div
          className="flex-1"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src="/assets/img/mentorship.jpg"
            alt="Mentorship"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-4">
            Mentorship: Guiding the Way
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Each fellow team is paired with an experienced mentor who provides
            consistent support, technical insights, and guidance. This connection
            ensures that every participant grows both personally and professionally,
            staying confident and on track.
          </p>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
        <motion.div
          className="flex-1"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-4">
            Leadership: Inspiring Future Leaders
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The fellowship shapes women into tech leaders ready to inspire change.
            With training in decision-making, communication, and emotional
            intelligence, participants emerge as confident innovators who lead
            with empathy and impact.
          </p>
        </motion.div>

        <motion.div
          className="flex-1"
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src="/assets/img/leadership.jpg"
            alt="Leadership"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Final Projects Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10 bg-pink-50">
        <motion.div
          className="flex-1"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <img
            src="/assets/img/final_projects.jpg"
            alt="Final Projects"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          className="flex-1"
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-700 mb-4">
            Final Projects: Innovating for Change
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Fellowship culminates in an innovation challenge where fellows
            design tech-based solutions for local problems in Kathmandu. Their
            creativity and problem-solving skills shine as they pitch real-world
            impact projects — a celebration of talent, growth, and purpose.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default TLHWhy;
