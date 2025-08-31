import ScreenContainer from '@/components/screen/ScreenContainer'
import Footer from '@/components/Footer'
import HomeContent from '@/components/HomeContent'
import { Image, StyleSheet } from 'react-native'

const Index = () => {
  return (
    <ScreenContainer>
      <Image
        source={require('../assets/logo.png')}
        style={style.logo}
      />
      <HomeContent />
      <Footer />
    </ScreenContainer>
  )
}

const style = StyleSheet.create({
  logo: {
    width: 157,
    height: 40,
    alignSelf: 'center',
  },
})

export default Index
