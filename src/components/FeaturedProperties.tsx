import { TrendingUp, Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Villa Océan Infinity",
    location: "Casablanca, Corniche",
    price: "12 500 000 MAD",
    score: 97,
    beds: 6,
    baths: 5,
    area: 850,
  },
  {
    id: 2,
    image: property2,
    title: "Penthouse Sky Lounge",
    location: "Rabat, Hay Riad",
    price: "8 900 000 MAD",
    score: 94,
    beds: 4,
    baths: 4,
    area: 420,
  },
  {
    id: 3,
    image: property3,
    title: "Mega Villa Futuriste",
    location: "Marrakech, Palmeraie",
    price: "18 000 000 MAD",
    score: 99,
    beds: 8,
    baths: 6,
    area: 1200,
  },
];

const ScoreBadge = ({ score }: { score: number }) => (
  <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-md rounded-full px-3 py-1.5 border border-accent/30 animate-glow-pulse">
    <TrendingUp className="h-4 w-4 text-accent" />
    <span className="text-sm font-bold text-gradient-gold">{score}/100</span>
  </div>
);

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsla(40,85%,52%,0.03),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Collection Exclusive
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-5">
            Villas de <span className="text-gradient-gold">Prestige</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Les propriétés les plus exclusives, analysées et certifiées par notre IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <div
              key={property.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-gold transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-border hover:border-accent/30"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="absolute inset-0 shimmer-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <ScoreBadge score={property.score} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors duration-300">
                  {property.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{property.location}</p>

                <div className="flex items-center gap-5 text-sm text-muted-foreground mb-5">
                  <span className="flex items-center gap-1.5">
                    <Bed className="h-4 w-4 text-accent/60" /> {property.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4 text-accent/60" /> {property.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="h-4 w-4 text-accent/60" /> {property.area} m²
                  </span>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <span className="text-lg font-bold text-gradient-gold">{property.price}</span>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-accent transition-colors duration-300 group/btn">
                    Voir détails
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
