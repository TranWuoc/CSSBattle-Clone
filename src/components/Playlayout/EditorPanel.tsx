import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { EditorView } from '@codemirror/view';
import { duotoneDark } from '@uiw/codemirror-themes-all';
import { useAuth } from '@/Context/AuthContext';
import Dropdown from '../Dropdown';
import DropdownItem from '../DropdownItem';

interface EditorPanelProps {
    HTMLcode: string;
    CSScode: string;
    onHTMLCodeChange: (value: string) => void;
    onCSSCodeChange: (value: string) => void;
}

function EditorPanel({ HTMLcode, CSScode, onHTMLCodeChange, onCSSCodeChange }: EditorPanelProps) {
    const { isAuthenticated } = useAuth();

    const settingEdit = (
        <button className="flex h-[20px] w-[35px] cursor-pointer items-center rounded-[40px] bg-[#323f4a] pl-[5px] shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path>
            </svg>
            <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform transition-transform"
            >
                <path
                    fill="currentColor"
                    d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                ></path>
            </svg>
        </button>
    );
    return (
        <div className="flex h-full flex-col border-r border-[#27313a]">
            {/* Header */}
            <div className="flex h-[33.3px] items-center border-t border-[#323f4a] bg-[#2a313a] px-[20px] py-[6.4px]">
                <div className="flex justify-start gap-[8px]">
                    <h3 className="font-['Clash Grotesk'] font-bold text-[#cbd1e1]">Editor HTML</h3>
                    <div className="flex items-center gap-[4px]">
                        {['Cmd', 'shift', 'E'].map((text) => (
                            <div
                                key={text}
                                className="inline-flex h-[14.63px] items-center rounded-[4px] bg-[hsla(0,0%,100%,.05)] px-[4.8px] !pt-[0.64px] font-['IBM_Plex_Mono'] font-semibold uppercase text-[hsla(0,0%,100%,.4)] shadow-[0_2px_0_0_hsla(0,0%,100%,.1)]"
                                style={{ lineHeight: '14px', whiteSpace: 'nowrap', transition: '.2s ease' }}
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 font-semibold text-[#a0b3c6]">
                    <div className="flex items-center justify-end gap-[16px]">
                        <span>{HTMLcode.length} characters</span>
                        <Dropdown trigger={settingEdit} className="!mr-[900px]">
                            <ul className='className="py-2 text-sm text-gray-700 dark:text-gray-200'>
                                <li>
                                    <DropdownItem className="!font-['Clash Grotesk'] text-[16px] font-medium">
                                        <div className="flex items-center gap-[5px]">
                                            <label>Editor font size</label>
                                            <input
                                                type="range"
                                                min="0"
                                                max="10"
                                                step="1"
                                                className="border border-[#323f4a] bg-[#0f1117]"
                                            />
                                        </div>
                                    </DropdownItem>
                                </li>
                                <li>
                                    <DropdownItem className="!font-['Clash Grotesk'] h-auto w-full text-[16px] font-medium">
                                        <div className="flex w-full items-center">
                                            <label>
                                                Vim mode <br /> (default editor only)
                                            </label>
                                            <input type="checkbox" className="flex-end flex flex-1"></input>
                                        </div>
                                    </DropdownItem>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* CodeMirror */}
            <CodeMirror
                value={HTMLcode}
                width="765px"
                height="320px"
                extensions={[html(), EditorView.lineWrapping]}
                theme={duotoneDark}
                onChange={onHTMLCodeChange}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: false,
                    highlightActiveLine: true,
                }}
            />
            <div className="flex h-[33.3px] items-center border-t border-[#323f4a] bg-[#2a313a] px-[20px] py-[6.4px]">
                <div className="flex justify-start gap-[8px]">
                    <h3 className="font-['Clash Grotesk'] font-bold text-[#cbd1e1]">Editor CSS</h3>
                    <div className="flex items-center gap-[4px]">
                        {['Cmd', 'shift', 'E'].map((text) => (
                            <div
                                key={text}
                                className="inline-flex h-[14.63px] items-center rounded-[4px] bg-[hsla(0,0%,100%,.05)] px-[4.8px] !pt-[0.64px] font-['IBM_Plex_Mono'] font-semibold uppercase text-[hsla(0,0%,100%,.4)] shadow-[0_2px_0_0_hsla(0,0%,100%,.1)]"
                                style={{ lineHeight: '14px', whiteSpace: 'nowrap', transition: '.2s ease' }}
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 font-semibold text-[#a0b3c6]">
                    <div className="flex items-center justify-end gap-[16px]">
                        <span>{CSScode.length} characters</span>
                        <Dropdown trigger={settingEdit} className="!mr-[900px]">
                            <ul className='className="py-2 text-sm text-gray-700 dark:text-gray-200'>
                                <li>
                                    <DropdownItem className="!font-['Clash Grotesk'] text-[16px] font-medium">
                                        <div className="flex items-center gap-[5px]">
                                            <label>Editor font size</label>
                                            <input
                                                type="range"
                                                min="0"
                                                max="10"
                                                step="1"
                                                className="border border-[#323f4a] bg-[#0f1117]"
                                            />
                                        </div>
                                    </DropdownItem>
                                </li>
                                <li>
                                    <DropdownItem className="!font-['Clash Grotesk'] h-auto w-full text-[16px] font-medium">
                                        <div className="flex w-full items-center">
                                            <label>
                                                Vim mode <br /> (default editor only)
                                            </label>
                                            <input type="checkbox" className="flex-end flex flex-1"></input>
                                        </div>
                                    </DropdownItem>
                                </li>
                            </ul>
                        </Dropdown>
                    </div>
                </div>
            </div>

            {/* CodeMirror */}
            <CodeMirror
                value={CSScode}
                width="765px"
                height="320px"
                extensions={[css(), EditorView.lineWrapping]}
                theme={duotoneDark}
                onChange={onCSSCodeChange}
                basicSetup={{
                    lineNumbers: true,
                    foldGutter: false,
                    highlightActiveLine: true,
                }}
            />

            {/* Action buttons */}
            <div className="h-auto flex-1 border-t border-[#27313a] bg-[#13181c]">
                <div
                    className="grid items-center justify-stretch gap-[8px] p-[16px]"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px,auto))' }}
                >
                    {isAuthenticated && (
                        <>
                            <button className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[50px] border-0 bg-[#323f4a] !py-[11.2px] !text-left font-bold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]">
                                <span> Plugin</span>
                                <img
                                    height="18"
                                    width="37"
                                    className="!ml-[8px]"
                                    src="https://cssbattle.dev/images/pro-badge.svg"
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.filter = 'drop-shadow(0 0 14px yellow)')
                                    }
                                    onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
                                />
                            </button>
                            <button className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[50px] border-0 bg-[#323f4a] !py-[11.2px] !text-left font-bold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]">
                                <span>My solutions</span>
                            </button>
                        </>
                    )}
                    <button className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[50px] border-0 bg-[#323f4a] !py-[11.2px] !text-left font-bold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="undefined"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ verticalAlign: 'middle', marginRight: '0px', marginLeft: '0px' }}
                        >
                            <path
                                d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        <span>Top Solutions</span>
                    </button>
                    <button className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[50px] border-0 bg-[#0060ca] !py-[11.2px] !text-left font-bold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#0050b0]">
                        {isAuthenticated ? (
                            <></>
                        ) : (
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="undefined"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ verticalAlign: 'middle', marginRight: '0px', marginLeft: '0px' }}
                            >
                                <path
                                    d="M12 17a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2 2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5 5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        )}
                        <span>Submit</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditorPanel;
