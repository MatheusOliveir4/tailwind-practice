import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/MatheusOliveir4.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Matheus Oliveira
        </span>
        <span className="truncate text-sm text-zinc-500">
          matheus@gmail.com
        </span>
      </div>

      <button
        type="button"
        className="group ml-auto rounded-md p-2 hover:bg-zinc-50"
      >
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-red-500" />
      </button>
    </div>
  )
}
