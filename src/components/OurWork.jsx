import { motion } from "framer-motion";
import { HeartPulse, Users, Laptop, Leaf } from "lucide-react";

function OurWork() {
  const cards = [
    {
      title: "Health Research",
      desc: "Evidence-driven studies to inform community interventions.",
      icon: <HeartPulse className="w-10 h-10 text-pink-500 mb-4" />,
      color: "from-pink-50 to-pink-100",
    },
    {
      title: "Community Interventions",
      desc: "On-ground programs focusing on maternal and child health.",
      icon: <Users className="w-10 h-10 text-blue-500 mb-4" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Digital Literacy",
      desc: "Training youth and women on digital safety and skills.",
      icon: <Laptop className="w-10 h-10 text-green-500 mb-4" />,
      color: "from-green-50 to-green-100",
    },
    {
      title: "Climate Resilience",
      desc: "Local projects to make communities resilient to climate shocks.",
      icon: <Leaf className="w-10 h-10 text-yellow-500 mb-4" />,
      color: "from-yellow-50 to-yellow-100",
    },
  ];

  return (
    <section id="work" className=" bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Our Work
        <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((c) => (
            <motion.article
              key={c.title}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`rounded-2xl p-8 shadow-md hover:shadow-xl bg-gradient-to-b ${c.color} transition transform hover:-translate-y-1 border border-transparent hover:border-[#266d67]`}
            >
              <div className="flex flex-col items-center text-center">
                {c.icon}
                <h3 className="font-semibold text-xl text-gray-800 mb-2">{c.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{c.desc}</p>
                <a
                  href="#"
                  className={`mt-2 inline-block text-[#266d67] font-bold hover:text-green-900`}
                >
                  Learn more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
