import { useState } from 'react'
import MoodConfirmation from '../components/mood-barometer/MoodConfirmation'
import MoodOptions, { type Mood } from '../components/mood-barometer/MoodOptions'

const moods: Mood[] = [
  { emoji: '☀', label: 'En forme' },
  { emoji: '◒', label: 'Ça va' },
  { emoji: '☁', label: 'Fatigué·e' },
  { emoji: '≋', label: 'Besoin d’aide' },
]

function MoodBarometerPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  return (
    <section className="ritual-page mood-page">
      <div className="ritual-copy">
        <p className="eyebrow">Objectif 03 · Baromètre d’humeur</p>
        <h1>Prendre le<br /><em>pouls.</em></h1>
        <p className="ritual-description">Comment arrivez-vous aujourd’hui ? Choisissez une humeur pour donner une couleur au début de la réunion.</p>
        <MoodOptions moods={moods} selectedMood={selectedMood} onSelect={setSelectedMood} />
        <MoodConfirmation mood={selectedMood} />
      </div>
      <div className="ritual-art mood-art" aria-hidden="true">
        <span className="ritual-art-number">03</span>
        <div className="mood-sun"></div>
        <div className="mood-line"></div>
        <span className="ritual-art-word">tous les<br /><strong>états comptent</strong></span>
      </div>
    </section>
  )
}

export default MoodBarometerPage