type MoodOptionProps = {
  emoji: string
  label: string
  isSelected: boolean
  onSelect: () => void
}

function MoodOption({ emoji, label, isSelected, onSelect }: MoodOptionProps) {
  return (
    <button className={`mood-option ${isSelected ? 'selected' : ''}`} type="button" onClick={onSelect}>
      <span className="mood-emoji" aria-hidden="true">{emoji}</span>
      <span>{label}</span>
    </button>
  )
}

export default MoodOption