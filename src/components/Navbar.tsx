import { useState } from "react";
import { Sparkles, Gift, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FounderBadge001 } from "@/components/FounderBadge001";
import { useVIP } from "@/contexts/VIPContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isVIP, memberNumber, logout } = useVIP();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-accent/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-18">
        <div className="flex items-center gap-3">
          <Sparkles className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-foreground font-sans tracking-tight">
            Immo<span className="text-gradient-gold">Boost</span> AI
          </span>
          <FounderBadge001 />
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm text-muted-foreground font-medium">
          <a href="/" className="relative hover:text-accent transition-colors duration-300 tracking-wide after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">Accueil</a>
          <a href="/bonus" className="relative hover:text-accent transition-colors duration-300 tracking-wide flex items-center gap-1.5 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
            <Gift className="h-3.5 w-3.5 text-accent" />
            BONUS
          </a>
          <a href="#" className="relative hover:text-accent transition-colors duration-300 tracking-wide">Estimation</a>
          <a href="#" className="relative hover:text-accent transition-colors duration-300 tracking-wide">Biens</a>
          <a href="#" className="relative hover:text-accent transition-colors duration-300 tracking-wide">À propos</a>
          <a href="#live-sport" className="hover:text-accent transition-colors duration-300 tracking-wide flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
            </span>
            LIVE SPORT
          </a>
        </div>

        <div className="flex items-center gap-3">
          {isVIP && memberNumber ? (
            <>
              <span className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1.5 rounded-full">
                Élite #{String(memberNumber).padStart(3, "0")}
              </span>
              <Button size="sm" variant="ghost" onClick={logout} className="text-muted-foreground hover:text-destructive">
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button size="sm" className="bg-gradient-gold text-accent-foreground hover:opacity-90 hover:scale-105 rounded-lg font-semibold shadow-gold transition-all duration-300 animate-glow-pulse">
                Connexion
              </Button>
            </Link>
          )}

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-accent/10 px-4 py-6 space-y-4">
          {["Accueil", "Estimation", "Biens", "À propos"].map((item) => (
            <a key={item} href="#" className="block text-foreground font-medium hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
              {item}
            </a>
          ))}
          <a href="/bonus" className="block text-accent font-bold flex items-center gap-1.5" onClick={() => setMobileOpen(false)}>
            <Gift className="h-4 w-4" /> BONUS
          </a>
          <a href="#live-sport" className="block text-foreground font-medium flex items-center gap-1.5" onClick={() => setMobileOpen(false)}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
            </span>
            LIVE SPORT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
