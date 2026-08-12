import type { Objective } from '../../domain/objectives'
import { ApiClient } from '../api/ApiClient'

const objectivesEndpoint = '/objectives'

// Groups all objective-related API calls behind a feature-focused service.
export class ObjectiveApiService {
  private readonly apiClient: ApiClient

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient
  }

  getAll(): Promise<Objective[]> {
    return this.apiClient.request<Objective[]>(objectivesEndpoint)
  }
}