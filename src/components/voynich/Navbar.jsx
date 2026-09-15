import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "VEHICLES", href: "#vehicles" },
  { label: "DESIGN", href: "#design" },
  { label: "TECHNOLOGY", href: "#technology" },
  { label: "PERFORMANCE", href: "#performance" },
  { label: "ABOUT", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <a href="#top" className="font-display font-semibold tracking-luxe-sm text-sm text-white">
            VOYNICH
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-luxe-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="text-[11px] tracking-luxe-sm text-white/70 hover:text-white transition-colors duration-300"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </motion.header>
  );
}