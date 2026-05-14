'use client'

import { Clock, AlertCircle } from 'lucide-react'

const schedule = [
  { day: 'Lundi', hours: '9h00 – 17h00', open: true, dayIndex: 1 },
  { day: 'Mardi', hours: 'Fermé', open: false, dayIndex: 2 },
  { day: 'Mercredi', hours: '9h00 – 18h00', open: true, dayIndex: 3 },
  { day: 'Jeudi', hours: '9h00 – 18h00', open: true, dayIndex: 4 },
  { day: 'Vendredi', hours: '9h00 – 23h00', open: true, dayIndex: 5, highlight: '🎉 Crêpes à gogo le soir' },
  { day: 'Samedi', hours: '9h00 – 17h00', open: true, dayIndex: 6, highlight: '🥞 Brunch 9h30–14h30' },
  { day: 'Dimanche', hours: '9h00 – 17h00', open: true, dayIndex: 0, highlight: '🥞 Brunch 9h30–14h30' },
]

function getTodayIndex() {
  if (typeof window === 'undefined') return -1
  return new Date().getDay()
}

export default function Hours() {
  const todayIndex = getTodayIndex()

  return (
    <section id="horaires" className="py-20 md:py-28 px-5 bg-cream-dark">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-amber text-sm font-medium tracking-widest uppercase mb-4">
            Quand nous rendre visite
          </p>
          <h2 className="section-title">Nos horaires</h2>
          <div className="divider" />
        </div>

        {/* Schedule table */}
        <div className="bg-white rounded-2xl border border-beige shadow-sm overflow-hidden">
          {schedule.map((row, i) => {
            const isToday = row.dayIndex === todayIndex
            return (
              <div
                key={row.day}
                className={`flex items-center justify-between px-6 py-4 gap-4
                  ${i < schedule.length - 1 ? 'border-b border-beige' : ''}
                  ${isToday ? 'bg-amber-pale' : ''}
                  ${!row.open ? 'opacity-60' : ''}`}
              >
                <div className="flex items-center gap-3 min-w-[110px]">
                  {isToday && (
                    <span className="w-2 h-2 rounded-full bg-amber shrink-0" />
                  )}
                  <span
                    className={`font-sans text-sm font-medium ${
                      isToday ? 'text-amber' : 'text-brown-deep'
                    }`}
                  >
                    {row.day}
                    {isToday && <span className="ml-1.5 text-xs text-amber/80">(aujourd&apos;hui)</span>}
                  </span>
                </div>

                <div className="flex-1 flex flex-wrap items-center gap-x-4 gap-y-1 justify-end text-right">
                  {row.highlight && (
                    <span className="text-xs text-muted hidden sm:inline">{row.highlight}</span>
                  )}
                  <span
                    className={`font-sans text-sm font-medium tabular-nums ${
                      row.open ? 'text-brown-mid' : 'text-muted'
                    }`}
                  >
                    {row.hours}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Notes */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="flex gap-3 p-4 rounded-xl bg-amber-pale border border-amber/20">
            <Clock className="w-4 h-4 text-amber mt-0.5 shrink-0" />
            <p className="text-brown-mid text-sm leading-relaxed">
              <strong>Brunch :</strong> semaine 9h30–11h30 · weekend 9h30–14h30
            </p>
          </div>
          <div className="flex gap-3 p-4 rounded-xl bg-sage/10 border border-sage/20">
            <AlertCircle className="w-4 h-4 text-sage mt-0.5 shrink-0" />
            <p className="text-brown-mid text-sm leading-relaxed">
              Samedi soir disponible <strong>pour groupes sur réservation</strong>. Jours fériés : 9h–17h.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
