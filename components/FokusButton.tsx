import { Pressable, StyleSheet, Text } from 'react-native'
import { ReactNode } from 'react'

type FokusButtonProps = {
  onPress: () => void
  title: string
  icon?: ReactNode
  customStyle?: object
}

const FokusButton = ({
  onPress,
  title,
  icon,
  customStyle,
}: FokusButtonProps) => {
  return (
    <Pressable
      style={[styles.button, customStyle]}
      onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: '600',
  },
})

export default FokusButton
