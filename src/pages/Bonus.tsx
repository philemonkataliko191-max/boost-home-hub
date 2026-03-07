import { useState, useRef, useCallback } from "react";
import { Gift, Sparkles, ArrowLeft, MessageCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import confetti from "canvas-confetti";

const SEGMENTS = [
  { label: "Expertise Offerte", emoji: "🏛️" },
  { label: "Visite en Hélicoptère", emoji: "🚁" },
  { label: "Accès VIP Lounge", emoji: "🥂" },
  { label: "Frais de Notaire Réduits", emoji: "📜" },
];

const NUM = SEGMENTS.length;
const ARC = (2 * Math.PI) / NUM;

const drawWheel = (ctx: CanvasRenderingContext2D, size: number) => {
  const cx = size / 2;
  const cy = size / 2;
  const r = size / 2 - 8;

  SEGMENTS.forEach((seg, i) => {
    const start = i * ARC - Math.PI / 2;
    const end = start + ARC;

    // Segment fill
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
    if (i % 2 === 0) {
      grad.addColorStop(0, "hsl(222,55%,18%)");
      grad.addColorStop(1, "hsl(222,55%,10%)");
    } else {
      grad.addColorStop(0, "hsl(40,85%,55%)");
      grad.addColorStop(1, "hsl(32,90%,42%)");
    }
    ctx.fillStyle = grad;
    ctx.fill();

    // Border
    ctx.strokeStyle = "hsl(40,85%,52%)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + ARC / 2);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = i % 2 === 0 ? "hsl(42,60%,94%)" : "hsl(222,55%,10%)";
    ctx.font = `bold ${size * 0.032}px 'DM Sans', sans-serif`;
    ctx.fillText(seg.emoji, r * 0.55, 0);
    ctx.font = `bold ${size * 0.028}px 'DM Sans', sans-serif`;

    // Word-wrap the label
    const words = seg.label.split(" ");
    const lines: string[] = [];
    let cur = "";
    words.forEach((w) => {
      const test = cur ? `${cur} ${w}` : w;
      if (ctx.measureText(test).width > r * 0.38) {
        lines.push(cur);
        cur = w;
      } else cur = test;
    });
    if (cur) lines.push(cur);
    lines.forEach((line, li) => {
      ctx.fillText(line, r * 0.55, 18 + (li - (lines.length - 1) / 2) * (size * 0.032));
    });
    ctx.restore();
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.15, 0, 2 * Math.PI);
  const cGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.15);
  cGrad.addColorStop(0, "hsl(40,85%,58%)");
  cGrad.addColorStop(1, "hsl(32,90%,42%)");
  ctx.fillStyle = cGrad;
  ctx.fill();
  ctx.strokeStyle = "hsl(222,55%,10%)";
  ctx.lineWidth = 3;
  ctx.stroke();
};

const Bonus = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const [showWinDialog, setShowWinDialog] = useState(false);

  const SIZE = 380;

  const initCanvas = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      if (!canvas) return;
      (canvasRef as React.MutableRefObject<HTMLCanvasElement>).current = canvas;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, SIZE, SIZE);
      drawWheel(ctx, SIZE);
    },
    []
  );

  const playCelebrationSound = () => {
    try {
      const ctx = new AudioContext();
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.15 + 0.6);
        osc.connect(gain).connect(ctx.destination);
        osc.start(ctx.currentTime + i * 0.15);
        osc.stop(ctx.currentTime + i * 0.15 + 0.6);
      });
    } catch {}
  };

  const fireConfetti = () => {
    const end = Date.now() + 3000;
    const colors = ["#FFD700", "#DAA520", "#F5E6C8", "#C5930C"];
    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 90,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 90,
        origin: { x: 1, y: 0.7 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    const winIndex = Math.floor(Math.random() * NUM);
    // Total rotation: several full turns + land on segment
    const targetAngle = 360 * 6 + (360 - (winIndex * (360 / NUM) + 360 / NUM / 2));
    const totalRotation = rotation + targetAngle;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const start = performance.now();
    const duration = 4000;
    const startRot = rotation;

    const animate = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - t, 3);
      const current = startRot + targetAngle * ease;

      canvas.style.transform = `rotate(${current}deg)`;

      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setRotation(totalRotation % 360);
        canvas.style.transform = `rotate(${totalRotation}deg)`;
        setSpinning(false);
        setResult(SEGMENTS[winIndex].label);
        fireConfetti();
        playCelebrationSound();
        setShowWinDialog(true);
      }
    };

    animRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(40,85%,52%,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsla(40,85%,52%,0.04),transparent_50%)]" />

      {/* Back button */}
      <div className="absolute top-6 left-6 z-20">
        <Link to="/">
          <Button variant="ghost" className="text-primary-foreground/70 hover:text-accent hover:bg-accent/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-5">
            <Gift className="h-4 w-4 text-accent" />
            <span className="text-accent text-sm font-bold tracking-widest uppercase">Bonus</span>
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-3">
            Roue de la <span className="text-gradient-gold">Fortune</span>
          </h1>
          <p className="text-primary-foreground/50 text-lg max-w-md mx-auto">
            Tentez votre chance et gagnez des récompenses exclusives
          </p>
        </div>

        {/* Wheel */}
        <div className="relative mb-10">
          {/* Pointer */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
            <div
              className="w-0 h-0 border-l-[14px] border-r-[14px] border-t-[28px] border-l-transparent border-r-transparent"
              style={{ borderTopColor: "hsl(40,85%,52%)" }}
            />
          </div>

          {/* Glow ring */}
          <div className="absolute inset-[-16px] rounded-full border-2 border-accent/20 animate-pulse" />
          <div className="absolute inset-[-4px] rounded-full shadow-[0_0_40px_8px_hsla(40,85%,52%,0.15)]" />

          <canvas
            ref={initCanvas}
            width={SIZE}
            height={SIZE}
            className="rounded-full shadow-elevated transition-none"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>

        {/* Spin button */}
        <Button
          onClick={spin}
          disabled={spinning}
          className="bg-gradient-gold text-accent-foreground px-10 py-6 text-lg font-bold rounded-xl shadow-gold hover:opacity-90 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:scale-100 mb-6"
        >
          {spinning ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⭐</span> La roue tourne...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Lancer la roue
            </span>
          )}
        </Button>

        {/* Result */}
        {/* Win Dialog */}
        <Dialog open={showWinDialog} onOpenChange={setShowWinDialog}>
          <DialogContent className="bg-primary border-accent/30 text-primary-foreground sm:rounded-2xl max-w-md">
            <DialogHeader className="items-center text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 border border-accent/30">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <DialogTitle className="text-2xl font-serif text-gradient-gold">
                🎉 Bravo !
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/60 text-base mt-2">
                Vous avez gagné <span className="font-bold text-accent">{result}</span> !
                <br />
                Pour réclamer votre prix, contactez notre expert sur WhatsApp maintenant.
              </DialogDescription>
            </DialogHeader>
            <a
              href={`https://wa.me/243974145850?text=${encodeURIComponent(`Bonjour ! J'ai gagné "${result}" sur la roue de la fortune ImmoBoost AI 🎉`)}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white py-6 text-lg font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
                <MessageCircle className="h-6 w-6 mr-2" />
                Contacter sur WhatsApp
              </Button>
            </a>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Bonus;
