import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
      </Text>
      <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  footer: {
    width: '80%',
    marginTop: 'auto',
  },
  footerText: {
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5,
    fontWeight: '400',
  },
})

export default Footer
