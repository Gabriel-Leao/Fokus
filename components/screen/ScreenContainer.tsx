import { ScreenProps } from '@/@types/ScreenComponentsType'
import { COLORS } from '@/constants/colors'
import { SafeAreaView, StyleSheet } from 'react-native'
import Footer from '../Footer'

const ScreenContainer = ({ children, customStyle }: ScreenProps) => {
  return (
    <SafeAreaView style={[styles.screenContainer, customStyle]}>
      {children}
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.DARK_BLUE,
    paddingVertical: 40,
    paddingHorizontal: 24,
    gap: 40,
  },
})

export default ScreenContainer
