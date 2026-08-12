import type { DataProviderName } from '../../domain/objectives'
import { ApiClient } from '../../services/api/ApiClient'
import { ObjectiveApiService } from '../../services/objectives/ObjectiveApiService'
import { BackendObjectiveDataProvider } from './BackendObjectiveDataProvider'
import { LocalObjectiveDataProvider } from './LocalObjectiveDataProvider'
import type { ObjectiveDataProvider } from './ObjectiveDataProvider'

export function createObjectiveDataProvider(
  providerName: DataProviderName = resolveProviderName(),
): ObjectiveDataProvider {
  // Keep the data source switch outside the UI so providers can be replaced independently.
  if (providerName === 'backend') {
    const apiClient = new ApiClient(
      import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
    )
    const objectiveApiService = new ObjectiveApiService(apiClient)

    return new BackendObjectiveDataProvider(objectiveApiService)
  }

  return new LocalObjectiveDataProvider()
}

function resolveProviderName(): DataProviderName {
  return import.meta.env.VITE_DATA_PROVIDER === 'backend' ? 'backend' : 'local'
}