import { Link } from 'react-router-dom'
import { routePaths } from '../routes/routePaths'

const links = [
  {
    label: 'Site personnel',
    description: 'carboni.ch',
    href: 'https://www.carboni.ch',
  },
  {
    label: 'Code source du projet',
    description: 'GitHub · cercle citizen developer',
    href: 'https://github.com/Niniteddu/cercle-citizen-developer-frontend-davide-carboni',
  },
  {
    label: 'Second profil GitHub',
    description: 'GitHub · CarboniDavide',
    href: 'https://github.com/CarboniDavide',
  },
]

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-intro">
        <p className="eyebrow">À propos de moi</p>
        <h1>Davide Carboni,<br /><em>citizen developer.</em></h1>
        <p className="hero-intro">
          Je conçois des expériences numériques utiles, en reliant la réflexion,
          la structure et la réalisation. Ce projet est une manière concrète de
          montrer comment je travaille avec l’IA tout en gardant la direction.
        </p>
        <Link className="primary-link" to={routePaths.process}>
          Découvrir ma démarche <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="about-panel">
        <div className="about-mark" aria-hidden="true">
          <span>DC</span>
          <i></i>
        </div>
        <div className="about-links" aria-label="Liens externes de Davide Carboni">
          {links.map((link, index) => (
            <a
              className="about-link"
              href={link.href}
              key={link.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="section-number">0{index + 1}</span>
              <span>
                <strong>{link.label}</strong>
                <small>{link.description}</small>
              </span>
              <span className="about-link-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutPage
