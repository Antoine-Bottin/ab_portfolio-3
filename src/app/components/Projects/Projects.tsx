'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Tag, { TagColor } from '../Tag/Tag'
import './styles.scss'

type Profile = 'product' | 'dev'

type Company = 'MWM' | 'LeatherSpa'

type Project = {
  title: string
  company?: Company
  context?: string
  description: string
  profile: Profile
  technologies: string[]
  url?: string
  urlLabel?: string
}

const projects: Project[] = [
  {
    title: 'Site de la commune de Sauqueville (76)',
    description:
      "Site Next.js connecté à l'API INSEE, avec le CMS headless Sanity : des modèles de mise en page pour publier les informations sans toucher au code.",
    profile: 'dev',
    technologies: ['Claude Code', 'Next.js', 'Sanity'],
    url: 'https://sauqueville.fr',
    urlLabel: 'sauqueville.fr',
  },
  {
    title: "Site d'Edit-conseil",
    description:
      "Site Next.js avec maquette retravaillée sur Google Stitch, et migration de l'hébergement de Wix vers Vercel.",
    profile: 'dev',
    technologies: ['Claude Code', 'Next.js', 'Vercel'],
    url: 'https://edit-conseil.com',
    urlLabel: 'edit-conseil.com',
  },
  {
    title: 'PlayOff Amateurs, plateforme de gestion de compétitions sportives',
    context: 'Projet École Cube, 2026',
    description:
      "Cadrage complet dans Notion : roadmap, backlog, jalons, conformité RGPD, choix de la stack. Base Airtable relationnelle (5 tables), champs calculés, automatisations, formulaires pré-remplis et interface utilisateur.",
    profile: 'product',
    technologies: ['Notion', 'Airtable'],
  },
  {
    title: 'Agents IA et automatisations',
    description:
      "Scénarios Make avec agents IA (sorties JSON structurées, gestion d'erreurs), plus une instance n8n auto-hébergée (Proxmox, HTTPS, sécurisation).",
    profile: 'product',
    technologies: ['Make', 'n8n'],
  },
  {
    title: 'Stemz Web',
    company: 'MWM',
    description: "Nouvelle génération de séparation de sources musicales.",
    profile: 'dev',
    technologies: ["React", "TypeScript", "Next.js", "Sass"],
    url: 'https://stemz.mwm.io/',
    urlLabel: 'stemz.mwm.io',
  },
  {
    title: 'Color Pop',
    company: 'MWM',
    description: "Application de coloriage propulsée par l'IA pour toute la famille.",
    profile: 'dev',
    technologies: ["React", "TypeScript", "Next.js", "Sass"],
    url: 'https://colorpop.ai/',
    urlLabel: 'colorpop.ai',
  },
  {
    title: 'Site MwM',
    company: 'MWM',
    description: "Site vitrine présentant les solutions IA et les services de l'entreprise.",
    profile: 'dev',
    technologies: ["React", "TypeScript", "Next.js", "Sass"],
    url: 'https://mwm.ai/',
    urlLabel: 'mwm.ai',
  },
  {
    title: 'Yousing',
    company: 'MWM',
    description: "Application de chant et d'entraînement vocal avec retour en temps réel.",
    profile: 'dev',
    technologies: ["React", "TypeScript", "Next.js", "Sass"],
    url: 'https://www.yousing.ai/',
    urlLabel: 'yousing.ai',
  },
  {
    title: 'Leatherspa',
    company: 'LeatherSpa',
    description: "Plateforme de services d'entretien et de restauration du cuir.",
    profile: 'dev',
    technologies: ["React", "Vanilla Extract"],
    url: 'https://www.leatherspa.com/',
    urlLabel: 'leatherspa.com',
  },
]

const filters: { label: string; value: 'all' | Profile }[] = [
  { label: 'Tous', value: 'all' },
  { label: 'Product Builder', value: 'product' },
  { label: 'Développeur', value: 'dev' },
]

const profileColor: Record<Profile, TagColor> = {
  product: 'pink',
  dev: 'cyan',
}

const companyColor: Record<Company, TagColor> = {
  MWM: 'cyan',
  LeatherSpa: 'orange',
}

const profileLabel: Record<Profile, string> = {
  product: 'Product Builder',
  dev: 'Développeur',
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | Profile>('all')

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.profile === activeFilter)

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects__inner">
        <SectionHeading id="projects-title" inverse title="Projets" />

        <div className="projects__filters" role="group" aria-label="Filtrer les projets">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`projects__filter${activeFilter === filter.value ? ' projects__filter--active' : ''}`}
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <ul className="projects__grid">
          {filteredProjects.map((project) => (
            <li key={project.title} className="projects__card">
              <div className="projects__body">
                <p className="projects__profile">
                  <Tag color={profileColor[project.profile]}>{profileLabel[project.profile]}</Tag>
                  {project.company && <Tag color={companyColor[project.company]}>{project.company}</Tag>}
                </p>
                <h3 className="projects__title">{project.title}</h3>
                {project.context && <p className="projects__context">{project.context}</p>}
                <p>{project.description}</p>
                <ul className="projects__techs" aria-label="Outils">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Tag color="yellow">{tech}</Tag>
                    </li>
                  ))}
                </ul>
                {project.url && (
                  <a className="projects__link" href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.urlLabel}
                    <ExternalLink size={16} aria-hidden="true" />
                    <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
