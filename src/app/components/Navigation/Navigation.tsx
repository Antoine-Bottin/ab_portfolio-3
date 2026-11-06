'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './styles.scss'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="navigation">
      <a className="navigation__skip" href="#about">
        Skip to content
      </a>
      <nav className="navigation__bar" aria-label="Main navigation">
        <a className="navigation__brand" href="#home">
          Antoine Bottin
        </a>

        <button
          type="button"
          className="navigation__toggle"
          aria-expanded={isOpen}
          aria-controls="navigation-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
