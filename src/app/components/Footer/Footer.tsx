import { Heart, Code } from 'lucide-react'
import './styles.scss'

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
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
            <p>Crafting digital experiences that make a difference.</p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="footer__title">Quick links</h2>
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
            <h2 className="footer__title">Get in touch</h2>
            <a className="footer__link" href="mailto:a.bottin.dev@gmail.com">
              a.bottin.dev@gmail.com
            </a>
            <a className="footer__link" href="tel:+33647502317">
              +33 6 47 50 23 17
            </a>
            <span>Dieppe, Normandie, FR</span>
          </address>
        </div>

        <p className="footer__legal">
          © {currentYear} Antoine Bottin. Made with <Heart size={16} aria-label="love" /> and{' '}
          <Code size={16} aria-label="code" />. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
