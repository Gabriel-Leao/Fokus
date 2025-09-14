import ScreenContainer from '@/components/screen/ScreenContainer'
import FokusButton from '@/components/FokusButton'
import { IconAddCircle } from '@/components/Icons'
import TaskItem from '@/components/TaskItem'
import { ROUTES } from '@/constants/routes'
import { router } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import ScreenTitle from '@/components/screen/ScreenTitle'
import { COLORS } from '@/constants/colors'
import { useTaskContext } from '@/components/context/useTaskContext'

const Tasks = () => {
  const { tasks, toggleTaskCompletion } = useTaskContext()

  const handleNavigateToAddTask = () => {
    router.navigate(ROUTES.ADD_TASK.ROUTE)
  }

  const handleNavigateToEditTask = (id: string) => {
    router.navigate(ROUTES.TASK.withId(id))
  }

  return (
    <ScreenContainer>
      <ScreenTitle>Lista de tarefas:</ScreenTitle>

      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskItem
              title={item.title}
              completed={item.completed}
              onCheckToggle={() => toggleTaskCompletion(item.id)}
              onEdit={() => handleNavigateToEditTask(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={styles.tasksSeparator} />}
        />
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
  tasksSeparator: {
    height: 8,
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
