import { Leaf, Baby, Utensils, Heart } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Fait maison',
    desc: 'Tous nos plats sont préparés sur place avec des ingrédients frais soigneusement sélectionnés.',
  },
  {
    icon: Baby,
    title: 'Coin enfants',
    desc: "Un espace de jeux à l'étage permet aux enfants de s'amuser pendant que les parents savourent.",
  },
  {
    icon: Utensils,
    title: 'Traiteur & événements',
    desc: 'Nous proposons des prestations traiteur pour vos fêtes, célébrations et anniversaires.',
  },
  {
    icon: Heart,
    title: 'Spécialités orientales',
    desc: 'Couscous tunisien, marocain, algérien, mezze et entrées traditionnelles sur commande.',
  },
]

export default function About() {
  return (
    <section id="apropos" className="py-20 md:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div>
            <p className="text-amber text-sm font-medium tracking-widest uppercase mb-4">
              Notre histoire
            </p>
            <h2 className="section-title mb-6">
              Un lieu de vie<br />au cœur d&apos;Echallens
            </h2>
            <div className="divider mx-0 mb-6" />
            <div className="space-y-4 text-brown-light leading-relaxed text-[15px] md:text-base">
              <p>
                Niché au cœur d&apos;Echallens, La Balance&apos;l vous accueille dans un cadre
                chaleureux aux pierres et poutres apparentes. Ici, le temps ralentit — on vient
                pour un café, pour bruncher en famille, pour déjeuner entre amis.
              </p>
              <p>
                Notre cuisine privilégie la qualité et les produits frais du marché. Chaque plat
                est préparé avec soin, des crêpes généreuses aux salades colorées, en passant par
                les plats du jour et les spécialités maison.
              </p>
              <p>
                Ouvert du lundi au dimanche (fermé le mardi), nous accueillons petits et grands
                dans une atmosphère détendue et familiale.
              </p>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="card hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-amber-pale rounded-xl flex items-center justify-center mb-4
                                group-hover:bg-amber group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5 text-amber group-hover:text-white transition-colors duration-200" strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-lg text-brown-deep mb-2">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
