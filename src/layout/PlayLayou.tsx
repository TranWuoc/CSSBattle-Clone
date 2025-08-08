import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/Playlayout/LeftSideBar';
import Header from '../components/Playlayout/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

export default function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen flex-1 flex-col overflow-hidden">
            {/* Header */}
            <header className="w-full flex-shrink-0">
                <Header onToggleSidebar={toggleSidebar} isOpenSideBar={isSidebarOpen} />
            </header>

            {/* LeftSideBar */}
            <div className="relative flex flex-1 overflow-hidden">
                <aside
                    className={`bg-sidebar-gradient z-20 w-[204px] flex-shrink-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} absolute h-full`}
                >
                    <LeftSideBar />
                </aside>

                {isSidebarOpen && (
                    <div className="absolute inset-0 z-10 bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
                )}

                {/* Main content */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                    <Footer />
                </main>
            </div>
            <ToastContainer
                icon={
                    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#3498db">
                        <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"></path>
                    </svg>
                }
                progressClassName="!bg-[#3498db]"
                closeOnClick
                pauseOnHover={false}
                draggable
                theme="dark"
                transition={Slide}
                className="!mr-[20px] space-x-1.5 font-semibold"
            />
        </div>
    );
}
