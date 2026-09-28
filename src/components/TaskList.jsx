import TaskItem from './TaskItem.jsx'

export default function TaskList({ tasks }) {
  return (
    <ul className="mt-6 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}