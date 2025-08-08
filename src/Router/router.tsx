import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../index.css';
import MainLayout from '@/layout/MainLayout';
import PlayLayout from '@/layout/PlayLayou';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import { AuthProvider } from '@/Context/authContext';
import Play from '@/pages/Play';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = '225331539228-jik19429k01e29k19b6or32hp3eigv26.apps.googleusercontent.com';

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
        children: [{ index: true, element: <Play /> }],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider>
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <RouterProvider router={router} />
            </GoogleOAuthProvider>
        </AuthProvider>
    </StrictMode>,
);
