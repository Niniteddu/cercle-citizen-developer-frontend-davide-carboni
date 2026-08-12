import type { IcebreakerPrompt } from '../../domain/icebreaker'
import { ApiClient } from '../api/ApiClient'

const icebreakerEndpoint = '/icebreakers'

// Encapsulates future prompt retrieval behind a feature-focused API service.
export class IcebreakerApiService {
  private readonly apiClient: ApiClient

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient
  }

  getPrompts(): Promise<IcebreakerPrompt[]> {
    return this.apiClient.request<IcebreakerPrompt[]>(icebreakerEndpoint)
  }
}