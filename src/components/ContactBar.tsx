import { Phone, MessageCircle, Mic } from "lucide-react";

const PHONE = "243974145850";

const ContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 pointer-events-none">
      <div className="max-w-lg mx-auto pointer-events-auto rounded-2xl border border-accent/20 bg-card/60 backdrop-blur-xl shadow-elevated p-3 flex items-center justify-around gap-2">
        <a
          href={`tel:+${PHONE}`}
          className="flex flex-col items-center gap-1.5 flex-1 py-2.5 rounded-xl hover:bg-accent/10 transition-colors duration-300 group"
        >
          <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
            <Phone className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground group-hover:text-accent transition-colors">Appeler</span>
        </a>

        <a
          href={`https://wa.me/${PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 flex-1 py-2.5 rounded-xl hover:bg-accent/10 transition-colors duration-300 group"
        >
          <div className="w-11 h-11 rounded-full bg-whatsapp/20 border border-whatsapp/30 flex items-center justify-center group-hover:bg-whatsapp group-hover:border-whatsapp transition-all duration-300">
            <MessageCircle className="h-5 w-5 text-whatsapp group-hover:text-whatsapp-foreground transition-colors" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground group-hover:text-accent transition-colors">WhatsApp</span>
        </a>

        <a
          href={`https://wa.me/${PHONE}?text=${encodeURIComponent("🎤 [Message vocal] Bonjour, je souhaite en savoir plus sur vos biens.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 flex-1 py-2.5 rounded-xl hover:bg-accent/10 transition-colors duration-300 group"
        >
          <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
            <Mic className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground group-hover:text-accent transition-colors">Vocal</span>
        </a>
      </div>
    </div>
  );
};

export default ContactBar;
