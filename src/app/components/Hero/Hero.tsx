'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronDown, Github, Linkedin, RotateCcw } from 'lucide-react'
import useExperienceCounter from '../../hooks/useDeveloperPeriod'
import './styles.scss'

const profilePictures = ['/assets/pictures/photo_cv.jpg', '/assets/pictures/photo_cv2.jpg']

const Hero = () => {
  const timeElapsed = useExperienceCounter()
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
            aria-label="Don't like this picture? Switch it"
            title="Don't like this picture? Switch it!"
          >
            <RotateCcw size={20} aria-hidden="true" />
          </button>
        </div>

        <h1 id="hero-title" className="hero__title">
          Antoine Bottin
        </h1>
        <p className="hero__role">
          Frontend Developer <strong>first</strong> & Fullstack Developer Enthusiast
        </p>
        <p className="hero__tagline">
          I craft functional digital experiences that solve real problems and delight users.
        </p>

        <div className="hero__counter">
          <p className="hero__counter-label">Developer for</p>
          <p className="hero__counter-value">{timeElapsed || 'Calculating experience...'}</p>
        </div>

        <ul className="hero__badges">
          <li>
            <a
              className="hero__badge hero__badge--new"
              href="https://xperience.abottin.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hero__badge-flag">New</span>
              AI Resume Assistant
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <p className="hero__badge hero__badge--soon">
              <span className="hero__badge-flag">Soon</span>
              React Native Mobile App
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
              aria-label="GitHub (opens in a new tab)"
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
              aria-label="LinkedIn (opens in a new tab)"
            >
              <Linkedin size={24} aria-hidden="true" />
            </a>
          </li>
        </ul>

        <div className="hero__actions">
          <a className="hero__cta hero__cta--primary" href="#contact">
            Get in touch
          </a>
          <a className="hero__cta hero__cta--secondary" href="#projects">
            View my work
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to About section">
        <ChevronDown size={32} aria-hidden="true" />
      </a>
    </section>
  )
}

export default Hero
