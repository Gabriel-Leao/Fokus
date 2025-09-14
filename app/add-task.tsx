import ScreenContainer from '@/components/screen/ScreenContainer'
import ScreenTitle from '@/components/screen/ScreenTitle'
import FormWrapper from '@/components/FormWrapper'
import TaskForm from '@/components/taskForm/Index'
import { View } from 'react-native'

const AddTask = () => {
  return (
    <ScreenContainer>
      <FormWrapper>
        <View style={{ gap: 40 }}>
          <ScreenTitle>Adicionar tarefa:</ScreenTitle>
          <TaskForm />
        </View>
      </FormWrapper>
    </ScreenContainer>
  )
}

export default AddTask
