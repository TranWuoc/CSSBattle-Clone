import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../index.css';
import MainLayout from '@/layout/MainLayout';
import PlayLayout from '@/layout/PlayLayou';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { AuthProvider } from '@/Context/authContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/login', element: <Login /> },
        ],
    },
    {
        path: '/play',
        element: <PlayLayout />,
        children: [],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
);
