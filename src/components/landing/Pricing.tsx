import { ArrowRight, Check } from "lucide-react";

const includes = [
  "Lorem ipsum dolor sit amet consectetur",
  "Adipiscing elit sed do eiusmod tempor",
  "Incididunt ut labore et dolore magna",
  "Ut enim ad minim veniam quis nostrud",
  "Exercitation ullamco laboris nisi ut",
  "Aliquip ex ea commodo consequat duis",
  "Aute irure dolor in reprehenderit",
  "Voluptate velit esse cillum dolore",
  "Excepteur sint occaecat cupidatat",
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-32">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <div className="badge-pill">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Section label
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
            <span className="text-gradient">Lorem ipsum.</span>{" "}
            <span className="text-gradient-cyber">Dolor sit amet.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="card-premium relative overflow-hidden p-8 md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl font-bold">Plan name</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Lorem ipsum · Dolor sit amet
                  </div>
                </div>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  −00% OFF
                </span>
              </div>

              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-mono text-2xl text-muted-foreground line-through decoration-accent/60">
                  $000
                </span>
                <span className="font-display text-6xl font-bold text-gradient-cyber md:text-7xl">
                  $00
                </span>
                <span className="text-sm text-muted-foreground">/ lorem ipsum</span>
              </div>
              <p className="mt-2 text-sm text-accent">
                👉 Lorem ipsum dolor sit amet
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
                Call to action
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Lorem ipsum · Dolor sit amet · Consectetur elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
