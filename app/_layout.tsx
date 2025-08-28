import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import { Routes } from '@/constants/routes'

const screenOptions = {
  drawerStyle: {
    backgroundColor: '#021123',
    gap: 8,
    paddingTop: 24,
  },
  headerStyle: {
    backgroundColor: '#021123',
  },
  drawerLabelStyle: {
    fontSize: 22,
  },
  headerTintColor: '#FFF',
  headerTitle: '',
  drawerActiveTintColor: '#B872FF',
  drawerInactiveTintColor: '#FFF',
  drawerActiveBackgroundColor: 'transparent',
}

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={screenOptions}>
        <Drawer.Screen
          name={Routes.HOME.route}
          options={{ headerShown: false, drawerItemStyle: { display: 'none' } }}
        />
        <Drawer.Screen
          name={Routes.ADD_TASK.route}
          options={{
            title: Routes.ADD_TASK.label,
            drawerItemStyle: { display: 'none' },
          }}
        />
        <Drawer.Screen
          name={Routes.TIMER.route}
          options={{ title: Routes.TIMER.label }}
        />
        <Drawer.Screen
          name={Routes.TASKS.route}
          options={{ title: Routes.TASKS.label }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default Layout
