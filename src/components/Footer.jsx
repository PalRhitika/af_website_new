import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Research", path: "/health/research" },
    { name: "Community Intervention", path: "/health/communityintervention" },
    { name: "Digital Literacy", path: "/education/digital" },
    { name: "TechLeadhers", path: "/education/techleadhers" },
    { name: "Our Work", path: "/wefocus" },
    { name: "Impact Stories", path: "/impactstories" },
  ];

  return (
    <footer className="bg-[#266d67] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
        {/* About */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold">Aaviyanta Foundation</h3>
          <p className="text-gray-100 leading-relaxed">
            Empowering youth and women through technology, leadership, and
            education. We envision a society where everyone has the opportunity
            to lead, grow, and thrive.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>Falful Chowk, Ropeway Sadak, Kathmandu</p>
          <p>Phone: +977-9846978246</p>
          <p>Email: aaviyanta.foundation21@gmail.com</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className="hover:underline hover:text-gray-300 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
