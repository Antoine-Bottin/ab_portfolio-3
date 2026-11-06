import { Code, Palette, Zap } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Tag, { TagColor } from '../Tag/Tag'
import './styles.scss'

const highlights: { icon: React.ReactNode; title: string; description: string; color: TagColor }[] = [
  {
    icon: <Code size={32} aria-hidden="true" />,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time',
    color: 'green',
  },
  {
    icon: <Palette size={32} aria-hidden="true" />,
    title: 'Creative Design',
    description: 'Crafting beautiful, intuitive user experiences that users love',
    color: 'cyan',
  },
  {
    icon: <Zap size={32} aria-hidden="true" />,
    title: 'Performance',
    description: 'Building fast, optimized applications that deliver results',
    color: 'pink',
  },
]

const techs: { name: string; color: TagColor }[] = [
  { name: 'React', color: 'cyan' },
  { name: 'React Native', color: 'cyan' },
  { name: 'TypeScript', color: 'yellow' },
  { name: 'NextJs', color: 'green' },
  { name: 'Sass', color: 'pink' },
  { name: 'T3 Stack', color: 'orange' },
]

const About = () => (
  <section id="about" className="about" aria-labelledby="about-title">
    <div className="about__inner">
      <SectionHeading
        id="about-title"
        title="About me"
        subtitle="I'm a passionate developer with 4+ years of experience creating digital solutions that make a difference."
      />

      <div className="about__grid">
        <div className="about__text">
          <p>
            Passionate about web development, I have deepened my Frontend Javascript / Typescript skills
            with the ReactJS and NextJS frameworks for three years. I love taking on new challenges, and
            discovering new languages does not scare me at all. I enjoy manipulating data and work on my
            backend skills in my spare time. Reconverted for four years, I have found in this
            ever-evolving field something to satisfy my appetite for creativity.
          </p>
          <ul className="about__techs" aria-label="Main technologies">
            {techs.map((tech) => (
              <li key={tech.name}>
                <Tag color={tech.color}>{tech.name}</Tag>
              </li>
            ))}
          </ul>
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
