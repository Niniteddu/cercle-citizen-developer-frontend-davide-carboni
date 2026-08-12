import type { Objective } from '../../domain/objectives'
import type { ObjectiveDataProvider } from './ObjectiveDataProvider'

// This in-memory dataset is the active source until the backend endpoint is ready.
const localObjectives: Objective[] = [
  {
    id: 'roue-des-taches',
    title: 'Roue des tâches',
    description: 'Répartir aléatoirement les tâches entre les membres d’une équipe.',
    order: 1,
  },
  {
    id: 'brise-glace',
    title: 'Brise-glace',
    description: 'Piocher une question ou un mini-jeu pour démarrer une réunion.',
    order: 2,
  },
  {
    id: 'barometre-humeur',
    title: 'Baromètre d’humeur',
    description: 'Partager simplement son humeur et prendre le pouls de l’équipe.',
    order: 3,
  },
]

export class LocalObjectiveDataProvider implements ObjectiveDataProvider {
  async getObjectives(): Promise<Objective[]> {
    return [...localObjectives].sort((first, second) => first.order - second.order)
  }
}