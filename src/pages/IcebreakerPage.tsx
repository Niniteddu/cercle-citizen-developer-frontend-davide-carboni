import { useState } from 'react'

const prompts = [
  'Quel petit succès mérite d’être célébré cette semaine ?',
  'Si cette équipe avait une bande-son, quelle chanson choisiriez-vous ?',
  'Quelle compétence aimeriez-vous apprendre cette année ?',
  'Quel objet vous accompagne toujours pendant une journée de travail ?',
]

function IcebreakerPage() {
  const [prompt, setPrompt] = useState(prompts[0])

  function drawPrompt() {
    const availablePrompts = prompts.filter((candidate) => candidate !== prompt)
    setPrompt(availablePrompts[Math.floor(Math.random() * availablePrompts.length)])
  }

  return (
    <section className="ritual-page icebreaker-page">
      <div className="ritual-copy">
        <p className="eyebrow">Objectif 02 · Brise-glace</p>
        <h1>Ouvrir la<br /><em>conversation.</em></h1>
        <p className="ritual-label">Question du jour</p>
        <blockquote className="icebreaker-prompt">{prompt}</blockquote>
        <button className="spin-button" type="button" onClick={drawPrompt}>
          Une autre question <span aria-hidden="true">↗</span>
        </button>
      </div>
      <div className="ritual-art icebreaker-art" aria-hidden="true">
        <span className="ritual-art-number">02</span>
        <div className="speech-orbit"></div>
        <span className="speech-mark">?</span>
        <span className="ritual-art-word">parler<br /><strong>ensemble</strong></span>
      </div>
    </section>
  )
}

export default IcebreakerPage