import { ClipboardList, Workflow, Code2, Languages } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Tag, { TagColor } from '../Tag/Tag'
import './styles.scss'

const skillCategories: { title: string; icon: React.ReactNode; color: TagColor; skills: string[] }[] = [
  {
    title: 'Produit',
    icon: <ClipboardList size={28} aria-hidden="true" />,
    color: 'yellow',
    skills: [
      'Recueil des besoins',
      'Cadrage',
      'Priorisation MVP',
      'User flows',
      'Modélisation de données',
      'Prototypage',
      'RGPD',
      'Accessibilité',
    ],
  },
  {
    title: 'No-code & IA',
    icon: <Workflow size={28} aria-hidden="true" />,
    color: 'pink',
    skills: ['Notion', 'Airtable', 'Make', 'n8n', 'Lovable', 'Supabase', 'Claude Code'],
  },
  {
    title: 'Développement',
    icon: <Code2 size={28} aria-hidden="true" />,
    color: 'cyan',
    skills: ['Next.js', 'TypeScript', 'React', 'React Native', 'Figma'],
  },
  {
    title: 'Langues',
    icon: <Languages size={28} aria-hidden="true" />,
    color: 'green',
    skills: ['Français : natif', 'Anglais : professionnel', 'Allemand : notions'],
  },
]

const Skills = () => (
  <section id="skills" className="skills" aria-labelledby="skills-title">
    <div className="skills__inner">
      <SectionHeading id="skills-title" title="Compétences" />

      <ul className="skills__grid">
        {skillCategories.map((category) => (
          <li key={category.title} className="skills__card">
            <h3 className="skills__card-title">
              <span className={`skills__icon skills__icon--${category.color}`}>{category.icon}</span>
              {category.title}
            </h3>
            <ul className="skills__list">
              {category.skills.map((skill) => (
                <li key={skill}>
                  <Tag color={category.color}>{skill}</Tag>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Skills
