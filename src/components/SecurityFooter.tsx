import { Shield, Lock, Award, Globe } from "lucide-react";
import { motion } from "framer-motion";

const SecurityFooter = () => {
  return (
    <footer className="relative py-16 border-t border-accent/10">
      <div className="absolute inset-0 bg-gradient-luxury" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
            Fondation de <span className="text-gradient-gold">Sécurité</span>
          </h2>
          <p className="text-muted-foreground text-sm">Réseau certifié 2026 — Infrastructure de classe mondiale</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
        >
          {[
            { icon: Lock, label: "Cryptage Militaire AES-512" },
            { icon: Shield, label: "Protection Anti-Fraude" },
            { icon: Award, label: "Certifié ISO 27001" },
            { icon: Globe, label: "RGPD Compliant" },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 bg-card/40 border border-accent/10 rounded-full px-5 py-2.5 backdrop-blur-sm">
              <badge.icon className="h-4 w-4 text-accent" />
              <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="text-center space-y-2 pt-8 border-t border-accent/5">
          <p className="text-sm text-muted-foreground">
            🔒 Vos données sont protégées par un cryptage de niveau militaire
          </p>
          <p className="text-xs text-muted-foreground/60">
            © 2026 ImmoBoost AI — Tous droits réservés. La plateforme immobilière la plus puissante au monde.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SecurityFooter;
