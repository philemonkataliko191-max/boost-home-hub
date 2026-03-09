import { useState } from "react";
import { Zap, Shield, TrendingUp, Loader2, CheckCircle, MapPin, Home, Maximize, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import scannerImg from "@/assets/scanner-ai.jpg";

interface EstimationResult {
  prix_estime_usd: number;
  prix_min_usd: number;
  prix_max_usd: number;
  score_solidite: number;
  score_confiance: number;
  qualite_materiaux: string;
  potentiel_5ans: number;
  potentiel_10ans: number;
  risques: string[];
  points_forts: string[];
  recommandation: string;
}

const ESTIMATE_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/estimate`;

const VisionScanner = () => {
  const [scanState, setScanState] = useState<"idle" | "form" | "scanning" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<EstimationResult | null>(null);

  // Form fields
  const [propertyType, setPropertyType] = useState("Villa");
  const [surface, setSurface] = useState("500");
  const [location, setLocation] = useState("Kinshasa - Gombe");
  const [features, setFeatures] = useState("");

  const handleStartScan = () => {
    setScanState("form");
  };

  const handleScan = async () => {
    setScanState("scanning");
    setProgress(0);

    // Animate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) { clearInterval(interval); return 90; }
        return prev + 2;
      });
    }, 80);

    try {
      const resp = await fetch(ESTIMATE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ propertyType, surface: Number(surface), location, features }),
      });

      clearInterval(interval);

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err.error || `Erreur ${resp.status}`);
      }

      const data = await resp.json();
      setResult(data);
      setProgress(100);
      setScanState("done");
    } catch (e: any) {
      clearInterval(interval);
      console.error("Scan error:", e);
      toast.error(e.message || "Erreur lors de l'estimation IA");
      setScanState("form");
      setProgress(0);
    }
  };

  const formatUSD = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

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

              {result && (
                <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-xl border border-accent/20 rounded-xl px-4 py-3 text-center">
                  <div className="text-3xl font-bold font-serif text-accent">{result.score_confiance}</div>
                  <div className="text-xs text-muted-foreground tracking-wider">/100 CONFIANCE</div>
                </div>
              )}

              {scanState === "scanning" && (
                <motion.div initial={{ top: 0 }} animate={{ top: ["0%", "100%", "0%"] }} transition={{ duration: 2, repeat: Infinity }} className="absolute left-0 right-0 h-1 bg-accent shadow-[0_0_20px_hsla(40,85%,52%,0.8)] z-10" />
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="space-y-6">
            {scanState === "idle" && (
              <>
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
              </>
            )}

            {/* Form */}
            {scanState === "form" && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 p-5 rounded-xl bg-card border border-accent/20">
                <h3 className="font-serif text-lg font-bold text-foreground flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" /> Décrivez le bien à scanner
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Type de bien</label>
                    <select value={propertyType} onChange={e => setPropertyType(e.target.value)} className="w-full bg-muted rounded-lg px-3 py-2 text-sm text-foreground outline-none border border-accent/10">
                      <option>Villa</option>
                      <option>Appartement</option>
                      <option>Terrain</option>
                      <option>Immeuble</option>
                      <option>Duplex</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block flex items-center gap-1"><Maximize className="h-3 w-3" /> Superficie (m²)</label>
                    <input type="number" value={surface} onChange={e => setSurface(e.target.value)} className="w-full bg-muted rounded-lg px-3 py-2 text-sm text-foreground outline-none border border-accent/10" />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block flex items-center gap-1"><MapPin className="h-3 w-3" /> Localisation</label>
                  <select value={location} onChange={e => setLocation(e.target.value)} className="w-full bg-muted rounded-lg px-3 py-2 text-sm text-foreground outline-none border border-accent/10">
                    <option>Kinshasa - Gombe</option>
                    <option>Kinshasa - Ngaliema</option>
                    <option>Kinshasa - Limete</option>
                    <option>Kinshasa - Bandalungwa</option>
                    <option>Lubumbashi - Centre</option>
                    <option>Lubumbashi - Golf</option>
                    <option>Goma - Centre</option>
                    <option>Bukavu</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block flex items-center gap-1"><Home className="h-3 w-3" /> Caractéristiques (optionnel)</label>
                  <input type="text" value={features} onChange={e => setFeatures(e.target.value)} placeholder="Ex: 4 chambres, piscine, jardin..." className="w-full bg-muted rounded-lg px-3 py-2 text-sm text-foreground outline-none border border-accent/10 placeholder:text-muted-foreground" />
                </div>
              </motion.div>
            )}

            {/* Scanning progress */}
            {scanState === "scanning" && (
              <div className="space-y-4 p-5 rounded-xl bg-card border border-accent/20">
                <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                  <Loader2 className="h-4 w-4 animate-spin" /> Analyse IA en cours...
                </div>
                <Progress value={progress} className="h-3 bg-muted [&>div]:bg-gradient-gold" />
                <p className="text-xs text-muted-foreground">L'IA analyse le marché immobilier congolais pour estimer votre bien...</p>
              </div>
            )}

            {/* Results */}
            {scanState === "done" && result && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-5 rounded-xl bg-card border border-accent/30 space-y-4">
                <div className="flex items-center gap-2 text-accent font-bold text-lg">
                  <CheckCircle className="h-5 w-5" /> Résultats du Scan IA
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10 col-span-2">
                    <div className="text-muted-foreground text-xs">Prix Estimé</div>
                    <div className="text-accent font-bold text-xl">{formatUSD(result.prix_estime_usd)}</div>
                    <div className="text-muted-foreground text-xs mt-1">{formatUSD(result.prix_min_usd)} — {formatUSD(result.prix_max_usd)}</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs">Solidité</div>
                    <div className="text-foreground font-bold">{result.score_solidite}/100</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs flex items-center gap-1"><Award className="h-3 w-3" /> Matériaux</div>
                    <div className="text-foreground font-bold">{result.qualite_materiaux}</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs">Potentiel +5ans</div>
                    <div className="text-accent font-bold">+{result.potentiel_5ans}%</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-accent/10">
                    <div className="text-muted-foreground text-xs">Potentiel +10ans</div>
                    <div className="text-accent font-bold">+{result.potentiel_10ans}%</div>
                  </div>
                </div>
                {result.points_forts?.length > 0 && (
                  <div className="text-sm">
                    <div className="text-accent font-semibold text-xs mb-1">Points forts</div>
                    <ul className="text-muted-foreground space-y-0.5">
                      {result.points_forts.map((p, i) => <li key={i} className="flex items-start gap-1"><CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />{p}</li>)}
                    </ul>
                  </div>
                )}
                {result.recommandation && (
                  <p className="text-sm text-muted-foreground italic border-l-2 border-accent/30 pl-3">{result.recommandation}</p>
                )}
              </motion.div>
            )}

            <motion.button
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }}
              onClick={scanState === "form" ? handleScan : handleStartScan}
              disabled={scanState === "scanning"}
              className="w-full bg-gradient-gold text-accent-foreground py-4 rounded-xl font-bold text-lg shadow-gold animate-glow-pulse flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform disabled:opacity-50"
            >
              <Zap className="h-6 w-6" />
              {scanState === "idle" && "Lancer le Scan de Fortune ⚡"}
              {scanState === "form" && "Scanner avec l'IA ⚡"}
              {scanState === "scanning" && "Analyse en cours..."}
              {scanState === "done" && "Relancer un Scan ⚡"}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionScanner;
