import { TrendingUp, Bed, Bath, Maximize, ArrowRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Villa Méditerranéenne",
    location: "Casablanca, Maroc",
    price: "3 200 000 MAD",
    score: 92,
    beds: 4,
    baths: 3,
    area: 320,
  },
  {
    id: 2,
    image: property2,
    title: "Penthouse Panoramique",
    location: "Rabat, Agdal",
    price: "2 800 000 MAD",
    score: 88,
    beds: 3,
    baths: 2,
    area: 180,
  },
  {
    id: 3,
    image: property3,
    title: "Maison de Ville Moderne",
    location: "Marrakech, Guéliz",
    price: "1 950 000 MAD",
    score: 85,
    beds: 3,
    baths: 2,
    area: 150,
  },
];

const ScoreBadge = ({ score }: { score: number }) => {
  const color = score >= 90 ? "text-success" : score >= 80 ? "text-accent" : "text-muted-foreground";
  return (
    <div className="flex items-center gap-1.5 bg-primary/80 backdrop-blur-md rounded-full px-3 py-1.5 border border-accent/20">
      <TrendingUp className={`h-4 w-4 ${color}`} />
      <span className={`text-sm font-bold text-primary-foreground`}>{score}/100</span>
    </div>
  );
};

const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
            Sélection Premium
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-5">
            Biens en <span className="text-gradient-gold">Vedette</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Découvrez nos meilleures opportunités immobilières analysées par notre IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <div
              key={property.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-border/50"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                    <Bed className="h-4 w-4" /> {property.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" /> {property.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="h-4 w-4" /> {property.area} m²
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
