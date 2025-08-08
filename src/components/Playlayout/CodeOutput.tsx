import { useState } from 'react';
import StatsToggle from './StatsToggle';
import { srcImgs } from '@/pages/Home';
interface CodeOutputProps {
    HTMLcode: string;
    CSScode: string;
}

function CodeOutput({ HTMLcode, CSScode }: CodeOutputProps) {
    const [isSlideCompare, setIsSlideCompare] = useState(true);
    const [isDiff, setIsDiff] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(100);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isSlideCompare) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setSliderPosition(100);
        setIsHovering(false);
    };

    return (
        <div className="relative h-full min-w-[440] max-w-full border-r border-[#27313a] bg-[#121518]">
            {/* Header */}
            <div className="z-2 font-['Clash Grotesk'] sticky top-0 flex h-[33.3px] items-center border-t border-[#323f4a] bg-[#21272d] px-[20px] py-[6.4px]">
                <h3 className="font-['Clash Grotesk'] font-bold text-[#cbd1e1]">Code output</h3>
                <div className="grow text-right font-semibold text-[#a0b3c6]">
                    <div className="flex items-center justify-end gap-[16px]">
                        <label className="flex items-center gap-[4px]">
                            <input
                                type="checkbox"
                                checked={isSlideCompare}
                                onChange={() => setIsSlideCompare(!isSlideCompare)}
                                className="!mr-[8px] h-[16px] w-[16px] cursor-pointer border-[#323f4a] text-[#cbd1e1] !accent-[#99c8ff]"
                            />
                            Slide & Compare
                        </label>
                        <label className="flex items-center gap-[4px]">
                            <input
                                type="checkbox"
                                checked={isDiff}
                                onChange={() => setIsDiff(!isDiff)}
                                className="!mr-[8px] h-[16px] w-[16px] cursor-pointer border-[#323f4a] text-[#cbd1e1] !accent-[#99c8ff]"
                            />
                            Diff
                        </label>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-[20px]">
                <div
                    className={`relative flex h-[300px] w-[400px] ${isSlideCompare ? 'cursor-col-resize' : 'cursor-default'}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {/* Your code output */}
                    <div
                        className={`z-1 relative overflow-hidden bg-white ${isSlideCompare && isHovering ? 'opacity-1' : 'opacity-90'}`}
                        style={{
                            width: `${sliderPosition}%`,
                            mixBlendMode: isDiff ? 'difference' : 'normal',
                            transition: isSlideCompare && isHovering ? 'all' : 'all 0.3s ease-out',
                            opacity: isHovering ? 0.9 : 1,
                            boxShadow: isHovering && isSlideCompare ? '2px 0 0 #f22' : '',
                        }}
                    >
                        <iframe
                            srcDoc={`<style>body{width: 400px; height: 300px; margin: 0; padding: 0;}${CSScode}</style> ${HTMLcode}`}
                            sandbox="allow-scripts"
                            title="Live Preview"
                            className={`pointer-events-none left-0 top-0 h-[300px] w-[400px] bg-[#fff]`}
                        />
                    </div>
                    {/* Target image */}

                    <img src={srcImgs[5].url} alt="Target" className={`absolute left-0 top-0 h-full w-full`} />

                    {/* slider line */}
                    {isSlideCompare && isHovering && (
                        <div className="flex">
                            <div
                                className="shadow-lgx absolute bottom-0 top-0 z-40 w-0.5 bg-red-600"
                                style={{
                                    cursor: 'col-resize',
                                    transform: 'translateX(-1px)',
                                }}
                            />
                            <div
                                className="absolute z-50 rounded bg-[#f22] p-[3.2px] font-bold text-[#fff]"
                                style={{
                                    top: '100%',
                                    opacity: '1',
                                    pointerEvents: 'none',
                                    transform: 'translate(-50%, 4px)',
                                }}
                            >
                                {Math.round((sliderPosition / 100) * 400)}
                            </div>
                        </div>
                    )}
                </div>

                {/* Stats Toggle */}
                <StatsToggle />
            </div>
        </div>
    );
}

export default CodeOutput;
