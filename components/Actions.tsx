import { StyleSheet, View } from 'react-native'
import TimerSelectorButton from './TimerSelectorButton'
import FokusButton from './FokusButton'
import { TimerType } from '@/@types/TimerType'
import Timer from './Timer'
import { useRef, useState } from 'react'
import {IconPause, IconPlay} from "@/components/Icons";

type ActionsProps = {
  activeTimer: TimerType
  setActiveTimer: (type: TimerType) => void
  timers: TimerType[]
}

const Actions = ({ activeTimer, setActiveTimer, timers }: ActionsProps) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [totalSeconds, setTotalSeconds] = useState(activeTimer.initialValue)
  const timerRef = useRef<number | null>(null)

  const resetTimer = () => {
    clearInterval(timerRef.current!)
    timerRef.current = null
    setIsTimerRunning(false)
  }

  const toggleActiveTimer = (newActiveTimer: TimerType) => {
    resetTimer()
    setActiveTimer(newActiveTimer)
    setTotalSeconds(newActiveTimer.initialValue)
  }

  const toggleTimer = () => {
    if (timerRef.current) {
      resetTimer()
      return
    }
    setIsTimerRunning(true)
    const id = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev === 0) {
          resetTimer()
          return activeTimer.initialValue
        }
        return prev - 1
      })
    }, 1000)
    timerRef.current = id
  }

  return (
    <View style={styles.actions}>
      <View style={styles.timerSelector}>
        {timers.map((timer) => (
          <TimerSelectorButton
            key={timer.id}
            active={activeTimer.id === timer.id}
            onPress={() => toggleActiveTimer(timer)}
            timer={timer}
          />
        ))}
      </View>
      <Timer totalSeconds={totalSeconds} />
      <FokusButton
        onPress={toggleTimer}
        title={isTimerRunning ? 'Pausar' : 'Começar'}
        icon={isTimerRunning ? <IconPause /> : <IconPlay /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  timerSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
})

export default Actions
