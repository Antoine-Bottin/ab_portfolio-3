'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './styles.scss'

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'Profil', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navigation">
      <a className="navigation__skip" href="#about">
        Aller au contenu
      </a>
      <nav className="navigation__bar" aria-label="Navigation principale">
        <a className="navigation__brand" href="#home">
          Antoine Bottin
        </a>

        <button
          type="button"
          className="navigation__toggle"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <ul
          id="navigation-menu"
          className={`navigation__list${isOpen ? ' navigation__list--open' : ''}`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <a className="navigation__link" href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
