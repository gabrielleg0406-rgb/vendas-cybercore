const stack = [
  { name: "React 18", desc: "UI library" },
  { name: "Vite 5", desc: "Build tool" },
  { name: "TypeScript", desc: "Type safety" },
  { name: "Tailwind v3", desc: "Styling" },
  { name: "shadcn/ui", desc: "Components" },
  { name: "Framer Motion", desc: "Animations" },
  { name: "Lovable Cloud", desc: "Backend" },
  { name: "Lucide Icons", desc: "Iconography" },
  { name: "React Router", desc: "Routing" },
  { name: "TanStack Query", desc: "Data fetching" },
  { name: "Zod", desc: "Validation" },
  { name: "Stripe-ready", desc: "Payments" },
];

const Stack = () => {
  return (
    <section id="stack" className="relative py-32">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" aria-hidden />
      <div className="container-tight relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge-pill">A Stack</div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient-cyber">Stack pronta.</span>{" "}
            <span className="text-muted-foreground">Sem dor de cabeça.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            As mesmas ferramentas que os melhores Vibecoders usam, configuradas e prontas para você.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="card-premium group flex flex-col items-start p-5 transition-all hover:-translate-y-1"
            >
              <span className="font-mono text-xs text-primary">{item.desc}</span>
              <span className="mt-2 font-display text-lg font-semibold">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
