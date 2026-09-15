import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const INTERIOR_IMG =
  "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/e833cb816_generated_c1c07022.jpg";

const DETAILS = [
  "Hand-stitched leather, selected and finished by hand.",
  "Brushed metal and carbon fiber, balanced by touch.",
  "Ambient lighting tuned to the hour and the mood.",
  "Seats engineered for arrival as much as for motion.",
];

export default function Interior() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="interior" ref={ref} className="relative bg-black overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={INTERIOR_IMG}
          alt="VOYNICH interior — quilted leather, carbon fiber, ambient lighting"
          fittingType="fill"
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16 py-32 lg:py-48 min-h-[100svh] flex flex-col justify-center">
        <Reveal>
          <p className="text-[11px] tracking-luxe-sm text-white/50 uppercase mb-6">Interior</p>
          <h2 className="font-display font-light text-5xl lg:text-8xl text-white tracking-tight leading-[1.02] max-w-2xl">
            The art of <span className="metal-text font-medium">arriving</span>.
          </h2>
        </Reveal>

        <div className="mt-12 lg:mt-16 max-w-md">
          {DETAILS.map((d, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex items-center gap-4 py-4 border-b border-white/10">
                <span className="font-display font-light text-xs text-white/30 w-8">0{i + 1}</span>
                <p className="text-sm lg:text-base text-white/70 font-light">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}