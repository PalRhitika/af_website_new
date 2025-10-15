import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/aaviyantafoundationnepal/", label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/aaviyantafoundation/", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@AaviyantaFoundation/", label: "YouTube" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/aaviyanta-foundation/?viewAsMember=true", label: "LinkedIn" },
  { icon: IoCall, href: "tel:+977-9846978246", label: "Call" },
  { icon: IoMail, href: "mailto:aaviyanta.foundation21@gmail.com", label: "Email" },
];

const TopSocialHeader = () => {
  return (
    <div className="bg-[#2e7170] text-white text-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-end space-x-4 py-2 px-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-blue-400 transition"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopSocialHeader;
