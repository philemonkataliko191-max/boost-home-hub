import { useState, useRef } from "react";
import { Play, Pause, Heart, MessageCircle, Share2, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Villa Océan Infinity — Visite Exclusive",
    location: "Casablanca, Corniche",
    price: "12.5M MAD",
    likes: "24.5K",
    comments: "1.2K",
    // Placeholder gradient backgrounds since we can't embed real videos
    gradient: "from-accent/20 via-background to-accent/10",
  },
  {
    id: 2,
    title: "Penthouse Sky Lounge — Tour Privé",
    location: "Rabat, Hay Riad",
    price: "8.9M MAD",
    likes: "18.3K",
    comments: "890",
    gradient: "from-accent/10 via-background to-accent/20",
  },
  {
    id: 3,
    title: "Mega Villa Futuriste — Découverte",
    location: "Marrakech, Palmeraie",
    price: "18M MAD",
    likes: "42.1K",
    comments: "2.8K",
    gradient: "from-accent/15 via-background to-accent/5",
  },
];

const TikTokVideos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [liked, setLiked] = useState<number[]>([]);

  const activeVideo = videos[activeIndex];

  const goNext = () => setActiveIndex((i) => Math.min(i + 1, videos.length - 1));
  const goPrev = () => setActiveIndex((i) => Math.max(i - 1, 0));
  const toggleLike = (id: number) =>
    setLiked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsla(40,85%,52%,0.03),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <Play className="h-4 w-4 text-accent fill-accent" />
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Visites Vidéo</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Explorez en <span className="text-gradient-gold">Mode TikTok</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Swipez à travers nos visites immersives de propriétés d'exception
          </p>
        </div>

        {/* TikTok Player */}
        <div className="flex items-center justify-center gap-4">
          {/* Prev Button */}
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Phone Frame */}
          <div className="relative w-[320px] sm:w-[360px] h-[640px] sm:h-[700px] rounded-[2.5rem] border-[3px] border-accent/30 bg-card overflow-hidden shadow-elevated">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-2xl z-30" />

            {/* Video Content Area */}
            <div className={`absolute inset-0 bg-gradient-to-b ${activeVideo.gradient} flex items-center justify-center`}>
              {/* Simulated video content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full border-2 border-accent/40 flex items-center justify-center mb-6 animate-glow-pulse">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center hover:bg-accent/30 transition-colors duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-accent" />
                    ) : (
                      <Play className="h-8 w-8 text-accent fill-accent ml-1" />
                    )}
                  </button>
                </div>
                <p className="text-muted-foreground text-sm text-center">Appuyez pour lancer la visite</p>
              </div>

              {/* Right side actions */}
              <div className="absolute right-3 bottom-32 flex flex-col items-center gap-6 z-20">
                <button
                  onClick={() => toggleLike(activeVideo.id)}
                  className="flex flex-col items-center gap-1 group"
                >
                  <div className="w-11 h-11 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Heart
                      className={`h-6 w-6 transition-colors duration-300 ${
                        liked.includes(activeVideo.id) ? "text-destructive fill-destructive" : "text-foreground"
                      }`}
                    />
                  </div>
                  <span className="text-xs text-foreground font-semibold">{activeVideo.likes}</span>
                </button>

                <button className="flex flex-col items-center gap-1 group">
                  <div className="w-11 h-11 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <MessageCircle className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="text-xs text-foreground font-semibold">{activeVideo.comments}</span>
                </button>

                <button className="flex flex-col items-center gap-1 group">
                  <div className="w-11 h-11 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Share2 className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="text-xs text-foreground font-semibold">Share</span>
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-11 h-11 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center hover:bg-accent/20 transition-colors duration-300"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5 text-foreground" />
                  ) : (
                    <Volume2 className="h-5 w-5 text-foreground" />
                  )}
                </button>
              </div>

              {/* Bottom info overlay */}
              <div className="absolute bottom-6 left-4 right-16 z-20">
                <span className="inline-block bg-accent/20 backdrop-blur-sm text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {activeVideo.price}
                </span>
                <h3 className="font-serif text-lg font-bold text-foreground mb-1 drop-shadow-lg">
                  {activeVideo.title}
                </h3>
                <p className="text-sm text-foreground/70">{activeVideo.location}</p>
              </div>

              {/* Progress dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={goNext}
            disabled={activeIndex === videos.length - 1}
            className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile swipe hint */}
        <div className="flex md:hidden justify-center gap-3 mt-6">
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="w-10 h-10 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-accent transition-all disabled:opacity-20"
          >
            <ChevronLeft className="h-4 w-4 mx-auto" />
          </button>
          <button
            onClick={goNext}
            disabled={activeIndex === videos.length - 1}
            className="w-10 h-10 rounded-full border border-border bg-card/50 text-muted-foreground hover:text-accent transition-all disabled:opacity-20"
          >
            <ChevronRight className="h-4 w-4 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TikTokVideos;
