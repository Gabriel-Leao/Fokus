import { ScreenProps } from '@/@types/ScreenComponentsType'
import { COLORS } from '@/constants/colors'
import { StyleSheet, View } from 'react-native'
import Footer from '../Footer'

const ScreenContainer = ({ children, customStyle }: ScreenProps) => {
  return (
    <View style={[styles.screenContainer, customStyle]}>
      {children}
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.DARK_BLUE,
    padding: 24,
    gap: 40,
  },
})

export default ScreenContainer
