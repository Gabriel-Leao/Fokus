import { Pressable, StyleSheet, Text, View } from 'react-native'
import { IconCheck, IconEdit } from './Icons'
import { COLORS } from '@/constants/colors'
import { Task } from '@/@types/TaskType'

export type TaskItemProps = Omit<Task, 'id'> & {
  onEdit?: () => void
  onCheckToggle?: () => void
}

const TaskItem = ({
  title,
  completed,
  onEdit,
  onCheckToggle,
}: TaskItemProps) => {
  const cardStyles = completed
    ? [styles.card, styles.cardCompleted]
    : [styles.card]

  return (
    <View style={cardStyles}>
      <Pressable
        style={styles.checkButton}
        onPress={onCheckToggle}>
        <IconCheck checked={completed} />
      </Pressable>

      <Text style={styles.taskTitle}>{title}</Text>

      <Pressable
        style={styles.editButton}
        onPress={onEdit}>
        <IconEdit />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    minHeight: 64,
    borderRadius: 8,
    padding: 8,
    backgroundColor: COLORS.GREY,
  },
  cardCompleted: {
    backgroundColor: COLORS.DARK_GREEN,
  },
  checkButton: {},
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.DARK_BLUE,
    textAlign: 'left',
    marginLeft: 8,
  },
  editButton: {
    marginLeft: 'auto',
    borderWidth: 1,
    borderColor: COLORS.DARK_BLUE,
    borderRadius: 99999,
    padding: 8,
  },
})

export default TaskItem
