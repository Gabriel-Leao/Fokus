import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import { ROUTES } from '@/constants/routes'
import { COLORS } from '@/constants/colors'
import { StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { TasksProvider } from '@/components/context/TaskProvider'
import BackButton from '@/components/BackButton'

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: COLORS.DARK_BLUE,
    gap: 8,
    paddingTop: 24,
  },
  headerStyle: {
    backgroundColor: COLORS.DARK_BLUE,
    shadowColor: COLORS.TRANSPARENT,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  drawerLabelStyle: {
    fontSize: 22,
  },
  backButton: {
    width: 50,
    height: 40,
    padding: 8,
    alignItems: 'center',
  },
})

const screenOptions = {
  drawerStyle: styles.drawerStyle,
  headerStyle: styles.headerStyle,
  drawerLabelStyle: styles.drawerLabelStyle,
  headerTintColor: COLORS.WHITE,
  headerTitle: '',
  drawerActiveTintColor: COLORS.PURPLE,
  drawerInactiveTintColor: COLORS.WHITE,
  drawerActiveBackgroundColor: COLORS.TRANSPARENT,
}

const Layout = () => {
  const handleBackButtonPress = () => {
    router.navigate(ROUTES.TASKS.ROUTE)
  }

  return (
    <TasksProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={screenOptions}>
          <Drawer.Screen
            name={ROUTES.HOME.NAME}
            options={{
              headerShown: false,
              drawerItemStyle: { display: 'none' },
            }}
          />
          <Drawer.Screen
            name={ROUTES.ADD_TASK.NAME}
            options={{
              drawerItemStyle: { display: 'none' },
              headerLeft: () => <BackButton onPress={handleBackButtonPress} />,
            }}
          />
          <Drawer.Screen
            name={ROUTES.TIMER.NAME}
            options={{ title: ROUTES.TIMER.LABEL }}
          />
          <Drawer.Screen
            name={ROUTES.TASKS.NAME}
            options={{ title: ROUTES.TASKS.LABEL }}
          />
          <Drawer.Screen
            name={ROUTES.TASK.NAME}
            options={{
              drawerItemStyle: { display: 'none' },
              headerLeft: () => <BackButton onPress={handleBackButtonPress} />,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  )
}

export default Layout
