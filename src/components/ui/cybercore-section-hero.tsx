import React, { useState, useEffect, CSSProperties } from "react";

export interface CybercoreBackgroundProps {
  /** Number of animated light beams */
  beamCount?: number;
}

const DEFAULT_BEAM_COUNT = 70;

const CybercoreBackground: React.FC<CybercoreBackgroundProps> = ({
  beamCount = DEFAULT_BEAM_COUNT,
}) => {
  const [beams, setBeams] = useState<
    Array<{ id: number; type: "primary" | "secondary"; style: CSSProperties }>
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: beamCount }).map((_, i) => {
      const riseDur = Math.random() * 3 + 5; // 5–8s rise
      const fadeDur = riseDur;
      const type: "primary" | "secondary" =
        Math.random() < 0.15 ? "secondary" : "primary";
      return {
        id: i,
        type,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.floor(Math.random() * 2) + 1}px`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${riseDur}s, ${fadeDur}s`,
        } as CSSProperties,
      };
    });
    setBeams(generated);
  }, [beamCount]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Animated grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-[55%]">
        <div className="cyber-grid absolute inset-0" />
      </div>

      {/* Floor glow */}
      <div className="cyber-floor-glow absolute inset-x-0 bottom-[-15%] h-[40%]" />

      {/* Main center glow */}
      <div className="cyber-main-glow absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* Beams */}
      <div className="absolute inset-0">
        {beams.map((beam) => (
          <div
            key={beam.id}
            className={`cyber-beam ${
              beam.type === "secondary" ? "cyber-beam-secondary" : "cyber-beam-primary"
            }`}
            style={beam.style}
          />
        ))}
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,hsl(var(--background))_85%)]" />
    </div>
  );
};

export default CybercoreBackground;
