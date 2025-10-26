
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const partnerLogos = [
  "carter_logo.svg",
  "iwtl.png",
  "kmc.png",
  "gov_nepall.svg",
  "aaviyanta.jpg",
  "ratna.png",
];

const bootcampImages = [
  "/assets/img/sachetnari/Bootcamp/3.jpg",
  "/assets/img/sachetnari/Bootcamp/4.jpg",
  "/assets/img/sachetnari/Bootcamp/7.jpeg",
  "/assets/img/sachetnari/Bootcamp/6.jpg",
  "/assets/img/sachetnari/Bootcamp/8.jpeg",
  "/assets/img/sachetnari/Bootcamp/5.jpg",
  "/assets/img/sachetnari/Bootcamp/9.jpeg",
  "/assets/img/sachetnari/Bootcamp/10.jpeg",
  "/assets/img/sachetnari/Bootcamp/11.jpeg",
  "/assets/img/sachetnari/Bootcamp/1.jpg",
  "/assets/img/sachetnari/Bootcamp/12.jpeg",
  "/assets/img/sachetnari/Bootcamp/2.jpg",
  "/assets/img/sachetnari/Bootcamp/13.jpeg",
  "/assets/img/sachetnari/Bootcamp/14.jpeg",
  "/assets/img/sachetnari/Bootcamp/15.jpeg",
  "/assets/img/sachetnari/Bootcamp/20.jpg",
  "/assets/img/sachetnari/Bootcamp/16.jpg",
  "/assets/img/sachetnari/Bootcamp/17.jpg",
  "/assets/img/sachetnari/Bootcamp/18.jpg",
  "/assets/img/sachetnari/Bootcamp/19.jpg",
];

const SNHome = () => {
  return (
    <div className="sn-home-page bg-gradient-to-b from-pink-50 to-white text-gray-800">

      {/* Hero Section */}
      <section className="hero-section py-5 px-4 md:px-12 lg:px-24 flex flex-col items-center">
        {/* Video + Text */}
              <motion.section
                className="flex mb-5 flex-col md:flex-row gap-10 items-center bg-white/70 p-6 rounded-2xl shadow-md backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex-1">
                    <iframe
              src="https://www.youtube.com/embed/q1hRHGKl2zQ?si=d8qFKCiLCIHZaAON"
              title="Sachet Nari Video (English)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full max-h-80  rounded-xl shadow-lg aspect-video"
            ></iframe>
                </div>
                <div className="flex-1 space-y-3 text-gray-700">
                  <h2 className="text-2xl font-semibold text-pink-600">
                     How It All Started: The Beginning of Sachet Nari
                  </h2>
                  <p className="text-justify">
                The journey began with{" "}
                <span className="text-blue-800 font-bold">The Carter Center</span>,
                an organization globally recognized for championing human rights,
                promoting peace, and ensuring people have the tools they need to improve their lives.
                Among its many initiatives, one stands out for its transformative impact on women — the{" "}
                <span className="font-bold text-fuchsia-600">Inform Women, Transform Lives (IWTL)</span> campaign.
                <br />
                IWTL was launched with a clear belief: when women have access to critical information,
                they can make informed decisions that transform not only their own lives, but also their
                families and communities.
                Across the globe, too many women still face barriers to obtaining information about government
              services, their legal rights, or opportunities available to them.
              </p>
                </div>
        </motion.section>

      {/* Second Paragraph */}
      <motion.div
        className="bg-pink-50 mb-3 rounded-2xl p-6 shadow-sm border border-pink-100 text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-justify">
               IWTL works to break these
              barriers by promoting transparency, inclusion, and equitable access to public resources,
              particularly for women.
              It was under this global vision that Aaviyanta Foundation had the opportunity to become part
              of the IWTL campaign. Inspired by its mission, Aaviyanta, in collaboration with Tech LeadHers,
              Carter Group, and the Kathmandu Metropolitan City (KMC), created a localized initiative:{" "}
              <span className="font-bold text-pink-600">Sachet Nari</span>.
            </p>
      </motion.div>
      {/* Third Paragraph */}
      <motion.div
        className="bg-pink-50 mb-10 rounded-2xl p-6 shadow-sm border border-pink-100 text-gray-800"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         <p className="text-justify pb-2">
              Sachet Nari was born to bridge the gap between women in Kathmandu and the information that
              could change their lives. At the heart of this mission is the{" "}
              <span className="font-bold text-red-600">KMC Ward Women Cell</span>, a vital service center
              offering resources, guidance, and support to women, particularly those facing or at risk of{" "}
              <span className="font-bold text-amber-700">Gender-Based Violence (GBV)</span>.
              Through outreach programs, awareness campaigns, and youth-led advocacy, Sachet Nari connects
              women and families with the Women Cell’s services. From GBV prevention to legal assistance,
              the aim is not only to inform but also to empower, ensuring that women know where to go, who
              to trust, and how to stand up for their rights.
            </p>
            <p className="text-justify">
              By carrying forward the philosophy of the Inform Women, Transform Lives campaign, Sachet Nari
              proves that information is power. And when women have that power, they can truly transform
              their own lives and the world around them.
            </p>
      </motion.div>
      </section>

      {/* Partner Logos */}
      <section className="partners-section py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center px-4 md:px-12">
          {partnerLogos.map((logo, idx) => (
            <motion.img
              key={idx}
              src={`/assets/img/sachetnari/${logo}`}
              alt={logo}
              className="w-28 h-auto object-contain mx-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </section>

      {/* Bootcamp Memories */}
      <section className="bootcamp-section  mb-3 py-10 px-4 md:px-12 lg:px-24">
        <h3 className="text-pink-600 text-3xl md:text-5xl font-extrabold text-center mb-8">
          Sachet Nari Bootcamp Memories
        </h3>

        <p className="text-justify text-base md:text-lg leading-7 md:leading-9 mb-6">
          Our journey came to life during the Sachet Nari Awareness Bootcamp. Young women from across Kathmandu
          gathered, sharing their stories, questioning, and learning together, creating moments of courage and
          transformation.
        </p>

        {/* Carousel */}
        <motion.div
          className="overflow-x-auto flex gap-4 md:gap-6 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
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
          {bootcampImages.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={`${img}`}
                alt={`SN Memory ${index}`}
                className="rounded-xl shadow-lg w-full h-96 object-cover border-2 border-pink-100 hover:border-pink-400 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="bg-white shadow-lg rounded-lg p-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-justify italic text-base md:text-lg leading-7 md:leading-9">
            "Today, these young women carry more than just knowledge, they carry clarity, courage, and conviction.
            They now understand what gender-based violence truly looks like, not just in textbooks, but in everyday life.
            They’ve learned how to recognize it, respond with strength, and seek help through the KMC Ward Women Cell."
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default SNHome;
