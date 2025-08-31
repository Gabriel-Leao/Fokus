import Actions from '@/components/Actions'
import ScreenContainer from '@/components/screen/ScreenContainer'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { Image, StyleSheet } from 'react-native'

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

const Timer = () => {
  const [activeTimer, setActiveTimer] = useState(timers[0])

  return (
    <ScreenContainer>
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
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 318,
    height: 267,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
})

export default Timer
