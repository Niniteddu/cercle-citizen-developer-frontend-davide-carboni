import { useState } from 'react'
import type { TaskAssignment, TaskWheelItem } from '../domain/taskWheel'
import { selectRandomAssignment } from '../domain/taskWheel'

const defaultMembers = ['Camille', 'Davide', 'Lina']
const defaultTasks = ['Préparer le café', 'Animer la réunion', 'Prendre des notes']
  .map((label, index) => ({ id: `${index}-${label}`, label }))

export function useTaskWheel() {
  const [members, setMembers] = useState(defaultMembers)
  const [tasks, setTasks] = useState<TaskWheelItem[]>(defaultTasks)
  const [rotation, setRotation] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [pendingResult, setPendingResult] = useState<TaskAssignment | null>(null)
  const [result, setResult] = useState<TaskAssignment | null>(null)

  function addMember(name: string) {
    const value = name.trim()
    if (value && !isSpinning) {
      setMembers((current) => [...current, value])
    }
  }

  function addTask(label: string) {
    const value = label.trim()
    if (value && !isSpinning) {
      setTasks((current) => [...current, { id: `${current.length}-${value}`, label: value }])
    }
  }

  function spin() {
    if (isSpinning || members.length === 0 || tasks.length === 0) {
      return
    }

    const selection = selectRandomAssignment(members, tasks)
    const sectorAngle = 360 / tasks.length
    const targetRotation = 5 * 360 + (360 - selection.taskIndex * sectorAngle - sectorAngle / 2)

    setPendingResult(selection.assignment)
    setResult(null)
    setIsSpinning(true)
    setRotation((current) => current + targetRotation)
  }

  function finishSpin() {
    if (pendingResult) {
      setResult(pendingResult)
    }
    setPendingResult(null)
    setIsSpinning(false)
  }

  return {
    members,
    tasks,
    rotation,
    isSpinning,
    result,
    canSpin: !isSpinning && members.length > 0 && tasks.length > 0,
    addMember,
    addTask,
    spin,
    finishSpin,
  }
}
