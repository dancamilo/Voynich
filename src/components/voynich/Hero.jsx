import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";

const HERO_IMG = "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/98a39871a_generated_8a2b45da.jpg";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-black">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="VOYNICH flagship grand touring sedan in a cinematic dark studio"
          fittingType="fill"
          className="h-full w-full"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black"
      />
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <h1 className="font-display font-semibold tracking-luxe text-5xl sm:text-7xl lg:text-[9rem] leading-none text-white">
            VOYNICH
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="mt-6 font-display font-light tracking-luxe-sm text-sm sm:text-base lg:text-lg text-white/90 uppercase"
        >
          Engineered Beyond Expectation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
          className="mt-4 max-w-md text-sm lg:text-base text-white/55 font-light leading-relaxed"
        >
          A new expression of automotive performance, design, and technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#featured"
            className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-[11px] tracking-luxe-sm font-medium hover:bg-white/90 transition-colors duration-300"
          >
            EXPLORE THE VEHICLE
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-3 border border-white/25 text-white px-8 py-4 text-[11px] tracking-luxe-sm font-medium hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            DISCOVER VOYNICH
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-luxe-sm text-white/40">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}