import { createBrowserRouter, Navigate } from 'react-router-dom';

import Main from './layout/Main';
import AutoCompletePage from './pages/AutoCompletePage';
import AvatarPage from './pages/AvatarPage';
import ButtonsPage from './pages/ButtonsPage';
import InputsPage from './pages/InputsPage';
import SidebarPage from './pages/SidebarPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <Navigate to={'/buttons'} /> },
      { path: '/buttons', element: <ButtonsPage /> },
      { path: '/inputs', element: <InputsPage /> },
      { path: '/auto-complete', element: <AutoCompletePage /> },
      { path: '/sidebar', element: <SidebarPage /> },
      { path: '/avatar', element: <AvatarPage /> },
    ],
  },
]);

export default router;
