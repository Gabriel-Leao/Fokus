import { useContext } from "react"
import { TaskContext } from "./TaskProvider"

export const useTaskContext = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('tentando usar TaskContext fora do provider')
  }
  return context
}
