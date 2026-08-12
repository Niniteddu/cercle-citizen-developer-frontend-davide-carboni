import { useState } from 'react'

const moods = [
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
        <div className="mood-options" role="group" aria-label="Choisir son humeur">
          {moods.map((mood) => (
            <button className={`mood-option ${selectedMood === mood.label ? 'selected' : ''}`} key={mood.label} type="button" onClick={() => setSelectedMood(mood.label)}>
              <span className="mood-emoji" aria-hidden="true">{mood.emoji}</span>
              <span>{mood.label}</span>
            </button>
          ))}
        </div>
        {selectedMood && <p className="mood-confirmation" aria-live="polite">Votre humeur : <strong>{selectedMood}</strong></p>}
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