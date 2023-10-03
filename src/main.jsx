// imports 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";

// imports locais
import App from './App.jsx';
import ResetCss from './styles/ResetCss.jsx';
import Login from './pages/login.jsx';
import "./styles/GlobalStyleCSS.css";
import SelectGame from './pages/selectGame.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Response from './pages/response.jsx';

// variável que terá a lista de rotas
const router = createBrowserRouter([
  {
    // Rota principal
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
      {
        // Rota login
        path: "login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        // rota seleção manual
        path: "selectGame/",
        element: <SelectGame />,
        errorElement: <ErrorPage />,
      },
      {
        // rota response seleção manual
        path: "selectGame/:responseID",
        element: <Response />,
        errorElement: <ErrorPage />,
      },
      // * Rotas que só irão funcionar quando o implementarmos a IA
      // {
      //   // rota seleção manual
      //   path: "selectGameAI/",
      //   element: <SelectGame />
      // },
      // {
      //   // rota seleção manual
      //   path: "selectGameAI/:responseID",
      //   element: <SelectGame />
      // },
    

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetCss />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
