export default function TaskItem({ task, onToggleTask }) {
  return (
    <li className="flex items-center gap-3 px-4 py-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id)}
        className="h-4 w-4"
      />
      <span className="text-slate-800">{task.text}</span>
    </li>
  )
}