import './styles.scss'

export type TagColor = 'pink' | 'yellow' | 'cyan' | 'green' | 'orange' | 'navy'

type TagProps = {
  children: React.ReactNode
  color?: TagColor
}

const Tag = ({ children, color = 'yellow' }: TagProps) => (
  <span className={`tag tag--${color}`}>{children}</span>
)

export default Tag
