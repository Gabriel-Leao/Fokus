import ScreenContainer from '@/components/screen/ScreenContainer'
import FokusButton from '@/components/FokusButton'
import { IconAddCircle } from '@/components/Icons'
import TaskItem from '@/components/TaskItem'
import { ROUTES } from '@/constants/routes'
import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import ScreenTitle from '@/components/screen/ScreenTitle'
import { useState } from 'react'
import { COLORS } from '@/constants/colors'

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
    router.navigate(ROUTES.ADD_TASK.ROUTE)
  }

  const onHandleToggleTask = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks)
  }

  return (
    <ScreenContainer>
      <ScreenTitle>Lista de tarefas:</ScreenTitle>

      {tasks.length > 0 ? (
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
      ) : (
        <Text style={styles.noTasksText}>
          Ainda não há tarefas na sua lista,{'\n'}que tal adicionar?
        </Text>
      )}

      <FokusButton
        title='Adicionar Tarefa'
        icon={<IconAddCircle />}
        onPress={handleNavigateToAddTask}
        customStyle={styles.fokusButton}
        outline
      />
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  tasks: {
    gap: 8,
  },
  noTasksText: {
    textAlign: 'center',
    color: COLORS.GREY,
    fontWeight: 'bold',
    fontSize: 18,
  },
  fokusButton: {
    marginTop: 'auto',
  },
})

export default Tasks
