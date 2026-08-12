import type { Objective } from '../../domain/objectives'
import type { ObjectiveDataProvider } from './ObjectiveDataProvider'

// The backend implementation follows the same contract as the local strategy.
export class BackendObjectiveDataProvider implements ObjectiveDataProvider {
  private readonly baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getObjectives(): Promise<Objective[]> {
    const response = await fetch(`${this.baseUrl}/objectives`)

    if (!response.ok) {
      throw new Error(`Unable to load objectives: ${response.status}`)
    }

    return response.json() as Promise<Objective[]>
  }
}