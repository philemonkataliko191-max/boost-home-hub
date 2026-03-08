import { forwardRef } from "react";
import { MapPin, Shield, Award } from "lucide-react";

interface Props {
  villaName: string;
  location: string;
  score: number;
  certNumber: number;
}

const ImmoBoostCertificate = forwardRef<HTMLDivElement, Props>(
  ({ villaName, location, score, certNumber }, ref) => {
    const id = String(certNumber).padStart(3, "0");

    return (
      <div
        ref={ref}
        className="w-[360px] mx-auto bg-background border-4 border-double border-accent rounded-2xl p-6 text-center relative overflow-hidden"
      >
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-accent/50 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-accent/50 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/50 rounded-br-2xl" />

        <Award className="h-10 w-10 text-accent mx-auto mb-2" />
        <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-accent/70 mb-1">
          Certificat d'Authenticité
        </h2>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-1">ImmoBoost AI</h3>
        <p className="text-accent text-3xl font-black mb-4">#{id}</p>

        {/* QR Code placeholder (SVG) */}
        <div className="mx-auto w-24 h-24 mb-4 bg-foreground/10 rounded-lg flex items-center justify-center border border-accent/20">
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            {/* Simplified QR pattern */}
            {[0, 1, 2, 3, 4, 5, 6].map((r) =>
              [0, 1, 2, 3, 4, 5, 6].map((c) => (
                <rect
                  key={`${r}-${c}`}
                  x={c * 14 + 2}
                  y={r * 14 + 2}
                  width={12}
                  height={12}
                  rx={2}
                  fill={
                    (r < 3 && c < 3) || (r < 3 && c > 3) || (r > 3 && c < 3) || ((r + c) % 3 === 0)
                      ? "hsl(40, 85%, 52%)"
                      : "transparent"
                  }
                  opacity={0.8}
                />
              ))
            )}
          </svg>
        </div>

        <div className="space-y-2 mb-4">
          <h4 className="font-serif text-lg font-bold text-foreground">{villaName}</h4>
          <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent/60" />
            {location}
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-accent font-bold">Score IA : {score}/100</span>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-3">
          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            Certifié par Scan Vision Pro — ImmoBoost AI
          </p>
        </div>
      </div>
    );
  }
);

ImmoBoostCertificate.displayName = "ImmoBoostCertificate";
export default ImmoBoostCertificate;
