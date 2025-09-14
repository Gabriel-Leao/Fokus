import { Pressable, StyleSheet } from 'react-native'
import { IconLeftArrow } from './Icons'

type BackButtonProps = {
  onPress: () => void
}

const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <Pressable
      style={styles.backButton}
      onPress={onPress}>
      <IconLeftArrow />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  backButton: {
    width: 50,
    height: 40,
    padding: 8,
    alignItems: 'center',
  },
})

export default BackButton
