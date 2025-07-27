import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/LeftSideBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="bg-sidebar-gradient w-[204px]">
                <LeftSideBar />
            </aside>

            {/* Header + Main + Footer */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <header className="w-full">
                    <Header />
                </header>

                {/* Main content */}
                <main className="w-full">
                    <Outlet />
                    {/* <Footer /> */}
                </main>
            </div>
        </div>
    );
}
