function GlobalStats() {
    return (
        <div className="!mt-[16px] flex flex-col items-stretch justify-start gap-[8px]">
            <div className="flex items-center justify-start gap-[8px]">
                <div className="flex flex-auto rounded-full border-2 border-[#27313a] p-[12px]">
                    <div className="flex items-center justify-start gap-0">
                        <div className="!mr-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#27313a]">
                            <svg
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="#a0b3c6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M12 19.2c-2.5 0-4.71-1.28-6-3.2.03-2 4-3.1 6-3.1s5.97 1.1 6 3.1a7.232 7.232 0 0 1-6 3.2M12 5a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3m0-3A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10c0-5.53-4.5-10-10-10z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="font-['Clash Grotesk'] font-medium text-[#a0b3c6]">Players</div>
                        <div className="font-['IBM_Plex_Mono'] font-medium text-[#ffdf00]">224</div>
                    </div>
                </div>
                <div className="flex flex-auto rounded-full border-2 border-[#27313a] p-[12px]">
                    <div className="flex items-center justify-start gap-0">
                        <div className="!mr-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#27313a]">
                            <svg
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="#a0b3c6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M8.26367 15.7061V5.18555C8.26367 4.5791 8.65918 4.20117 9.25684 4.20117H11.0234C11.6299 4.20117 12.0166 4.5791 12.0166 5.18555V15.7061C12.0166 16.3037 11.6299 16.6904 11.0234 16.6904H9.25684C8.65918 16.6904 8.26367 16.3037 8.26367 15.7061ZM12.9834 15.7061V7.27734C12.9834 6.67969 13.3613 6.29297 13.9678 6.29297H15.7432C16.3408 6.29297 16.7363 6.67969 16.7363 7.27734V15.7061C16.7363 16.3037 16.3408 16.6904 15.7432 16.6904H13.9678C13.3613 16.6904 12.9834 16.3037 12.9834 15.7061ZM3.54395 15.7061V8.97363C3.54395 8.37598 3.93945 7.98047 4.53711 7.98047H6.30371C6.90137 7.98047 7.29688 8.37598 7.29688 8.97363V15.7061C7.29688 16.3037 6.90137 16.6904 6.30371 16.6904H4.53711C3.93945 16.6904 3.54395 16.3037 3.54395 15.7061ZM17.7031 15.7061V10.6348C17.7031 10.0371 18.0898 9.65039 18.6963 9.65039H20.4629C21.0605 9.65039 21.4561 10.0371 21.4561 10.6348V15.7061C21.4561 16.3037 21.0605 16.6904 20.4629 16.6904H18.6963C18.0898 16.6904 17.7031 16.3037 17.7031 15.7061ZM2.39258 19.1865C2.39258 18.5186 2.90234 18.0527 3.54395 18.0527H21.4561C22.1064 18.0527 22.6074 18.5186 22.6074 19.1865C22.6074 19.8457 22.1064 20.3115 21.4561 20.3115H3.54395C2.90234 20.3115 2.39258 19.8457 2.39258 19.1865Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="font-['Clash Grotesk'] font-medium text-[#a0b3c6]">Success rate</div>
                        <div className="font-['IBM_Plex_Mono'] font-medium text-[#ffdf00]">59.37%</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start gap-[8px]">
                <div className="flex flex-auto rounded-full border-2 border-[#27313a] p-[12px]">
                    <div className="flex items-center justify-start gap-0">
                        <div className="!mr-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#27313a]">
                            <svg
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="#a0b3c6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M6.45312 20.1328C6.01562 19.7969 5.92188 19.2422 6.15625 18.5547L7.71875 13.9219L3.74219 11.0781C3.14062 10.6484 2.875 10.1484 3.05469 9.60938C3.23438 9.09375 3.73438 8.83594 4.46875 8.84375L9.34375 8.88281L10.8281 4.22656C11.0547 3.51562 11.4375 3.11719 12 3.11719C12.5547 3.11719 12.9375 3.51562 13.1641 4.22656L14.6484 8.88281L19.5156 8.84375C20.2578 8.83594 20.7578 9.09375 20.9375 9.61719C21.1172 10.1484 20.8516 10.6484 20.25 11.0781L16.2734 13.9219L17.8359 18.5547C18.0703 19.2422 17.9766 19.7969 17.5391 20.1328C17.0938 20.4766 16.5391 20.3672 15.9297 19.9297L12 17.0312L8.05469 19.9297C7.45312 20.3672 6.89844 20.4766 6.45312 20.1328Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="font-['Clash Grotesk'] font-medium text-[#a0b3c6]">Avg. score</div>
                        <div className="font-['IBM_Plex_Mono'] font-medium text-[#ffdf00]">587.2</div>
                    </div>
                </div>
                <div className="flex flex-auto rounded-full border-2 border-[#27313a] p-[12px]">
                    <div className="flex items-center justify-start gap-0">
                        <div className="!mr-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#27313a]">
                            <svg
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="#a0b3c6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M15.25 19.9688C14.6953 19.9688 14.4062 19.7109 14.4062 19.2578C14.4062 18.7969 14.6953 18.5547 15.25 18.5547H16.7109V4.14062H15.25C14.6953 4.14062 14.4062 3.89062 14.4062 3.42188C14.4062 2.97656 14.6953 2.73438 15.25 2.73438H19.7344C20.2891 2.73438 20.5781 2.97656 20.5781 3.42188C20.5781 3.89062 20.2891 4.14062 19.7344 4.14062H18.3281V18.5547H19.7344C20.2891 18.5547 20.5781 18.7969 20.5781 19.2578C20.5781 19.7109 20.2891 19.9688 19.7344 19.9688H15.25ZM4.64062 17.3594C3.88281 17.3594 3.42188 16.9219 3.42188 16.2109C3.42188 15.9844 3.46094 15.75 3.55469 15.4766L6.67969 6.84375C7.00781 5.89844 7.65625 5.42969 8.66406 5.42969C9.73438 5.42969 10.3828 5.89062 10.7109 6.85156L13.7891 15.3828C13.8828 15.6719 13.9297 15.8984 13.9297 16.1797C13.9297 16.8906 13.4297 17.3594 12.6562 17.3594C11.9453 17.3594 11.5625 17.0469 11.3516 16.2969L10.7266 14.4531H6.57031L5.9375 16.2969C5.73438 17.0469 5.35156 17.3594 4.64062 17.3594ZM7.10156 12.5547H10.2031L8.67969 7.83594H8.625L7.10156 12.5547Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="font-['Clash Grotesk'] font-medium text-[#a0b3c6]">Avg. chars</div>
                        <div className="font-['IBM_Plex_Mono'] font-medium text-[#ffdf00]">539</div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-start gap-[8px]">
                <div className="flex flex-auto rounded-full border-2 border-[#27313a] p-[12px]">
                    <div className="flex items-center justify-start gap-0">
                        <div className="!mr-[16px] flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-[#27313a]">
                            <svg
                                width="1.5rem"
                                height="1.5rem"
                                viewBox="0 0 24 24"
                                fill="#a0b3c6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M7.26025 21.5029C6.41357 21.5029 5.86572 20.9136 5.86572 20.0005V5.39941C5.86572 3.63135 6.84521 2.65186 8.59668 2.65186H15.395C17.1465 2.65186 18.126 3.63135 18.126 5.39941V20.0005C18.126 20.9136 17.5698 21.5029 16.7314 21.5029C16.2002 21.5029 15.8599 21.2705 15.2041 20.6313L12.0664 17.4937C12.0249 17.4604 11.9668 17.4604 11.9253 17.4937L8.7959 20.623C8.14014 21.2705 7.7832 21.5029 7.26025 21.5029ZM8.23145 18.0083L11.2695 15.0698C11.7593 14.5967 12.2324 14.5967 12.7222 15.0698L15.7603 18.0083C15.8682 18.1162 15.9844 18.0747 15.9844 17.9253V5.62354C15.9844 5.04248 15.7271 4.79346 15.1543 4.79346H8.8374C8.26465 4.79346 8.00732 5.04248 8.00732 5.62354V17.9253C8.00732 18.0747 8.13184 18.1162 8.23145 18.0083Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <div className="font-['Clash Grotesk'] font-medium text-[#a0b3c6]">Most used properties</div>
                        <div className="font-['IBM_Plex_Mono'] font-medium text-[#ffdf00]">position, left, margin</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlobalStats;
