import { Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-accent/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-18">
        <div className="flex items-center gap-2.5">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-foreground font-sans tracking-tight">
            Immo<span className="text-gradient-gold">Boost</span> AI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-muted-foreground font-medium">
          <a href="#" className="relative hover:text-accent transition-colors duration-300 tracking-wide after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Accueil</a>
          <a href="/bonus" className="relative hover:text-accent transition-colors duration-300 tracking-wide flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
            <Gift className="h-3.5 w-3.5 text-accent" />
            BONUS
          </a>
          <a href="#" className="relative hover:text-accent transition-colors duration-300 tracking-wide after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Estimation</a>
          <a href="#" className="relative hover:text-accent transition-colors duration-300 tracking-wide after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Biens</a>
          <a href="#" className="relative hover:text-accent transition-colors duration-300 tracking-wide after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">À propos</a>
          <a href="#live-sport" className="hover:text-accent transition-colors duration-300 tracking-wide flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            LIVE SPORT
          </a>
        </div>

        <Button size="sm" className="bg-gradient-gold text-accent-foreground hover:opacity-90 hover:scale-105 rounded-lg font-semibold shadow-gold transition-all duration-300 animate-glow-pulse">
          Connexion
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
