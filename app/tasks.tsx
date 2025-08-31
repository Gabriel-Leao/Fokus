import ScreenContainer from '@/components/screen/ScreenContainer'
import FokusButton from '@/components/FokusButton'
import Footer from '@/components/Footer'
import { IconAddCircle } from '@/components/Icons'
import TaskItem from '@/components/TaskItem'
import { Routes } from '@/constants/routes'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'
import ScreenTitle from '@/components/screen/ScreenTitle'
import { useState } from 'react'

const taskList = [
  {
    id: 1,
    completed: true,
    title: 'Estudar react Native',
  },
  {
    id: 2,
    completed: false,
    title: 'Estudar react',
  },
  {
    id: 3,
    completed: false,
    title: 'Lavar a louça',
  },
]

const Tasks = () => {
  const [tasks, setTasks] = useState(taskList)

  const handleNavigateToAddTask = () => {
    router.navigate(`/${Routes.ADD_TASK.route}`)
  }

  const onHandleToggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <ScreenContainer customStyle={styles.containerCustom}>
      <ScreenTitle>Lista de tarefas:</ScreenTitle>

      <View style={styles.tasks}>
        {tasks.map((task) => (
          <TaskItem
            key={task.title}
            title={task.title}
            completed={task.completed}
            onCheckToggle={() => onHandleToggleTask(task.id)}
          />
        ))}
      </View>

      <FokusButton
        title='Adicionar Tarefa'
        icon={<IconAddCircle />}
        onPress={handleNavigateToAddTask}
        customStyle={styles.fokusButton}
        outline
      />

      <Footer />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  containerCustom: {
    gap: 24,
  },
  tasks: {
    gap: 8,
  },
  fokusButton: {
    marginTop: 'auto',
  },
})

export default Tasks
