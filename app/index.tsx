import Footer from '@/components/Footer'
import HomeContent from '@/components/HomeContent'
import { Image, StyleSheet, View } from 'react-native'

const Index = () => {
  return (
    <View style={style.container}>
      <Image
        source={require('../assets/logo.png')}
        style={style.logo}
      />
      <HomeContent />
      <Footer />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#021123',
    paddingTop: 104,
    paddingBottom: 40,
    paddingHorizontal: 20,
    gap: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    width: 157,
    height: 40,
  },
})

export default Index
