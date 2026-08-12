import type { Objective } from '../../domain/objectives'

// Every objective source exposes the same asynchronous API to the application.
export interface ObjectiveDataProvider {
  getObjectives(): Promise<Objective[]>
}