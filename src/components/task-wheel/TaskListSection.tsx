type TaskListSectionProps = {
  number: string
  title: string
  items: string[]
  placeholder: string
  inputLabel: string
  onAdd: (value: string) => void
  disabled: boolean
}

function TaskListSection({ number, title, items, placeholder, inputLabel, onAdd, disabled }: TaskListSectionProps) {
  function handleSubmit(form: HTMLFormElement) {
    const input = form.elements.namedItem('item')

    if (input instanceof HTMLInputElement && input.value.trim()) {
      onAdd(input.value)
      form.reset()
    }
  }

  return (
    <div className="task-list-section">
      <div className="task-list-heading"><span className="section-number">{number}</span><h2>{title}</h2></div>
      <div className="task-list">
        {items.map((item) => <span className="task-chip" key={item}>{item}</span>)}
      </div>
      <form className="task-input-row" onSubmit={(event) => { event.preventDefault(); handleSubmit(event.currentTarget) }}>
        <input name="item" aria-label={inputLabel} placeholder={placeholder} disabled={disabled} />
        <button type="submit" aria-label={inputLabel} disabled={disabled}>+</button>
      </form>
    </div>
  )
}

export default TaskListSection