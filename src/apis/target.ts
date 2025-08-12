import http from './axios';
import type { Task } from '@/types/task';

export const getTasks = async (): Promise<Task[]> => {
    const response = await http.get<{ data: Task[] }>('/api/tasks');
    return response.data.data;
};
