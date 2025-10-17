import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";



const galleryData = [
  {
    title: "Sunway College",
    slug: "sunway",
    image: "../src/assets/img/sachetnari/sunway/sunway.jpeg",
    description:
      "Our very first outreach program at Sunway College, during the Sunway Innovative Fest. We showcased Sachet Nari through our stall and connected with an incredible crowd.",
    media: [
      { type: "video", src: "../src/assets/img/sachetnari/sunway/video.mp4" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/1.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/2.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/3.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/4.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/5.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/6.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/7.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/8.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/9.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/10.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/11.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/12.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/13.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/14.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/15.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/16.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/sunway/17.jpg" },
    ],
  },
  {
    title: "Presidential Graduate School",
    slug: "presidential",
    image: "../src/assets/img/sachetnari/presidential/presidential.webp",
    description:
      "Our outreach at Presidential College, Thapagaun, was a smooth and impactful event thanks to the amazing support and coordination we received.",
    media: [
      { type: "video", src: "../src/assets/img/sachetnari/presidential/video.mp4" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/1.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/2.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/3.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/4.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/5.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/6.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/7.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/8.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/9.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/10.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/11.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/12.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/presidential/13.jpg" },
    ],
  },
  {
    slug: "techspire",
    title: "Techspire College",
    image: "../src/assets/img/sachetnari/techspire/techspire.jpeg",
    description: "Our outreach at Tech Spire College,New Baneshwor, was an energetic and inspiring milestone in our campaign. The supportive environment and smooth coordination allowed us to fully engage with students, creating meaningful connections and amplifying the impact of our message.",
    media: [
      { type: "video", src: "../src/assets/img/sachetnari/techspire/video.mp4" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/1.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/2.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/3.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/4.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/5.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/6.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/7.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/8.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/10.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/11.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/12.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/13.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/techspire/14.jpg" },
    ],
  },
  {
    slug: "ward_3",
    title: "Ward no. 3",
    image: "../src/assets/img/sachetnari/ward_3/ward3.jpg",
    description: "Our outreach at Ward No. 3, Maharajgunj, focused on GBV awareness and KMC Women Cell services, reaching many elderly residents who were previously unaware.",
    media: [
      { type: "video", src: "../src/assets/img/sachetnari/ward_3/video.mp4" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_3/1.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_3/2.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_3/3.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_3/4.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_3/5.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_3/6.JPG" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_3/7.JPG" },
    ]

  },
  {
    slug: "ward_4",
    title: "Ward no. 4",
    image: "../src/assets/img/sachetnari/ward_4/ward_4.jpeg",
    description: "Our outreach at Ward No. 4, Baluwatar, raised awareness about GBV and KMC Women Cell services. Support from ward representatives and interactive riddles with rewards engaged the community, making the session both informative and impactful.",
    media: [
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/1.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/2.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/3.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/4.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/5.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/6.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/7.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/8.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_4/9.jpg" },
    ]
  },
  {
    slug: "ward_12",
    title: "Ward no. 12",
    image: "../src/assets/img/sachetnari/ward_12/ward12.jpg",
    description: "Our outreach at Ward No. 12, Teku, was a touching and memorable chapter of our campaign. With seamless arrangements and wholehearted support from the ward, we were able to focus entirely on engaging the community. Equipped with our materials such as pamphlets, booklets, banners, props, riddles, and candies, we created an interactive and impactful experience for all who joined.",
    media: [
      { type: "video", src: "../src/assets/img/sachetnari/ward_12/video.mp4" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/1.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/2.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/3.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/4.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/5.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/6.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/7.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/8.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/9.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/10.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/11.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/12.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/13.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/14.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/15.jpg" },
      { type: "image", src: "../src/assets/img/sachetnari/ward_12/16.jpg" },
    ]
  },
  { slug: "ward_16",
     title: "Ward no. 16",
     image: "../src/assets/img/sachetnari/ward_16/ward16.jpg",
     description: "At Ward No. 16,Chamati, our Sachet Nari stall engaged visitors with interactive GBV and empowerment activities, sparking meaningful conversations and highlighting the urgent need for community awareness about KMC Women’s Cell services.",
    media:[
      { type: "image", src: "../src/assets/img/sachetnari/ward_16/1.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/2.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/3.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/4.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/5.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/6.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/7.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/8.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/9.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/10.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/11.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/12.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/13.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/14.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/15.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_16/16.jpg" },
    ] },
  { slug: "ward_19",
     title: "Ward no. 19",
      image: "../src/assets/img/sachetnari/ward_19/ward19.webp",
       description: "At Ward No. 19, Bagdurbar, our outreach brought GBV awareness to life with interactive riddles and engaging discussions, helping residents discover and connect with KMC Women’s Cell services.",
      media:[
        { type: "image", src: "../src/assets/img/sachetnari/ward_19/1.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/2.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/3.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/4.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/5.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/6.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/7.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/8.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/9.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/10.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/11.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/12.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/13.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/14.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_19/15.jpg" },
      ] },
  { slug: "ward_26",
     title: "Ward no. 26",
     image: "../src/assets/img/sachetnari/ward_26/ward26.jpg",
     description: "At Ward No. 26, Lainchaur,  our outreach on gender-based violence and the KMC Women’s Cell reached a diverse crowd, from elderly citizens to children and caregivers. Positioned alongside free health services on the bustling ground floor, our Sachet Nari stall became a hub for meaningful conversations and community engagement.",
    media:[
       { type: "image", src: "../src/assets/img/sachetnari/ward_26/1.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/2.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/3.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/4.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/5.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/6.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/7.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/8.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/9.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/10.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/ward_26/11.jpg" },
    ] },
  {
    title: "Thapathali Campus",
    slug: "Thapathali_Campus",
    image: "../src/assets/img/sachetnari/thapathali/thapathali.jpeg",
    description:
      "Three days of energy and curiosity at Thapathali Engineering Campus — students engaged actively, making it one of our most memorable chapters.",
    media: [
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/1.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/2.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/3.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/4.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/5.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/6.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/7.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/8.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/9.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/10.JPG" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/11.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/12.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/13.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/14.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/15.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/16.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/17.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/18.jpg" },
    { type: "image", src: "../src/assets/img/sachetnari/thapathali/19.jpg" },
    ],
  },
];

const SNGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [slides, setSlides] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);


  const openPopup = (media) => {
    setSlides(media);
    setPopupOpen(true);
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };
useEffect(() => {
  if (popupOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [popupOpen]);


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800">
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#fe44ae] mb-16">
          Sachet Naari Outreach Gallery
        </h2>

        {galleryData.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative  flex flex-col md:flex-row items-center gap-8 mb-24 ${index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
          >
            {index !== 0 && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-400 to-pink-200 h-12 rounded-full shadow-md"
              />
            )}

            {/* Image Section */}
            <motion.div
              className="flex-1 relative group rounded-2xl overflow-hidden shadow-lg bg-white/30 backdrop-blur-md border border-white/40"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>

              <button
                onClick={() => openPopup(item.media)}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-5 py-2 bg-[#fe44ae] text-white font-semibold rounded-full shadow-md hover:bg-pink-600 transition"
              >
                View Gallery
              </button>
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="flex-1 bg-white/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-pink-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-[#fe44ae] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Popup for gallery preview */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
          <motion.div
  className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl w-[90%] relative max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-pink-300 scrollbar-track-pink-100"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  exit={{ scale: 0.8, opacity: 0 }}
  transition={{ duration: 0.3 }}
>
              <button
                onClick={() => setPopupOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-pink-500 text-2xl font-bold"
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold text-[#fe44ae] mb-4 text-center">
                Gallery Preview
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {slides.map((media, i) => (
                  <div
                    key={i}
                    onClick={() => openLightbox(i)}
                    className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all"
                  >
                    {media.type === "video" ? (
                      <video
                        src={media.src}
                        className="w-full h-64 object-cover rounded-xl"
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={media.src}
                        alt={`media-${i}`}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Lightbox View */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={photoIndex}
        render={{
          slide: ({ slide }) =>
            slide.type === "video" ? (
              <video
                controls
                autoPlay
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  background: "#000",
                  borderRadius: "10px",
                }}
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={slide.src}
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  borderRadius: "10px",
                }}
              />
            ),
        }}
      />
    </div>
  );
};

export default SNGallery;
