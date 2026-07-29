import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="relative w-full min-h-[100dvh] pt-32 pb-24 px-6 md:px-12 bg-black flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Copy & Details */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl tracking-[0.1em] text-white leading-[1.1]">
            COMMISSION<br />A VISION.
          </h2>
          <p className="mt-8 font-serif text-xl md:text-2xl text-white/70 italic leading-relaxed max-w-md">
            For production inquiries, co-productions, and creative partnerships.
          </p>
          
          <div className="mt-16 space-y-8">
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">General Inquiries</h4>
              <a href="mailto:contactmoviepeople@gmail.com" className="text-lg text-white font-serif hover:text-white/60 transition-colors">
                contactmoviepeople@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Phone</h4>
              <a href="tel:+250785454221" className="text-lg text-white font-serif hover:text-white/60 transition-colors">
                +250 785 454 221
              </a>
            </div>
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Headquarters</h4>
              <p className="text-lg text-white/80 font-serif">
                Gatenga, Kicukiro<br />Kigali, Rwanda
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Premium Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/5 p-8 md:p-12 border border-white/10"
        >
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/50 block">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-serif text-lg focus:outline-none focus:border-white transition-colors rounded-none"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/50 block">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-serif text-lg focus:outline-none focus:border-white transition-colors rounded-none"
                placeholder="jane@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/50 block">Project Type</label>
              <select className="w-full bg-transparent border-b border-white/20 pb-4 text-white/80 font-serif text-lg focus:outline-none focus:border-white transition-colors rounded-none appearance-none cursor-pointer">
                <option value="commercial" className="bg-black">Commercial</option>
                <option value="feature" className="bg-black">Feature Film</option>
                <option value="documentary" className="bg-black">Documentary</option>
                <option value="other" className="bg-black">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-white/50 block">Message</label>
              <textarea 
                rows={3}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white font-serif text-lg focus:outline-none focus:border-white transition-colors resize-none rounded-none"
                placeholder="Tell us about your vision..."
              />
            </div>

            <button 
              type="submit"
              className="w-full group relative inline-flex items-center justify-center px-8 py-5 text-sm tracking-[0.2em] uppercase text-white bg-white/10 hover:bg-white transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-medium">
                Submit Inquiry
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
