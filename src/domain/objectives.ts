// Shared domain types keep data contracts independent from the UI and providers.
export type Objective = {
  id: string
  title: string
  description: string
  order: number
}

export type DataProviderName = 'local' | 'backend'