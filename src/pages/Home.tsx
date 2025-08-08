import { useAuth } from '@/Context/authContext';

export const srcImgs = [
    {
        day: 'Jul 28',
        url: 'https://ik.imagekit.io/cssbattle/user%2Fe6YbeBahWNPT7VpE2rE2p85byxa2%2Ftargets%2Ftarget_yHNqGDG.png?alt=media',
        color: [],
    },
    {
        day: 'Jul 29',
        url: 'https://ik.imagekit.io/cssbattle/user%2Fe6YbeBahWNPT7VpE2rE2p85byxa2%2Ftargets%2Ftarget_MKpJFbH.png?alt=media',
        color: [],
    },
    {
        day: 'Jul 30',
        url: 'https://ik.imagekit.io/cssbattle/user%2Fe6YbeBahWNPT7VpE2rE2p85byxa2%2Ftargets%2Ftarget_I2RZfx9.png?alt=media',
        color: [],
    },
    {
        day: 'Jul 31',
        url: 'https://ik.imagekit.io/cssbattle/user%2Fe6YbeBahWNPT7VpE2rE2p85byxa2%2Ftargets%2Ftarget_n4NrvCY.png?alt=media',
        color: [],
    },
    {
        day: 'Mar 1',
        url: 'https://ik.imagekit.io/cssbattle/user%2Fe6YbeBahWNPT7VpE2rE2p85byxa2%2Ftargets%2Ftarget_JERLIRB.png?alt=media',
        color: [],
    },
    {
        day: 'Mar 2',
        url: 'https://ik.imagekit.io/cssbattle/user%2Fe6YbeBahWNPT7VpE2rE2p85byxa2%2Ftargets%2Ftarget_unP6kzR.png?alt=media',
        color: ['#31938C', '#FFFFFF'],
    },
];

function Home() {
    const { isAuthenticated } = useAuth();

    return (
        <div className="flex w-full flex-col items-stretch gap-[48px] p-[48px]">
            {/* GET STARTED */}
            {isAuthenticated ? (
                <></>
            ) : (
                <div className="flex items-center justify-start gap-[36px]">
                    <img
                        src="https://cssbattle.dev/images/welcome_small.webp"
                        width="300px"
                        style={{ borderRadius: '16px', aspectRatio: '3/2', imageRendering: 'pixelated' }}
                    ></img>
                    <div className="flex flex-col items-start justify-start gap-[8px]">
                        <h1
                            className="font-['Clash Grotesk'] text-left font-bold !leading-[1.4] !tracking-[0.3px]"
                            style={{
                                fontSize: '36px',
                                color: '#eff5fb',
                                textTransform: 'none',
                                fontStyle: 'normal',
                                wordBreak: 'initial',
                            }}
                        >
                            Welcome to CSSBattle
                        </h1>
                        <div className="z-0 max-w-[768px]">
                            <p
                                className="font-['Clash Grotesk'] text-left font-medium leading-[1.4] tracking-[0.3px]"
                                style={{
                                    fontSize: '1.125rem',
                                    color: '#a0b3c6',
                                    fontStyle: 'normal',
                                    textTransform: 'none',
                                    wordBreak: 'initial',
                                }}
                            >
                                The funnest multiplayer game with 300K+ web designers &amp; developers. Replicate the
                                target images using CSS - the shorter your code, the higher your score! Happy coding!
                            </p>
                        </div>
                        <div className="flex items-center justify-start gap-[16px]">
                            <a
                                href="/learn"
                                className="btn-play font-['Clash Grotesk'] group relative hover:!text-black"
                            >
                                <div className="relative z-10 flex flex-row items-center justify-start gap-1">
                                    Play Game
                                    <span className="icon">🕹️</span>
                                </div>
                            </a>
                            <span className="font-['Clash Grotesk'] text-[0.8rem] font-semibold uppercase tracking-[0.3px] text-[#cbd1e1] [word-spacing:3px]">
                                OR
                            </span>
                            <a
                                href="/learn"
                                className="btn-learn font-['Clash Grotesk'] group relative hover:!text-black"
                            >
                                <div className="relative z-10 flex flex-row items-center justify-start gap-1">
                                    Learn CSS
                                    <span className="icon">🚀</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
            <div className="h-[1px] w-full bg-[#27313a]"></div>
            {/* DAILY TARGET */}
            <div className="flex w-full flex-row items-center justify-between gap-[16px]">
                <div className="flex items-center justify-start gap-[16px]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20262e] text-center leading-[3.5rem]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline align-middle"
                            style={{ color: '#ffdf00' }}
                        >
                            <path
                                fill="currentColor"
                                d="M5.374 20.065c-2.004 0-3.103-1.09-3.103-3.085V6.346c0-1.995 1.1-3.085 3.103-3.085h12.243c2.013 0 3.103 1.09 3.103 3.085V16.98c0 1.996-1.09 3.085-3.103 3.085H5.374Zm.167-2.267h11.91c.65 0 1.001-.317 1.001-1.01V8.973c0-.695-.351-1.011-1.002-1.011H5.541c-.66 0-1.002.316-1.002 1.01v7.814c0 .694.343 1.01 1.002 1.01Zm4.307-6.987c-.326 0-.44-.097-.44-.422V9.87c0-.316.114-.422.44-.422h.518c.317 0 .43.106.43.422v.519c0 .325-.113.421-.43.421h-.518Zm2.795 0c-.326 0-.44-.097-.44-.422V9.87c0-.316.114-.422.44-.422h.518c.316 0 .43.106.43.422v.519c0 .325-.114.421-.43.421h-.518Zm2.794 0c-.325 0-.439-.097-.439-.422V9.87c0-.316.114-.422.44-.422h.51c.325 0 .439.106.439.422v.519c0 .325-.114.421-.44.421h-.51Zm-8.384 2.75c-.325 0-.43-.096-.43-.421v-.519c0-.316.105-.422.43-.422h.518c.325 0 .431.106.431.422v.519c0 .325-.106.421-.43.421h-.52Zm2.795 0c-.326 0-.44-.096-.44-.421v-.519c0-.316.114-.422.44-.422h.518c.317 0 .43.106.43.422v.519c0 .325-.113.421-.43.421h-.518Zm2.795 0c-.326 0-.44-.096-.44-.421v-.519c0-.316.114-.422.44-.422h.518c.316 0 .43.106.43.422v.519c0 .325-.114.421-.43.421h-.518Zm2.794 0c-.325 0-.439-.096-.439-.421v-.519c0-.316.114-.422.44-.422h.51c.325 0 .439.106.439.422v.519c0 .325-.114.421-.44.421h-.51Zm-8.384 2.752c-.325 0-.43-.106-.43-.422v-.519c0-.325.105-.422.43-.422h.518c.325 0 .431.097.431.422v.519c0 .316-.106.421-.43.421h-.52Zm2.795 0c-.326 0-.44-.106-.44-.422v-.519c0-.325.114-.422.44-.422h.518c.317 0 .43.097.43.422v.519c0 .316-.113.421-.43.421h-.518Zm2.795 0c-.326 0-.44-.106-.44-.422v-.519c0-.325.114-.422.44-.422h.518c.316 0 .43.097.43.422v.519c0 .316-.114.421-.43.421h-.518Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-start gap-[1.6px]">
                        <h2
                            className="break-words text-left font-semibold normal-case leading-[1.4] text-[#eff5fb]"
                            style={{
                                letterSpacing: '0.3px',
                                fontSize: '1.5rem',
                                fontFamily: 'Clash Grotesk',
                            }}
                        >
                            Daily targets
                        </h2>
                        <div className="max-w-[72ch]">
                            <p
                                className="break-words text-left font-medium normal-case leading-[1.5] text-[#a0b3c6]"
                                style={{
                                    letterSpacing: '0.3px',
                                    fontSize: '16px',
                                    fontFamily: 'Clash Grotesk',
                                }}
                            >
                                A new target everyday for you to unwind. No leaderboards, no competition
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <a
                        href="/daily"
                        className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[40px] border-0 bg-[#323f4a] !px-4 !py-[0.7rem] !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]"
                    >
                        View all daily targets
                    </a>
                </div>
            </div>
            <div className="bg-panel-login shadow-glow rounded-[16px]">
                <div className="flex h-[429px] min-h-[415px] w-full overflow-x-auto p-[32px]">
                    <div className="flex items-start justify-start gap-[32px]">
                        <div className="flex pl-[110px]">
                            {srcImgs.map((srcImg) => (
                                <div className="!pl-[40px] pr-0">
                                    <div className="flex flex-col items-center justify-start gap-[16px]">
                                        <div
                                            className="inline-flex h-[25px] w-[66px] items-center justify-center rounded-[4px] bg-[#2d363f] px-[3.2px] py-[8px] text-[0.875rem] font-semibold uppercase text-[#cbd1e1]"
                                            style={{
                                                whiteSpace: 'nowrap',
                                                transition: 'background-color 0.2s ease;',
                                                boxShadow: 'inset 1px 1px 2px hsla(0,0%,100%,.1)',
                                            }}
                                        >
                                            {srcImg.day}
                                        </div>
                                        <div className="target-tile--daily target-tile h-[246px] w-[236px]">
                                            <a
                                                className="shadow-link"
                                                title="Play target for 28 thg 7, 2025"
                                                href="/play/0HOdqfUIHZGpnRVQOQbx"
                                            ></a>
                                            <img
                                                src={srcImg.url}
                                                alt=""
                                                loading="eager"
                                                className="target-tile__image"
                                            ></img>
                                            <div className="px-[16px] pb-[8px] pt-[16px]">
                                                <div className="flex items-center justify-between gap-[16px]">
                                                    <div className="font-[16px]">
                                                        <div className="flex flex-col items-start justify-start gap-0">
                                                            <p className="font-['Clash Frotesk'] font-semibold text-[#6b7b8e]">
                                                                Your score
                                                            </p>
                                                            <p className="font-['IBM_Plex_Mono'] font-semibold text-[#a0b3c6]">
                                                                Not played
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
                </div>
            </div>
            {/* PUBLIC VERSUS ROOMS */}
            <div className="flex w-full flex-col justify-between gap-[16px]">
                <div className="flex items-center justify-start gap-[16px]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20262e] text-center leading-[3.5rem]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: '#ffdf00' }}
                        >
                            <path
                                fill="currentColor"
                                d="M15.435 17.825c.226.38.09.883-.29 1.109a.802.802 0 0 1-1.108-.303l-3.706-6.42c-.239.097-.568.22-.928.425-1.412.813-2.082 2.25-3.61 3.14-.541.315-1.096.534-1.534.573-.522.052-.967-.116-1.257-.619L.424 11.264C.141 10.76.347 10.252.83 9.968c.303-.174.87-.322 1.49-.677 1.417-.818 2.087-2.255 3.615-3.138.541-.316 1.096-.529 1.534-.58.522-.046.96.122 1.257.631l6.71 11.621Zm-2.926-6.838 2.765-4.783c.297-.51.735-.677 1.25-.632.445.052.993.265 1.541.58 1.528.884 2.198 2.32 3.61 3.14.618.354 1.192.502 1.495.676.483.284.69.793.4 1.296l-2.572 4.466c-.29.503-.735.67-1.257.619-.439-.039-.993-.258-1.534-.574-1.528-.89-2.204-2.326-3.616-3.139-.354-.206-.683-.328-.922-.425l-.225.387-.935-1.612Zm-1.025 5.008-1.52 2.636a.802.802 0 0 1-1.11.303.825.825 0 0 1-.296-1.109l1.992-3.448.934 1.617Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-start gap-[1.6px]">
                        <h2
                            className="break-words text-left font-semibold normal-case leading-[1.4] text-[#eff5fb]"
                            style={{
                                letterSpacing: '0.3px',
                                fontSize: '1.5rem',
                                fontFamily: 'Clash Grotesk',
                            }}
                        >
                            Public Versus Rooms
                        </h2>
                        <div className="max-w-[72ch]">
                            <p
                                className="break-words text-left font-medium normal-case leading-[1.5] text-[#a0b3c6]"
                                style={{
                                    letterSpacing: '0.3px',
                                    fontSize: '16px',
                                    fontFamily: 'Clash Grotesk',
                                }}
                            >
                                Join Versus battles hosted by other players
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[16px]">
                    <span className="break-normal text-left font-['IBM_Plex_Mono'] text-[16px] font-medium normal-case not-italic leading-[1.4] tracking-[0px] text-[#6b7b8e]">
                        No public Versus battles available at the moment
                    </span>
                </div>
            </div>
            {/* OUR SPONSOR */}
            <div className="flex flex-col gap-[16px]">
                <div className="flex w-full flex-row items-center justify-between gap-[16px]">
                    <h2
                        className="break-words text-left font-semibold normal-case leading-[1.4] text-[#eff5fb]"
                        style={{
                            letterSpacing: '0.3px',
                            fontSize: '1.5rem',
                            fontFamily: 'Clash Grotesk',
                        }}
                    >
                        Our sponsor
                    </h2>
                    <div>
                        <a
                            href="/daily"
                            className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[40px] border-0 bg-[#323f4a] !px-4 !py-[0.7rem] !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]"
                        >
                            Advertise with us
                        </a>
                    </div>
                </div>
                <div className="overflow-hidden rounded-[16px] border-2 border-[#20262e] p-[16px]">
                    <a className="!m-0 !p-0">
                        <img
                            src="https://cssbattle.dev/images/webmaker-home-banner.webp"
                            style={{ width: '100%', borderRadius: '8px', aspectRatio: '400 / 25' }}
                        ></img>
                    </a>{' '}
                </div>
            </div>
            {/* LATEST BATTLE */}
            <div className="flex w-full flex-row items-center justify-between gap-[16px]">
                <div className="flex items-center justify-start gap-[16px]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#20262e] text-center leading-[3.5rem]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline align-middle"
                            style={{ color: '#ffdf00' }}
                        >
                            <path
                                fill="currentColor"
                                d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="flex flex-col justify-start gap-[1.6px]">
                        <h2
                            className="break-words text-left font-semibold normal-case leading-[1.4] text-[#eff5fb]"
                            style={{
                                letterSpacing: '0.3px',
                                fontSize: '1.5rem',
                                fontFamily: 'Clash Grotesk',
                            }}
                        >
                            Latest battle
                        </h2>
                        <div className="max-w-[72ch]">
                            <p
                                className="break-words text-left font-medium normal-case leading-[1.5] text-[#a0b3c6]"
                                style={{
                                    letterSpacing: '0.3px',
                                    fontSize: '16px',
                                    fontFamily: 'Clash Grotesk',
                                }}
                            >
                                Compete with players around the world in this nail-biting CSS Battle
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <a
                        href="/daily"
                        className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[40px] border-0 bg-[#323f4a] !px-4 !py-[0.7rem] !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]"
                    >
                        View all battles
                    </a>
                    <a
                        href="/daily"
                        className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[40px] border-0 bg-[#323f4a] !px-4 !py-[0.7rem] !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]"
                    >
                        Host a private battle
                    </a>
                </div>
            </div>
            <div className="bg-panel-login shadow-glow rounded-[16px]">
                <div className="flex h-[429px] min-h-[415px] w-full overflow-x-auto p-[32px]">
                    <div className="flex items-start justify-start gap-[32px]">
                        <div className="pl-[10%] pr-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
