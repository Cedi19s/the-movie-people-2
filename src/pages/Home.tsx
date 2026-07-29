import { Link } from "wouter";
import { motion } from "framer-motion";

export function Home() {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="relative w-[100vw] h-[100vh]">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/qA_XElCiND4?autoplay=1&mute=1&loop=1&playlist=qA_XElCiND4&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&playsinline=1"
            allow="autoplay; fullscreen"
            frameBorder="0"
          />
        </div>
        {/* Gradient overlays for cinematic depth and text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 md:px-12 flex flex-col items-center max-w-5xl mx-auto mt-20">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.15em] text-white drop-shadow-2xl leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          THE MOVIE<br />PEOPLE
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg md:text-2xl font-serif text-white/80 italic tracking-wide max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        >
          The Next Era of Rwandan Cinema.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-12"
        >
          <Link
            href="/gallery"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm tracking-[0.2em] uppercase text-white bg-transparent border border-white/30 hover:border-white transition-all duration-500 overflow-hidden cursor-pointer"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
              Explore Gallery
            </span>
            <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
