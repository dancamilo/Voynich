import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";
import Counter from "./Counter";

const PERF_IMG =
  "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/d1633fbdc_generated_9e75eb98.jpg";

const STATS = [
  { value: 650, suffix: "", label: "Horsepower", decimals: 0 },
  { value: 3.4, suffix: "", label: "Seconds — 0 to 100 km/h", decimals: 1 },
  { value: 320, suffix: "", label: "km/h — Top Speed", decimals: 0 },
];

export default function Performance() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="performance" ref={ref} className="relative bg-black overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={PERF_IMG}
          alt="VOYNICH at speed on a wet mountain road at night"
          fittingType="fill"
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16 py-32 lg:py-48">
        <Reveal>
          <p className="text-[11px] tracking-luxe-sm text-white/50 uppercase mb-6">Performance</p>
          <h2 className="font-display font-light text-5xl lg:text-8xl text-white tracking-tight leading-[1.02]">
            Power with <span className="metal-text font-medium">purpose</span>.
          </h2>
        </Reveal>

        <div className="mt-20 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <div className="border-t border-white/15 pt-6">
                <div className="font-display font-light text-6xl lg:text-8xl text-white tracking-tight">
                  <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} duration={2.4} />
                </div>
                <p className="mt-4 text-[11px] tracking-luxe-sm text-white/50 uppercase">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}