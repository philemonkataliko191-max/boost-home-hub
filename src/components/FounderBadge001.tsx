import { Crown } from "lucide-react";

export const FounderBadge001 = () => (
  <div className="relative inline-block group cursor-pointer">
    <div className="absolute -inset-1 bg-accent rounded-full blur opacity-30 animate-pulse" />
    <div className="relative flex items-center gap-2 bg-background border-2 border-accent px-4 py-1.5 rounded-full shadow-2xl">
      <Crown className="text-accent" size={20} />
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-black text-accent/70 uppercase tracking-widest">Fondateur</span>
        <span className="text-xl font-extrabold text-foreground">#001</span>
      </div>
    </div>
  </div>
);
