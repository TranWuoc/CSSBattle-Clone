import { useAuth } from '@/Context/authContext';
import DropdownItem from './DropdownItem';
import Dropdown from './Dropdown';
import StreaksWidget from './StreaksWidget';
import { useNavigate } from 'react-router-dom';
function Header() {
    const { isAuthenticated, user, logout, isLoading } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        const confirmLogout = window.confirm('Are u sure you want to logout?');
        if (confirmLogout) {
            logout();
            navigate('/');
        }
    };
    if (isLoading) {
        return (
            <div className="bg-sidebar-gradient sticky z-10 flex h-[60px] items-center justify-between px-[11.2px] py-[16px]">
                <div>Loading...</div>
            </div>
        );
    }

    const userHeader = (
        <div className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex h-[39px] w-[148px] cursor-pointer items-center justify-center gap-[4px] rounded-[40px] border-0 bg-[#323f4a] !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]">
            <img
                src="https://avatars.githubusercontent.com/u/170785893?v=4"
                className="h-[28px] w-[28px] rounded-[50%]"
                alt="User profile"
            ></img>
            <p className="!font-['Clash Grotesk'] !font-bold">{user?.name || 'User'}</p>
            <svg
                width="18"
                height="18"
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
        </div>
    );

    return (
        <div className="bg-sidebar-gradient sticky z-10 flex h-[60px] items-center justify-between px-[11.2px] py-[16px]">
            {/* Left Header */}
            <div className="w-1/2 flex-1"></div>
            {/* Center Header */}
            {isAuthenticated && (
                <div className="relative">
                    {/* Các phần header khác */}
                    <StreaksWidget />
                </div>
            )}
            {/* Right Header */}
            <div className="!leading-0 !mr-[10px] w-1/2 flex-1">
                <div className="font-['Clash Grotesk'] ml-[16px] flex flex-row items-center justify-end gap-[4px] font-medium text-[#6b7b8e]">
                    {isAuthenticated && (
                        <button className="!mr-[16px]">
                            <div className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex h-[35px] w-[60px] cursor-pointer items-center justify-center rounded-[40px] border-0 bg-[#323f4a] !px-4 !py-[0.7rem] !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="undefined"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"
                                    ></path>
                                </svg>
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    )}
                    <div
                        className="mr-1 h-2.5 w-2.5 rounded-full bg-yellow-400"
                        style={{
                            animation: 'radar 2s infinite ease-out',
                        }}
                    ></div>
                    <span className="text-[#cbd1e1]">125</span>
                    Online
                    <button className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-[50px] border-0 bg-[#323f4a] !py-2 !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out hover:bg-[#43515e]">
                        <svg
                            className="h-full w-full"
                            viewBox="0 0 24 24"
                            fill="undefined"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.9999 2.40002C12.3182 2.40002 12.6234 2.52645 12.8484 2.7515C13.0735 2.97654 13.1999 3.28176 13.1999 3.60002V4.80002C13.1999 5.11828 13.0735 5.42351 12.8484 5.64855C12.6234 5.8736 12.3182 6.00002 11.9999 6.00002C11.6816 6.00002 11.3764 5.8736 11.1514 5.64855C10.9263 5.42351 10.7999 5.11828 10.7999 4.80002V3.60002C10.7999 3.28176 10.9263 2.97654 11.1514 2.7515C11.3764 2.52645 11.6816 2.40002 11.9999 2.40002ZM16.7999 12C16.7999 13.2731 16.2942 14.494 15.394 15.3941C14.4938 16.2943 13.2729 16.8 11.9999 16.8C10.7269 16.8 9.50596 16.2943 8.60579 15.3941C7.70562 14.494 7.1999 13.2731 7.1999 12C7.1999 10.727 7.70562 9.50609 8.60579 8.60591C9.50596 7.70574 10.7269 7.20002 11.9999 7.20002C13.2729 7.20002 14.4938 7.70574 15.394 8.60591C16.2942 9.50609 16.7999 10.727 16.7999 12ZM16.2431 17.94L17.0915 18.7884C17.3178 19.007 17.6209 19.128 17.9356 19.1252C18.2502 19.1225 18.5512 18.9963 18.7737 18.7738C18.9962 18.5513 19.1224 18.2503 19.1251 17.9357C19.1278 17.6211 19.0069 17.3179 18.7883 17.0916L17.9399 16.2432C17.7136 16.0246 17.4105 15.9037 17.0958 15.9064C16.7812 15.9092 16.4802 16.0354 16.2577 16.2578C16.0352 16.4803 15.909 16.7813 15.9063 17.0959C15.9036 17.4106 16.0245 17.7137 16.2431 17.94ZM18.7871 5.21162C19.0121 5.43666 19.1384 5.74183 19.1384 6.06002C19.1384 6.37822 19.0121 6.68339 18.7871 6.90842L17.9399 7.75682C17.8292 7.87144 17.6968 7.96286 17.5504 8.02575C17.404 8.08864 17.2465 8.12174 17.0872 8.12313C16.9278 8.12451 16.7698 8.09415 16.6224 8.03381C16.4749 7.97347 16.3409 7.88437 16.2282 7.7717C16.1156 7.65903 16.0265 7.52505 15.9661 7.37757C15.9058 7.23009 15.8754 7.07208 15.8768 6.91274C15.8782 6.75341 15.9113 6.59594 15.9742 6.44954C16.0371 6.30313 16.1285 6.17072 16.2431 6.06002L17.0915 5.21162C17.3165 4.98666 17.6217 4.86028 17.9399 4.86028C18.2581 4.86028 18.5621 4.98666 18.7871 5.21162ZM20.3999 13.2C20.7182 13.2 21.0234 13.0736 21.2484 12.8486C21.4735 12.6235 21.5999 12.3183 21.5999 12C21.5999 11.6818 21.4735 11.3765 21.2484 11.1515C21.0234 10.9265 20.7182 10.8 20.3999 10.8H19.1999C18.8816 10.8 18.5764 10.9265 18.3514 11.1515C18.1263 11.3765 17.9999 11.6818 17.9999 12C17.9999 12.3183 18.1263 12.6235 18.3514 12.8486C18.5764 13.0736 18.8816 13.2 19.1999 13.2H20.3999ZM11.9999 18C12.3182 18 12.6234 18.1265 12.8484 18.3515C13.0735 18.5765 13.1999 18.8818 13.1999 19.2V20.4C13.1999 20.7183 13.0735 21.0235 12.8484 21.2486C12.6234 21.4736 12.3182 21.6 11.9999 21.6C11.6816 21.6 11.3764 21.4736 11.1514 21.2486C10.9263 21.0235 10.7999 20.7183 10.7999 20.4V19.2C10.7999 18.8818 10.9263 18.5765 11.1514 18.3515C11.3764 18.1265 11.6816 18 11.9999 18ZM6.0599 7.75682C6.17132 7.86832 6.3036 7.95677 6.4492 8.01714C6.5948 8.07751 6.75086 8.10861 6.90848 8.10867C7.0661 8.10872 7.22218 8.07773 7.36782 8.01747C7.51347 7.9572 7.64581 7.86884 7.7573 7.75742C7.86879 7.64601 7.95725 7.51373 8.01762 7.36813C8.07799 7.22253 8.10909 7.06647 8.10915 6.90885C8.1092 6.75123 8.07821 6.59514 8.01795 6.4495C7.95768 6.30386 7.86932 6.17152 7.7579 6.06002L6.9083 5.21162C6.68198 4.99303 6.37886 4.87208 6.06422 4.87482C5.74958 4.87755 5.44861 5.00375 5.22612 5.22624C5.00363 5.44873 4.87743 5.74971 4.87469 6.06434C4.87196 6.37898 4.99291 6.6821 5.2115 6.90842L6.0599 7.75682ZM7.7567 17.94L6.9083 18.7884C6.68198 19.007 6.37886 19.128 6.06422 19.1252C5.74958 19.1225 5.44861 18.9963 5.22612 18.7738C5.00363 18.5513 4.87743 18.2503 4.87469 17.9357C4.87196 17.6211 4.99291 17.3179 5.2115 17.0916L6.0599 16.2432C6.28623 16.0246 6.58935 15.9037 6.90398 15.9064C7.21862 15.9092 7.51959 16.0354 7.74208 16.2578C7.96457 16.4803 8.09078 16.7813 8.09351 17.0959C8.09625 17.4106 7.97529 17.7137 7.7567 17.94ZM4.7999 13.2C5.11816 13.2 5.42339 13.0736 5.64843 12.8486C5.87347 12.6235 5.9999 12.3183 5.9999 12C5.9999 11.6818 5.87347 11.3765 5.64843 11.1515C5.42339 10.9265 5.11816 10.8 4.7999 10.8H3.5999C3.28164 10.8 2.97642 10.9265 2.75137 11.1515C2.52633 11.3765 2.3999 11.6818 2.3999 12C2.3999 12.3183 2.52633 12.6235 2.75137 12.8486C2.97642 13.0736 3.28164 13.2 3.5999 13.2H4.7999Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </button>
                    {isAuthenticated ? (
                        <Dropdown trigger={userHeader}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                <li>
                                    <div className="flex items-center gap-2 !text-[#ffdf00]">
                                        <svg
                                            width="1.25rem"
                                            height="1.25rem"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M6 2.4a1.2 1.2 0 0 1 1.2 1.2v1.2h1.2a1.2 1.2 0 0 1 0 2.4H7.2v1.2a1.2 1.2 0 0 1-2.4 0V7.2H3.6a1.2 1.2 0 0 1 0-2.4h1.2V3.6A1.2 1.2 0 0 1 6 2.4Zm0 12a1.2 1.2 0 0 1 1.2 1.2v1.2h1.2a1.2 1.2 0 1 1 0 2.4H7.2v1.2a1.2 1.2 0 1 1-2.4 0v-1.2H3.6a1.2 1.2 0 1 1 0-2.4h1.2v-1.2A1.2 1.2 0 0 1 6 14.4Zm8.4-12a1.2 1.2 0 0 1 1.16.893l1.415 5.347L21 10.96a1.2 1.2 0 0 1 0 2.08l-4.025 2.321-1.416 5.346a1.2 1.2 0 0 1-2.32 0l-1.414-5.347L7.8 13.04a1.2 1.2 0 0 1 0-2.08l4.025-2.321 1.416-5.346A1.2 1.2 0 0 1 14.4 2.4Z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <DropdownItem href="/" className="!text-[#ffdf00] hover:!underline">
                                            Upgrade to
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
                                        </DropdownItem>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5 12.2275C9.4126 12.2275 7.70557 10.3999 7.70557 8.08057C7.69629 5.82617 9.43115 3.99854 11.5 3.99854C13.5688 3.99854 15.2944 5.80762 15.2944 8.07129C15.2944 10.3999 13.5874 12.2275 11.5 12.2275ZM5.41406 20.9297C4.28223 20.9297 3.60498 20.3823 3.60498 19.4731C3.60498 17.0981 6.68506 13.8511 11.5 13.8511C16.3057 13.8511 19.395 17.0981 19.395 19.4731C19.395 20.3823 18.7178 20.9297 17.5859 20.9297H5.41406Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <DropdownItem href="/settings" className="!text-[#fff] hover:!underline">
                                            View Profile
                                        </DropdownItem>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="1.25rem"
                                            height="1.25rem"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"
                                            ></path>
                                        </svg>
                                        <DropdownItem href="/earnings" className="!text-[#fff] hover:!underline">
                                            My Battles
                                        </DropdownItem>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="1.25rem"
                                            height="1.25rem"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.26367 15.7061V5.18555C8.26367 4.5791 8.65918 4.20117 9.25684 4.20117H11.0234C11.6299 4.20117 12.0166 4.5791 12.0166 5.18555V15.7061C12.0166 16.3037 11.6299 16.6904 11.0234 16.6904H9.25684C8.65918 16.6904 8.26367 16.3037 8.26367 15.7061ZM12.9834 15.7061V7.27734C12.9834 6.67969 13.3613 6.29297 13.9678 6.29297H15.7432C16.3408 6.29297 16.7363 6.67969 16.7363 7.27734V15.7061C16.7363 16.3037 16.3408 16.6904 15.7432 16.6904H13.9678C13.3613 16.6904 12.9834 16.3037 12.9834 15.7061ZM3.54395 15.7061V8.97363C3.54395 8.37598 3.93945 7.98047 4.53711 7.98047H6.30371C6.90137 7.98047 7.29688 8.37598 7.29688 8.97363V15.7061C7.29688 16.3037 6.90137 16.6904 6.30371 16.6904H4.53711C3.93945 16.6904 3.54395 16.3037 3.54395 15.7061ZM17.7031 15.7061V10.6348C17.7031 10.0371 18.0898 9.65039 18.6963 9.65039H20.4629C21.0605 9.65039 21.4561 10.0371 21.4561 10.6348V15.7061C21.4561 16.3037 21.0605 16.6904 20.4629 16.6904H18.6963C18.0898 16.6904 17.7031 16.3037 17.7031 15.7061ZM2.39258 19.1865C2.39258 18.5186 2.90234 18.0527 3.54395 18.0527H21.4561C22.1064 18.0527 22.6074 18.5186 22.6074 19.1865C22.6074 19.8457 22.1064 20.3115 21.4561 20.3115H3.54395C2.90234 20.3115 2.39258 19.8457 2.39258 19.1865Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <DropdownItem href="/earnings" className="!text-[#fff] hover:!underline">
                                            My Analytics
                                        </DropdownItem>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="1.25rem"
                                            height="1.25rem"
                                            viewBox="0 0 24 24"
                                            fill="undefined"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
                                            ></path>
                                        </svg>
                                        <DropdownItem href="/earnings" className="!text-[#fff] hover:!underline">
                                            Settings
                                        </DropdownItem>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center gap-2">
                                        <svg
                                            width="1.25rem"
                                            height="1.25rem"
                                            viewBox="0 0 24 24"
                                            fill="undefined"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M3.6 3.6a1.2 1.2 0 0 0-1.2 1.2v14.4a1.2 1.2 0 1 0 2.4 0V4.8a1.2 1.2 0 0 0-1.2-1.2ZM15.95 14.752a1.2 1.2 0 0 0 1.697 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696l-3.6-3.6a1.2 1.2 0 1 0-1.697 1.697l1.552 1.551H8.4a1.2 1.2 0 1 0 0 2.4h9.103l-1.552 1.552Z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        <DropdownItem
                                            href="/"
                                            className="!text-[#fff] hover:!underline"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </DropdownItem>
                                    </div>
                                </li>
                            </ul>
                        </Dropdown>
                    ) : (
                        <a
                            className="!font-['Clash Grotesk'] !ml-[20px] !inline-flex cursor-pointer items-center justify-center rounded-[40px] border-0 bg-[#323f4a] !px-4 !py-[0.7rem] !text-left !font-semibold leading-[1.2] tracking-[0.2px] !text-[#fff] no-underline shadow-[inset_1px_1px_2px_hsla(0,0%,100%,0.1)] transition-[transform,background-color] duration-200 ease-in-out"
                            href="/login"
                        >
                            Sign In / Sign Up
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
