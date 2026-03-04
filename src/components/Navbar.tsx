import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-primary-foreground font-sans tracking-tight">
            Immo<span className="text-accent">Boost</span> AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80">
          <a href="#" className="hover:text-accent transition-colors">Accueil</a>
          <a href="#" className="hover:text-accent transition-colors">Estimation</a>
          <a href="#" className="hover:text-accent transition-colors">Biens</a>
          <a href="#" className="hover:text-accent transition-colors">À propos</a>
        </div>

        <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-semibold">
          Connexion
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
