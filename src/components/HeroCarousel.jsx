import { useState, useEffect } from 'react';
import { AnimatePresence, motion} from "motion/react"


const HERO_IMAGES = [
  '/src/assets/img/tc3.jpg',
  '/src/assets/img/coverflow2.jpg',
  '/src/assets/img/website2.jpg',
  '/src/assets/img/coverflow3.jpg',
  '/src/assets/img/earthquake.jpg',
  '/src/assets/img/website6.JPG',
  '/src/assets/img/tc2.jpg',
  '/src/assets/img/homeslid2.jpeg',
  '/src/assets/img/tlh04slid.jpg',
  '/src/assets/img/website7.jpg',
  '/src/assets/img/coverflow2.jpg',
  '/src/assets/img/website3.jpg',

];

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const tid = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 5000);
    return () => clearInterval(tid);
  }, []);

  return (
    <section id="home" className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full bg-gray-100 overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.img
          key={HERO_IMAGES[index]}
          src={HERO_IMAGES[index]}
          alt={`hero ${index}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Minimum dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      {/* Existing gradient overlay for style */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl  h-full flex items-center px-6 md:px-8">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Welcome to Aaviyanta Foundation</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">We work at the intersection of health, education, and local resilience to build inclusive communities and empower women and youth through smart, grounded interventions.</p>

          <div className="mt-6 flex gap-4">
            <a href="#ourwork" className="inline-block px-5 py-3 bg-[#266d67] text-white rounded-md shadow-md hover:bg-white hover:text-[#266d67] transition">Our Work</a>
            <a href="/impact-stories" className="inline-block px-5 py-3 bg-white text-[#266d67] rounded-md shadow-md hover:bg-[#c0d3d1] hover:text-white transition">Impact Stories</a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} aria-label={`go to slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel
