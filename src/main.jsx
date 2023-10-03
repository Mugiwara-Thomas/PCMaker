import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider,
} from "react-router-dom";


import ResetCss from './styles/ResetCss.jsx';
import Login from './pages/login.jsx';
import "./styles/GlobalStyleCSS.css";

// variável que terá a lista de rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetCss />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
