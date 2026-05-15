import { Routes, Route, Navigate } from 'react-router-dom';
import * as Pages from '../pages/index.jsx';
import Profile from '../pages/profile/Profile.jsx';
import UsersList from '../pages/users/UsersList.jsx';
import { ErrorBoundary } from '../components/ErrorBoundary';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Pages.Login />} />
      <Route path="/register" element={<Pages.Register />} />
      <Route path="/profile" element={<ErrorBoundary><Profile /></ErrorBoundary>} />
      <Route path="/users" element={<ErrorBoundary><UsersList /></ErrorBoundary>} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};
