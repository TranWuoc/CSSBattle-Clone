import http from './axios';
import type { Task } from '@/types/task';

export const getTasks = async () => {
    const res = await http.get<{ data: Task[] }>('api/tasks');
    return res.data.data;
};

export const getOneTask = async (id: string) => {
    const res = await http.get<{ data: Task }>(`api/tasks/${id}`);
    return res.data.data;
};
