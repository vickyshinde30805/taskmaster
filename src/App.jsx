import { useState } from 'react'
import AddTaskForm from './components/AddTaskForm.jsx'
import TaskList from './components/TaskList.jsx'

const INITIAL_TASKS = [
  { id: 'a1', text: 'Read the project brief', completed: true },
  { id: 'a2', text: 'Build the layout shell', completed: false },
  { id: 'a3', text: 'Style the task rows', completed: false },
]

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  function addTask(text) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: crypto.randomUUID(), text, completed: false },
    ])
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold text-indigo-600">TaskMaster</h1>
      <AddTaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} />
    </main>
  )
}