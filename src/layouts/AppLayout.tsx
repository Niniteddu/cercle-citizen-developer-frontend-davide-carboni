import { Link, NavLink, Outlet } from 'react-router-dom'
import { routePaths } from '../routes/routePaths'

function AppLayout() {
  return (
    <main className="site-shell">
      <div className="topline">
        <span>Un rituel simple pour les équipes</span>
        <span>Cas pratique · Citizen Developer</span>
      </div>

      <header className="site-header">
        <Link className="brand" to={routePaths.home} aria-label="Cercle accueil">
          <span className="brand-mark">c</span>
          <span>cercle</span>
        </Link>
        <nav aria-label="Navigation principale">
          <NavLink to={routePaths.home} end>Accueil</NavLink>
          <NavLink to={routePaths.objectives}>Les objectifs</NavLink>
          <NavLink to={routePaths.process}>La démarche</NavLink>
        </nav>
        <button className="menu-button" type="button" aria-label="Ouvrir le menu">
          <span></span><span></span>
        </button>
      </header>

      <div className="page-content">
        <Outlet />
      </div>

      <footer className="site-footer">
        <Link className="brand" to={routePaths.home} aria-label="Cercle accueil">
          <span className="brand-mark">c</span>
          <span>cercle</span>
        </Link>
        <span>Un prototype pensé pour les humains.</span>
        <Link to={routePaths.home}>Retour à l'accueil ↑</Link>
      </footer>
    </main>
  )
}

export default AppLayout