import { Link } from 'react-router-dom'
import { routePaths } from '../routes/routePaths'

const steps = [
  {
    number: '01',
    title: 'Introduction et contexte',
    description: 'J’ai commencé par utiliser l’IA pour analyser le besoin et comparer les technologies possibles. Une première approche en HTML, CSS et JavaScript vanilla était envisageable, mais je l’ai écartée : elle devient moins facile à faire évoluer lorsque l’interface, les modules et les sources de données se multiplient. J’ai donc choisi React avec Vite et TypeScript, une base plus structurée, modulaire et évolutive, soutenue par un écosystème de composants mature.',
  },
  {
    number: '02',
    title: 'Choisir Docker pour l’environnement',
    description: 'J’ai choisi Docker, devenu un standard pour créer des environnements reproductibles et isoler les dépendances. Node.js n’est pas installé sur ma machine : je travaille donc exclusivement avec des images Docker. Cette approche limite les écarts de versions entre les machines, simplifie l’installation pour une autre personne et rapproche l’environnement local de celui utilisé ensuite en production.',
  },
  {
    number: '03',
    title: 'Construire fonctionnalité par fonctionnalité',
    description: 'J’ai d’abord mis en place la base technique, puis identifié les modules à installer en m’appuyant sur mon expérience. J’ai ensuite avancé fonctionnalité par fonctionnalité : structure des pages, logique métier, services et fournisseurs de données, jusqu’aux trois propositions définies par l’exercice. J’ai utilisé les principes de base des design patterns et mes connaissances pour orienter l’IA vers une structure organisée, plutôt que de lui laisser produire du code sans direction. L’historique Git met en évidence cette progression étape par étape.',
  },
  {
    number: '04',
    title: 'Vérifier que ça marche',
    description: 'Après chaque étape, j’ai lancé la build et le lint dans Docker, vérifié les routes HTTP et testé les parcours principaux dans le navigateur.',
  },
  {
    number: '05',
    title: 'Relire et améliorer le code',
    description: 'J’ai relu le résultat avec mes connaissances et mon expérience afin de vérifier la structure, la répartition des responsabilités et les améliorations possibles. Cette relecture a aussi permis d’identifier une limite : les données de la roue sont encore locales et disparaissent au rechargement. Le prochain sprint pourra connecter le fournisseur de données backend et ajouter une persistance.',
  },
  {
    number: '06',
    title: 'Préparer une évolution backend',
    description: 'J’ai préparé une structure pour une évolution backend, avec des services simples. Même si cette partie reste volontairement minimale, elle démontre ma capacité à envisager une solution alternative, cohérente et prête à faire évoluer le prototype.',
  },
  {
    number: '07',
    title: 'Garder la responsabilité humaine',
    description: 'L’IA m’a aidé à accélérer la construction, à explorer des idées et à produire des propositions. Cependant, la structure, la logique de base, les priorités et la coordination du projet restent sous responsabilité humaine. L’IA est un partenaire de production, pas un remplaçant de la réflexion ni de la prise de décision.',
  },
  {
    number: '08',
    title: 'Conclusion',
    description: 'Ce projet s’appuie d’abord sur mes années d’expérience et sur mes idées. Les projets numériques reposent souvent sur des architectures et des pratiques devenues des standards : partir avec une intention claire, discuter avec l’IA, définir le socle technique, visualiser la structure, installer une base Vite, préparer la structure visuelle et les styles, puis ajouter les fonctionnalités. À chaque étape, j’ai contrôlé, vérifié et relié la fonctionnalité en cours à la précédente tout en anticipant la suivante. Avec l’IA, je porte encore plus d’attention à la structure qu’au code : elle est très efficace pour produire du code, mais peut perdre la logique globale. Le temps était court et le projet mérite encore une relecture ; néanmoins, en une heure et demie, nous avons construit une application fonctionnelle et disponible, avec un compromis assumé entre vitesse, qualité et simplicité.',
  },
]

function ProcessPage() {
  return (
    <section className="process-page">
      <div className="process-intro">
        <p className="eyebrow">La démarche de construction</p>
        <h1>Construire avec l’IA,<br /><em>garder la main.</em></h1>
        <p className="hero-intro">
          Voici comment j’ai gardé une démarche lisible tout en collaborant avec
          l’IA : décider, construire, tester, puis corriger.
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