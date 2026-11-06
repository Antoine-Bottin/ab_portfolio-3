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
    title: 'Phone',
    value: '+33 6 47 50 23 17',
    href: 'tel:+33647502317',
    color: 'cyan',
  },
  {
    icon: <MapPin size={24} aria-hidden="true" />,
    title: 'Location',
    value: 'Dieppe, Normandie, FR',
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
        title="Get in touch"
        subtitle="Ready to bring your ideas to life? Let's discuss your next project."
      />

      <p className="contact__intro">
        I'm always interested in new opportunities and exciting projects. Whether you have a question or
        just want to say hello, I'd love to hear from you.
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

      <ul className="contact__socials" aria-label="Social networks">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              className="contact__social"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (opens in a new tab)`}
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
