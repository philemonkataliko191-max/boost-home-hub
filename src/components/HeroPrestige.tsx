import { useState } from "react";
import { Search, Sparkles, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import villaPrestige from "@/assets/villa-prestige.jpg";

const HeroPrestige = () => {
  const [address, setAddress] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <img
          src={villaPrestige}
          alt="Villa futuriste de prestige"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(40,85%,52%,0.05),transparent_70%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 mb-8 backdrop-blur-md"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-foreground tracking-widest uppercase">
            Propulsé par l'Intelligence Artificielle
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 leading-[1.05]"
        >
          ImmoBoost AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl font-serif text-gradient-gold mb-4"
        >
          Ne regardez plus les maisons,
          <br />
          <span className="italic">voyez l'argent</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12"
        >
          Notre IA scanne le marché mondial en temps réel pour détecter les opportunités invisibles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-3 bg-card/80 backdrop-blur-xl p-3 rounded-2xl border border-accent/15 shadow-gold hover:shadow-[0_8px_40px_-8px_hsla(40,85%,52%,0.5)] transition-shadow duration-500">
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
            <button className="bg-gradient-gold text-accent-foreground hover:opacity-90 rounded-xl gap-2 px-8 py-3 font-semibold shadow-gold transition-all duration-300 flex items-center justify-center animate-glow-pulse">
              <Search className="h-5 w-5" />
              Estimer
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-12 mt-16"
        >
          {[
            { value: "12 500 000", suffix: " MAD", label: "Estimé ce mois" },
            { value: "98%", suffix: "", label: "Précision IA" },
            { value: "< 30s", suffix: "", label: "Temps de réponse" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif mb-1" style={{ color: "#FFD700" }}>
                {stat.value}
                <span className="text-xl">{stat.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPrestige;
