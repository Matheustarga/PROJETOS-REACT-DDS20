import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Sobre from "./pages/Sobre";
import PaginaErro from "./pages/PaginaErro";
import RotasProtegidas from "./pages/RotasProtegidas";
import ResetarSenha from "./pages/ResetarSenha";

// criamos uma lista de objetos para  conter as rotas

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/resetarsenha",
        element: <ResetarSenha />,
      },
    ],
  },

  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      // ----------------------------------------------------------- cada objeto representa uma rota! o path o caminho e o element a pagina que será exibida
      {
        path: "home",
        element: <Home />,
      },
      // -----------------------------------------------------------
      {
        path: "cadastro",
        element: <Cadastro />,
      },
      // -----------------------------------------------------------
      {
        path: "sobre",
        element: <Sobre />,
      },
    ],
  },
]);

export default router;
