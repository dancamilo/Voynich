import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";
import Reveal from "./Reveal";

const TECH_IMG =
  "https://media.base44.com/images/public/6aa987d59c034e4b944a43ba/ff58290e3_generated_c412beb4.jpg";

const FEATURES = [
  { n: "01", title: "Advanced Driver Assistance", text: "A calibrated awareness of the road, anticipating and supporting without intrusion." },
  { n: "02", title: "Intelligent Vehicle Systems", text: "Adaptive architecture that learns the driver and the environment in equal measure." },
  { n: "03", title: "Premium Digital Cockpit", text: "A quiet interface — information revealed only when it matters, never when it doesn't." },
  { n: "04", title: "Adaptive Suspension", text: "Continuous recalibration that reads the surface and responds in milliseconds." },
  { n: "05", title: "Electric Powertrain", text: "Silent, immediate torque — a powertrain engineered for both range and resolve." },
  { n: "06", title: "Connected Vehicle Technology", text: "A vehicle that evolves. Over-the-air refinement keeps every VOYNICH current." },
];

export default function Technology() {
  return (
    <section id="technology" className="relative bg-black py-28 lg:py-40 px-6 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image src={TECH_IMG} alt="VOYNICH digital cockpit interface" fittingType="fill" className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-[11px] tracking-luxe-sm text-white/40 uppercase mb-6">Technology</p>
          <h2 className="font-display font-light text-4xl lg:text-7xl text-white tracking-tight max-w-4xl leading-[1.05]">
            Intelligence, <span className="metal-text font-medium">refined</span>.
          </h2>
          <p className="mt-8 max-w-xl text-sm lg:text-base text-white/50 font-light leading-relaxed">
            Technology in a VOYNICH is never loud. It is a quiet competence — present, precise, and always in service of the drive.
          </p>
        </Reveal>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {FEATURES.map((f, i) => (
            <Reveal key={f.n} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                transition={{ duration: 0.4 }}
                className="group bg-black/60 backdrop-blur-sm p-8 lg:p-10 h-full"
              >
                <div className="font-display font-light text-sm text-white/30 tracking-widest">{f.n}</div>
                <h3 className="mt-6 font-display font-medium text-lg text-white tracking-wide">{f.title}</h3>
                <p className="mt-3 text-sm text-white/50 font-light leading-relaxed">{f.text}</p>
                <div className="mt-8 h-px w-0 bg-white/40 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}