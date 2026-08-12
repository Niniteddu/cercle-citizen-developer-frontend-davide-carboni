import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import ObjectivesPage from './pages/ObjectivesPage'
import ProcessPage from './pages/ProcessPage'

function WelcomePage() {
  return (
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
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/objectifs" element={<ObjectivesPage />} />
          <Route path="/demarche" element={<ProcessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
