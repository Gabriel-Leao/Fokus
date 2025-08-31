import { ScreenProps } from '@/@types/ScreenComponentsType'
import { COLORS } from '@/constants/colors'
import { StyleSheet, Text } from 'react-native'

const ScreenTitle = ({ children, customStyle }: ScreenProps) => {
  return <Text style={[styles.screenTitle, customStyle]}>{children}</Text>
}

const styles = StyleSheet.create({
  screenTitle: {
    color: COLORS.WHITE,
    fontSize: 37,
    textAlign: 'center',
  },
})

export default ScreenTitle
