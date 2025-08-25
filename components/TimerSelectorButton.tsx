import { TimerType } from '@/@types/TimerType'
import { Pressable, StyleSheet, Text } from 'react-native'

type TimerSelectorButtonProps = {
  active: boolean
  onPress: () => void
  timer: TimerType
}

const TimerSelectorButton = ({
  active,
  onPress,
  timer,
}: TimerSelectorButtonProps) => {
  return (
    <Pressable
      style={active ? styles.timerItemActive : {}}
      onPress={onPress}>
      <Text
        style={[styles.timerItemText, active && styles.timerItemTextActive]}>
        {timer.label}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  timerItemActive: {
    backgroundColor: '#144480',
    borderRadius: 8,
  },
  timerItemText: {
    fontSize: 12.5,
    color: '#fff',
    padding: 8,
    fontWeight: '400',
  },
  timerItemTextActive: {
    fontWeight: '700',
  },
})

export default TimerSelectorButton
