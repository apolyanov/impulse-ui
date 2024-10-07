import { IThemeProvider } from "@impulse-ui/core";
import { RouterProvider } from "react-router-dom";
import router from "./components/app.routes.tsx";

function App() {
  return (
    <IThemeProvider>
      <RouterProvider router={router} />
    </IThemeProvider>
  );
}

export default App;
