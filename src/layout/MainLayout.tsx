import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/LeftSideBar';
import Header from '../components/Header';
import Footer from '@/components/Footer';

export default function MainLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar - Fixed */}
            <aside className="bg-sidebar-gradient w-[204px] flex-shrink-0">
                <LeftSideBar />
            </aside>

            {/* Header + Main */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header - Fixed */}
                <header className="w-full flex-shrink-0">
                    <Header />
                </header>

                {/* Main content - Chỉ phần này scroll */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    );
}
