import { Coffee, Sun, Repeat } from 'lucide-react'

const specials = [
  {
    icon: Sun,
    tag: 'Samedi & Dimanche',
    title: 'Brunch du weekend',
    desc: "Un brunch complet : jus de fruits, boisson chaude, pain, croissant, pancakes, confitures, charcuteries et fromages. Version sans gluten disponible sur réservation 48h à l'avance.",
    price: 'dès 31.–',
    priceNote: '36.– à volonté',
    cta: { label: 'Réserver', href: 'mailto:info@labalancel.com?subject=Réservation Brunch' },
    color: 'amber',
  },
  {
    icon: Repeat,
    tag: 'Chaque vendredi soir',
    title: 'Crêpes à gogo',
    desc: "Le vendredi soir, laissez-vous tenter par notre formule crêpes à volonté ! Salées, sucrées — mangez autant que vous le souhaitez dans une ambiance conviviale.",
    price: '24.90 CHF',
    priceNote: 'par personne',
    cta: { label: 'Réserver une table', href: 'tel:0218816468' },
    color: 'sage',
  },
  {
    icon: Coffee,
    tag: 'Tous les jours',
    title: 'Brunch en semaine',
    desc: "Profitez d'un brunch léger en semaine pour commencer la journée du bon pied, dans notre salle lumineuse ou en terrasse selon la saison.",
    price: '9h30 – 11h30',
    priceNote: 'du lundi au vendredi',
    cta: { label: 'Voir les horaires', href: '#horaires' },
    color: 'brown',
  },
]

const colorMap = {
  amber: {
    bg: 'bg-amber',
    tag: 'bg-amber/10 text-amber',
    icon: 'bg-amber/20 text-amber',
    cta: 'bg-amber text-white hover:bg-amber-light',
  },
  sage: {
    bg: 'bg-sage',
    tag: 'bg-sage/10 text-sage',
    icon: 'bg-sage/20 text-sage',
    cta: 'bg-sage text-white hover:bg-sage-light',
  },
  brown: {
    bg: 'bg-brown-mid',
    tag: 'bg-brown-mid/10 text-brown-mid',
    icon: 'bg-brown-mid/10 text-brown-mid',
    cta: 'bg-brown-mid text-white hover:bg-brown-light',
  },
}

export default function Specials() {
  return (
    <section id="offres" className="py-20 md:py-28 px-5 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber text-sm font-medium tracking-widest uppercase mb-4">
            Nos formules
          </p>
          <h2 className="section-title">Ce qui nous rend uniques</h2>
          <div className="divider" />
          <p className="section-subtitle max-w-xl mx-auto mt-4">
            Des moments gourmands pensés pour vous faire plaisir, à partager en famille ou entre amis.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {specials.map((s) => {
            const colors = colorMap[s.color as keyof typeof colorMap]
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="bg-white rounded-2xl overflow-hidden border border-beige shadow-sm
                           hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Top accent bar */}
                <div className={`h-1 ${colors.bg}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Tag + icon */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${colors.tag}`}>
                      {s.tag}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${colors.icon}`}>
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title + desc */}
                  <h3 className="font-serif text-xl text-brown-deep mb-3">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">{s.desc}</p>

                  {/* Price */}
                  <div className="mt-6 mb-5 pt-5 border-t border-beige">
                    <span className="font-serif text-2xl text-brown-deep">{s.price}</span>
                    <span className="text-muted text-sm ml-2">{s.priceNote}</span>
                  </div>

                  {/* CTA */}
                  <a
                    href={s.cta.href}
                    className={`inline-flex items-center justify-center px-5 py-3 rounded-full
                               text-sm font-medium transition-colors duration-200 ${colors.cta}`}
                  >
                    {s.cta.label}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
