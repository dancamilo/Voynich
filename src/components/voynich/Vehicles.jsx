import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const MODELS = [
  {
    code: "V01",
    name: "VOYNICH V01",
    tagline: "The Grand Touring Sedan",
    description:
      "A statement of composed power. The V01 distills grand touring into its purest form — sculptural, silent, and relentless.",
    image:
      "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/17bc72b59_generated_36373df9.jpg",
  },
  {
    code: "X01",
    name: "VOYNICH X01",
    tagline: "The Performance SUV",
    description:
      "Commanding presence meets precision dynamics. The X01 redefines the performance SUV with an unmistakable silhouette.",
    image:
      "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/2b6deba57_generated_c40f858a.jpg",
  },
  {
    code: "R01",
    name: "VOYNICH R01",
    tagline: "The High-Performance Coupe",
    description:
      "Engineered for the devoted. The R01 is a focused instrument — low, purposeful, and devastatingly quick.",
    image:
      "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/40086e997_generated_6c936c29.jpg",
  },
];

function ModelCard({ model, index }) {
  return (
    <Reveal delay={index * 0.12}>
      <a href="#featured" className="group block">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#0d0d0d]">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={model.image}
              alt={`${model.name} — ${model.tagline}`}
              fittingType="fill"
              className="h-full w-full"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute top-5 left-5 font-display font-light text-6xl text-white/15 tracking-tight">
            {model.code}
          </div>
        </div>

        <div className="pt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="font-display font-medium text-lg text-white tracking-wide">{model.name}</h3>
            <p className="mt-1 text-[11px] tracking-luxe-sm text-white/45 uppercase">{model.tagline}</p>
            <p className="mt-4 text-sm text-white/55 font-light leading-relaxed max-w-sm">
              {model.description}
            </p>
          </div>
          <span className="shrink-0 mt-1 inline-flex items-center gap-2 text-[11px] tracking-luxe-sm text-white/70 group-hover:text-white transition-colors duration-300">
            DISCOVER {model.code}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export default function Vehicles() {
  return (
    <section id="vehicles" className="relative bg-[#0a0a0a] py-28 lg:py-40 px-6 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-24">
            <div>
              <p className="text-[11px] tracking-luxe-sm text-white/40 uppercase mb-5">The Collection</p>
              <h2 className="font-display font-light text-4xl lg:text-6xl text-white tracking-tight">
                A trilogy of <span className="metal-text font-medium">intent</span>.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/50 font-light leading-relaxed">
              Three distinct expressions of a single philosophy — each engineered without compromise, each unmistakably VOYNICH.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {MODELS.map((m, i) => (
            <ModelCard key={m.code} model={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}