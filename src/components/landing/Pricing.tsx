import { ArrowRight, Check } from "lucide-react";

const includes = [
  "+15 templates premium prontos",
  "Design system completo (tokens, dark mode, animações)",
  "Auth + Database + Storage configurados",
  "Componentes shadcn/ui customizados",
  "Landing pages, dashboards e checkouts",
  "Integração com Stripe + Lovable Cloud",
  "Documentação passo-a-passo",
  "Atualizações vitalícias",
  "Acesso à comunidade privada de Vibecoders",
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge-pill">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Oferta de lançamento
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Um preço.</span>{" "}
            <span className="text-gradient-cyber">Tudo dentro.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Pague uma vez. Use para sempre. Em todos os seus projetos.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="card-premium relative overflow-hidden p-8 md:p-12">
            {/* Glow background */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl font-bold">VibeKit</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Vibecoding Templates · Stack pronta
                  </div>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  −67% OFF
                </span>
              </div>

              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-mono text-2xl text-muted-foreground line-through decoration-accent/60">
                  R$297
                </span>
                <span className="font-display text-6xl font-bold text-gradient-cyber md:text-7xl">
                  R$97
                </span>
                <span className="text-sm text-muted-foreground">/ pagamento único</span>
              </div>
              <p className="mt-2 text-sm text-accent">
                👉 De R$297 por R$97 — só hoje
              </p>

              <ul className="mt-10 grid gap-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="btn-glow group mt-10 flex items-center justify-center gap-2 rounded-full bg-gradient-cta px-8 py-4 text-base font-semibold text-primary-foreground"
              >
                Garantir VibeKit por R$97
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Pagamento seguro · Acesso imediato · Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
