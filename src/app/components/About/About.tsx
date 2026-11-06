import { Utensils, Wrench, MessagesSquare } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'
import { TagColor } from '../Tag/Tag'
import './styles.scss'

const highlights: { icon: React.ReactNode; title: string; description: string; color: TagColor }[] = [
  {
    icon: <Utensils size={32} aria-hidden="true" />,
    title: 'Le besoin avant la solution',
    description:
      "Dix ans de management en restauration m'ont appris à comprendre le client, et donc le besoin, avant de concevoir.",
    color: 'green',
  },
  {
    icon: <Wrench size={32} aria-hidden="true" />,
    title: 'Savoir quand le no-code ne suffit plus',
    description:
      "Notion, Airtable, Make, n8n pour aller vite ; du code React / Next.js quand le produit l'exige.",
    color: 'cyan',
  },
  {
    icon: <MessagesSquare size={32} aria-hidden="true" />,
    title: 'Le même langage que les équipes tech',
    description:
      "4 ans dans une équipe frontend de 6 développeurs chez MWM : j'écris les specs comme je les aurais voulu les lire.",
    color: 'pink',
  },
]

const About = () => (
  <section id="about" className="about" aria-labelledby="about-title">
    <div className="about__inner">
      <SectionHeading id="about-title" title="Profil" />

      <div className="about__grid">
        <div className="about__text">
          <p>
            Product Builder, entre chef de projet digital et développeur no-code, avec 5 ans de
            développement React/Next.js en production. Je conçois des produits de bout en bout, du
            recueil du besoin au prototype : cadrage fonctionnel, modélisation des données,
            automatisations et agents IA. Mon atout : savoir quand le no-code ne suffit plus, et parler
            le même langage que les équipes tech.
          </p>
          <p>
            Dix ans de management en restauration m&apos;ont appris à comprendre le client et donc le
            besoin avant de concevoir.
          </p>
        </div>

        <ul className="about__highlights">
          {highlights.map((highlight) => (
            <li key={highlight.title} className="about__highlight">
              <span className={`about__icon about__icon--${highlight.color}`}>{highlight.icon}</span>
              <div>
                <h3 className="about__highlight-title">{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default About
