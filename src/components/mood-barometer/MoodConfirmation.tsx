type MoodConfirmationProps = {
  mood: string | null
}

function MoodConfirmation({ mood }: MoodConfirmationProps) {
  if (!mood) {
    return null
  }

  return <p className="mood-confirmation" aria-live="polite">Votre humeur : <strong>{mood}</strong></p>
}

export default MoodConfirmation