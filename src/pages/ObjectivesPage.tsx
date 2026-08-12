import { Link } from 'react-router-dom'

const objectives = [
  {
    number: '01',
    title: 'Répartir',
    description: 'Donner à chacun une tâche claire, sans perdre le plaisir de la surprise.',
    color: 'coral-card',
  },
  {
    number: '02',
    title: 'Respirer',
    description: 'Créer un moment léger pour se retrouver avant de se remettre en mouvement.',
    color: 'yellow-card',
  },
  {
    number: '03',
    title: 'Avancer',
    description: 'Faire émerger une dynamique commune et transformer les intentions en actions.',
    color: 'dark-card',
  },
]

function ObjectivesPage() {
  return (
    <main className="site-shell objectives-page">
      <div className="topline">
        <span>Un outil pour mieux travailler ensemble</span>
        <span>Prototype Cercle · 2026</span>
      </div>

      <header className="site-header">
        <Link className="brand" to="/" aria-label="Cercle accueil">
          <span className="brand-mark">c</span>
          <span>cercle</span>
        </Link>
        <nav aria-label="Navigation principale">
          <Link to="/">Accueil</Link>
          <Link className="active" to="/objectifs">Fonctionnalités</Link>
          <a href="/#equipe">L'équipe</a>
        </nav>
        <button className="menu-button" type="button" aria-label="Ouvrir le menu">
          <span></span><span></span>
        </button>
      </header>

      <section className="objectives-heading">
        <p className="eyebrow">Les trois objectifs</p>
        <h1>Une équipe qui sait<br /><em>où elle va.</em></h1>
        <p className="hero-intro">Cercle transforme un moment de réunion en un rituel simple, concret et partagé.</p>
      </section>

      <section className="objectives-grid" aria-label="Les trois objectifs de Cercle">
        {objectives.map((objective) => (
          <article className={`objective-card ${objective.color}`} key={objective.number}>
            <span className="feature-index">{objective.number}</span>
            <div className="objective-orbit" aria-hidden="true"></div>
            <h2>{objective.title}</h2>
            <p>{objective.description}</p>
            <span className="objective-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </section>

      <section className="objectives-footer">
        <p className="section-number">02 / 03</p>
        <p>Choisissez un objectif pour commencer votre rituel.</p>
        <Link className="primary-link" to="/">Revenir à l'accueil <span aria-hidden="true">↗</span></Link>
      </section>

      <footer className="site-footer">
        <span className="brand"><span className="brand-mark">c</span> cercle</span>
        <span>Un prototype pensé pour les humains.</span>
        <Link to="/">Retour à l'accueil ↑</Link>
      </footer>
    </main>
  )
}

export default ObjectivesPage