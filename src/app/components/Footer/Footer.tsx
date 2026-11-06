import { Heart, Code } from 'lucide-react'
import './styles.scss'

const links = [
  { name: 'Accueil', href: '#home' },
  { name: 'Profil', href: '#about' },
  { name: 'Projets', href: '#projects' },
  { name: 'Expérience', href: '#experience' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <p className="footer__brand">Antoine Bottin</p>
            <p>Product Builder No-code & Développeur React / Next.js.</p>
          </div>

          <nav aria-label="Navigation de pied de page">
            <h2 className="footer__title">Liens rapides</h2>
            <ul className="footer__links">
              {links.map((link) => (
                <li key={link.name}>
                  <a className="footer__link" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address className="footer__contact">
            <h2 className="footer__title">Contact</h2>
            <a className="footer__link" href="mailto:a.bottin.dev@gmail.com">
              a.bottin.dev@gmail.com
            </a>
            <a className="footer__link" href="tel:+33647502317">
              +33 6 47 50 23 17
            </a>
            <span>Sauqueville (76), Normandie</span>
          </address>
        </div>

        <p className="footer__legal">
          © {currentYear} Antoine Bottin. Fait avec <Heart size={16} aria-label="amour" /> et{' '}
          <Code size={16} aria-label="code" />.
        </p>
      </div>
    </footer>
  )
}

export default Footer
