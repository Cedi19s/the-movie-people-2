import { motion } from "framer-motion";

const images = [
  { src: "https://i.ibb.co/B72t3kJ/DSC04342.jpg", label: "Camera Crew" },
  { src: "https://i.ibb.co/Vpq30zc6/Morocco-213.jpg", label: "Director" },
  { src: "https://i.ibb.co/mCjtFdpR/Unveiling-the-Art-of-Performance-Join-us-for-an-exclusive-journey-into-the-world-of-acting-alongside.jpg", label: "Masterclass" }
];

export function Gallery() {
  return (
    <section className="relative w-full min-h-[100dvh] pt-32 pb-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl tracking-[0.1em] text-white">SELECTED WORKS</h2>
          <p className="mt-4 font-serif text-white/60 text-xl italic">Moments captured on and off set.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 + idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative aspect-[3/4] overflow-hidden bg-white/5 cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.label} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-6 text-center">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                  <h3 className="text-sm tracking-[0.3em] uppercase text-white px-6 py-3 border border-white/20 backdrop-blur-sm bg-black/20">
                    {img.label}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
