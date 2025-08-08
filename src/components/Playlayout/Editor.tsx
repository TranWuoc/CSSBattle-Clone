import { useEffect, useState } from 'react';
import EditorPanel from './EditorPanel';
import CodeOutput from './CodeOutput';
import TargetPanel from './TargetPanel';

interface EditorProps {
    value: string;
    onChangeHTML: (code: string) => void;
    onChangeCSS: (code: string) => void;
}

function Editor({ onChangeHTML, onChangeCSS }: EditorProps) {
    const [HTMLcode, setHTMLCode] = useState(`<div></div>
`);
    const [CSScode, setCSSCode] = useState(`div {
    width: 100px;
    height: 100px;
    background: #dd6b4d;
  }
`);

    const handleHTMLChange = (value: string) => {
        setHTMLCode(value);
        onChangeHTML?.(value);
    };
    const handleCSSChange = (value: string) => {
        setCSSCode(value);
        onChangeCSS?.(value);
    };

    return (
        <div className="flex h-full">
            <EditorPanel
                HTMLcode={HTMLcode}
                CSScode={CSScode}
                onHTMLCodeChange={handleHTMLChange}
                onCSSCodeChange={handleCSSChange}
            />
            <CodeOutput HTMLcode={HTMLcode} CSScode={CSScode} />
            <TargetPanel color="" />
        </div>
    );
}

export default Editor;
