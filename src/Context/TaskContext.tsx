import { createContext, useContext, useState } from 'react';
import type { Task } from '@/types/task';
interface TaskContextType {
    selectedTask: Task | null;
    setSelectedTask: (task: Task | null) => void;
}

const TaskContext = createContext<TaskContextType>({
    selectedTask: null,
    setSelectedTask: () => {},
});

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(null);

    return <TaskContext.Provider value={{ selectedTask, setSelectedTask }}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => useContext(TaskContext);
