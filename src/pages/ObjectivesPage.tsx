const objectives = [
  {
    number: '01',
    title: 'Roue des tâches',
    description: 'Répartir aléatoirement les tâches entre les membres d’une équipe.',
    color: 'coral-card',
    id: 'roue-des-taches',
  },
  {
    number: '02',
    title: 'Brise-glace',
    description: 'Piocher une question ou un mini-jeu pour démarrer une réunion.',
    color: 'yellow-card',
    id: 'brise-glace',
  },
  {
    number: '03',
    title: 'Baromètre d’humeur',
    description: 'Partager simplement son humeur et prendre le pouls de l’équipe.',
    color: 'dark-card',
    id: 'barometre-humeur',
  },
]

function ObjectivesPage() {
  return (
    <section className="objectives-page">
      <section className="objectives-heading">
        <p className="eyebrow">Les trois objectifs</p>
        <h1>Une équipe qui sait<br /><em>où elle va.</em></h1>
      </section>

      <section className="objectives-grid" aria-label="Les trois objectifs de Cercle">
        {objectives.map((objective) => (
          <article className={`objective-card ${objective.color}`} id={objective.id} key={objective.number}>
            <span className="feature-index">{objective.number}</span>
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