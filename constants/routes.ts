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
    ROUTE: "/tasks" as Href, // não precisa do index
    LABEL: "Lista de tarefas",
    NAME: "tasks/index",
  },
  TASK: {
    ROUTE: "/tasks/[id]" as Href, // precisa bater com o nome do arquivo
    LABEL: "Tarefa",
    NAME: "tasks/[id]",
    withId: (id: string): Href => `/tasks/${id}` as Href,
  },
  TIMER: {
    ROUTE: '/timer' as Href,
    LABEL: 'Timer',
    NAME: 'timer'
  },
} as const
