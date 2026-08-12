import type { TaskAssignment } from '../../domain/taskWheel'

type TaskWheelResultProps = {
  result: TaskAssignment | null
}

function TaskWheelResult({ result }: TaskWheelResultProps) {
  if (!result) {
    return null
  }

  return (
    <div className="task-wheel-result" aria-live="polite">
      <span>Résultat</span>
      <strong>{result.member}</strong>
      <p>prend en charge</p>
      <strong>{result.task}</strong>
    </div>
  )
}

export default TaskWheelResult