import { useState } from "react";
import { Search, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [address, setAddress] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[20000ms] hover:scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, hsla(0,0%,0%,0.92), hsla(0,0%,4%,0.80))" }}
      />
      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      {/* Gold particle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(40,85%,52%,0.06),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 mb-8 backdrop-blur-md animate-fade-in">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground tracking-wide uppercase">
            Propulsé par l'Intelligence Artificielle
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[1.1] animate-slide-up">
          Estimez votre bien
          <br />
          <span className="text-gradient-gold">en quelques secondes</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
          style={{ animationDelay: "200ms" }}
        >
          Notre IA analyse le marché immobilier en temps réel pour vous fournir
          une estimation précise et fiable de votre propriété.
        </p>

        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
          <div className="flex flex-col sm:flex-row gap-3 bg-card/90 backdrop-blur-xl p-3 rounded-2xl shadow-elevated border border-accent/10">
            <div className="flex-1 flex items-center gap-3 px-4">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
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
              className="bg-gradient-gold text-accent-foreground hover:opacity-90 hover:scale-105 rounded-xl gap-2 px-8 font-semibold shadow-gold transition-all duration-300 hover:shadow-lg animate-glow-pulse"
            >
              <Search className="h-5 w-5" />
              Estimer
            </Button>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-12 mt-16 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          {[
            { value: "15 000+", label: "Estimations réalisées" },
            { value: "98%", label: "Précision IA" },
            { value: "< 30s", label: "Temps de réponse" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold font-serif mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
