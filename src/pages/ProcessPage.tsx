import { Link } from 'react-router-dom'
import { routePaths } from '../routes/routePaths'

const steps = [
  {
    number: '01',
    title: 'L’idée de départ',
    description: 'Pourquoi cette application et quel besoin simple cherche-t-elle à résoudre ?',
  },
  {
    number: '02',
    title: 'Le découpage',
    description: 'Comment le problème a été découpé en petites étapes avant de commencer.',
  },
  {
    number: '03',
    title: 'Les itérations',
    description: 'Les demandes formulées à l’IA, les choix conservés et les ajustements réalisés.',
  },
  {
    number: '04',
    title: 'La validation',
    description: 'Les vérifications utilisées pour s’assurer que le prototype fonctionne.',
  },
  {
    number: '05',
    title: 'Une limite identifiée',
    description: 'Un comportement à améliorer et la manière dont il pourrait être corrigé.',
  },
]

function ProcessPage() {
  return (
    <section className="process-page">
      <div className="process-intro">
        <p className="eyebrow">La démarche de construction</p>
        <h1>Construire avec l’IA,<br /><em>garder la main.</em></h1>
        <p className="hero-intro">
          Cette page expliquera les décisions, les tests et les apprentissages
          qui ont accompagné la création de Cercle.
        </p>
      </div>

      <div className="process-steps" aria-label="Étapes de la démarche">
        {steps.map((step) => (
          <article className="process-step" key={step.number}>
            <span className="section-number">{step.number}</span>
            <div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>

      <Link className="primary-link process-back-link" to={routePaths.home}>
        Revenir à l'accueil <span aria-hidden="true">↗</span>
      </Link>
    </section>
  )
}

export default ProcessPage