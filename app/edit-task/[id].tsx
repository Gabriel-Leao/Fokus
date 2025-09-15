import { useLocalSearchParams } from 'expo-router'
import ScreenContainer from '@/components/screen/ScreenContainer'
import ScreenTitle from '@/components/screen/ScreenTitle'
import TaskForm from '@/components/taskForm/Index'
import FormWrapper from '@/components/FormWrapper'
import { View } from 'react-native'
import { useTaskContext } from '@/components/context/useTaskContext'

const EditTask = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { getTask } = useTaskContext()
  const task = getTask(id)

  if (!task) {
    return (
      <ScreenContainer>
        <ScreenTitle>Tarefa não encontrada</ScreenTitle>
      </ScreenContainer>
    )
  }

  return (
    <ScreenContainer>
      <FormWrapper>
        <View style={{ gap: 40 }}>
          <ScreenTitle>Editar tarefa:</ScreenTitle>
          <TaskForm task={task} />
        </View>
      </FormWrapper>
    </ScreenContainer>
  )
}

export default EditTask
