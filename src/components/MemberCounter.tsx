import { Users, Crown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { useVIP } from "@/contexts/VIPContext";
import { motion } from "framer-motion";

const MemberCounter = () => {
  const { totalMembers, isVIP, memberNumber } = useVIP();

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto bg-card border border-accent/20 rounded-2xl p-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="h-6 w-6 text-accent" />
            <h3 className="text-lg font-bold text-foreground">Club des 100 Fondateurs</h3>
          </div>

          <div className="flex items-center justify-center gap-2 mb-3">
            <Users className="h-5 w-5 text-accent/70" />
            <span className="text-3xl font-bold text-gradient-gold">{totalMembers}</span>
            <span className="text-muted-foreground text-lg">/100</span>
          </div>

          <Progress value={totalMembers} className="h-3 bg-muted [&>div]:bg-gradient-gold mb-3" />

          <p className="text-sm text-muted-foreground">
            {totalMembers >= 100
              ? "Toutes les places sont prises !"
              : `${100 - totalMembers} places restantes — Rejoignez l'élite`}
          </p>

          {isVIP && memberNumber && (
            <div className="mt-4 pt-4 border-t border-accent/10">
              <span className="text-accent font-bold">Votre numéro : #{String(memberNumber).padStart(3, "0")}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default MemberCounter;
