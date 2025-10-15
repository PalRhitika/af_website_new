import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TLHHome = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const faqs = [
    {
      q: "How is the TechLeadHers Fellowship structured?",
      a: (
        <>
          The fellowship is a 6-month journey divided into three key phases:
          <ul className="list-disc ml-6 mt-2">
            <li>
              <b>Phase 1:</b> Training and leadership workshops
            </li>
            <li>
              <b>Phase 2:</b> Hands-on project implementation
            </li>
            <li>
              <b>Phase 3:</b> Mentorship and community engagement
            </li>
          </ul>
        </>
      ),
    },
    {
      q: "What are the eligibility requirements for joining the fellowship?",
      a: (
        <>
          To be eligible for the fellowship, applicants must meet the following
          criteria:
          <ul className="list-disc ml-6 mt-2">
            <li>
              Be a female professional or student with an interest in technology
              or leadership.
            </li>
            <li>
              Have a background or passion for pursuing a career in tech
              (programming, data science, etc.).
            </li>
            <li>Commit to participating fully in the six-month program.</li>
          </ul>
        </>
      ),
    },
    {
      q: "What kind of projects will fellows work on?",
      a: (
        <>
          Fellows will work on a variety of projects that focus on solving
          real-world problems. These include:
          <ul className="list-disc ml-6 mt-2">
            <li>Developing software solutions to enhance business operations.</li>
            <li>Creating tools for community outreach and social impact.</li>
            <li>Building digital platforms for startups and NGOs.</li>
          </ul>
        </>
      ),
    },
    {
      q: "How will mentorship be provided during the fellowship?",
      a: (
        <>
          Each fellow will be paired with a mentor who is a leader in the tech
          industry. Mentors will provide:
          <ul className="list-disc ml-6 mt-2">
            <li>One-on-one sessions to discuss career growth and challenges.</li>
            <li>Guidance on technical skills and personal development.</li>
            <li>Networking opportunities within the tech ecosystem.</li>
          </ul>
        </>
      ),
    },
    {
      q: "What is the impact of the Hours of Community Work (HOC)?",
      a: (
        <>
          The Hours of Community Work (HOC) program allows fellows to apply their
          skills in meaningful ways. Some examples of impact include:
          <ul className="list-disc ml-6 mt-2">
            <li>Building websites and digital tools for local NGOs.</li>
            <li>
              Helping underserved communities gain access to technology and
              training.
            </li>
            <li>
              Providing technical workshops and coding bootcamps to empower other
              women in tech.
            </li>
          </ul>
        </>
      ),
    },
    {
      q: "How can I apply to the TechLeadHers Fellowship?",
      a: (
        <>
          To apply, you will need to:
          <ul className="list-disc ml-6 mt-2">
            <li>
              Submit an online application form with your personal and
              professional details.
            </li>
            <li>
              Provide a brief statement explaining why you are interested in
              joining the fellowship.
            </li>
            <li>
              Submit your resume/CV to help us understand your background and
              experience.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const images = [
    "../../src/assets/img/graduation.jpg",
    "../../src/assets/img/thl1slid.jpg",
    "../../src/assets/img/secondslide1.jpg",
    "../../src/assets/img/secondslide2.jpg",
    "../../src/assets/img/secondslide3.jpg",
    "../../src/assets/img/tlh0slide.jpg",
    "../../src/assets/img/secondslide4.jpg",
    "../../src/assets/img/secondslide5.jpg",
    "../../src/assets/img/tlh3slid.jpg",
    "../../src/assets/img/tlh20slid.jpg",
    "../../src/assets/img/tlh40slid.jpg",
  ];

  return (
    <div className="space-y-16 pt-6 px-4 md:px-10 ">
      {/* Hero Section */}
      <motion.div
        className="text-center flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src="../../src/assets/img/tlhlogo.png"
          alt="TechLeadHers Logo"
          className="mx-auto w-40 md:w-56 drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
        />
        <div className="text-left md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 drop-shadow-sm mb-2">
            Welcome to TechLeadHers!
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium">
            Empowering young women to lead the next generation of technology and
            innovation.
          </p>
        </div>
      </motion.div>

      {/* Video + Text */}
      <motion.section
        className="flex mb-10 flex-col md:flex-row gap-10 items-center bg-white/70 p-6 rounded-2xl shadow-md backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex-1">
          <iframe
            className="w-full h-72 rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/ST7cJz_pDw0?start=2"
            title="TechLeadHers Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <div className="flex-1 space-y-3 text-gray-700">
          <h2 className="text-2xl font-semibold text-pink-600">
            How It All Started: The Beginning of TechLeadHers
          </h2>
          <p className="text-justify leading-relaxed">
           Nepal faces a severe gender gap in IT, with only 0.5% of economically active women working in ICT and just 7.8% of researchers being women—figures that are worse than the already low global averages (28% of IT jobs and 15.9% of engineering roles held by women worldwide). This underrepresentation stems from deep-rooted gender biases, societal norms, limited STEM education access, discrimination, lack of mentorship, and insufficient family support, which collectively discourage talented women from entering or advancing in technology careers.
          </p>
        </div>
      </motion.section>

      {/* Second Paragraph */}
      <motion.div
        className="bg-pink-50 mb-10 rounded-2xl p-6 shadow-sm border border-pink-100 text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-justify leading-relaxed">
          The Tech LeadHers Fellowship, launched by the Aaviyanta Foundation on January 2, 2024, is an initiative designed to empower young women in Kathmandu's tech industry, specifically targeting Ward 17 of Kathmandu Metropolitan City. The program's mission is to develop women's leadership in technology and create gender-inclusive narratives for lasting community impact, with an ambitious vision of having 50% of IT companies in Kathmandu led by women. It provides participants with technical training, mentorship, and opportunities to address local community challenges.
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.section
        className="relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          TechLeadHers Memories
        </h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          spaceBetween={25}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="w-full max-w-6xl mx-auto"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={img}
                alt={`TLH Memory ${index}`}
                className="rounded-xl shadow-lg w-full h-64 object-cover border-2 border-pink-100 hover:border-pink-400 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto space-y-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg p-5 border border-pink-100 cursor-pointer transition-all duration-300"
            onClick={() => toggleAnswer(index)}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-pink-600 text-lg">{faq.q}</h3>
              <motion.span
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                className="text-pink-500 text-xl"
              >
                ▼
              </motion.span>
            </div>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-3 text-gray-700"
              >
                {faq.a}
              </motion.div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default TLHHome;
