import CybercoreBackground from "@/components/ui/cybercore-section-hero";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <CybercoreBackground beamCount={80} />

      <div className="container-tight relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
        <div className="badge-pill animate-fade-in-up">
          <Sparkles className="h-3.5 w-3.5" />
          Built for Vibecoders
        </div>

        <h1
          className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          <span className="text-gradient">Tenha sua própria</span>
          <br />
          <span className="text-gradient-cyber">Lovable em casa.</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
        >
          Pare de começar do zero. Lance seu próximo projeto em{" "}
          <span className="font-semibold text-foreground">horas, não semanas</span>{" "}
          — com a stack pronta dos Vibecoders.
        </p>

        <div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
        >
          <a
            href="#pricing"
            className="btn-glow group inline-flex items-center gap-2 rounded-full bg-gradient-cta px-8 py-4 text-base font-semibold text-primary-foreground"
          >
            Quero o VibeKit por R$97
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-8 py-4 text-base font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/50 hover:bg-background/60"
          >
            Ver o que tem dentro
          </a>
        </div>

        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-primary" />
            Stack moderna
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow-accent" />
            Pronto para produção
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-primary" />
            Atualizações vitalícias
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
