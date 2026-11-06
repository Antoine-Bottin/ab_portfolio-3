'use client'

import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import SectionHeading from '../SectionHeading/SectionHeading'
import Tag, { TagColor } from '../Tag/Tag'
import './styles.scss'

type Company = 'mwm' | 'leatherspa' | 'personnal'

type Project = {
  pictureSrc: string
  videoSrc: string
  title: string
  url: string
  company: Company
  description: string
  technologies: string[]
}

const projects: Project[] = [
  {
    pictureSrc: '/assets/icons/stemz-logo.svg',
    videoSrc: '/assets/videos/Stemz.mp4',
    title: 'Stemz Web',
    url: 'https://stemz.mwm.io/',
    company: 'mwm',
    description: 'Next generation of music source separation.',
    technologies: ['React', 'TypeScript', 'NextJs', 'Sass'],
  },
  {
    pictureSrc: '/assets/icons/color-pop.png',
    videoSrc: '/assets/videos/ColorPop.mp4',
    title: 'Color Pop',
    url: 'https://colorpop.ai/',
    company: 'mwm',
    description: 'AI-powered coloring app for the entire family.',
    technologies: ['React', 'TypeScript', 'NextJs', 'Sass'],
  },
  {
    pictureSrc: '/assets/icons/mwm-rounded.webp',
    videoSrc: '/assets/videos/Website.mp4',
    title: 'MwM Website',
    url: 'https://mwm.ai/',
    company: 'mwm',
    description: 'Corporate website showcasing AI solutions and company services.',
    technologies: ['React', 'TypeScript', 'NextJs', 'Sass'],
  },
  {
    pictureSrc: '/assets/icons/yousing-logo.svg',
    videoSrc: '/assets/videos/YouSing.mov',
    title: 'Yousing',
    url: 'https://www.yousing.ai/',
    company: 'mwm',
    description: 'AI-powered singing and voice training application with real-time feedback.',
    technologies: ['React', 'TypeScript', 'NextJs', 'Sass'],
  },
  {
    pictureSrc: '/assets/icons/ls-monogram.svg',
    videoSrc: '/assets/videos/Leatherspa.mp4',
    title: 'Leatherspa',
    url: 'https://www.leatherspa.com/',
    company: 'leatherspa',
    description: 'Premium leather care and restoration service platform.',
    technologies: ['React', 'Vanilla Extract Style'],
  },
  {
    pictureSrc: '/assets/pictures/photo_cv.jpg',
    videoSrc: '/assets/videos/Xperience.mp4',
    title: 'Xperience',
    url: 'https://xperience.abottin.dev',
    company: 'personnal',
    description: 'AI-powered input answering your questions about my experience.',
    technologies: ['T3 Stack', 'TypeScript', 'OpenAI fine-tuned model'],
  },
  {
    pictureSrc: '/assets/icons/github-mark-white.png',
    videoSrc: '/assets/videos/github.mp4',
    title: 'Github',
    url: 'https://github.com/Antoine-Bottin',
    company: 'personnal',
    description: 'My github public repos.',
    technologies: ['Versionning', 'Git'],
  },
]

const filters: { label: string; value: 'all' | Company }[] = [
  { label: 'All projects', value: 'all' },
  { label: 'MWM', value: 'mwm' },
  { label: 'Leatherspa', value: 'leatherspa' },
  { label: 'Personal projects', value: 'personnal' },
]

const companyColor: Record<Company, TagColor> = {
  mwm: 'cyan',
  leatherspa: 'orange',
  personnal: 'green',
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | Company>('all')

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.company === activeFilter)

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects__inner">
        <SectionHeading
          id="projects-title"
          inverse
          title="Featured projects"
          subtitle="A showcase of my recent work across different companies and personal projects."
        />

        <div className="projects__filters" role="group" aria-label="Filter projects">
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
              <div className="projects__media">
                <video
                  src={project.videoSrc}
                  controls
                  preload="metadata"
                  className="projects__video"
                  aria-label={`${project.title} demo video`}
                />
                <span className="projects__company">
                  <Tag color={companyColor[project.company]}>{project.company.toUpperCase()}</Tag>
                </span>
              </div>

              <div className="projects__body">
                <h3 className="projects__title">{project.title}</h3>
                <p>{project.description}</p>
                <ul className="projects__techs" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Tag color="yellow">{tech}</Tag>
                    </li>
                  ))}
                </ul>
                <a className="projects__link" href={project.url} target="_blank" rel="noopener noreferrer">
                  View project
                  <ExternalLink size={16} aria-hidden="true" />
                  <span className="sr-only"> {project.title} (opens in a new tab)</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
