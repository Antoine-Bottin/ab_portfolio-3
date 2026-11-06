import SectionHeading from '../SectionHeading/SectionHeading'
import { TagColor } from '../Tag/Tag'
import './styles.scss'

const stats: { value: string; label: string; color: TagColor }[] = [
  { value: '5 ans', label: 'de développement React / Next.js en production', color: 'cyan' },
  { value: '6 devs', label: "dans l'équipe Frontend de MWM, pendant 4 ans", color: 'pink' },
  { value: '10 ans', label: 'de management en restauration', color: 'green' },
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

        <ul className="about__stats">
          {stats.map((stat) => (
            <li key={stat.value} className="about__stat">
              <span className={`about__stat-value about__stat-value--${stat.color}`}>{stat.value}</span>
              <p>{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default About
