import { ReactNode, useState } from "react";
import { Lock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVIP } from "@/contexts/VIPContext";
import VIPRegistrationDialog from "./VIPRegistrationDialog";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect } from "react";

interface Props {
  children: ReactNode;
  label?: string;
}

const FeatureGuard = ({ children, label = "cette fonctionnalité" }: Props) => {
  const { isVIP } = useVIP();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setIsLoggedIn(!!session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (isVIP) return <>{children}</>;

  return (
    <div className="relative">
      <div className="pointer-events-none select-none opacity-30 blur-[2px]">
        {children}
      </div>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/70 backdrop-blur-[15px] rounded-2xl border border-accent/20">
        <div className="flex flex-col items-center gap-4 text-center px-6">
          <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent/30 flex items-center justify-center">
            <Lock className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Accès VIP Requis</h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Débloquez {label} en rejoignant les 100 Fondateurs Élite ImmoBoost AI.
          </p>
          {isLoggedIn ? (
            <Button onClick={() => setDialogOpen(true)} className="bg-gradient-gold text-accent-foreground font-bold shadow-gold animate-glow-pulse">
              <Crown className="h-5 w-5 mr-2" />
              Devenir VIP
            </Button>
          ) : (
            <Link to="/auth">
              <Button className="bg-gradient-gold text-accent-foreground font-bold shadow-gold animate-glow-pulse">
                <Crown className="h-5 w-5 mr-2" />
                Se connecter / S'inscrire
              </Button>
            </Link>
          )}
        </div>
      </div>
      <VIPRegistrationDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default FeatureGuard;
