import { COLORS } from '@/constants/colors'
import { StyleSheet, Text } from 'react-native'

type TimerProps = {
  totalSeconds: number
}

const Timer = ({ totalSeconds }: TimerProps) => {
  const dateOptions: Intl.DateTimeFormatOptions = {
    minute: '2-digit',
    second: '2-digit',
  }

  const seconds = new Date(totalSeconds * 1000).toLocaleTimeString(
    'pt-BR',
    dateOptions
  )

  return <Text style={styles.timer}>{seconds}</Text>
}

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.WHITE,
  },
})

export default Timer
