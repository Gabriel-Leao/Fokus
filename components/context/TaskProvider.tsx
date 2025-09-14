import { Task } from '@/@types/TaskType'
import { createTask } from '@/utils/helpers'
import { createContext, useState } from 'react'

type TaskContextType = {
  tasks: Task[]
  addTask: (title: string) => void
  toggleTaskCompletion: (id: string) => void
  deleteTask: (id: string) => void
  editTask: (id: string, title: string) => void
  getTask: (id: string | undefined) => Task | undefined
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const getTask = (id: string | undefined) =>
    tasks.find((task) => task.id === id)

  const addTask = (title: string) => {
    setTasks((prev) => [...prev, createTask(title)])
  }

  const toggleTaskCompletion = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const editTask = (id: string, title: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: title } : t))
    )
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTaskCompletion,
        deleteTask,
        editTask,
        getTask,
      }}>
      {children}
    </TaskContext.Provider>
  )
}
