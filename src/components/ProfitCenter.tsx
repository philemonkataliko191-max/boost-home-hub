import { useState, useEffect } from "react";
import { TrendingUp, Bell, Diamond, DollarSign, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  { icon: "💎", text: "Vente Secrète détectée à 500m", time: "À l'instant" },
  { icon: "🔥", text: "Villa sous-évaluée de 23% — Quartier Prestige", time: "Il y a 2 min" },
  { icon: "📈", text: "Votre bien a pris +4.2% ce mois", time: "Il y a 5 min" },
  { icon: "⚡", text: "Nouveau palais disponible — Exclusivité 24h", time: "Il y a 12 min" },
];

const ProfitCenter = () => {
  const [visibleNotifs, setVisibleNotifs] = useState<number[]>([]);
  const [earnings, setEarnings] = useState(142);

  useEffect(() => {
    const timers = notifications.map((_, i) =>
      setTimeout(() => setVisibleNotifs((prev) => [...prev, i]), 2000 + i * 2500)
    );
    const earningsTimer = setInterval(() => {
      setEarnings((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => {
      timers.forEach(clearTimeout);
      clearInterval(earningsTimer);
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-luxury" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsla(40,85%,52%,0.06),transparent_50%)]" />

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Centre de <span className="text-gradient-gold">Profit</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Suivez vos gains en temps réel. Chaque seconde compte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main earnings card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-card/80 backdrop-blur-xl border border-accent/15 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <span className="text-muted-foreground text-sm tracking-wider uppercase">Depuis votre dernière connexion</span>
            </div>

            <div className="text-5xl md:text-7xl font-bold font-serif mb-2" style={{ color: "#FFD700" }}>
              +{earnings} €
            </div>
            <p className="text-muted-foreground mb-8">📈 gagnés en valorisation estimée</p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Biens suivis", value: "7", icon: DollarSign },
                { label: "Alertes actives", value: "12", icon: Bell },
                { label: "Rendement moyen", value: "+18%", icon: ArrowUpRight },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted/30 rounded-xl p-4 text-center border border-accent/5">
                  <stat.icon className="h-5 w-5 text-accent mx-auto mb-2" />
                  <div className="text-xl font-bold font-serif text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-foreground tracking-wider uppercase">Notifications Live</span>
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
              </span>
            </div>

            <AnimatePresence>
              {notifications.map((notif, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40, height: 0 }}
                  animate={
                    visibleNotifs.includes(i)
                      ? { opacity: 1, x: 0, height: "auto" }
                      : { opacity: 0, x: 40, height: 0 }
                  }
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  className="bg-card/70 backdrop-blur-md border border-accent/10 rounded-xl p-4 flex items-start gap-3 overflow-hidden"
                >
                  <span className="text-2xl">{notif.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{notif.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfitCenter;
