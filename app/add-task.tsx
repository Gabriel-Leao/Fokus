import AddTaskForm from '@/components/addTaskForm/Index'
import ScreenContainer from '@/components/screen/ScreenContainer'
import ScreenTitle from '@/components/screen/ScreenTitle'

const AddTask = () => {
  return (
    <ScreenContainer>
      <ScreenTitle>Adicionar tarefa:</ScreenTitle>
      <AddTaskForm />
    </ScreenContainer>
  )
}

export default AddTask
