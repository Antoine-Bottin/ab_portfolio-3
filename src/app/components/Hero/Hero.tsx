'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Github, Linkedin, RotateCcw } from 'lucide-react'
import './styles.scss'

const profilePictures = ['/assets/pictures/photo_cv.jpg', '/assets/pictures/photo_cv2.jpg']

const Hero = () => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(false)

  const switchPicture = () => {
    setIsRotating(true)
    setTimeout(() => {
      setCurrentPictureIndex((prev) => (prev + 1) % profilePictures.length)
      setIsRotating(false)
    }, 150)
  }

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__picture">
          <div className={`hero__frame${isRotating ? ' hero__frame--rotating' : ''}`}>
            <Image
              src={profilePictures[currentPictureIndex]}
              alt="Antoine Bottin"
              width={200}
              height={200}
              className="hero__image"
              priority
            />
          </div>
          <button
            type="button"
            className="hero__switch"
            onClick={switchPicture}
            aria-label="Changer de photo"
            title="Changer de photo"
          >
            <RotateCcw size={20} aria-hidden="true" />
          </button>
        </div>

        <h1 id="hero-title" className="hero__title">
          Antoine Bottin
        </h1>
        <p className="hero__role">Product Builder No-code & Développeur React / Next.js</p>
        <p className="hero__tagline">
          5 ans de développement en production. Je conçois des produits de bout en bout, du recueil du
          besoin au prototype : cadrage, modélisation des données, automatisations et agents IA.
        </p>

        <ul className="hero__badges">
          <li>
            <p className="hero__badge hero__badge--product">
              <span className="hero__badge-flag">Profil</span>
              Product Builder No-code
            </p>
          </li>
          <li>
            <p className="hero__badge hero__badge--dev">
              <span className="hero__badge-flag">Profil</span>
              Développeur React / Next.js
            </p>
          </li>
        </ul>

        <ul className="hero__socials">
          <li>
            <a
              className="hero__social"
              href="https://github.com/Antoine-Bottin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (s'ouvre dans un nouvel onglet)"
            >
              <Github size={24} aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              className="hero__social"
              href="https://www.linkedin.com/in/antoine-bottin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (s'ouvre dans un nouvel onglet)"
            >
              <Linkedin size={24} aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div className="hero__actions">
          <a className="hero__cta hero__cta--primary" href="#contact">
            Me contacter
          </a>
          <a className="hero__cta hero__cta--secondary" href="#projects">
            Voir mes projets
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Aller à la section Profil">
        <ChevronDown size={32} aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
