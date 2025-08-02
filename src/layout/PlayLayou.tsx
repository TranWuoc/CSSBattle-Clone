import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/Playlayout/LeftSideBar';
import Header from '../components/Playlayout/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function MainLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen flex-1 flex-col overflow-hidden">
            {/* Header - Fixed */}
            <header className="w-full flex-shrink-0">
                <Header onToggleSidebar={toggleSidebar} isOpenSideBar={isSidebarOpen} />
            </header>

            <div className="relative flex flex-1 overflow-hidden">
                <aside
                    className={`bg-sidebar-gradient z-20 w-[204px] flex-shrink-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} absolute h-full`}
                >
                    <LeftSideBar />
                </aside>

                {isSidebarOpen && (
                    <div className="absolute inset-0 z-10 bg-opacity-50" onClick={() => setIsSidebarOpen(false)} />
                )}

                {/* Main content - Chỉ phần này scroll */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    );
}
