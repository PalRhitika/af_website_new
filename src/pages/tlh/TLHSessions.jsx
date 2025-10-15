import React from "react";
import { motion } from "framer-motion";

const TLHSessions = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-pink-100 to-white text-gray-800">
      {/* Top section - Welcome */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 mb-16">
        <motion.img
          src="../src/assets/img/tlhlogo.png"
          alt="TechLeadHers Logo"
          className="w-40 h-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-pink-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          TechLeadhers Sessions
        </motion.h1>
      </div>

      {/* Section 1 - Laying the Foundation */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 mb-24">
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-600">
            Laying the Foundation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The journey began with an intensive bootcamp that brought together
            aspiring women in tech from diverse backgrounds. For many, this was
            their first foray into the world of programming and technology. The
            bootcamp laid a solid foundation, focusing on basic coding languages,
            software development, and problem-solving techniques. The initial
            phase was intense, but it set the stage for the participants to delve
            deeper into more advanced topics.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="../src/assets/img/bootcamp.jpg"
            alt="Bootcamp"
            className="rounded-2xl shadow-md w-full max-w-md object-cover"
          />
        </motion.div>
      </div>

      {/* Section 2 - Bi-Weekly Sessions */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="../src/assets/img/bi-weekly.jpeg"
            alt="Bi-Weekly Sessions"
            className="rounded-2xl shadow-md w-full max-w-md object-cover"
          />
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-600">
            Bi-Weekly Sessions: Building Skills and Confidence
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Following the bootcamp, the program transitioned into a series of
            weekly sessions. These sessions were meticulously designed to build
            on the participants’ existing knowledge and prepare them for the
            challenges ahead. They covered advanced programming, leadership
            development, project and product management, and practical
            problem-solving. Each session was an opportunity for the participants
            to hone their skills further, gaining confidence and competence with
            every passing week.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TLHSessions;
