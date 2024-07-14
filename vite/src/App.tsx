import { IThemeProvider } from '@impulse-ui/core';
import { Container } from '@impulse-ui/layout';
import { RouterProvider } from 'react-router-dom';
import router from './components/app.routes.tsx';

function App() {
  return (
    <Container iStyle={{ iCss: { margin: 0, padding: 0, minHeight: '100vh', width: '100%' } }}>
      <IThemeProvider>
        <RouterProvider router={router} />
      </IThemeProvider>
    </Container>
  );
}

export default App;
