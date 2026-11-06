import SectionHeading from '../SectionHeading/SectionHeading'
import { TagColor } from '../Tag/Tag'
import './styles.scss'

type Offer = {
  delay: string
  title: string
  description: string
  profile: string
  color: TagColor
}

const offers: Offer[] = [
  {
    delay: '3 jours',
    title: 'Tri des mails et relances clients',
    description: 'Vos mails classés tout seuls, vos clients relancés sans y penser.',
    profile: 'No-code',
    color: 'pink',
  },
  {
    delay: '1 semaine',
    title: 'CRM sur mesure',
    description: 'Airtable ou Notion : tous vos clients et leur suivi au même endroit.',
    profile: 'No-code',
    color: 'pink',
  },
  {
    delay: '1 semaine',
    title: 'Onboarding client automatisé',
    description: "Un formulaire qui crée la fiche client et envoie le mail d'accueil.",
    profile: 'No-code',
    color: 'pink',
  },
  {
    delay: '2 semaines',
    title: 'Site vitrine',
    description: 'Rapide, adapté au mobile et bien référencé pour être trouvé.',
    profile: 'Développement',
    color: 'cyan',
  },
  {
    delay: '3 semaines',
    title: 'Tableau de bord',
    description: 'Vos chiffres clés regroupés sur un seul écran.',
    profile: 'Développement',
    color: 'cyan',
  },
  {
    delay: '6 semaines',
    title: 'Prototype de votre idée',
    description: 'Une première version utilisable pour tester avant d’investir.',
    profile: 'No-code + Dév.',
    color: 'yellow',
  },
]

const Offers = () => (
  <section id="offers" className="offers" aria-labelledby="offers-title">
    <div className="offers__inner">
      <SectionHeading
        id="offers-title"
        title="Ce que je livre"
        subtitle="Des réalisations concrètes, avec un délai pour se projeter."
      />

      <ul className="offers__grid">
        {offers.map((offer) => (
          <li key={offer.title} className={`offers__card offers__card--${offer.color}`}>
            <p className="offers__delay">{offer.delay}</p>
            <h3 className="offers__title">{offer.title}</h3>
            <p className="offers__description">{offer.description}</p>
            <p className="offers__profile">{offer.profile}</p>
          </li>
        ))}
      </ul>

      <p className="offers__note">Délais indicatifs, selon le besoin.</p>
    </div>
  </section>
)

export default Offers
