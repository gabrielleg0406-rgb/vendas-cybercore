import { Zap } from "lucide-react";

const Navbar = () => {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Stack", href: "#stack" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-cta text-primary-foreground shadow-glow-primary">
            <Zap className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span>VibeKit</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#pricing"
          className="rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary transition-all hover:bg-primary/20 hover:shadow-glow-primary"
        >
          Get VibeKit
        </a>
      </div>
    </header>
  );
};

export default Navbar;
