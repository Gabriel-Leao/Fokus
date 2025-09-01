import { COLORS } from '@/constants/colors'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import FormButton from './FormButton'
import { IconDelete, IconSave } from '../Icons'

const AddTaskForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.addTaskForm}>
          <Text style={styles.addTaskFormTitle}>
            Em que que você está{'\n'}trabalhando?
          </Text>
          <TextInput
            style={styles.input}
            numberOfLines={4}
            multiline={true}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    justifyContent: 'flex-end',
  },
})

export default AddTaskForm
