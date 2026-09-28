import { useState } from 'react'

export default function AddTaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const text = taskText.trim()

    if (!text) return

    onAddTask(text)
    setTaskText('')
  }

  return (
    <form className="mt-6 flex gap-2" onSubmit={handleSubmit}>
      <input
        className="flex-1 rounded-lg border border-slate-300 px-3 py-2"
        placeholder="What needs doing?"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)}
      />
      <button type="submit" className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white">
        Add
      </button>
    </form>
  )
}