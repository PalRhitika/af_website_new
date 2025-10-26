import React from "react";
import { motion } from "framer-motion";

const TLHGraduation = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#fff0f6] to-white text-gray-800">
      {/* Top section - Welcome */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16">
        <motion.img
          src="/assets/img/tlhlogo.png"
          alt="TechLeadHers Logo"
          className="w-36 md:w-40 h-auto"
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
          Tech Leadhers Graduation Ceremony
        </motion.h1>
      </div>

      {/* Graduation Info */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
        <motion.div
          className="lg:w-1/2"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-600">
            A Celebration of Success: Graduation Day
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The fellowship concludes with a vibrant Graduation Day celebration, attended by participants, their families, friends, and distinguished guests, including supporters from KMC Ward 17. The event honors the remarkable journey of the fellows, showcasing their growth and accomplishments through lively dance and musical performances, heartfelt reflections, and the announcement of the program’s winners. It is a joyful and proud moment—a true celebration of transformation, empowerment, and the spirit of Tech LeadHers.
          </p>
        </motion.div>
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/img/graduation-image.JPG"
            alt="Graduation Day"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>
      </div>

      {/* Winners Section */}
      {[
        {
          title: "Winner: Tech LeadHers Fellowship – First Cohort",
          text: `Congratulations to Team Eco-Elite — Aditika Singh, Shreeya Tamang, and Trisha Chaudhary — for winning the Tech LeadHers Fellowship’s inaugural cohort! Their project, SwachGyaan, focused on waste management by addressing one of its root causes: lack of awareness. Believing that change begins with the younger generation, they designed an educational platform featuring interactive games and quizzes to teach children about responsible waste practices in a fun and engaging way. We’re proud of your vision and commitment to creating a cleaner, more conscious future.`,
          img: "/assets/img/ecoelite.jpeg",
        },
        {
          title: "Hands-On Community Service Competition Winner: Tech LeadHers Fellowship – Second Cohort",
          text: `Congratulations to Team Aarambha — Apsara Aryal, Dikshya Khatri, and Sumina Awa — for winning the Hands-On Community Service Competition of the Second Cohort! Their project, Swari Gyaan, tackled the issue of traffic safety awareness among teenagers, targeting students in Grades 9 and 10. Through interactive sessions at Kanya Mandir School, they educated students on traffic rules, safe commuting practices, and responsible road behavior. Team Aarambha was awarded a seed grant of NPR 35,000 to further develop and scale their project.`,
          img: "/assets/img/winner-arambha.jpg",
        },
        {
          title: "Final Project Competition Winner: Tech LeadHers Fellowship – Second Cohort",
          text: `Congratulations to Team Uddhar — Pragati Shrestha, Prenisha Upreti, and Saishna Budhathoki — for winning the Final Project Competition of the Second Cohort! Their project, Uddhar, is a mobile application designed to support communities during flood disasters. Using geofencing technology, the app sends early alerts in pre-disaster conditions and enables users to request rescue support post-disaster, enhancing preparedness and emergency response. Team Uddhar was awarded a seed grant of NPR 50,000 to advance their work.`,
          img: "/assets/img/winner-uddhar.jpg",
        },
      ].map((winner, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-10 mb-16`}
        >
          <motion.div
            className="lg:w-1/2"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-600">
              {winner.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{winner.text}</p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={winner.img}
              alt="Winner"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default TLHGraduation;
