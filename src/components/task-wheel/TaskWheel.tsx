import type { TaskWheelItem } from '../../domain/taskWheel'

type TaskWheelProps = {
  items: TaskWheelItem[]
  rotation: number
  isSpinning: boolean
  onTransitionEnd: () => void
}

const colors = ['#e96555', '#e9bd45', '#a9c4c8', '#24252b']

function polarToCartesian(center: number, radius: number, angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180
  return { x: center + radius * Math.cos(radians), y: center + radius * Math.sin(radians) }
}

function createSegmentPath(index: number, itemCount: number) {
  const center = 150
  const radius = 142
  const angle = 360 / itemCount
  const start = polarToCartesian(center, radius, index * angle)
  const end = polarToCartesian(center, radius, (index + 1) * angle)
  const largeArcFlag = angle > 180 ? 1 : 0

  return `M ${center} ${center} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`
}

function TaskWheel({ items, rotation, isSpinning, onTransitionEnd }: TaskWheelProps) {
  const itemCount = Math.max(items.length, 1)
  const angle = 360 / itemCount

  return (
    <div className="task-wheel-frame">
      <span className="wheel-pointer" aria-hidden="true"></span>
      <svg className={`task-wheel ${isSpinning ? 'is-spinning' : ''}`} role="img" aria-label="Roue des tâches" viewBox="0 0 300 300" style={{ transform: `rotate(${rotation}deg)` }} onTransitionEnd={onTransitionEnd}>
        <circle cx="150" cy="150" r="146" fill="#f8f7f2" />
        {items.length > 0 ? items.map((item, index) => {
          const labelPosition = polarToCartesian(150, 92, index * angle + angle / 2)

          return (
            <g key={`${item.id}-${index}`}>
              <path d={createSegmentPath(index, itemCount)} fill={colors[index % colors.length]} stroke="#f8f7f2" strokeWidth="2" />
              <text fill={index % colors.length === 3 ? '#fff' : '#24252b'} fontSize="10" fontWeight="700" textAnchor="middle" x={labelPosition.x} y={labelPosition.y} transform={`rotate(${index * angle + angle / 2}, ${labelPosition.x}, ${labelPosition.y})`}>
                {item.label.length > 18 ? `${item.label.slice(0, 18)}…` : item.label}
              </text>
            </g>
          )
        }) : <circle cx="150" cy="150" r="142" fill="#deddd6" />}
        <circle cx="150" cy="150" r="25" fill="#f8f7f2" stroke="#24252b" strokeWidth="2" />
        <text x="150" y="154" fill="#24252b" fontSize="11" fontWeight="800" textAnchor="middle">CERCLE</text>
      </svg>
    </div>
  )
}

export default TaskWheel