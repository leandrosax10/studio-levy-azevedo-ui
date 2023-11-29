import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Comandas } from "../pages/comandas";
import { Usuarios } from "../pages/usuarios";
import { Login } from "../pages/Login";
import { ClienteList } from "../pages/Lista-clientes";
import { CadastroClientes } from "../pages/Cadastro-cliente";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/comandas" element={<Comandas />} />
      <Route path="/clientes" element={<CadastroClientes />} />
      <Route path="/lista-clientes" element={<ClienteList />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
