type DrawPromptButtonProps = {
  onDraw: () => void
}

function DrawPromptButton({ onDraw }: DrawPromptButtonProps) {
  return (
    <button className="spin-button" type="button" onClick={onDraw}>
      Une autre question <span aria-hidden="true">↗</span>
    </button>
  )
}

export default DrawPromptButton