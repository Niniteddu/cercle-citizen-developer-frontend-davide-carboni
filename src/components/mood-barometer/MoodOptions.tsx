import MoodOption from './MoodOption'

export type Mood = {
  emoji: string
  label: string
}

type MoodOptionsProps = {
  moods: Mood[]
  selectedMood: string | null
  onSelect: (label: string) => void
}

function MoodOptions({ moods, selectedMood, onSelect }: MoodOptionsProps) {
  return (
    <div className="mood-options" role="group" aria-label="Choisir son humeur">
      {moods.map((mood) => (
        <MoodOption key={mood.label} emoji={mood.emoji} label={mood.label} isSelected={selectedMood === mood.label} onSelect={() => onSelect(mood.label)} />
      ))}
    </div>
  )
}

export default MoodOptions