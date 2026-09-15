import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const SCENES = [
  {
    img: "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/570ed3ca7_generated_d7bc7ca3.jpg",
    title: "Architecture",
    text: "Spaces designed to be arrived at.",
  },
  {
    img: "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/d1633fbdc_generated_9e75eb98.jpg",
    title: "The Open Road",
    text: "Where engineering meets horizon.",
  },
];

export default function Experience() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] py-28 lg:py-40 px-6 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] tracking-luxe-sm text-white/40 uppercase mb-6">The VOYNICH Experience</p>
          <h2 className="font-display font-light text-4xl lg:text-7xl text-white tracking-tight max-w-4xl leading-[1.05]">
            A world, <span className="metal-text font-medium">curated</span>.
          </h2>
          <p className="mt-8 max-w-xl text-sm lg:text-base text-white/50 font-light leading-relaxed">
            VOYNICH is more than a vehicle. It is a way of moving through the world — through modern architecture, mountain passes, midnight cities, and coastal roads.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SCENES.map((s, i) => (
            <SceneCard key={s.title} scene={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SceneCard({ scene, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Reveal delay={index * 0.12}>
      <div ref={ref} className="relative aspect-[4/5] overflow-hidden bg-black group">
        <motion.div style={{ scale, y }} className="absolute inset-0">
          <Image src={scene.img} alt={scene.title} fittingType="fill" className="h-full w-full" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
          <h3 className="font-display font-light text-3xl lg:text-4xl text-white tracking-tight">
            {scene.title}
          </h3>
          <p className="mt-3 text-sm text-white/60 font-light max-w-xs">{scene.text}</p>
        </div>
      </div>
    </Reveal>
  );
}