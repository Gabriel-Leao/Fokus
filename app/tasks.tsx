import ScreenContainer from '@/components/screen/ScreenContainer'
import FokusButton from '@/components/FokusButton'
import { IconAddCircle } from '@/components/Icons'
import TaskItem from '@/components/TaskItem'
import { ROUTES } from '@/constants/routes'
import { router } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import ScreenTitle from '@/components/screen/ScreenTitle'
import { COLORS } from '@/constants/colors'
import { useTaskContext } from '@/components/context/useTaskContext'

const Tasks = () => {
  const { tasks, toggleTaskCompletion } = useTaskContext()

  const handleNavigateToAddTask = () => {
    router.navigate(ROUTES.ADD_TASK.ROUTE)
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
              onCheckToggle={() => toggleTaskCompletion(task.id)}
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
