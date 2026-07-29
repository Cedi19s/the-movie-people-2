import { motion } from "framer-motion";

export function About() {
  return (
    <section className="relative w-full min-h-[100dvh] pt-32 pb-24 px-6 md:px-12 bg-black flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 mb-12 flex items-center gap-4 md:gap-6">
            <span className="w-8 md:w-12 h-[1px] bg-white/30" />
            Our Vision
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-12 md:space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <p className="text-3xl md:text-5xl lg:text-6xl font-serif leading-[1.2] text-white">
            We are more than a production company. We are the architects of Rwanda's cinematic renaissance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 text-lg md:text-xl text-white/70 font-serif font-light leading-relaxed">
            <p>
              Born in Kigali, <strong className="text-white font-serif font-normal">The Movie People</strong> emerged from a profound need to elevate African narratives to global standards. For decades, our stories were framed by outsiders. Today, we hold the lens. We build the infrastructure. We command the set.
            </p>
            <p>
              Our studio operates at the intersection of raw cultural authenticity and uncompromising technical precision. From high-end commercial campaigns to prestige feature films, we partner with visionaries to craft frames that linger long after the screen goes dark.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
        >
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Location</h3>
            <p className="font-serif text-white/80">Kigali, Rwanda</p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Est</h3>
            <p className="font-serif text-white/80">2020</p>
          </div>
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Focus</h3>
            <p className="font-serif text-white/80">Prestige Film & Commercial</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
