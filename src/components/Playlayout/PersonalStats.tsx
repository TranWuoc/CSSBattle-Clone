function PersonalStats() {
    return (
        <div className="!mt-[16px] flex flex-wrap items-center justify-start gap-[8px]">
            <div className="relative mt-[8px] grow rounded-[16px] border-2 border-[#27313a] p-[12px]">
                <div className="flex flex-col items-center justify-start">
                    <div className="!mt-[-30px] flex h-[35px] w-[35px] items-center justify-center bg-[#131518]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#ffdf00"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M6.45312 20.1328C6.01562 19.7969 5.92188 19.2422 6.15625 18.5547L7.71875 13.9219L3.74219 11.0781C3.14062 10.6484 2.875 10.1484 3.05469 9.60938C3.23438 9.09375 3.73438 8.83594 4.46875 8.84375L9.34375 8.88281L10.8281 4.22656C11.0547 3.51562 11.4375 3.11719 12 3.11719C12.5547 3.11719 12.9375 3.51562 13.1641 4.22656L14.6484 8.88281L19.5156 8.84375C20.2578 8.83594 20.7578 9.09375 20.9375 9.61719C21.1172 10.1484 20.8516 10.6484 20.25 11.0781L16.2734 13.9219L17.8359 18.5547C18.0703 19.2422 17.9766 19.7969 17.5391 20.1328C17.0938 20.4766 16.5391 20.3672 15.9297 19.9297L12 17.0312L8.05469 19.9297C7.45312 20.3672 6.89844 20.4766 6.45312 20.1328Z"></path>
                        </svg>
                    </div>
                    <div className="flex items-center justify-start gap-[8px]">
                        <span
                            className="font-['Clash Grotesk'] scale-150 text-left !text-[1.125rem] !font-bold text-[#eff5fb]"
                            style={{ letterSpacing: '0.3px', lineHeight: '1.4' }}
                        >
                            -
                        </span>
                    </div>
                    <span className="font-['Clash Grotesk'] !text-[0.875rem] font-semibold text-[#6b7b8e]">
                        Last score
                    </span>
                </div>
            </div>
            <div className="relative mt-[8px] grow rounded-[16px] border-2 border-[#27313a] p-[12px]">
                <div className="flex flex-col items-center justify-start">
                    <div className="!mt-[-30px] flex h-[35px] w-[35px] items-center justify-center bg-[#131518]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#ffdf00"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.6084 13.0278C5.6084 12.812 5.68311 12.6211 5.84912 12.4219L13.9673 2.53564C14.6313 1.73047 15.6606 2.26172 15.2871 3.24951L12.6641 10.189H17.686C18.0845 10.189 18.3833 10.4712 18.3833 10.853C18.3833 11.0688 18.3003 11.2598 18.1426 11.459L10.0161 21.3452C9.35205 22.1504 8.32275 21.6274 8.70459 20.6313L11.3276 13.6919H6.30566C5.89893 13.6919 5.6084 13.4097 5.6084 13.0278Z"></path>
                        </svg>
                    </div>
                    <div className="flex items-center justify-start gap-[8px]">
                        <span
                            className="font-['Clash Grotesk'] scale-150 text-left !text-[1.125rem] !font-bold text-[#eff5fb]"
                            style={{ letterSpacing: '0.3px', lineHeight: '1.4' }}
                        >
                            -
                        </span>
                    </div>
                    <span className="font-['Clash Grotesk'] !text-[0.875rem] font-semibold text-[#6b7b8e]">
                        High score
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PersonalStats;
