export default function AddTaskForm() {
  return (
    <form className="mt-6 flex gap-2">
      <input
        className="flex-1 rounded-lg border border-slate-300 px-3 py-2"
        placeholder="What needs doing?"
      />
      <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white">
        Add
      </button>
    </form>
  )
}