import { TrendingUp, Bed, Bath, Maximize } from "lucide-react";
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
    <div className="flex items-center gap-1.5 bg-card/90 backdrop-blur-sm rounded-full px-3 py-1.5">
      <TrendingUp className={`h-4 w-4 ${color}`} />
      <span className={`text-sm font-bold ${color}`}>{score}/100</span>
    </div>
  );
};

const FeaturedProperties = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Biens en <span className="text-gradient-gold">Vedette</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Découvrez nos meilleures opportunités immobilières analysées par notre IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, i) => (
            <div
              key={property.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <ScoreBadge score={property.score} />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                  {property.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{property.location}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" /> {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" /> {property.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" /> {property.area} m²
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-bold text-accent">{property.price}</span>
                  <button className="text-sm font-medium text-primary hover:text-accent transition-colors">
                    Voir détails →
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
