import { useRef } from "react";
import { MessageCircle, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2canvas from "html2canvas";

interface Props {
  certNumber: number;
  villaName: string;
  certRef: React.RefObject<HTMLDivElement>;
}

const ActionsCertificat = ({ certNumber, villaName, certRef }: Props) => {
  const id = String(certNumber).padStart(3, "0");

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Voici le Certificat ImmoBoost AI #${id} pour la villa ${villaName}. Certifié via Scan Vision Pro.`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  const handleDownload = async () => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, { scale: 2, backgroundColor: "#000" });
    const link = document.createElement("a");
    link.download = `certificat-immoboost-${id}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex gap-3 justify-center mt-4">
      <Button onClick={handleWhatsApp} className="bg-[hsl(var(--whatsapp))] text-[hsl(var(--whatsapp-foreground))] hover:opacity-90 font-semibold">
        <MessageCircle className="h-5 w-5 mr-2" />
        Partager WhatsApp
      </Button>
      <Button onClick={handleDownload} variant="outline" className="border-accent/30 text-accent hover:bg-accent/10 font-semibold">
        <Download className="h-5 w-5 mr-2" />
        Télécharger HD
      </Button>
    </div>
  );
};

export default ActionsCertificat;
