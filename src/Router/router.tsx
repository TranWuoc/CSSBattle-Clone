import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../index.css';
import MainLayout from '@/layout/MainLayout';
import Home from '@/pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [{ index: true, element: <Home /> }],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
