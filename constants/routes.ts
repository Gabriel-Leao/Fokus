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
    ROUTE: "/tasks" as Href,
    LABEL: "Lista de tarefas",
    NAME: "tasks",
  },
  TASK: {
    ROUTE: "/edit-task/" as Href,
    LABEL: "Tarefa",
    NAME: "edit-task/[id]",
    withId: (id: string): Href => `/edit-task/${id}` as Href,
  },
  TIMER: {
    ROUTE: '/timer' as Href,
    LABEL: 'Timer',
    NAME: 'timer'
  },
} as const
