import { router } from 'expo-router'
import { Image, StyleSheet, Text, View } from 'react-native'
import FokusButton from './FokusButton'
import { Routes } from '@/constants/routes'

const HomeContent = () => {
  const handleNavigateToPomodoro = () => {
    router.navigate(`/${Routes.TIMER.route}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.thinText}>
        Otimize sua{'\n'}produtividade,{'\n'}
        <Text style={styles.regularText}>mergulhe no que{'\n'}importa.</Text>
      </Text>
      <Image
        source={require('../assets/images/home.png')}
        style={styles.image}
      />
      <FokusButton
        title='Quero Iniciar'
        onPress={handleNavigateToPomodoro}
        customStyle={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
  thinText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'ultralight',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 26,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 318,
    height: 267,
    resizeMode: 'contain',
  },
  button: {
    width: 264,
    height: 40,
  },
})

export default HomeContent
