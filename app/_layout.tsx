import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name='pomodoro'
          options={{ headerShown: false }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default Layout
