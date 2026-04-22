import { Bot, Code2, Layers, Palette, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Feature one",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    icon: Bot,
    title: "Feature two",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
  {
    icon: Layers,
    title: "Feature three",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  {
    icon: Palette,
    title: "Feature four",
    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
  },
  {
    icon: ShieldCheck,
    title: "Feature five",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
  },
  {
    icon: Code2,
    title: "Feature six",
    desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge-pill">Section label</div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Lorem ipsum dolor.</span>
            <br />
            <span className="text-muted-foreground">Sit amet consectetur.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-premium group p-7 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-glow-primary">
                <f.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
