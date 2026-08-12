import { useEffect, useState } from 'react'
import { createObjectiveDataProvider } from '../data/providers/ObjectiveDataProviderFactory'
import type { Objective } from '../domain/objectives'

const objectiveColors = ['coral-card', 'yellow-card', 'dark-card']
// The page consumes data through the selected provider instead of knowing its source.
const objectiveDataProvider = createObjectiveDataProvider()

function ObjectivesPage() {
  const [objectives, setObjectives] = useState<Objective[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    objectiveDataProvider
      .getObjectives()
      .then((loadedObjectives) => {
        if (isMounted) {
          setObjectives(loadedObjectives)
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Impossible de charger les objectifs.')
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section className="objectives-page">
      <section className="objectives-heading">
        <p className="eyebrow">Les trois objectifs</p>
        <h1>Une équipe qui sait<br /><em>où elle va.</em></h1>
      </section>

      <section className="objectives-grid" aria-label="Les trois objectifs de Cercle">
        {isLoading && <p className="objectives-status">Chargement des objectifs…</p>}
        {error && <p className="objectives-status objectives-error">{error}</p>}
        {!isLoading && !error && objectives.map((objective, index) => (
          <article className={`objective-card ${objectiveColors[index % objectiveColors.length]}`} id={objective.id} key={objective.id}>
            <span className="feature-index">{String(objective.order).padStart(2, '0')}</span>
            <div className="objective-orbit" aria-hidden="true"></div>
            <h2>{objective.title}</h2>
            <p>{objective.description}</p>
            <span className="objective-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </section>

    </section>
  )
}

export default ObjectivesPage