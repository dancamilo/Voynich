import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const HEADLIGHT =
  "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/047d4e149_generated_86b2722c.jpg";
const WHEEL =
  "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/8a4bbf25a_generated_3a4d1fa7.jpg";

function DetailImage({ src, alt, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image src={src} alt={alt} fittingType="fill" className="h-full w-full" />
      </motion.div>
    </div>
  );
}

export default function Design() {
  return (
    <section id="design" className="relative bg-[#0a0a0a] py-28 lg:py-40 px-6 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] tracking-luxe-sm text-white/40 uppercase mb-6">Design & Philosophy</p>
          <h2 className="font-display font-light text-4xl lg:text-7xl text-white tracking-tight max-w-4xl leading-[1.05]">
            Designed without <span className="metal-text font-medium">compromise</span>.
          </h2>
        </Reveal>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-base lg:text-lg text-white/60 font-light leading-relaxed">
              Every VOYNICH is the convergence of sculptural design, advanced engineering, intelligent technology, and driver-focused performance.
            </p>
            <p className="mt-6 text-sm text-white/45 font-light leading-relaxed">
              We begin with proportion and surface — the discipline of a single line drawn across metal. From there, every detail is resolved with intention: the geometry of a headlight, the weave of carbon, the grain of leather, the silence of a cabin.
            </p>
            <p className="mt-6 text-sm text-white/45 font-light leading-relaxed">
              Nothing is decorative. Everything is considered.
            </p>
          </Reveal>

          <div className="lg:col-span-7 flex flex-col gap-8 lg:gap-12">
            <Reveal>
              <DetailImage src={HEADLIGHT} alt="VOYNICH headlight detail with carbon fiber surround" className="aspect-[16/10]" />
              <p className="mt-4 text-[11px] tracking-luxe-sm text-white/40 uppercase">Signature Optics</p>
            </Reveal>
            <Reveal delay={0.1}>
              <DetailImage src={WHEEL} alt="VOYNICH alloy wheel and carbon fiber detail" className="aspect-[16/10]" />
              <p className="mt-4 text-[11px] tracking-luxe-sm text-white/40 uppercase">Engineered Geometry</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}