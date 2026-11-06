import { Globe, Server, Smartphone, Wrench, Palette } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Tag, { TagColor } from '../Tag/Tag'
import './styles.scss'

const skillCategories: { title: string; icon: React.ReactNode; color: TagColor; skills: string[] }[] = [
  {
    title: 'Frontend',
    icon: <Globe size={28} aria-hidden="true" />,
    color: 'green',
    skills: ['React', 'TypeScript', 'Next.js', 'JavaScript', 'Sass'],
  },
  {
    title: 'Backend',
    icon: <Server size={28} aria-hidden="true" />,
    color: 'cyan',
    skills: ['Node.js', 'T3 Stack', 'Express.js', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Mobile',
    icon: <Smartphone size={28} aria-hidden="true" />,
    color: 'pink',
    skills: ['React Native'],
  },
  {
    title: 'DevOps',
    icon: <Wrench size={28} aria-hidden="true" />,
    color: 'orange',
    skills: ['CI/CD'],
  },
  {
    title: 'Design',
    icon: <Palette size={28} aria-hidden="true" />,
    color: 'yellow',
    skills: ['UI/UX Design', 'Figma', 'Wireframing'],
  },
]

const Skills = () => (
  <section id="skills" className="skills" aria-labelledby="skills-title">
    <div className="skills__inner">
      <SectionHeading
        id="skills-title"
        title="My skills"
        subtitle="The tools I use every day to design, build and ship products."
      />

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
