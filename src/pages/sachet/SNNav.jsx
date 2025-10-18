import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink, Events, scroller } from "react-scroll";
import { FaHome, FaUsers, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
const timelineItems = [
  { id: "home", label: "What is Sachet Nari?", icon: FaHome },
  { id: "why", label: "Why Sachet Nari?", icon: FaPersonCircleQuestion },
  { id: "Gallery", label: "Sachet Nari Gallery", icon: GrGallery },
];

const SNNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Detect current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const offsets = timelineItems.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, offsetTop: el?.getBoundingClientRect().top || 0 };
      });
      const current = offsets.find(item => item.offsetTop >= 0) || offsets[offsets.length - 1];
      setActiveSection(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center space-x-4 md:space-x-6 overflow-x-auto px-4 py-2 scrollbar-hide">
      {timelineItems.map(({ id, label, icon: Icon }) => (
        <ScrollLink
          key={id}
          to={id}
          smooth={true}
          duration={600}
          offset={-100}
          className="flex-shrink-0 cursor-pointer"
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center text-center transition-colors ${
              activeSection === id ? "text-pink-600" : "text-pink-400"
            }`}
          >
            <div
              title={label}
              className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md mb-1 transition-all ${
                activeSection === id
                  ? "bg-pink-200 ring-4 ring-pink-300"
                  : "bg-[#ffecf6]"
              }`}
            >
              <Icon size={22} />
            </div>
            {/* <span className="text-xs md:text-sm font-medium">{label}</span> */}
          </motion.div>
        </ScrollLink>
      ))}
    </div>
  );
};

export default SNNav;
