import { useState } from "react";
import { Zap, Shield, TrendingUp, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import scannerImg from "@/assets/scanner-ai.jpg";

const VisionScanner = () => {
  const [scanState, setScanState] = useState<"idle" | "scanning" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const handleScan = () => {
    setScanState("scanning");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanState("done");
          return 100;
        }
        return prev + 2;
      });
    }, 60);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsla(40,85%,52%,0.04),transparent_60%)]" />
      
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Vision <span className="text-gradient-gold">Scanner IA</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Notre intelligence artificielle analyse chaque propriété avec une précision militaire.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-accent/20">
              <img src={scannerImg} alt="Scanner IA" className="w-full" />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="absolute rounded-full border border-accent/30" style={{ width: `${i * 120}px`, height: `${i * 120}px`, top: `${-i * 60}px`, left: `${-i * 60}px`, animation: `radar-pulse 2.5s ease-out ${i * 0.4}s infinite` }} />
                  ))}
                  <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_hsla(40,85%,52%,0.8)]" />
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-xl border border-accent/20 rounded-xl px-4 py-3 text-center">
                <div className="text-3xl font-bold font-serif text-accent">94</div>
                <div className="text-xs text-muted-foreground tracking-wider">/100 CONFIANCE</div>
              </div>

              {/* Scan overlay */}
              {scanState === "scanning" && (
                <motion.div initial={{ top: 0 }} animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 2, repeat: Infinity }} className="absolute left-0 right-0 h-1 bg-accent shadow-[0_0_20px_hsla(40,85%,52%,0.8)] z-10" />
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="space-y-6">
            {[
              { icon: Shield, title: "Analyse de Sécurité", desc: "Vérification complète du titre foncier et de l'historique juridique" },
              { icon: TrendingUp, title: "Potentiel de Valorisation", desc: "Projection de la valeur à 5, 10 et 20 ans basée sur l'IA" },
              { icon: Zap, title: "Détection d'Opportunité", desc: "Alerte instantanée quand un bien est sous-évalué de plus de 15%" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }} viewport={{ once: true }} className="flex gap-4 p-5 rounded-xl bg-card/60 border border-accent/10 backdrop-blur-sm hover:border-accent/30 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Scan progress */}
            {scanState === "scanning" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                  <Loader2 className="h-4 w-4 animate-spin" /> Scan en cours...
                </div>
                <Progress value={progress} className="h-3 bg-muted [&>div]:bg-gradient-gold" />
              </div>
            )}

            {scanState === "done" && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-5 rounded-xl bg-card border border-accent/30 space-y-3">
                <div className="flex items-center gap-2 text-accent font-bold">
                  <CheckCircle className="h-5 w-5" /> Résultats du Scan
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs">Prix Estimé</div>
                    <div className="text-foreground font-bold">14 200 000 MAD</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs">Solidité</div>
                    <div className="text-accent font-bold">92/100</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs">Matériaux</div>
                    <div className="text-foreground font-bold">Premium A+</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs">Potentiel +5ans</div>
                    <div className="text-accent font-bold">+34%</div>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }}
              onClick={handleScan}
              disabled={scanState === "scanning"}
              className="w-full bg-gradient-gold text-accent-foreground py-4 rounded-xl font-bold text-lg shadow-gold animate-glow-pulse flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              <Zap className="h-6 w-6" />
              {scanState === "done" ? "Relancer le Scan ⚡" : "Lancer le Scan de Fortune ⚡"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionScanner;
