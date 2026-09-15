import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const FEATURED_IMG =
  "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/98a39871a_generated_8a2b45da.jpg";

const SPECS = [
  { value: "650", label: "HP" },
  { value: "3.4", label: "0–100 KM/H — SEC" },
  { value: "AWD", label: "Drivetrain" },
  { value: "620", label: "KM Range" },
];

export default function FeaturedVehicle() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.25]);

  return (
    <section id="featured" ref={ref} className="relative bg-black overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src={FEATURED_IMG}
          alt="VOYNICH V01 flagship sedan"
          fittingType="fill"
          className="h-full w-full"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-16 py-32 lg:py-48 min-h-[100svh] flex flex-col justify-center">
        <Reveal>
          <p className="text-[11px] tracking-luxe-sm text-white/50 uppercase mb-6">Flagship</p>
          <h2 className="font-display font-semibold text-7xl sm:text-8xl lg:text-[12rem] leading-none text-white tracking-tight">
            V01
          </h2>
          <p className="mt-6 font-display font-light tracking-luxe-sm text-base sm:text-lg lg:text-xl text-white/80 uppercase">
            Precision in Motion.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 max-w-3xl">
          {SPECS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="bg-black/40 backdrop-blur-sm px-6 py-7">
                <div className="font-display font-light text-3xl lg:text-4xl text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] tracking-luxe-sm text-white/45 uppercase">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <a
            href="#performance"
            className="group mt-12 inline-flex items-center gap-3 text-[11px] tracking-luxe-sm text-white border-b border-white/30 pb-2 hover:border-white transition-colors duration-300"
          >
            EXPLORE V01
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}