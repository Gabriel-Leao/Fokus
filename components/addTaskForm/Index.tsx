import { COLORS } from '@/constants/colors'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import FormButton from './FormButton'
import { IconDelete, IconSave } from '../Icons'

const AddTaskForm = () => {
  return (
    <View style={styles.addTaskForm}>
      <Text style={styles.addTaskFormTitle}>
        Em que que você está{'\n'}trabalhando?
      </Text>
      <TextInput
        style={styles.input}
        numberOfLines={4}
      />
      <View style={styles.buttonContainer}>
        <FormButton
          icon={<IconDelete />}
          label='Deletar'
        />
        <FormButton
          icon={<IconSave />}
          label='Salvar'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addTaskForm: {
    backgroundColor: COLORS.GREY,
    gap: 32,
    padding: 16,
    borderRadius: 8,
  },
  addTaskFormTitle: {
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
    marginLeft: 'auto',
  },
})

export default AddTaskForm
