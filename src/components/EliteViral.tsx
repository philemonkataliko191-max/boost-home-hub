import { useState } from "react";
import { Lock, Share2, Crown, Star } from "lucide-react";
import { motion } from "framer-motion";
import carteNoire from "@/assets/carte-noire-vip.png";

const APP_URL = "https://boost-home-hub.lovable.app";
const WHATSAPP_MSG = encodeURIComponent(
  `Regarde ça ! 😱 Je viens de scanner ma maison avec ImmoBoost AI, c'est de la folie ! Essaye ici : ${APP_URL}`
);

const EliteViral = () => {
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = () => {
    window.open(`https://wa.me/?text=${WHATSAPP_MSG}`, "_blank");
    setUnlocked(true);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(40,85%,52%,0.04),transparent_60%)]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Accès <span className="text-gradient-gold">Élite Virale</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            La Carte Noire VIP réservée aux membres qui partagent l'excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Card with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className={`relative rounded-2xl overflow-hidden border border-accent/20 bg-card/60 backdrop-blur-xl p-8 md:p-12 transition-all duration-700 ${
                !unlocked ? "select-none" : ""
              }`}
            >
              {/* Blur overlay when locked */}
              {!unlocked && (
                <div className="absolute inset-0 z-20 backdrop-blur-[15px] bg-background/30 flex flex-col items-center justify-center gap-6 rounded-2xl">
                  <Lock className="h-12 w-12 text-accent" />
                  <p className="text-lg font-serif text-foreground text-center max-w-sm">
                    Partagez ImmoBoost pour débloquer votre <span className="text-gradient-gold font-bold">Carte Noire VIP</span>
                  </p>
                  <button
                    onClick={handleUnlock}
                    className="bg-gradient-gold text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-gold hover:scale-105 transition-transform flex items-center gap-3 animate-glow-pulse"
                  >
                    <Share2 className="h-5 w-5" />
                    📲 Inviter sur WhatsApp
                  </button>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative w-72 md:w-80 shrink-0">
                  <div className="shimmer-gold rounded-2xl overflow-hidden">
                    <img
                      src={carteNoire}
                      alt="Carte Noire VIP ImmoBoost"
                      className="w-full animate-card-shimmer"
                    />
                  </div>
                </div>

                <div className="space-y-6 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5">
                    <Crown className="h-4 w-4 text-accent" />
                    <span className="text-xs font-bold text-accent tracking-widest uppercase">Membre Élite</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    Carte Noire <span className="text-gradient-gold">ImmoBoost</span>
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Accès prioritaire aux ventes secrètes",
                      "Estimation illimitée de biens",
                      "Alertes exclusives avant le marché",
                      "Support VIP dédié 24/7",
                    ].map((perk) => (
                      <li key={perk} className="flex items-center gap-3 text-muted-foreground">
                        <Star className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-sm">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EliteViral;
