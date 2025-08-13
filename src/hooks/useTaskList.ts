import { getTasks, userSolution } from '@/apis/target';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const taskApiKeys = {
    getList: 'tasks',
    postSolution: 'user-solutions',
};

export const useGetTaskList = () =>
    useQuery({
        queryKey: [taskApiKeys.getList],
        queryFn: getTasks,
    });

export const useUserSolution = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userSolution,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: [taskApiKeys.postSolution] }),
        onError: (error) => console.log(error),
    });
};
