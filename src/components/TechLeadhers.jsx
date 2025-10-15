import { motion } from "framer-motion";
import { IoArrowRedo } from "react-icons/io5";
import { Link } from "react-router-dom";

function TechLeadhers() {
  const points = [
    "Empowering women to break barriers and lead in the tech world.",
    "Fostering skills, confidence, and innovation to thrive in technology.",
    "Building a future where women are at the forefront of IT innovation."
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-pink-100 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -left-32 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-sm tracking-widest uppercase font-semibold text-[#266d67] mb-2">
              Our Flagship
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#266d67] mb-2">
              <span className="text-pink-600">Tech LeadHers</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-8">
              Women Pioneering IT Innovation
            </h3>

            <ul className="space-y-4 mb-10">
              {points.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 bg-pink-600 rounded-full">
                    <IoArrowRedo className="text-white text-lg" />
                  </div>
                  <p className="text-gray-700 text-lg">{p}</p>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/education/techleadhers"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <img
              src="/src/assets/img/tlh-image.png"
              alt="Tech LeadHers"
              className="w-full md:w-3/4 drop-shadow-xl rounded-2xl object-contain"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TechLeadhers;
