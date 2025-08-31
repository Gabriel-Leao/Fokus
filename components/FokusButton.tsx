import { Pressable, StyleSheet, Text } from 'react-native'
import { ReactNode } from 'react'
import { COLORS } from '@/constants/colors'

type FokusButtonProps = {
  onPress: () => void
  title: string
  icon?: ReactNode
  customStyle?: object
  customTextStyle?: object
  outline?: boolean
}

const FokusButton = ({
  onPress,
  title,
  icon,
  customStyle,
  customTextStyle,
  outline,
}: FokusButtonProps) => {
  return (
    <Pressable
      style={[styles.button, outline && styles.outlineButton, customStyle]}
      onPress={onPress}>
      {icon}
      <Text
        style={[
          styles.buttonText,
          outline && styles.outlineButtonText,
          customTextStyle,
        ]}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.PURPLE,
    borderRadius: 32,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.DARK_BLUE,
    fontSize: 18,
    fontWeight: '600',
  },
  outlineButton: {
    backgroundColor: COLORS.TRANSPARENT,
    borderWidth: 2,
    borderColor: COLORS.PURPLE,
  },
  outlineButtonText: {
    color: COLORS.PURPLE,
  },
})

export default FokusButton
