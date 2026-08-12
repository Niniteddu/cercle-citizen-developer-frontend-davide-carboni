type SpinButtonProps = {
  isSpinning: boolean
  disabled: boolean
  onClick: () => void
}

function SpinButton({ isSpinning, disabled, onClick }: SpinButtonProps) {
  return (
    <button className="spin-button" type="button" disabled={disabled} onClick={onClick}>
      {isSpinning ? 'La roue tourne…' : 'Faire tourner la roue'} <span aria-hidden="true">↗</span>
    </button>
  )
}

export default SpinButton