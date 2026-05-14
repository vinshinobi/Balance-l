import { UtensilsCrossed, Facebook, MapPin, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Nos formules', href: '#offres' },
  { label: 'La carte', href: '#carte' },
  { label: 'Horaires', href: '#horaires' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-brown-deep text-white/70">
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-amber rounded-full flex items-center justify-center shrink-0">
                <UtensilsCrossed className="w-4 h-4 text-white" strokeWidth={1.8} />
              </div>
              <span className="font-serif text-xl text-white">La Balance&apos;l</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Café · Crêperie · Brunch · Tea Room<br />
              Cuisine maison au cœur d&apos;Echallens.
            </p>
            <a
              href="https://www.facebook.com/LA-BALANCEL-154867397910463/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-amber transition-colors text-sm"
            >
              <Facebook className="w-4 h-4" />
              Suivez-nous sur Facebook
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm hover:text-amber transition-colors duration-150"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-5">
              Nous trouver
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                <span className="text-sm leading-snug">
                  Place des Balances 15A<br />1040 Echallens, Suisse
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-amber shrink-0" />
                <a href="tel:0218816468" className="text-sm hover:text-amber transition-colors">
                  021 881 64 68
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-amber shrink-0" />
                <a href="mailto:info@labalancel.com" className="text-sm hover:text-amber transition-colors break-all">
                  info@labalancel.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-center
                        justify-between gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} La Balance&apos;l · Tous droits réservés</span>
          <span>Echallens, Vaud · Suisse</span>
        </div>
      </div>
    </footer>
  )
}
