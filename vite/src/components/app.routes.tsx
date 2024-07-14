import { Navigate, createBrowserRouter } from 'react-router-dom';

import Main from './layout/Main';
import AutoCompletePage from './pages/AutoCompletePage';
import AvatarPage from './pages/AvatarPage';
import ButtonsPage from './pages/ButtonsPage';
import ComponentStyle from './pages/ComponentStyle';
import InputsPage from './pages/InputsPage';
import { MuiTable } from './pages/MuiTable';
import QRScannerPage from './pages/QRScannerPage';
import SidebarPage from './pages/SidebarPage';
import TablePage from './pages/TablePage';
import OCRScannerPage from './pages/OCRScannerPage.tsx';

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
      { path: '/table', element: <TablePage /> },
      { path: '/mui-table', element: <MuiTable /> },
      { path: '/qr', element: <QRScannerPage /> },
      { path: '/ocr', element: <OCRScannerPage /> },
      { path: '/styles', element: <ComponentStyle /> },
    ],
  },
]);

export default router;
