import './styles.scss'

type SectionHeadingProps = {
  id?: string
  title: string
  subtitle?: string
  inverse?: boolean
}

const SectionHeading = ({ id, title, subtitle, inverse = false }: SectionHeadingProps) => (
  <header className={`section-heading${inverse ? ' section-heading--inverse' : ''}`}>
    <h2 id={id} className="section-heading__title">
      {title}
    </h2>
    {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
  </header>
)

export default SectionHeading
