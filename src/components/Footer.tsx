export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 md:py-28">
        <div>
          <p className="mb-4 text-[clamp(2rem,4vw,2.75rem)] font-semibold tracking-[-0.035em] text-foreground">
            Angad
          </p>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted">
            Freshness, flash-frozen at its peak. Gourmet convenience without
            compromise.
          </p>
        </div>

        <div>
          <p className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-muted uppercase">
            Explore
          </p>
          <ul className="space-y-3 text-[15px] text-foreground">
            <li>
              <a href="#products" className="transition-opacity hover:opacity-60">
                Products
              </a>
            </li>
            <li>
              <a href="#craft" className="transition-opacity hover:opacity-60">
                Craft
              </a>
            </li>
            <li>
              <a href="#story" className="transition-opacity hover:opacity-60">
                Story
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-5 text-[11px] font-semibold tracking-[0.24em] text-muted uppercase">
            Connect
          </p>
          <ul className="space-y-3 text-[15px] text-foreground">
            <li>
              <a href="mailto:hello@angad.food" className="transition-opacity hover:opacity-60">
                hello@angad.food
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-60">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-60">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-border px-6 py-8 text-[13px] text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Angad Foods. All rights reserved.</p>
        <p className="tracking-[0.08em] uppercase">Flash-frozen in India</p>
      </div>
    </footer>
  );
}
