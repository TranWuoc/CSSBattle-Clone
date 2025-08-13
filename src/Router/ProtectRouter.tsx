import { Navigate } from 'react-router-dom';

export const ProtectRouter = ({ children }: { children: React.ReactElement }) => {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken ? children : <Navigate to="/login" replace />;
};
