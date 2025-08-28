import Actions from '@/components/Actions'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'

const timers = [
  {
    id: 'focus',
    initialValue: 25 * 60,
    image: require('../assets/images/foco_image.png'),
    label: 'Foco',
  },
  {
    id: 'short_break',
    initialValue: 5 * 60,
    image: require('../assets/images/short_break.png'),
    label: 'Pausa curta',
  },
  {
    id: 'long_break',
    initialValue: 15 * 60,
    image: require('../assets/images/long_break.png'),
    label: 'Pausa longa',
  },
]

const Pomodoro = () => {
  const [activeTimer, setActiveTimer] = useState(timers[0])

  return (
    <View style={styles.container}>
      <Image
        source={activeTimer.image}
        style={styles.image}
      />
      <Actions
        activeTimer={activeTimer}
        setActiveTimer={setActiveTimer}
        timers={timers}
      />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#021123',
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 40,
  },
  image: {
    width: 318,
    height: 267,
    resizeMode: 'contain',
  },
})

export default Pomodoro
