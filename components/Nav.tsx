'use client'

import { useState, useEffect } from 'react'
import { Menu, X, UtensilsCrossed } from 'lucide-react'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Offres', href: '#offres' },
  { label: 'Carte', href: '#carte' },
  { label: 'Horaires', href: '#horaires' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-beige'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-amber rounded-full flex items-center justify-center shrink-0">
              <UtensilsCrossed className="w-4 h-4 text-white" strokeWidth={1.8} />
            </div>
            <span className="font-serif text-xl text-white leading-none">
              La Balance&apos;l
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-white hover:text-amber px-3 py-2 rounded-lg
                           hover:bg-amber-pale transition-colors duration-150 whitespace-nowrap"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0218816468"
              className="ml-3 btn-primary text-xs py-2.5 px-5 whitespace-nowrap"
            >
              021 881 64 68
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
                       hover:bg-amber-pale transition-colors text-brown-deep"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brown-deep/40"
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-[72px] left-0 right-0 bg-cream border-b border-beige shadow-xl
                      transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-4'}`}
        >
          <nav className="flex flex-col p-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-brown-deep hover:text-amber px-4 py-3
                           rounded-xl hover:bg-amber-pale transition-colors duration-150"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-beige flex flex-col gap-2">
              <a href="tel:0218816468" className="btn-primary justify-center">
                021 881 64 68
              </a>
              <a href="mailto:info@labalancel.com" className="btn-outline justify-center">
                info@labalancel.com
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
