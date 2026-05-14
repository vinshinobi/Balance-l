'use client'

import { useState } from 'react'

type MenuItem = { name: string; desc?: string; price?: string }
type Category = { id: string; label: string; emoji: string; items: MenuItem[] }

const categories: Category[] = [
  {
    id: 'salees',
    label: 'Crêpes salées',
    emoji: '🧀',
    items: [
      { name: 'Jambon-fromage', desc: 'Jambon cuit, emmental fondu', price: 'selon carte' },
      { name: 'Complète', desc: 'Œuf, jambon, emmental', price: 'selon carte' },
      { name: 'Chèvre & miel', desc: 'Fromage de chèvre, miel, noix', price: 'selon carte' },
      { name: 'Saumon', desc: 'Saumon fumé, crème fraîche, aneth', price: 'selon carte' },
      { name: 'Végétarienne', desc: 'Légumes de saison, fromage frais', price: 'selon carte' },
      { name: 'Du moment', desc: 'Garniture selon l\'inspiration du chef', price: 'selon carte' },
    ],
  },
  {
    id: 'sucrees',
    label: 'Crêpes sucrées',
    emoji: '🍓',
    items: [
      { name: 'Beurre & sucre', desc: 'La classique, simple et gourmande', price: 'selon carte' },
      { name: 'Citron & sucre', desc: 'Citron frais, sucre glace', price: 'selon carte' },
      { name: 'Nutella', desc: 'Pâte à tartiner fondante', price: 'selon carte' },
      { name: 'Banane chocolat', desc: 'Banane fraîche, sauce chocolat', price: 'selon carte' },
      { name: 'Pomme & cannelle', desc: 'Compotée de pommes, cannelle', price: 'selon carte' },
      { name: 'Fruits rouges', desc: 'Fraises, framboises, chantilly', price: 'selon carte' },
    ],
  },
  {
    id: 'brunch',
    label: 'Brunchs',
    emoji: '🥞',
    items: [
      {
        name: 'Brunch complet',
        desc: 'Jus de fruits, boisson chaude, pain & croissant, pancakes, confitures, charcuteries, fromages',
        price: '31.–',
      },
      {
        name: 'Brunch à volonté',
        desc: 'Tout inclus, en illimité — profitez sans compter !',
        price: '36.–',
      },
      {
        name: 'Formule sans gluten',
        desc: 'Disponible sur réservation 48h à l\'avance',
        price: 'sur demande',
      },
    ],
  },
  {
    id: 'salades',
    label: 'Salades & plats',
    emoji: '🥗',
    items: [
      { name: 'Plat du jour', desc: 'Préparation maison qui change chaque jour', price: 'selon ardoise' },
      { name: 'Salade chèvre chaud', desc: 'Mesclun, tomates, croûtons, fromage de chèvre grillé', price: 'selon carte' },
      { name: 'Salade du chef', desc: 'Composition du jour aux produits frais', price: 'selon carte' },
      { name: 'Panini du jour', desc: 'Garniture fraîche, pain grillé', price: 'selon carte' },
    ],
  },
  {
    id: 'douceurs',
    label: 'Douceurs',
    emoji: '🍰',
    items: [
      { name: 'Cupcakes maison', desc: 'Préparés quotidiennement', price: 'selon carte' },
      { name: 'Gâteau au chocolat', desc: 'Moelleux, fait maison', price: 'selon carte' },
      { name: 'Glaces & sorbets', desc: 'Sélection de parfums', price: 'selon carte' },
      { name: 'Bircher muesli', desc: 'Flocons d\'avoine, fruits frais, yaourt', price: 'selon carte' },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    emoji: '☕',
    items: [
      { name: 'Café & espresso', desc: 'Simple, double, allongé, noisette', price: 'selon carte' },
      { name: 'Chocolat chaud', desc: 'Préparation maison oncteuse', price: 'selon carte' },
      { name: 'Thés & infusions', desc: 'Large sélection de thés', price: 'selon carte' },
      { name: 'Jus frais', desc: 'Orange, pomme, multivitamines', price: 'selon carte' },
      { name: 'Eaux & sodas', desc: 'Minérale, gazeuse, limonades', price: 'selon carte' },
    ],
  },
]

export default function Menu() {
  const [active, setActive] = useState('salees')
  const current = categories.find((c) => c.id === active)!

  return (
    <section id="carte" className="py-20 md:py-28 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-amber text-sm font-medium tracking-widest uppercase mb-4">
            Notre carte
          </p>
          <h2 className="section-title">À table !</h2>
          <div className="divider" />
          <p className="section-subtitle max-w-xl mx-auto mt-4">
            Cuisine maison avec des produits frais. Les prix exacts sont disponibles sur notre
            carte en salle ou en nous appelant.
          </p>
        </div>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-1 -mx-5 px-5 md:mx-0 md:px-0 mb-10">
          <div className="flex gap-2 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                            border transition-all duration-200 whitespace-nowrap
                            ${
                              active === cat.id
                                ? 'bg-amber text-white border-amber shadow-sm'
                                : 'bg-white text-brown-light border-beige hover:border-amber hover:text-amber'
                            }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {current.items.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-beige rounded-xl p-5 flex justify-between
                         items-start gap-4 hover:border-amber/40 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex-1">
                <h4 className="font-serif text-base text-brown-deep mb-1">{item.name}</h4>
                {item.desc && (
                  <p className="text-muted text-xs leading-relaxed">{item.desc}</p>
                )}
              </div>
              {item.price && (
                <span className="text-amber font-medium text-sm whitespace-nowrap shrink-0">
                  {item.price}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted text-sm mt-8">
          Carte complète avec tarifs disponible en salle · Spécialités hors carte sur demande ·{' '}
          <a href="tel:0218816468" className="text-amber hover:underline">
            021 881 64 68
          </a>
        </p>
      </div>
    </section>
  )
}
