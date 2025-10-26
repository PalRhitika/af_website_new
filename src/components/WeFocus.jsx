import { motion } from "framer-motion";

import { Link } from "react-router-dom";
function WeFocus() {
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
                         We Focus On
                       </h2>
                       <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-teal-500 mx-auto rounded-full mb-6"></div>
                       <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
                         Aaviyanta Foundation focuses on empowering communities through
                         accessible health care, inclusive education, and climate
                         resilience — creating a sustainable and equitable future for all.
                       </p>
                     </motion.div>
                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                       {[
                         {
                           title: "Health",
                           img: "/assets/img/story3.png",
                           link: "/health",
                           text: `Health is a sensitive and essential aspect of well-being. We aim to assist underprivileged communities by conducting Dental Hygiene and General Health Screening programs, community awareness events, and promoting hygiene education.`,
                         },
                         {
                           title: "Education",
                           img: "/assets/img/tc1.jpg",
                           link: "/education",
                           text: `We conduct awareness programs encouraging education for all, with special focus on women and gender-diverse communities. From literacy courses to skill-based training, we promote empowerment through learning.`,
                         },
                         {
                           title: "Climate Resilience",
                           img: "/assets/img/climate1.jpg",
                           link: "/climate-resilience",
                           text: `We lead impactful initiatives educating youth and adults on sustainability, disaster preparedness, and resilience planning — empowering over 1500 individuals across Kathmandu and Lalitpur.`,
                         },
                       ].map((focus, i) => (
                         <Link to={focus.link} key={i}>
                           <motion.div
                             key={i}
                             initial={{ opacity: 0, y: 30 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ duration: 0.5, delay: i * 0.1 }}
                             className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
                           >
                             <div className="overflow-hidden">
                               <img
                                 src={focus.img}
                                 alt={focus.title}
                                 className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                               />
                             </div>
                             <div className="p-6 text-center">
                               <h3 className="text-2xl font-semibold text-[#266d67] mb-3">
                                 {focus.title}
                               </h3>
                               <p className="text-gray-700 leading-relaxed text-base">
                                 {focus.text}
                               </p>
                             </div>
                           </motion.div>
                         </Link>
                       ))}
                       </div>
      </div>
    </section>
  );
}

export default WeFocus;
