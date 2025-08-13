import http from './axios';
import type { Task } from '@/types/task';
import type { Answer } from '@/types/answer';

export const getTasks = async () => {
    const res = await http.get<{ data: Task[] }>('api/tasks');
    return res.data.data;
};

export const getOneTask = async (id: string) => {
    const res = await http.get<{ data: Task }>(`api/tasks/${id}`);
    return res.data.data;
};

export const userSolution = async (answer: Answer) => {
    const res = await http.post('api/user-solutions', answer);
    console.log(res.data.data);
    return res.data.data;
};
