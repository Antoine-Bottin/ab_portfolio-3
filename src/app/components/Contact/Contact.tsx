import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './styles.scss'

const contactInfo = [
  {
    icon: <Mail size={24} aria-hidden="true" />,
    title: 'Email',
    value: 'a.bottin.dev@gmail.com',
    href: 'mailto:a.bottin.dev@gmail.com',
    color: 'green',
  },
  {
    icon: <Phone size={24} aria-hidden="true" />,
    title: 'Téléphone',
    value: '+33 6 47 50 23 17',
    href: 'tel:+33647502317',
    color: 'cyan',
  },
  {
    icon: <MapPin size={24} aria-hidden="true" />,
    title: 'Localisation',
    value: 'Sauqueville (76), Normandie',
    color: 'pink',
  },
]

const socialLinks = [
  { icon: <Github size={24} aria-hidden="true" />, label: 'GitHub', href: 'https://github.com/Antoine-Bottin' },
  {
    icon: <Linkedin size={24} aria-hidden="true" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/antoine-bottin/',
  },
]

const Contact = () => (
  <section id="contact" className="contact" aria-labelledby="contact-title">
    <div className="contact__inner">
      <SectionHeading
        id="contact-title"
        title="Contact"
      />

      <p className="contact__intro">
        Un besoin à cadrer, un prototype à construire ou un produit React / Next.js à faire évoluer ?
        Parlons-en.
      </p>

      <ul className="contact__list">
        {contactInfo.map((info) => (
          <li key={info.title} className="contact__item">
            <span className={`contact__icon contact__icon--${info.color}`}>{info.icon}</span>
            <div>
              <h3 className="contact__label">{info.title}</h3>
              {info.href ? <a href={info.href}>{info.value}</a> : <p>{info.value}</p>}
            </div>
          </li>
        ))}
      </ul>

      <ul className="contact__socials" aria-label="Réseaux sociaux">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              className="contact__social"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (s'ouvre dans un nouvel onglet)`}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Contact
