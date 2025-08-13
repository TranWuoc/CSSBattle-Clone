export type Answer = {
    taskId: string;
    answers: {
        html: string;
        css: string;
    };
    charactersCount: number;
};
