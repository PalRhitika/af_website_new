import { motion } from "framer-motion";
import { FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";


const SNWhy = () => {
  return (
    <div className="bg-gradient-to-b from-[#fff0f8] via-[#fdeaf3] to-[#fff] py-16 px-6 md:px-20 lg:px-28">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-[#fe44ae] text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Why Sachet Nari and KMC Ward Women Cell?
        </h2>
        <div className="h-1 w-24 bg-[#fe44ae] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Sachet Nari bridges the gap between awareness and action — empowering
          young women to spotlight KMC Ward Women Cell’s services across all 32
          wards through outreach, education, and advocacy.
        </p>
      </motion.div>

      {/* Info Card Section */}
      <div className="space-y-18">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-10 bg-white/70 backdrop-blur-xl shadow-lg rounded-3xl p-6 md:p-10 border border-pink-100 hover:shadow-2xl transition-all"
        >
          <div className="md:w-1/2 flex justify-center">
            <img
              src="../src/assets/img/sachetnari/kmc5.png"
              alt="Sachet Nari Outreach"
              className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#fe44ae] mb-3">
              Awareness that Empowers
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              “Sachet” means aware — awareness is empowerment in motion.
              Sachet Nari inspires women to become confident messengers of
              change, reducing stigma and spreading strength across communities.
            </p>
          </div>
        </motion.div>

        {/* Connector */}
        <div className="relative flex justify-center">
          <div className="absolute w-1 h-20 bg-gradient-to-b from-[#fe44ae] to-transparent rounded-full"></div>
        </div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center gap-10 bg-white/70 backdrop-blur-xl shadow-lg rounded-3xl p-6 md:p-10 border border-pink-100 hover:shadow-2xl transition-all"
        >
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#fe44ae] mb-3">
              Empowered Women, Empowering Others
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sachet Nari connects changemakers with institutions like KMC
              Women Cell — ensuring that every woman knows where to turn for
              safety, justice, and support.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="../src/assets/img/sachetnari/kmc1.jpg"
              alt="Women Empowerment"
              className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-24 text-center"
      >
        <h2 className="text-[#fe44ae] text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Mission and Objective
        </h2>
        <div className="h-1 w-24 bg-[#fe44ae] mx-auto rounded-full mb-6"></div>
        <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
          Our mission is to amplify awareness about gender-based violence (GBV)
          and highlight the vital role of the KMC Ward Women Cell in supporting
          women, ensuring that help is accessible and stigma-free.
        </p>
      </motion.div>

      {/* Mission Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-md rounded-2xl border border-pink-100 hover:shadow-xl transition"
        >
          <FaHeart className="text-[#fe44ae] text-4xl mb-4 mx-auto" />
          <h4 className="text-xl font-semibold text-[#fe44ae] mb-2 text-center">
            Break the Silence
          </h4>
          <p className="text-gray-700 text-center">
            End stigma by sparking open conversations about GBV in communities.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-md rounded-2xl border border-pink-100 hover:shadow-xl transition"
        >
          <FaLightbulb className="text-[#fe44ae] text-4xl mb-4 mx-auto" />
          <h4 className="text-xl font-semibold text-[#fe44ae] mb-2 text-center">
            Educate and Inform
          </h4>
          <p className="text-gray-700 text-center">
            Spread awareness about rights and accessible support services.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-white shadow-md rounded-2xl border border-pink-100 hover:shadow-xl transition"
        >
          <FaUsers className="text-[#fe44ae] text-4xl mb-4 mx-auto" />
          <h4 className="text-xl font-semibold text-[#fe44ae] mb-2 text-center">
            Empower Students
          </h4>
          <p className="text-gray-700 text-center">
            Train youth ambassadors to become digital advocates for women’s rights.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SNWhy;
