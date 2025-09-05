import { Task } from '@/@types/TaskType'
import { createTask } from '@/utils/helpers'
import { createContext, useState } from 'react'

type TaskContextType = {
  tasks: Task[]
  addTask: (title: string) => void
  toggleTaskCompletion: (id: string) => void
  deleteTask: (id: string) => void
}

const taskList: Task[] = [
  {
    id: '80cdb346-df2a-403a-a194-cdb1a5021f8d',
    completed: true,
    title: 'Estudar react Native',
  },
  {
    id: '157b103c-316a-4070-9ba3-c8a20bc2a19d',
    completed: false,
    title: 'Estudar react',
  },
  {
    id: 'f53e9905-137d-4bad-bc98-58a6ff0b3c8a',
    completed: false,
    title: 'Lavar a louça',
  },
]

export const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TasksProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, setTasks] = useState<Task[]>(taskList)

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

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompletion, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
