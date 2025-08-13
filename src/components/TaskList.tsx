import { useSolutionContext } from '@/Context/SolutionResultContext';
import { useTaskContext } from '@/Context/TaskContext';
import { useGetTaskList } from '@/hooks/useTaskList';
import type { Task } from '@/types/task';
import { formatDate } from '@/utils/formatDate';
import { useNavigate } from 'react-router-dom';

function TaskList() {
    const { data: taskList } = useGetTaskList();
    const { setSelectedTask } = useTaskContext();
    const { getSolutionByTaskId } = useSolutionContext();
    const navigate = useNavigate();
    const handlePlayTask = (task: Task) => {
        setSelectedTask(task);
        navigate(`play/${task.id}`, { state: { task } });
    };
    return (
        <div className="flex items-start justify-start gap-[32px]">
            <div className="flex pl-[110px]">
                {(taskList ?? []).map((task: Task) => (
                    <div key={task.id} className="!pl-[40px] pr-0" onClick={() => handlePlayTask(task)}>
                        <div className="flex flex-col items-center justify-start gap-[16px]">
                            <div
                                className="inline-flex h-[25px] w-[66px] items-center justify-center rounded-[4px] bg-[#2d363f] px-[3.2px] py-[8px] text-[0.875rem] font-semibold uppercase text-[#cbd1e1]"
                                style={{
                                    whiteSpace: 'nowrap',
                                    transition: 'background-color 0.2s ease',
                                    boxShadow: 'inset 1px 1px 2px hsla(0,0%,100%,.1)',
                                }}
                            >
                                {formatDate(task.createdAt)}
                            </div>
                            <div className="target-tile--daily target-tile h-[246px] w-[236px]">
                                <a
                                    className="shadow-link"
                                    title={`Play target for ${formatDate(task.createdAt)}, 2025`}
                                ></a>
                                <img
                                    src={`http://localhost:8080/${task.image}`}
                                    alt=""
                                    loading="eager"
                                    className="target-tile__image"
                                ></img>
                                <div className="px-[16px] pb-[8px] pt-[16px]">
                                    <div className="flex items-center justify-between gap-[16px]">
                                        <div className="font-[16px]">
                                            <div className="flex flex-col items-start justify-start gap-0">
                                                <p className="font-['Clash Frotesk'] font-semibold text-[#6b7b8e]">
                                                    Your Score
                                                </p>
                                                <p className="font-['IBM_Plex_Mono'] font-semibold text-[#a0b3c6]">
                                                    {getSolutionByTaskId(task.id)?.scores !== undefined
                                                        ? `${getSolutionByTaskId(task.id)!.scores.toFixed(2)} {${getSolutionByTaskId(task.id)?.charactersCount ?? 0}}`
                                                        : 'Not played'}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-start gap-[8px]">
                                            <img
                                                height="18"
                                                width="37"
                                                src="	https://cssbattle.dev/images/pro-badge.svg"
                                                alt="Pro badge"
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskList;
