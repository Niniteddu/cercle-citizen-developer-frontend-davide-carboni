import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ObjectivesPage from './pages/ObjectivesPage'

function WelcomePage() {
  return (
    <main className="site-shell">
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
          <a className="active" href="#accueil">Accueil</a>
          <Link to="/objectifs">Fonctionnalités</Link>
          <a href="#equipe">L'équipe</a>
        </nav>
        <button className="menu-button" type="button" aria-label="Ouvrir le menu">
          <span></span><span></span>
        </button>
      </header>

      <section className="hero-section" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow">Le rituel qui lance la journée</p>
          <h1>Donner du rythme<br /><em>au collectif.</em></h1>
          <p className="hero-intro">
            Une manière simple et joyeuse de répartir les tâches, faire circuler
            l'énergie et commencer chaque réunion du bon pied.
          </p>
          <Link className="primary-link" to="/objectifs">
            Découvrir l'outil <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="hero-art" aria-label="Illustration abstraite du travail collectif" role="img">
          <div className="sun-disc"></div>
          <div className="art-card art-card-one">01</div>
          <div className="art-card art-card-two">ensemble</div>
          <div className="art-line"></div>
          <p>les idées<br /><strong>circulent</strong></p>
        </div>
      </section>

      <section className="intro-section" id="equipe">
        <p className="section-number">01 / 03</p>
        <div>
          <h2>Chaque voix compte<br /><em>dans le cercle.</em></h2>
          <p className="section-text">Cercle crée un espace de confiance pour les équipes qui avancent, apprennent et construisent ensemble.</p>
        </div>
        <div className="accent-note">Faire simple.<br /><strong>Faire ensemble.</strong></div>
      </section>

      <section className="feature-section" id="fonctionnalites">
        <div className="section-heading">
          <p className="eyebrow">Une base pour vos rituels</p>
          <h2>Le collectif<br /><em>en mouvement.</em></h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card coral-card">
            <span className="feature-index">01</span>
            <div className="feature-icon">↻</div>
            <h3>Répartir</h3>
            <p>La roue attribue une tâche à la bonne personne, au bon moment.</p>
          </article>
          <article className="feature-card yellow-card">
            <span className="feature-index">02</span>
            <div className="feature-icon">◌</div>
            <h3>Respirer</h3>
            <p>Un démarrage léger pour rendre les échanges plus naturels.</p>
          </article>
          <article className="feature-card dark-card">
            <span className="feature-index">03</span>
            <div className="feature-icon">✳</div>
            <h3>Avancer</h3>
            <p>Une vision partagée pour que chacun sache où contribuer.</p>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <span className="brand"><span className="brand-mark">c</span> cercle</span>
        <span>Un prototype pensé pour les humains.</span>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/objectifs" element={<ObjectivesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
