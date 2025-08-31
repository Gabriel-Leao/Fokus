import { COLORS } from '@/constants/colors'
import { ReactNode } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type FormButtonProps = {
  icon: ReactNode
  label: string
}

const FormButton = ({ icon, label }: FormButtonProps) => {
  return (
    <Pressable style={styles.button}>
      {icon}
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  text: {
    color: COLORS.DARK_BLUE,
    fontWeight: 'bold',
    fontSize: 12.5,
  },
})

export default FormButton
