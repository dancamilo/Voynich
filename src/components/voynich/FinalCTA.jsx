import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-black py-32 lg:py-48 px-6 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1100px] text-center">
        <Reveal>
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold tracking-luxe text-4xl sm:text-6xl lg:text-8xl text-white"
          >
            VOYNICH
          </motion.h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 font-display font-light tracking-luxe-sm text-base sm:text-lg lg:text-xl text-white/70 uppercase">
            Your journey begins here.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#vehicles"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-4 text-[11px] tracking-luxe-sm font-medium hover:bg-white/90 transition-colors duration-300"
            >
              EXPLORE THE COLLECTION
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="mailto:contact@voynich.com"
              className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-10 py-4 text-[11px] tracking-luxe-sm font-medium hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              CONTACT VOYNICH
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}