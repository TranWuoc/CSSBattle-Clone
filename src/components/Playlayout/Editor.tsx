import EditorPanel from './EditorPanel';
import CodeOutput from './CodeOutput';
import TargetPanel from './TargetPanel';
import usePersistedState from '@/hooks/usePersistedState';
import { useParams } from 'react-router-dom';
import { useUserSolution } from '@/hooks/useTaskList';
import type { Answer } from '@/types/answer';
import { useSolutionContext } from '@/Context/SolutionResultContext';
import { toast } from 'react-toastify';
interface EditorProps {
    value: string;
    onChangeHTML: (code: string) => void;
    onChangeCSS: (code: string) => void;
}

function Editor({ onChangeHTML, onChangeCSS }: EditorProps) {
    const { id } = useParams<{ id: string }>();
    const { mutate: userSolution, isPending } = useUserSolution();
    const { addSolutionToHistory, solutionData } = useSolutionContext();

    const [HTMLcode, setHTMLCode] = usePersistedState(
        `HTMLcode_${id}`,
        `<div></div>
`,
    );
    const [CSScode, setCSSCode] = usePersistedState(
        `CSScode_${id}`,
        `div {
    width: 100px;
    height: 100px;
    background: #dd6b4d;
  }
`,
    );
    const charactersCount = HTMLcode.length + CSScode.length;
    const handleHTMLChange = (value: string) => {
        setHTMLCode(value);
        onChangeHTML?.(value);
    };
    const handleCSSChange = (value: string) => {
        setCSSCode(value);
        onChangeCSS?.(value);
    };
    const handleSubmit = (htmlCode: string, cssCode: string, charactersCount: number) => {
        if (!id) {
            throw new Error('task id id required');
        }
        const answer: Answer = {
            taskId: id,
            answers: {
                html: htmlCode,
                css: cssCode,
            },
            charactersCount: charactersCount,
        };
        userSolution(answer, {
            onSuccess: (data) => {
                addSolutionToHistory(id, data);
                toast(`You scored ${data.scores} with ${data.percentMatch}% match`, {
                    position: 'bottom-right',
                    autoClose: 3000,
                });
            },
        });
    };

    return (
        <div className="flex h-full">
            <EditorPanel
                HTMLcode={HTMLcode}
                CSScode={CSScode}
                onHTMLCodeChange={handleHTMLChange}
                onCSSCodeChange={handleCSSChange}
                onSubmit={() => handleSubmit(HTMLcode, CSScode, charactersCount)}
                isLoading={isPending}
            />
            <CodeOutput HTMLcode={HTMLcode} CSScode={CSScode} />
            <TargetPanel />
        </div>
    );
}
export default Editor;
