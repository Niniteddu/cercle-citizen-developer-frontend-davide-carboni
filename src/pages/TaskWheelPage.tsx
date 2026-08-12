import TaskListSection from '../components/task-wheel/TaskListSection'
import TaskWheel from '../components/task-wheel/TaskWheel'
import TaskWheelResult from '../components/task-wheel/TaskWheelResult'
import SpinButton from '../components/task-wheel/SpinButton'
import { useTaskWheel } from '../hooks/useTaskWheel'

function TaskWheelPage() {
  const wheel = useTaskWheel()

  return (
    <section className="task-wheel-page">
      <div className="task-wheel-header">
        <div>
          <p className="eyebrow">Objectif 01 · Roue des tâches</p>
          <h1>Qui prend <em>quoi ?</em></h1>
        </div>
      </div>

      <div className="task-wheel-layout">
        <aside className="task-wheel-settings" aria-label="Paramètres de la roue">
          <TaskListSection
            number="01"
            title="Membres"
            items={wheel.members}
            placeholder="Ajouter un membre"
            inputLabel="Ajouter le membre"
            onAdd={wheel.addMember}
            disabled={wheel.isSpinning}
          />
          <TaskListSection
            number="02"
            title="Tâches"
            items={wheel.tasks.map((task) => task.label)}
            placeholder="Ajouter une tâche"
            inputLabel="Ajouter la tâche"
            onAdd={wheel.addTask}
            disabled={wheel.isSpinning}
          />
        </aside>

        <div className="task-wheel-stage">
          <SpinButton isSpinning={wheel.isSpinning} disabled={!wheel.canSpin} onClick={wheel.spin} />
          <TaskWheel items={wheel.tasks} rotation={wheel.rotation} isSpinning={wheel.isSpinning} onTransitionEnd={wheel.finishSpin} />
          <TaskWheelResult result={wheel.result} />
        </div>
      </div>
    </section>
  )
}

export default TaskWheelPage
