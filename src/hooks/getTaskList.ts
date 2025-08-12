import { getTasks } from '@/apis/target';
import { useQuery } from '@tanstack/react-query';

const taskApiKeys = {
    getList: 'tasks',
};

export const useGetTaskList = () => [
    useQuery({
        queryKey: [taskApiKeys.getList],
        queryFn: getTasks,
        select: (res) => res.data,
    }),
];
