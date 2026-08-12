import type { MoodOption, MoodSelection } from '../../domain/moodBarometer'
import { ApiClient } from '../api/ApiClient'

const moodBarometerEndpoint = '/mood-barometer'

// Encapsulates mood options and selections for the future backend integration.
export class MoodBarometerApiService {
  private readonly apiClient: ApiClient

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient
  }

  getOptions(): Promise<MoodOption[]> {
    return this.apiClient.request<MoodOption[]>(`${moodBarometerEndpoint}/options`)
  }

  submitSelection(selection: MoodSelection): Promise<MoodSelection> {
    return this.apiClient.request<MoodSelection>(`${moodBarometerEndpoint}/selections`, {
      method: 'POST',
      body: selection,
    })
  }
}