export type TaskWheelItem = {
  id: string
  label: string
}

export type TaskAssignment = {
  member: string
  task: string
}

export function createTaskWheelItem(label: string, index: number): TaskWheelItem {
  return { id: `${index}-${label}`, label }
}

export function selectRandomAssignment(members: string[], tasks: TaskWheelItem[]): { taskIndex: number; assignment: TaskAssignment } {
  const taskIndex = Math.floor(Math.random() * tasks.length)
  const member = members[Math.floor(Math.random() * members.length)]

  return {
    taskIndex,
    assignment: { member, task: tasks[taskIndex].label },
  }
}
