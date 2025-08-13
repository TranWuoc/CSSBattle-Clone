import { createContext, useContext } from 'react';
import type { SolutionData, SolutionHistory } from '@/types/solutionData';
import usePersistedState from '@/hooks/usePersistedState';

interface SolutionContextType {
    solutionData: SolutionData | null;
    setSolutionData: (data: SolutionData | null) => void;
    solutionHistory: SolutionHistory;
    addSolutionToHistory: (taskId: string, solution: SolutionData) => void;
    getSolutionByTaskId: (taskId: string) => SolutionData | null;
    clearSolutionHistory: () => void;
}

const SolutionContext = createContext<SolutionContextType>({
    solutionData: null,
    setSolutionData: () => {},
    solutionHistory: {},
    addSolutionToHistory: () => {},
    getSolutionByTaskId: () => null,
    clearSolutionHistory: () => {},
});

export const SolutionProvider = ({ children }: { children: React.ReactNode }) => {
    const [solutionData, setSolutionData] = usePersistedState<SolutionData | null>('currentSolution', null);
    const [solutionHistory, setSolutionHistory] = usePersistedState<SolutionHistory>('solutionHistory', {});

    const addSolutionToHistory = (taskId: string, solution: SolutionData) => {
        console.log('💾 Adding solution to history:', { taskId, solution });

        setSolutionHistory({
            ...solutionHistory,
            [taskId]: solution,
        });
        setSolutionData(solution);
    };

    const getSolutionByTaskId = (taskId: string): SolutionData | null => {
        return solutionHistory[taskId] || null;
    };

    const clearSolutionHistory = () => {
        setSolutionHistory({});
        setSolutionData(null);
    };

    return (
        <SolutionContext.Provider
            value={{
                solutionData,
                setSolutionData,
                solutionHistory,
                addSolutionToHistory,
                getSolutionByTaskId,
                clearSolutionHistory,
            }}
        >
            {children}
        </SolutionContext.Provider>
    );
};

export const useSolutionContext = () => useContext(SolutionContext);
