import { motion } from "framer-motion";
import { FaUniversalAccess } from "react-icons/fa6";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LuHeartHandshake } from "react-icons/lu";
import { GiSightDisabled } from "react-icons/gi";

function MissionVision() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#266d67] mb-4">
            Our Mission & Vision
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mt-4 rounded-full mb-2"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aaviyanta Foundation strives to empower communities through access,
            innovation, and inclusion — working toward a world where everyone
            has the opportunity to thrive.
          </p>
        </motion.div>

        {/* Mission and Vision Row */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center border-t-4 border-[#266d67]"
          >
            <GiSightDisabled className="text-6xl text-[#266d67] mb-4" />
            <h3 className="text-2xl font-semibold text-[#266d67] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become the leading platform for isolated and vulnerable communities, seamlessly providing access to safe health facilities and educational resources using cutting-edge technology; fostering sustainable environments where the community flourishes through holistic physical, mental, and intellectual support, and empowering them with security, opportunity, and hope, regardless of location or background.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center border-t-4 border-green-600"
          >
            <FaUniversalAccess className="text-6xl text-green-600 mb-4" />
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-700 leading-relaxed mb-8">
              To create meaningful change by addressing key areas such as
              education, technology, and community welfare; empowering
              individuals, fostering growth, and building sustainable futures.
            </p>

            {/* Mission Points */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow-sm">
                <LiaChalkboardTeacherSolid className="text-4xl text-green-700 mb-3" />
                <p className="text-gray-700 text-sm">
                  Foster safe learning and mentorship opportunities.
                </p>
              </div>

              <div className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow-sm">
                <LuHeartHandshake className="text-4xl text-green-700 mb-3" />
                <p className="text-gray-700 text-sm">
                  Collaborate for gender equality and climate resilience.
                </p>
              </div>

              <div className="flex flex-col items-center bg-green-50 rounded-xl p-4 shadow-sm">
                <FaUniversalAccess className="text-4xl text-green-700 mb-3" />
                <p className="text-gray-700 text-sm">
                  Provide inclusive access to health and education.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
