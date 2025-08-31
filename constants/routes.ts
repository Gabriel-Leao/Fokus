import { Href } from "expo-router";

export const ROUTES = {
  HOME: {
    ROUTE: '/' as Href,
    LABEL: 'Home',
    NAME: 'index'
  },
  ADD_TASK: {
    ROUTE: '/add-task' as Href,
    LABEL: 'Adicionar Tarefa',
    NAME: 'add-task'
  },
  TASKS: {
    ROUTE: '/tasks' as Href,
    LABEL: 'Lista de tarefas',
    NAME: 'tasks'
  },
  TIMER: {
    ROUTE: '/timer' as Href,
    LABEL: 'Timer',
    NAME: 'timer'
  },
} as const
