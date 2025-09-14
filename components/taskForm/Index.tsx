import { COLORS } from '@/constants/colors'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import FormButton from './FormButton'
import { IconDelete, IconSave } from '../Icons'
import { useTaskContext } from '../context/useTaskContext'
import { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { ROUTES } from '@/constants/routes'
import { TaskFormProps } from '@/@types/TaskFormType'

const TaskForm = ({ task }: TaskFormProps) => {
  const { addTask, deleteTask, editTask } = useTaskContext()
  const [taskTitle, setTaskTitle] = useState('')

  useEffect(() => {
    setTaskTitle(task?.title ?? '')
  }, [task])

  const handleBackToTasks = () => {
    router.push(ROUTES.TASKS.ROUTE)
  }

  const clearForm = () => {
    setTaskTitle('')
    handleBackToTasks()
  }

  const handleSubmitTask = () => {
    if (taskTitle.trim() === '') return
    if (task) {
      editTask(task.id, taskTitle)
    } else {
      addTask(taskTitle)
    }
    clearForm()
  }

  const handleDeleteTask = () => {
    if (!task) return
    deleteTask(task?.id)
    clearForm()
  }

  return (
    <View style={styles.taskForm}>
      <Text style={styles.taskFormTitle}>
        Em que que você está{'\n'}trabalhando?
      </Text>
      <TextInput
        style={styles.input}
        numberOfLines={4}
        multiline={true}
        value={taskTitle}
        onChangeText={setTaskTitle}
      />
      <View style={styles.buttonContainer}>
        <FormButton
          icon={<IconDelete />}
          label='Deletar'
          onPress={handleDeleteTask}
        />
        <FormButton
          icon={<IconSave />}
          label='Salvar'
          onPress={handleSubmitTask}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  taskForm: {
    backgroundColor: COLORS.GREY,
    gap: 32,
    padding: 16,
    borderRadius: 8,
  },
  taskFormTitle: {
    color: COLORS.DARK_BLUE,
    fontSize: 18,
    fontWeight: '600',
  },
  input: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 8,
    padding: 16,
    textAlignVertical: 'top',
    minHeight: 120,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    justifyContent: 'flex-end',
  },
})

export default TaskForm
