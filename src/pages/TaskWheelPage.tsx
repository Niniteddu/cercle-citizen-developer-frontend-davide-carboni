import { useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import TaskWheel from '../components/TaskWheel'

const defaultMembers = ['Camille', 'Davide', 'Lina']
const defaultTasks = ['Préparer le café', 'Animer la réunion', 'Prendre des notes']

function TaskWheelPage() {
  const [members, setMembers] = useState(defaultMembers)
  const [tasks, setTasks] = useState(defaultTasks)
  const [memberInput, setMemberInput] = useState('')
  const [taskInput, setTaskInput] = useState('')
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [pendingResult, setPendingResult] = useState<{ member: string; task: string } | null>(null)
  const [result, setResult] = useState<{ member: string; task: string } | null>(null)

  function addItem(value: string, setItems: Dispatch<SetStateAction<string[]>>, clear: () => void) {
    const item = value.trim()

    if (item && !isSpinning) {
      setItems((currentItems) => [...currentItems, item])
      clear()
    }
  }

  function spinWheel() {
    if (isSpinning || tasks.length === 0 || members.length === 0) {
      return
    }

    const selectedTaskIndex = Math.floor(Math.random() * tasks.length)
    const selectedMember = members[Math.floor(Math.random() * members.length)]
    const sectorAngle = 360 / tasks.length
    const targetRotation = 5 * 360 + (360 - selectedTaskIndex * sectorAngle - sectorAngle / 2)

    setPendingResult({ member: selectedMember, task: tasks[selectedTaskIndex] })
    setResult(null)
    setIsSpinning(true)
    setRotation((currentRotation) => currentRotation + targetRotation)
  }

  function finishSpin() {
    if (pendingResult) {
      setResult(pendingResult)
    }
    setPendingResult(null)
    setIsSpinning(false)
  }

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
          <div className="task-list-section">
            <div className="task-list-heading"><span className="section-number">01</span><h2>Membres</h2></div>
            <div className="task-list">
              {members.map((member) => <span className="task-chip" key={member}>{member}</span>)}
            </div>
            <div className="task-input-row">
              <input aria-label="Ajouter un membre" placeholder="Ajouter un membre" value={memberInput} onChange={(event) => setMemberInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && addItem(memberInput, setMembers, () => setMemberInput(''))} />
              <button type="button" aria-label="Ajouter le membre" onClick={() => addItem(memberInput, setMembers, () => setMemberInput(''))}>+</button>
            </div>
          </div>
          <div className="task-list-section">
            <div className="task-list-heading"><span className="section-number">02</span><h2>Tâches</h2></div>
            <div className="task-list">
              {tasks.map((task) => <span className="task-chip" key={task}>{task}</span>)}
            </div>
            <div className="task-input-row">
              <input aria-label="Ajouter une tâche" placeholder="Ajouter une tâche" value={taskInput} onChange={(event) => setTaskInput(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && addItem(taskInput, setTasks, () => setTaskInput(''))} />
              <button type="button" aria-label="Ajouter la tâche" onClick={() => addItem(taskInput, setTasks, () => setTaskInput(''))}>+</button>
            </div>
          </div>
        </aside>

        <div className="task-wheel-stage">
          <button className="spin-button" type="button" disabled={isSpinning || tasks.length === 0 || members.length === 0} onClick={spinWheel}>
            {isSpinning ? 'La roue tourne…' : 'Faire tourner la roue'} <span aria-hidden="true">↗</span>
          </button>
          <TaskWheel items={tasks} rotation={rotation} isSpinning={isSpinning} onTransitionEnd={finishSpin} />
          {result && <div className="task-wheel-result" aria-live="polite"><span>Résultat</span><strong>{result.member}</strong><p>prend en charge</p><strong>{result.task}</strong></div>}
        </div>
      </div>
    </section>
  )
}

export default TaskWheelPage