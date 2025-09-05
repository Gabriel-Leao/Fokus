import { Task } from "@/@types/TaskType";
import * as Crypto from 'expo-crypto';

export const createTask = (title: string): Task => ({
  id: Crypto.randomUUID(),
  title,
  completed: false,
})