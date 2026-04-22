import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/40 py-12">
      <div className="container-tight flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 font-display font-semibold">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-cta text-primary-foreground">
            <Zap className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          Lorem
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lorem · All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
