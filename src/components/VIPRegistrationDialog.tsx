import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Crown, Loader2, CheckCircle, Sparkles } from "lucide-react";
import { useVIP } from "@/contexts/VIPContext";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VIPRegistrationDialog = ({ open, onOpenChange }: Props) => {
  const { registerMember, totalMembers } = useVIP();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"form" | "paying" | "success">("form");
  const [assignedNumber, setAssignedNumber] = useState<number | null>(null);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user?.email) setUserEmail(session.user.email);
    });
  }, [open]);

  const handleSubmit = async () => {
    if (!name || !phone) return;
    setStep("paying");
    try {
      const num = await registerMember(name, phone, userEmail);
      setAssignedNumber(num);
      setStep("success");
    } catch (err: any) {
      console.error(err);
      setStep("form");
    }
  };

  const handleClose = (v: boolean) => {
    if (!v) {
      setStep("form");
      setName("");
      setPhone("");
    }
    onOpenChange(v);
  };

  if (totalMembers >= 100) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="bg-card border-destructive/50">
          <DialogHeader>
            <DialogTitle className="text-destructive">Places Épuisées</DialogTitle>
            <DialogDescription>Les 100 places fondateurs sont prises. Restez informé pour la prochaine vague.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-card border-accent/30 max-w-md">
        {step === "form" && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-foreground">
                <Crown className="text-accent" size={24} />
                Devenir Membre Élite
              </DialogTitle>
              <DialogDescription>
                Rejoignez les {totalMembers}/100 fondateurs. Place #{totalMembers + 1} disponible.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Input placeholder="Votre nom complet" value={name} onChange={(e) => setName(e.target.value)} className="border-accent/20 bg-background" />
              <Input placeholder="Téléphone (ex: +243...)" value={phone} onChange={(e) => setPhone(e.target.value)} className="border-accent/20 bg-background" />
              {userEmail && (
                <div className="text-sm text-muted-foreground bg-background/50 rounded-lg px-3 py-2 border border-accent/10">
                  📧 {userEmail}
                </div>
              )}
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-sm text-muted-foreground">
                💳 Paiement simulé — Mobile Money Congo
              </div>
              <Button onClick={handleSubmit} className="w-full bg-gradient-gold text-accent-foreground font-bold shadow-gold" disabled={!name || !phone}>
                <Sparkles className="h-5 w-5 mr-2" />
                Payer & Devenir VIP #{totalMembers + 1}
              </Button>
            </div>
          </>
        )}

        {step === "paying" && (
          <div className="flex flex-col items-center py-12 gap-4">
            <Loader2 className="h-12 w-12 text-accent animate-spin" />
            <p className="text-foreground font-semibold">Traitement Mobile Money...</p>
            <p className="text-sm text-muted-foreground">Veuillez patienter</p>
          </div>
        )}

        {step === "success" && (
          <div className="flex flex-col items-center py-8 gap-4 text-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/20 rounded-full blur-xl animate-pulse" />
              <CheckCircle className="h-16 w-16 text-accent relative" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Félicitations ! 🎉</h3>
            <p className="text-foreground">
              Vous êtes le <span className="text-accent font-bold">Membre Élite #{String(assignedNumber).padStart(3, "0")}</span> sur 100.
            </p>
            <p className="text-muted-foreground text-sm">Bienvenue dans l'empire.</p>
            <p className="text-accent/70 text-xs italic mt-2">Signé : Philémon — Fondateur #001</p>
            <Button onClick={() => handleClose(false)} className="mt-4 bg-gradient-gold text-accent-foreground font-bold">
              Accéder aux fonctionnalités VIP
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default VIPRegistrationDialog;
