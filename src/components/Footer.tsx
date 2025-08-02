function Footer() {
    return (
        <div className="font-['Clash Grotesk] relative flex flex-col flex-wrap items-stretch justify-center overflow-visible border-solid border-t-[#20262e] bg-[rgba(24,29,35,0.75)] px-[20px] pb-[32px] pt-[9.2px]">
            <div className="flex h-[20px] items-center justify-center gap-[16px]">
                <div className="font-['Clash Grotesk'] text-[16px] font-medium text-[#6b7b8e]"> © 2025 CSSBattle</div>
                <div className="flex-grow-1">
                    <div className="flex items-center justify-end gap-[24px]">
                        <div className="font-medium text-[#6b7b8e]">
                            <span className="!mr-[2px] font-medium text-[#ffdf00]">426969</span>
                            players
                        </div>
                        <a
                            href="https://discord.gg/rvqvbcFM86"
                            target="_blank"
                            rel="external noopener noreferrer"
                            className="group relative !mt-[10px] inline-block h-[35px] cursor-pointer items-center transition-colors duration-200 [&:hover_svg]:!transform-none"
                            aria-label="Join on Discord"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.0665 3.75452H15.0213L14.7166 4.05615C17.843 4.96104 19.3557 6.37418 19.3557 6.37418C17.3408 5.36674 15.525 4.86301 13.7092 4.65941C12.3971 4.45581 11.085 4.56289 9.9765 4.65941H9.67487C8.96604 4.65941 7.45789 4.96104 5.43697 5.7679C4.73267 6.07406 4.32848 6.27464 4.32848 6.27464C4.32848 6.27464 5.83965 4.76348 9.16964 3.95662L8.96604 3.75302C8.96604 3.75302 6.44441 3.6565 3.72221 5.66836C3.72221 5.66836 1 10.41 1 16.2556C1 16.2556 2.50815 18.8797 6.645 18.9793C6.645 18.9793 7.24826 18.1754 7.85906 17.4681C5.53651 16.7623 4.63162 15.3507 4.63162 15.3507C4.63162 15.3507 4.83371 15.4502 5.13685 15.6523H5.22734C5.27258 15.6523 5.2937 15.6749 5.31783 15.6975V15.7066C5.34196 15.7307 5.36307 15.7518 5.40832 15.7518C5.90601 15.957 6.4037 16.159 6.8109 16.3551C7.51369 16.6597 8.41707 16.9629 9.52556 17.1635C10.9281 17.3671 12.5358 17.4651 14.3667 17.1635C15.2716 16.9599 16.1765 16.7608 17.0814 16.3566C17.6696 16.055 18.3935 15.7534 19.1883 15.2451C19.1883 15.2451 18.2834 16.6567 15.8628 17.3625C16.3605 18.0653 17.0618 18.8707 17.0618 18.8707C21.2001 18.7802 22.8078 16.156 22.8983 16.2676C22.8983 10.4311 20.161 5.68043 20.161 5.68043C17.6952 3.84954 15.3877 3.78016 14.9805 3.78016L15.065 3.75L15.0665 3.75452ZM15.3199 10.41C16.3801 10.41 17.2352 11.3149 17.2352 12.4234C17.2352 13.5394 16.3756 14.4443 15.3199 14.4443C14.2642 14.4443 13.4045 13.5394 13.4045 12.4324C13.4075 11.3164 14.2687 10.4145 15.3199 10.4145V10.41ZM8.46835 10.41C9.52405 10.41 10.3777 11.3149 10.3777 12.4234C10.3777 13.5394 9.51802 14.4443 8.46232 14.4443C7.40661 14.4443 6.54697 13.5394 6.54697 12.4324C6.54697 11.3164 7.40661 10.4145 8.46232 10.4145L8.46835 10.41Z"></path>
                            </svg>
                            <span
                                className="pointer-events-none absolute -right-2 -top-9 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[1rem] text-white opacity-0 transition-opacity delay-100 group-hover:opacity-100"
                                style={{ fontFamily: 'inherit' }}
                            >
                                Join on Discord
                            </span>
                        </a>
                        <a
                            href="https://bsky.app/profile/cssbattle.dev"
                            className="group relative !mt-[10px] inline-block h-[35px] cursor-pointer items-center transition-colors duration-200 [&:hover_svg]:!transform-none"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Join on Bluesky"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M5.769 2.48C8.29 4.632 11.004 8.993 12 11.333c.996-2.34 3.709-6.7 6.231-8.851C20.051.929 23-.272 23 3.549c0 .763-.385 6.41-.611 7.327-.785 3.187-3.647 4-6.192 3.508 4.449.86 5.58 3.709 3.136 6.557-4.642 5.41-6.672-1.357-7.192-3.091-.096-.318-.14-.467-.141-.34 0-.127-.045.022-.14.34-.52 1.734-2.55 8.502-7.193 3.091-2.445-2.848-1.313-5.697 3.136-6.557-2.545.492-5.407-.321-6.192-3.508C1.385 9.959 1 4.312 1 3.549 1-.271 3.949.929 5.769 2.481Z"></path>
                            </svg>
                            <span
                                className="pointer-events-none absolute -left-2 -top-9 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[1rem] text-white opacity-0 transition-opacity delay-100 group-hover:opacity-100"
                                style={{ fontFamily: 'inherit' }}
                            >
                                Join on Bluesky
                            </span>
                        </a>
                        <a
                            href="https://x.com/css_battle"
                            target="_blank"
                            rel="external noopener noreferrer"
                            className="group relative !mt-[10px] inline-block h-[35px] cursor-pointer items-center transition-colors duration-200 [&:hover_svg]:!transform-none"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M13.9027 10.4643L21.3482 2H19.5838L13.1189 9.34942L7.95547 2H2L9.8082 13.1136L2 21.9897H3.76443L10.5915 14.2285L16.0445 21.9897H22L13.9027 10.4643ZM11.4861 13.2115L10.695 12.1049L4.40018 3.29901H7.11025L12.1902 10.4056L12.9813 11.5123L19.5847 20.7498H16.8746L11.4861 13.2115Z"></path>
                            </svg>
                            <span
                                className="pointer-events-none absolute -left-2 -top-9 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[1rem] text-white opacity-0 transition-opacity delay-100 group-hover:opacity-100"
                                style={{ fontFamily: 'inherit' }}
                            >
                                Join on X
                            </span>
                        </a>
                        <a
                            href="mailto:contact@cssbattle.dev"
                            target="_blank"
                            rel="external noopener noreferrer"
                            aria-label="Contact us"
                            className="group relative !mt-[10px] inline-block h-[35px] cursor-pointer items-center transition-colors duration-200 [&:hover_svg]:!transform-none"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>
                            </svg>
                            <span
                                className="pointer-events-none absolute -right-2 -top-9 whitespace-nowrap rounded-md bg-black px-2 py-1 text-[1rem] text-white opacity-0 transition-opacity delay-100 group-hover:opacity-100"
                                style={{ fontFamily: 'inherit' }}
                            >
                                Contact us
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex-grow-1">
                <div className="flex items-start justify-center gap-[64px]">
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                        <h3 className="font-['Clash Grotesk'] text-[0.875rem] font-bold uppercase text-[#6b7b8e]">
                            Play
                        </h3>
                        <a className="!m-0 !p-0 !text-[white]" href="/battles">
                            Battles
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/daily">
                            Daily Targets
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Versus
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                        <h3 className="font-['Clash Grotesk'] text-[0.875rem] font-bold uppercase text-[#6b7b8e]">
                            Learn
                        </h3>
                        <a className="!m-0 !p-0 !text-[white]" href="/battles">
                            Blog
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/daily">
                            CSS Crouses
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Newsletter
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Saturday Night Live
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                        <h3 className="font-['Clash Grotesk'] text-[0.875rem] font-bold uppercase text-[#6b7b8e]">
                            The game
                        </h3>
                        <a className="!m-0 !p-0 !text-[white]" href="/battles">
                            Tips & Tricks
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/daily">
                            FAQs
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Changelog
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Community
                        </a>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[12px]">
                        <h3 className="font-['Clash Grotesk'] text-[0.875rem] font-bold uppercase text-[#6b7b8e]">
                            CSS Battle
                        </h3>
                        <a className="!m-0 !p-0 !text-[white]" href="/battles">
                            About Us
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/daily">
                            Earn as an affiliate
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Hall of ❤️
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Privacy & Terms
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            PressKit
                        </a>
                        <a className="!m-0 !p-0 !text-[white]" href="/versus">
                            Advertise
                        </a>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.08] grayscale">
                <div
                    className="absolute inset-0 bottom-auto z-10 h-16"
                    style={{ background: 'linear-gradient(to bottom, rgba(24,29,35,1), #0000)' }}
                ></div>
                <div className="relative z-0 flex">
                    <img src="https://cssbattle.dev/targets/3.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/223.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/224.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/212.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/1.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/22.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/23.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/122.png" className="min-w-0" />
                    <img src="https://cssbattle.dev/targets/221.png" className="min-w-0" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
