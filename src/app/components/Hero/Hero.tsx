'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Github, Linkedin, RotateCcw } from 'lucide-react'
import './styles.scss'

const profilePictures = ['/assets/pictures/photo_cv.jpg', '/assets/pictures/photo_cv2.jpg']

type Brick = { color: string; cells: [number, number][] }

// Pile de tétrominos qui se construit au fond du hero. Cellules en [colonne, rangée], rangée 0 = bas.
// Ordre du tableau = ordre de chute (du bas vers le haut).
const bricks: Brick[] = [
  { color: 'pink', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] },
  { color: 'yellow', cells: [[4, 0], [5, 0], [4, 1], [5, 1]] },
  { color: 'cyan', cells: [[6, 0], [7, 0], [8, 0], [8, 1]] },
  { color: 'green', cells: [[9, 0], [10, 0], [11, 0], [9, 1]] },
  { color: 'orange', cells: [[12, 0], [13, 0], [12, 1], [13, 1]] },
  { color: 'green', cells: [[0, 1], [1, 1], [2, 1], [2, 2]] },
  { color: 'orange', cells: [[3, 1], [3, 2], [4, 2], [5, 2]] },
  { color: 'pink', cells: [[6, 1], [7, 1], [7, 2], [8, 2]] },
  { color: 'yellow', cells: [[10, 1], [11, 1], [11, 2], [12, 2]] },
]

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
      <div className="hero__bricks" aria-hidden="true">
        {bricks.map((brick, index) => (
          <div
            key={index}
            className={`hero__piece hero__piece--${brick.color}`}
            style={{ '--i': index } as React.CSSProperties}
          >
            {brick.cells.map(([x, y]) => (
              <span
                key={`${x}-${y}`}
                className="hero__cell"
                style={{ '--x': x, '--y': y } as React.CSSProperties}
              />
            ))}
          </div>
        ))}
      </div>

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
        <p className="hero__hook">
          Vous avez l&apos;idée ? <span className="hero__hook-accent">Voyons comment la réaliser.</span>
        </p>

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
