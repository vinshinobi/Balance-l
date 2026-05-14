import { MapPin, Phone, Mail, ExternalLink, Facebook } from 'lucide-react'

const infos = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Place des Balances 15A\n1040 Echallens',
    href: 'https://maps.google.com/?q=Place+des+Balances+15A+1040+Echallens',
    linkLabel: 'Ouvrir dans Maps',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '021 881 64 68',
    href: 'tel:0218816468',
    linkLabel: 'Appeler maintenant',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@labalancel.com',
    href: 'mailto:info@labalancel.com',
    linkLabel: 'Envoyer un email',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'La Balance\'l',
    href: 'https://www.facebook.com/LA-BALANCEL-154867397910463/',
    linkLabel: 'Voir la page',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber text-sm font-medium tracking-widest uppercase mb-4">
            Venir nous voir
          </p>
          <h2 className="section-title">Contact & accès</h2>
          <div className="divider" />
          <p className="section-subtitle max-w-md mx-auto mt-4">
            Vous pouvez nous appeler pour réserver une table ou toute demande de traiteur.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {infos.map(({ icon: Icon, label, value, href, linkLabel }) => (
              <div key={label} className="card group">
                <div className="w-9 h-9 bg-amber-pale rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-amber" strokeWidth={1.8} />
                </div>
                <p className="text-xs text-muted uppercase tracking-widest mb-1">{label}</p>
                <p className="font-sans text-sm text-brown-deep font-medium whitespace-pre-line mb-3 leading-relaxed">
                  {value}
                </p>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1.5 text-amber text-xs font-medium
                             hover:underline"
                >
                  {linkLabel}
                  {href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                </a>
              </div>
            ))}

            {/* Reservation CTA */}
            <div className="sm:col-span-2 bg-brown-deep rounded-2xl p-6 text-white">
              <h3 className="font-serif text-xl mb-2">Réserver une table</h3>
              <p className="text-white/60 text-sm mb-5 leading-relaxed">
                Pour les groupes, brunchs sans gluten, soirées crêpes ou événements privatisés,
                appelez-nous ou envoyez-nous un email.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:0218816468" className="btn-primary text-xs py-2.5">
                  Appeler
                </a>
                <a
                  href="mailto:info@labalancel.com?subject=Réservation"
                  className="inline-flex items-center gap-2 border border-white/30 text-white
                             text-xs font-medium px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-beige shadow-sm h-80 lg:h-full min-h-[320px]">
            <iframe
              title="Localisation La Balance'l"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2738.3!2d6.6255!3d46.6266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c3c3b6b6b6b6b%3A0x0!2sPlace+des+Balances+15A%2C+1040+Echallens!5e0!3m2!1sfr!2sch!4v1700000000000!5m2!1sfr!2sch"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
