import type { Objective } from '../../domain/objectives'
import { ObjectiveApiService } from '../../services/objectives/ObjectiveApiService'
import type { ObjectiveDataProvider } from './ObjectiveDataProvider'

// The backend implementation follows the same contract as the local strategy.
export class BackendObjectiveDataProvider implements ObjectiveDataProvider {
  private readonly objectiveApiService: ObjectiveApiService

  constructor(objectiveApiService: ObjectiveApiService) {
    this.objectiveApiService = objectiveApiService
  }

  async getObjectives(): Promise<Objective[]> {
    return this.objectiveApiService.getAll()
  }
}