import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative py-32">
      <div className="container-tight">
        <div className="card-premium relative overflow-hidden p-12 md:p-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at center, hsl(var(--primary) / 0.25), transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
            style={{
              backgroundImage:
                "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.6), transparent)",
            }}
          />

          <div className="relative text-center">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              <span className="text-gradient">Lorem ipsum dolor.</span>
              <br />
              <span className="text-gradient-cyber">Sit amet consectetur.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <a
              href="#pricing"
              className="btn-glow group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-cta px-10 py-4 text-base font-semibold text-primary-foreground"
            >
              Call to action
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
