import { createContext, useContext } from 'react';
import type { Task } from '@/types/task';
import usePersistedState from '@/hooks/usePersistedState';
interface TaskContextType {
    selectedTask: Task | null;
    setSelectedTask: (task: Task | null) => void;
}

const TaskContext = createContext<TaskContextType>({
    selectedTask: null,
    setSelectedTask: () => {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedTask, setSelectedTask] = usePersistedState<Task | null>('selectedTask', null);

    return <TaskContext.Provider value={{ selectedTask, setSelectedTask }}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => useContext(TaskContext);
