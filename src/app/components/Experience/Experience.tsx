import SectionHeading from '../SectionHeading/SectionHeading'
import Tag, { TagColor } from '../Tag/Tag'
import './styles.scss'

type Entry = {
  title: string
  meta: string
  description?: string
  tags?: string[]
  color: TagColor
}

const experiences: Entry[] = [
  {
    title: 'Frontend Engineer, MWM',
    meta: 'Juin 2021 – juin 2025 · Équipe Frontend de 6 développeurs',
    description:
      "Conception des outils internes et des sites web des applications mobiles du groupe (Edjing, Colorpop.ai…), à partir des spécifications et des maquettes. Tableaux de données (Highcharts, AG-Grid), tests (Jest), composants documentés (Storybook).",
    tags: ['Next.js', 'TypeScript', 'React', 'Figma'],
    color: 'pink',
  },
  {
    title: 'Développeur freelance, LeatherSpa',
    meta: '2021 – 2024 · New York, full remote',
    description:
      "Maintenance et évolutions du site (React, Ruby on Rails) et participation à la refonte de l'application de caisse iOS. Preuve de concept (POC) d'un chatbot basé sur le fine-tuning.",
    tags: ['React', 'TypeScript'],
    color: 'yellow',
  },
]

const formations: Entry[] = [
  {
    title: 'Product Builder No-code, École Cube',
    meta: 'Titre RNCP 39108 · Niveau 6 (Bac+3/4) · Juin – déc. 2026',
    color: 'yellow',
  },
  {
    title: 'Développeur web et web mobile, La Capsule',
    meta: '2020 · Titre de niveau 5 (Bac+2)',
    color: 'cyan',
  },
]

const Timeline = ({ entries, label }: { entries: Entry[]; label: string }) => (
  <ul className="experience__timeline" aria-label={label}>
    {entries.map((entry) => (
      <li key={entry.title} className={`experience__entry experience__entry--${entry.color}`}>
        <h4 className="experience__entry-title">{entry.title}</h4>
        <p className="experience__meta">{entry.meta}</p>
        {entry.description && <p>{entry.description}</p>}
        {entry.tags && (
          <ul className="experience__tags" aria-label="Technologies">
            {entry.tags.map((tag) => (
              <li key={tag}>
                <Tag color={entry.color}>{tag}</Tag>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)

const Experience = () => (
  <section id="experience" className="experience" aria-labelledby="experience-title">
    <div className="experience__inner">
      <SectionHeading id="experience-title" title="Expérience" />
      <Timeline entries={experiences} label="Expérience professionnelle" />

      <h3 className="experience__subtitle">Formation</h3>
      <Timeline entries={formations} label="Formation" />
    </div>
  </section>
)

export default Experience
