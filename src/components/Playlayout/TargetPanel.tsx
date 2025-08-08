import { srcImgs } from '@/pages/Home';
import { useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';

function TargetPanel({ color }: { color: string }) {
    const [copiedColor, setCopiedColor] = useState<string | null>(null);
    const handleCopyColor = (color: string) => {
        navigator.clipboard.writeText(color).then(() => {
            setCopiedColor(color);
            toast(`Color ${color} copied to clipboard`, {
                position: 'bottom-right',
                autoClose: 3000,
            });
            setTimeout(() => setCopiedColor(null), 5000);
        });
    };

    return (
        <div className="relative h-full min-w-[440] border-r border-[#27313a] bg-[#121518]">
            <div className="z-2 font-['Clash Grotesk'] sticky top-0 flex h-[33.3px] items-center border-t border-[#323f4a] bg-[#21272d] px-[20px] py-[6.4px]">
                <h3 className="font-['Clash Grotesk'] font-bold text-[#cbd1e1]">Recreate this target</h3>
                <div className="grow text-right font-semibold text-[#a0b3c6]">
                    <div className="flex items-center justify-end gap-[16px]">
                        <div className="flex items-center justify-end gap-[16px]">400px x 300px</div>
                    </div>
                </div>
            </div>
            <div className="p-[20px]">
                <img src={srcImgs[5].url} alt="" loading="eager" className="" />

                <div className="flex flex-col items-stretch justify-start gap-[16px]">
                    <div className="z-1 relative !mt-[32px]">
                        <span className="absolute left-0 top-1/2 z-[-2] !ml-[200px] -mt-px h-px w-1/2 bg-[#21272d]"></span>

                        <div className="relative z-10 flex items-center justify-start gap-[8px]">
                            <h3 className="font-['Clash Grotesk'] font-bold text-[#cbd1e1]">Colors</h3>
                            <div className="flex items-center gap-[4px]">
                                {['Cmd', 'Shift', 'C'].map((text) => (
                                    <div
                                        key={text}
                                        className="inline-flex h-[14.63px] items-center whitespace-nowrap rounded-[4px] bg-[hsla(0,0%,100%,.05)] px-[4.8px] !pt-[0.64px] font-['IBM_Plex_Mono'] font-semibold uppercase text-[hsla(0,0%,100%,.4)] shadow-[0_2px_0_0_hsla(0,0%,100%,.1)] transition-all"
                                        style={{ lineHeight: '14px' }}
                                    >
                                        {text}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ul className="flex flex-wrap gap-[6.4px]">
                        {srcImgs[5].color.map((color) => (
                            <li className="transform-none opacity-100">
                                <button
                                    type="button"
                                    onClick={() => handleCopyColor(color)}
                                    aria-label="Copy color #31938C"
                                    className="colors-list__color relative flex w-[120px] flex-none basis-[calc(33.33%-10px)] cursor-pointer items-center justify-end rounded-full border-0 bg-[rgb(45,55,64)] px-3 py-1 text-right font-['IBM_Plex_Mono'] font-normal uppercase text-[#a0b3c6] transition ease-in-out"
                                    style={{ '--color': `${color}` } as React.CSSProperties}
                                >
                                    {color}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-stretch justify-start gap-[16px]">
                    <div className="z-1 relative !mt-[32px]">
                        <span className="absolute left-0 top-1/2 z-[-2] !ml-[140px] -mt-px h-px w-[260px] bg-[#21272d]"></span>

                        <div className="relative z-10 flex items-center justify-start gap-[8px]">
                            <h3 className="font-['Clash Grotesk'] font-bold text-[#cbd1e1]">Target Sponsor</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TargetPanel;
