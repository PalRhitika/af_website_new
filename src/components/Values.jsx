import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaGlobeAmericas,
  FaHeartbeat,
  FaBookOpen,
  FaLeaf,
} from "react-icons/fa";

function Values() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
         <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-center mb-16"
                    >
                      <h2 className="text-4xl font-extrabold text-[#266d67] mb-4">
                        Our Core Values
                      </h2>
                      <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full mb-6"></div>
                      <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        Rooted in compassion, collaboration, and sustainability — we
                        strive to create inclusive opportunities and empower communities
                        with purpose and integrity.
                      </p>
                    </motion.div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full overflow-hidden">

                      {[
                        {
                          title: "Integrity",
                          text: "We uphold the highest ethical standards in everything we do.",
                          icon: <FaHandsHelping />,
                        },
                        {
                          title: "Collaboration",
                          text: "We believe in the power of working together to solve problems and achieve success.",
                          icon: <FaGlobeAmericas />,
                        },
                        {
                          title: "Inclusivity",
                          text: "We embrace diversity and ensure everyone has a voice and opportunity.",
                          icon: <FaBookOpen />,
                        },
                        {
                          title: "Excellence",
                          text: "We strive for continuous improvement and quality in all our endeavors.",
                          icon: <FaHeartbeat />,
                        },
                        {
                          title: "Empathy",
                          text: "We understand the needs of others and respond with compassion and respect.",
                          icon: <FaLeaf />,
                        },
                      ].map((value, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center"
                        >
                          <div className="text-green-600 text-5xl mb-4">{value.icon}</div>
                          <h3 className="text-2xl font-semibold text-[#266d67] mb-3">
                            {value.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-base">
                            {value.text}
                          </p>
                        </motion.div>
 ))}
            </div>
      </div>
    </section>
  );
}

export default Values;
