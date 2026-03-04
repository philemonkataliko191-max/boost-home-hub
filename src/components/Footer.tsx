import { Sparkles } from "lucide-react";

const SocialIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 text-primary-foreground hover:text-accent-foreground"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-luxury pt-20 pb-8 relative">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold text-primary-foreground font-sans tracking-tight">
                Immo<span className="text-accent">Boost</span> AI
              </span>
            </div>
            <p className="text-primary-foreground/50 text-sm leading-relaxed">
              La plateforme d'estimation immobilière propulsée par l'intelligence artificielle.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-5 font-sans tracking-wide uppercase">Navigation</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Accueil</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Estimation IA</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Nos biens</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-5 font-sans tracking-wide uppercase">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/50">
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Estimation gratuite</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Analyse de marché</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Conseil immobilier</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 hover:pl-1">Gestion locative</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm mb-5 font-sans tracking-wide uppercase">Suivez-nous</h4>
            <div className="flex flex-wrap gap-3">
              <SocialIcon href="https://facebook.com" label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 7.796 7.796 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 1.757-.531 1.91h-3.002v7.98H9.101z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://youtube.com" label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://t.me" label="Telegram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/212600000000" label="WhatsApp">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com" label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://vidmate.com" label="VidMate">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l7 4.5-7 4.5z"/></svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/30 text-sm tracking-wide">
            © 2026 ImmoBoost AI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
