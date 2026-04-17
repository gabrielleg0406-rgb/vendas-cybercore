import { Bot, Code2, Layers, Palette, Rocket, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lance em horas",
    desc: "Setup feito. Auth, payments, dashboard, landing — tudo pronto pra você focar no produto.",
  },
  {
    icon: Bot,
    title: "AI-first",
    desc: "Templates pensados para fluir com Cursor, Lovable e Claude. Vibe coding na veia.",
  },
  {
    icon: Layers,
    title: "Stack premium",
    desc: "React, Vite, TypeScript, Tailwind, shadcn/ui. O que os melhores estão usando hoje.",
  },
  {
    icon: Palette,
    title: "Design system pronto",
    desc: "Tokens, dark mode, animações e componentes. Beleza desde o primeiro commit.",
  },
  {
    icon: ShieldCheck,
    title: "Production-ready",
    desc: "RLS, validações, segurança e melhores práticas. Sem gambiarra que volta pra te assombrar.",
  },
  {
    icon: Code2,
    title: "Código limpo",
    desc: "Arquitetura escalável, componentes atômicos, fácil de modificar e expandir.",
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge-pill">Por que VibeKit</div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Tudo que você precisa.</span>
            <br />
            <span className="text-muted-foreground">Nada do que não precisa.</span>
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
