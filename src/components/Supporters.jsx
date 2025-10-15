import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";

const supporters = [
  {
    name: "Kathmandu Metropolitan City",
    logo: "./src/assets/img/kmclogo1.jpg",
  },
  {
    name: "Ratna InTech",
    logo: "./src/assets/img/ratnaintechlogo.jpg",
  },
  {
    name: "Cedar Gate Technologies",
    logo: "./src/assets/img/cedarlogo.jpg",
  },
  {
    name: "The Carter Center",
    logo: "./src/assets/img/sachetnari/carter_logo.svg",
  },
  {
    name: "Inform Women, Transform Lives (IWTL)",
    logo: "./src/assets/img/sachetnari/iwtl.png",
  },
];

function Supporters() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-teal-50 via-white to-teal-50 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#266d67]">
          Our <span className="text-teal-600">Supporters</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          We are grateful for the strong partnerships that help us bring
          impactful change to communities.
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          grabCursor={true}
          className="max-w-6xl"
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
        >
          {supporters.map((s, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <motion.div
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex justify-center items-center p-6 w-full h-40"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-24 object-contain w-auto filter hover:brightness-110 transition"
                  loading="lazy"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Supporters;
