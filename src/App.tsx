import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import ObjectivesPage from './pages/ObjectivesPage'

function WelcomePage() {
  return (
    <main className="site-shell">
      <div className="topline">
        <span>Un rituel simple pour les équipes</span>
        <span>Cas pratique · Citizen Developer</span>
      </div>

      <header className="site-header">
        <Link className="brand" to="/" aria-label="Cercle accueil">
          <span className="brand-mark">c</span>
          <span>cercle</span>
        </Link>
        <nav aria-label="Navigation principale">
          <a className="active" href="#accueil">Accueil</a>
          <Link to="/objectifs">Choisir un rituel</Link>
          <Link to="/objectifs">Les objectifs</Link>
        </nav>
        <button className="menu-button" type="button" aria-label="Ouvrir le menu">
          <span></span><span></span>
        </button>
      </header>

      <section className="hero-section" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow">Bienvenue à l'équipe qui analyse l'app</p>
          <h1>Un petit cercle<br /><em>pour avancer ensemble.</em></h1>
          <p className="hero-intro">
            Bonjour et bienvenue. Cette première page présente les trois pistes
            du cas pratique. Une seule sera développée jusqu'au prototype fonctionnel.
          </p>
          <div className="objective-actions" aria-label="Choisir un objectif">
            <Link className="objective-button objective-button-primary" to="/objectifs#roue-des-taches">
              <span>01</span> Roue des tâches <strong>↗</strong>
            </Link>
            <Link className="objective-button" to="/objectifs#brise-glace">
              <span>02</span> Générateur de brise-glace <strong>↗</strong>
            </Link>
            <Link className="objective-button" to="/objectifs#barometre-humeur">
              <span>03</span> Baromètre d'humeur <strong>↗</strong>
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Illustration abstraite du travail collectif" role="img">
          <div className="sun-disc"></div>
          <div className="art-card art-card-one">01</div>
          <div className="art-card art-card-two">ensemble</div>
          <div className="art-line"></div>
          <p>les idées<br /><strong>circulent</strong></p>
        </div>
      </section>

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
