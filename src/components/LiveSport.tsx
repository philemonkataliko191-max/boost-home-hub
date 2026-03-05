import { Trophy, Circle, Timer, Star, ExternalLink } from "lucide-react";

const footballMatches = [
  { id: 1, home: "PSG", away: "Real Madrid", scoreHome: 2, scoreAway: 1, minute: "67'", league: "Champions League", live: true },
  { id: 2, home: "Barça", away: "Man City", scoreHome: 1, scoreAway: 1, minute: "45+2'", league: "Champions League", live: true },
  { id: 3, home: "Bayern", away: "Inter", scoreHome: 3, scoreAway: 0, minute: "FT", league: "Champions League", live: false },
];

const nbaGames = [
  { id: 1, home: "Lakers", away: "Celtics", scoreHome: 108, scoreAway: 102, quarter: "Q4 2:30", live: true },
  { id: 2, home: "Warriors", away: "Bucks", scoreHome: 95, scoreAway: 98, quarter: "Q3 8:15", live: true },
  { id: 3, home: "Heat", away: "Nuggets", scoreHome: 112, scoreAway: 109, quarter: "Final", live: false },
];

const bettingApps = [
  { name: "1xBet", color: "from-blue-600 to-blue-800" },
  { name: "Betway", color: "from-emerald-600 to-emerald-800" },
  { name: "Bet365", color: "from-yellow-600 to-yellow-800" },
  { name: "22Bet", color: "from-red-600 to-red-800" },
];

const LiveBadge = () => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-destructive/20 text-destructive text-[11px] font-bold uppercase tracking-wider animate-pulse">
    <Circle className="h-2 w-2 fill-current" />
    Live
  </span>
);

const LiveSport = () => {
  return (
    <section id="live-sport" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsla(40,85%,52%,0.05),transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-5">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">Live Sport</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Scores <span className="text-gradient-gold">en Direct</span>
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto text-lg">
            Suivez les résultats en temps réel du Football et de la NBA
          </p>
        </div>

        {/* Scores Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Football */}
          <div className="bg-card/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">⚽</span>
              <h3 className="font-serif text-xl font-bold text-primary-foreground">Football</h3>
            </div>
            <div className="space-y-3">
              {footballMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center justify-between bg-primary-foreground/5 hover:bg-primary-foreground/8 rounded-xl px-4 py-3 transition-colors duration-300 border border-primary-foreground/5"
                >
                  <div className="flex-1 text-right">
                    <span className="text-sm font-semibold text-primary-foreground">{match.home}</span>
                  </div>
                  <div className="flex items-center gap-3 mx-4">
                    <span className="text-xl font-bold text-accent tabular-nums">{match.scoreHome}</span>
                    <span className="text-primary-foreground/30 text-xs">-</span>
                    <span className="text-xl font-bold text-accent tabular-nums">{match.scoreAway}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-primary-foreground">{match.away}</span>
                  </div>
                  <div className="ml-3 min-w-[52px] text-right">
                    {match.live ? <LiveBadge /> : (
                      <span className="text-xs text-primary-foreground/40 font-medium">{match.minute}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NBA */}
          <div className="bg-card/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🏀</span>
              <h3 className="font-serif text-xl font-bold text-primary-foreground">NBA</h3>
            </div>
            <div className="space-y-3">
              {nbaGames.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center justify-between bg-primary-foreground/5 hover:bg-primary-foreground/8 rounded-xl px-4 py-3 transition-colors duration-300 border border-primary-foreground/5"
                >
                  <div className="flex-1 text-right">
                    <span className="text-sm font-semibold text-primary-foreground">{game.home}</span>
                  </div>
                  <div className="flex items-center gap-3 mx-4">
                    <span className="text-xl font-bold text-accent tabular-nums">{game.scoreHome}</span>
                    <span className="text-primary-foreground/30 text-xs">-</span>
                    <span className="text-xl font-bold text-accent tabular-nums">{game.scoreAway}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-primary-foreground">{game.away}</span>
                  </div>
                  <div className="ml-3 min-w-[52px] text-right">
                    {game.live ? <LiveBadge /> : (
                      <span className="text-xs text-primary-foreground/40 font-medium">{game.quarter}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Betting Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-accent/20">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10" />
          <div className="relative p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground">
                Pronostics & <span className="text-gradient-gold">Paris</span>
              </h3>
              <Star className="h-5 w-5 text-accent fill-accent" />
            </div>
            <p className="text-primary-foreground/60 mb-8 max-w-md mx-auto">
              Accédez aux meilleures plateformes de paris sportifs
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {bettingApps.map((app) => (
                <button
                  key={app.name}
                  className="group flex items-center gap-2 bg-gradient-gold text-accent-foreground px-6 py-3 rounded-xl font-bold text-sm shadow-gold hover:opacity-90 hover:scale-105 transition-all duration-300"
                >
                  {app.name}
                  <ExternalLink className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            <p className="text-primary-foreground/30 text-xs tracking-wide">
              🔞 18+ Jouez avec modération — Les jeux d'argent comportent des risques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveSport;
