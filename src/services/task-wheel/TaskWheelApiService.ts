import type { TaskAssignment, TaskWheelItem } from '../../domain/taskWheel'
import { ApiClient } from '../api/ApiClient'

type SpinTaskWheelRequest = {
  members: string[]
  tasks: TaskWheelItem[]
}

const taskWheelEndpoint = '/task-wheel'

// Encapsulates future task-wheel API calls without coupling pages to HTTP details.
export class TaskWheelApiService {
  private readonly apiClient: ApiClient

  constructor(apiClient: ApiClient) {
    this.apiClient = apiClient
  }

  getDefaults(): Promise<SpinTaskWheelRequest> {
    return this.apiClient.request<SpinTaskWheelRequest>(`${taskWheelEndpoint}/defaults`)
  }

  spin(request: SpinTaskWheelRequest): Promise<TaskAssignment> {
    return this.apiClient.request<TaskAssignment>(`${taskWheelEndpoint}/spin`, {
      method: 'POST',
      body: request,
    })
  }
}