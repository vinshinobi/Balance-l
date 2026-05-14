import { MapPin, Clock, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-grain"
    >
      {/* Image background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/src/crepe.webp)' }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(26,10,2,0.80) 0%, rgba(61,34,20,0.70) 40%, rgba(107,66,38,0.55) 75%, rgba(194,122,56,0.45) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                        text-amber-light text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <MapPin className="w-3 h-3" />
          Echallens, Vaud · Suisse
        </div>

        {/* Main heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
          La Balance&apos;l
        </h1>

        {/* Tagline */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          {['Café', 'Crêperie', 'Brunch', 'Tea Room'].map((tag, i) => (
            <span key={tag} className="flex items-center gap-2 sm:gap-3">
              <span className="text-amber-light font-sans text-base sm:text-lg font-light tracking-wide">
                {tag}
              </span>
              {i < 3 && <span className="text-white/30 text-sm">·</span>}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-white/70 font-sans text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Cuisine maison aux ingrédients frais, dans un cadre chaleureux aux pierres et poutres
          apparentes, au cœur d&apos;Echallens.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#carte" className="btn-primary text-sm px-8 py-4 w-full sm:w-auto justify-center">
            Voir la carte
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 text-white
                       font-sans font-medium px-8 py-4 rounded-full hover:bg-white/10
                       transition-colors duration-200 text-sm tracking-wide w-full sm:w-auto"
          >
            Nous contacter
          </a>
        </div>

        {/* Hours pill */}
        <div className="mt-10 inline-flex items-center gap-2 text-white/50 text-xs font-sans">
          <Clock className="w-3.5 h-3.5" />
          <span>Lun–Dim · Fermé le mardi · Vendredi jusqu&apos;à 23h</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#apropos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40
                   hover:text-amber-light transition-colors duration-200 animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6" />
      </a>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #FAF7F0)' }}
      />
    </section>
  )
}
