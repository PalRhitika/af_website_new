import React from "react";
import { Link } from "react-router-dom";
import { IoArrowRedo } from "react-icons/io5";
import { motion } from "framer-motion";

const SachetNari = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 via-pink-50 to-white py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

  {/* Left Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="./src/assets/img/sachetnari/sachet_nari.png"
            alt="Sachet Nari illustration"
            className="w-full md:w-4/5 rounded-2xl shadow-xl"
            loading="lazy"
          />
        </motion.div>
        {/* Right Text Section */}
        <motion.div
          className="flex-1 text-gray-800"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-pink-500 font-semibold uppercase tracking-wide mb-3">
            Sister Program of TechLeadHers
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Sachet Nari
          </h1>
          <h2 className="text-2xl md:text-3xl text-pink-600 font-semibold mb-6">
            Ambassadors of Change
          </h2>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="p-2 bg-pink-100 rounded-full text-pink-600">
                <IoArrowRedo size={22} />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Empowering women to access critical information and take charge
                of their lives through <span className="font-semibold text-pink-500">Sachet Nari</span>.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="p-2 bg-pink-100 rounded-full text-pink-600">
                <IoArrowRedo size={22} />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Raising awareness about women’s rights, safety, and local
                government services to strengthen communities.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <div className="p-2 bg-pink-100 rounded-full text-pink-600">
                <IoArrowRedo size={22} />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Building a future where every woman is informed, confident, and
                empowered to lead change.
              </p>
            </li>
          </ul>

          <Link
            to="/education/sachetnari"
            className="inline-block px-6 py-3 bg-pink-500 hover:bg-white text-white rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            Know More
          </Link>
        </motion.div>


      </div>
    </section>
  );
};

export default SachetNari;
