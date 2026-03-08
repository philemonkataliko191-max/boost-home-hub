import { motion } from "framer-motion";

const testimonials = [
  "Jean (Paris) +12% de profit",
  "Sarah (Dubaï) a trouvé son palais",
  "Marc (Marrakech) +45 000 MAD",
  "Amina (Casablanca) +28% rendement",
  "Pierre (Monaco) Villa estimée en 18s",
  "Fatima (Tanger) Alerte VIP reçue",
  "Olivier (Genève) +92 000 CHF",
  "Leila (Abidjan) Scan de fortune validé",
];

const SocialProof = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="relative py-16 overflow-hidden border-y border-accent/10">
      <div className="absolute inset-0 bg-gradient-luxury" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative text-center mb-10"
      >
        <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">
          Preuve Sociale <span className="text-gradient-gold">Mondiale</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 mx-4 px-6 py-3 bg-card/60 backdrop-blur-sm border border-accent/10 rounded-full shrink-0"
            >
              <span className="text-accent text-lg">✦</span>
              <span className="text-sm font-medium text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
