import { useState } from "react";
import { Search, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [address, setAddress] = useState("");

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, hsla(220,60%,12%,0.88), hsla(220,40%,20%,0.72))" }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-primary-foreground">Propulsé par l'Intelligence Artificielle</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Estimez votre bien
          <br />
          <span className="text-gradient-gold">en quelques secondes</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
          Notre IA analyse le marché immobilier en temps réel pour vous fournir
          une estimation précise et fiable de votre propriété.
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 bg-card/95 backdrop-blur-md p-3 rounded-2xl shadow-elevated">
            <div className="flex-1 flex items-center gap-3 px-4">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Entrez l'adresse du bien..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 text-base"
              />
            </div>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-xl gap-2 px-8 font-semibold shadow-md"
            >
              <Search className="h-5 w-5" />
              Estimer
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-primary-foreground/70">
          {[
            { value: "15 000+", label: "Estimations réalisées" },
            { value: "98%", label: "Précision IA" },
            { value: "< 30s", label: "Temps de réponse" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
