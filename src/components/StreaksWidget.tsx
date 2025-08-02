export default function StreaksWidget() {
    return (
        <div className="transition-transform duration-300 ease-in-out hover:scale-[1.15]">
            <div className="group relative flex h-[165px] w-[135px] cursor-pointer items-center justify-center">
                {/* Rays background */}
                <div
                    className="xs:w-[360px] pointer-events-none absolute left-1/2 top-1/2 z-[-2] aspect-square w-[350px] translate-x-[-50%] translate-y-[-50%] animate-[spin_60s_linear_infinite] bg-[url('https://cssbattle.dev/images/streak-rays.png')] bg-cover bg-center opacity-[0.075] transition-opacity duration-500 ease-in-out group-hover:opacity-[0.15]"
                    aria-hidden
                />

                {/* Background shape (SVG) */}
                <svg
                    viewBox="0 0 103 110"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 top-0 h-full w-full scale-75"
                >
                    <defs>
                        <linearGradient id="grad" x1="0" y1="0" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2b2f38" />
                            <stop offset="100%" stopColor="#1d1f25" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 0H103V90.7685C103 94.4326 100.511 97.6284 96.958 98.5252L55.416 109.011C52.8456 109.66 50.1544 109.66 47.584 109.011L6.042 98.5252C2.4893 97.6284 0 94.4326 0 90.7685V0Z"
                        fill="#2d363d"
                    />
                </svg>

                {/* Content */}
                <div className="relative z-10 !mt-[10px] flex scale-75 flex-col items-center justify-center gap-[5px] pt-4">
                    {/* Green check */}
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mb-[3px] text-[#a1e435] drop-shadow-[0_0_4px_#a1e43580]"
                        style={{ filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,.75))' }}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM6.366 13.1931C5.69036 12.5298 5.68031 11.4444 6.34356 10.7688C7.00681 10.0932 8.09219 10.0831 8.76782 10.7464L11.2143 13.148L16.0178 8.25473C16.681 7.57909 17.7664 7.56905 18.442 8.23229C19.1177 8.89554 19.1277 9.98092 18.4645 10.6566L12.4839 16.7488C12.0652 17.1759 11.5202 17.3422 11.0013 17.2706C10.6491 17.222 10.3089 17.0639 10.0356 16.7957L6.366 13.1931Z"
                        />
                    </svg>

                    {/* Number */}
                    <span className="text-[25px] font-bold leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                        9
                    </span>

                    {/* Label */}
                    <span className="text-base font-semibold leading-tight text-gray-400">day streak</span>
                </div>
            </div>
            <div className="absolute top-[50px] flex w-full scale-100 justify-between px-[18%]">
                <div className="absolute right-[calc(100%+10px)] h-[24px] w-[8px] rounded-full bg-[#39434c]" />
                <div className="absolute right-[calc(100%-8px)] h-[48px] w-[8px] rounded-full bg-[#39434c]" />
                <div className="absolute left-[calc(100%-8px)] h-[48px] w-[8px] rounded-full bg-[#39434c]" />
                <div className="absolute left-[calc(100%+10px)] h-[24px] w-[8px] rounded-full bg-[#39434c]" />
            </div>
        </div>
    );
}
