export type SolutionData = {
    percentMatch: number;
    scores: number;
    id: number;
    taskId: string;
    userId: number;
    answers: string;
    charactersCount: number;
    createdAt: string;
    updatedAt: string;
};

export type SolutionHistory = {
    [taskId: string]: SolutionData;
};
