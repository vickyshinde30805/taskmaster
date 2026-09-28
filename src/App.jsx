import AddTaskForm from './components/AddTaskForm.jsx'
import TaskList from './components/TaskList.jsx'

const INITIAL_TASKS = [
  { id: 'a1', text: 'Read the project brief', completed: true },
  { id: 'a2', text: 'Build the layout shell', completed: false },
  { id: 'a3', text: 'Style the task rows', completed: false },
]

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold text-indigo-600">TaskMaster</h1>
      <AddTaskForm />
      <TaskList tasks={INITIAL_TASKS} />
    </main>
  )
}