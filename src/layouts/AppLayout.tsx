import { Link, NavLink, Outlet } from 'react-router-dom'

function AppLayout() {
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
          <NavLink to="/" end>Accueil</NavLink>
          <NavLink to="/objectifs">Les objectifs</NavLink>
          <NavLink to="/demarche">La démarche</NavLink>
        </nav>
        <button className="menu-button" type="button" aria-label="Ouvrir le menu">
          <span></span><span></span>
        </button>
      </header>

      <div className="page-content">
        <Outlet />
      </div>

      <footer className="site-footer">
        <Link className="brand" to="/" aria-label="Cercle accueil">
          <span className="brand-mark">c</span>
          <span>cercle</span>
        </Link>
        <span>Un prototype pensé pour les humains.</span>
        <Link to="/">Retour à l'accueil ↑</Link>
      </footer>
    </main>
  )
}

export default AppLayout