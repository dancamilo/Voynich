const COLUMNS = [
  { title: "Vehicles", links: ["V01", "X01", "R01", "Configurator"] },
  { title: "Brand", links: ["Design", "Technology", "Performance", "Experience"] },
  { title: "Ownership", links: ["Contact", "Private Gallery", "Heritage", "Care"] },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 lg:px-16 py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div>
            <p className="font-display font-semibold tracking-luxe-sm text-sm text-white">VOYNICH</p>
            <p className="mt-5 text-sm text-white/40 font-light leading-relaxed max-w-xs">
              Engineered beyond expectation. A new expression of automotive performance, design, and technology.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] tracking-luxe-sm text-white/40 uppercase mb-5">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-white/60 hover:text-white transition-colors duration-300">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] tracking-luxe-sm text-white/30 uppercase">© 2026 Voynich Automotive</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="text-[11px] tracking-luxe-sm text-white/30 hover:text-white/60 transition-colors uppercase">Privacy</a>
            <a href="#top" className="text-[11px] tracking-luxe-sm text-white/30 hover:text-white/60 transition-colors uppercase">Terms</a>
            <a href="#top" className="text-[11px] tracking-luxe-sm text-white/30 hover:text-white/60 transition-colors uppercase">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}