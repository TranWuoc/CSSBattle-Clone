import { useState, useRef, useEffect } from 'react';
import PersonalStats from './PersonalStats';
import GlobalStats from './GlobalStats';

function StatsToggle() {
    const [selectedTab, setSelectedTab] = useState('personal');
    const [backgroundStyle, setBackgroundStyle] = useState({});
    const personalRef = useRef<HTMLLabelElement>(null);
    const globalRef = useRef<HTMLLabelElement>(null);

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
        updateBackgroundPosition(tab);
    };

    const updateBackgroundPosition = (tab: string) => {
        const targetRef = tab === 'personal' ? personalRef : globalRef;
        const targetElement = targetRef.current;

        if (targetElement) {
            const parent = targetElement.parentElement;
            const parentRect = parent?.getBoundingClientRect();
            const targetRect = targetElement.getBoundingClientRect();

            if (parentRect) {
                const left = targetRect.left - parentRect.left;
                const width = targetRect.width - 3;

                setBackgroundStyle({
                    transform: `translateX(${left}px)`,
                    width: `${width}px`,
                });
            }
        }
    };

    useEffect(() => {
        updateBackgroundPosition(selectedTab);
    }, [selectedTab]);

    return (
        <div className="!mt-[32px]">
            {/* Toggle */}
            <div
                className="font-['Clash Grotesk'] relative flex w-full !items-center rounded-full border-2 border-[#27313a] !p-[4.8px] text-[0.875rem] font-semibold"
                style={{ lineHeight: '1.4' }}
            >
                {/* Animated background */}
                <div
                    className="absolute left-0 h-[30px] w-full transform-none rounded-[20px] bg-[linear-gradient(95deg,rgb(45,55,64)_0%,rgb(39,45,52)_100%)] shadow-[inset_1px_1px_2px_hsla(0,0%,100%,.1)] transition-all duration-300 ease-in-out"
                    style={{
                        ...backgroundStyle,
                        transformOrigin: '50% 50% 0px',
                    }}
                />

                {/* Tabs */}
                <label
                    ref={personalRef}
                    className="relative z-10 inline-block flex-[1_1_0%] cursor-pointer rounded-[20px] px-4 py-[0.3rem] text-center"
                >
                    <input
                        type="radio"
                        className="absolute opacity-0"
                        name="tab"
                        value="personal"
                        checked={selectedTab === 'personal'}
                        onChange={() => handleTabChange('personal')}
                    />
                    <div
                        className={`relative transition-colors duration-300 ${
                            selectedTab === 'personal' ? 'text-white' : 'text-[#6b7b8e]'
                        }`}
                    >
                        Your stats
                    </div>
                </label>

                <label
                    ref={globalRef}
                    className="relative z-10 inline-block flex-[1_1_0%] cursor-pointer rounded-[20px] px-4 py-[0.3rem] text-center"
                >
                    <input
                        type="radio"
                        className="absolute opacity-0"
                        name="tab"
                        value="global"
                        checked={selectedTab === 'global'}
                        onChange={() => handleTabChange('global')}
                    />
                    <div
                        className={`relative transition-colors duration-300 ${
                            selectedTab === 'global' ? 'text-white' : 'text-[#6b7b8e]'
                        }`}
                    >
                        Global stats
                    </div>
                </label>
            </div>

            {/* Content */}
            {selectedTab === 'personal' ? <PersonalStats /> : <GlobalStats />}
        </div>
    );
}

export default StatsToggle;
