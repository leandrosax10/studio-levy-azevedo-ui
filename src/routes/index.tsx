import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Comandas } from "../pages/comandas";
import { Clientes } from "../pages/clientes";
import { Usuarios } from "../pages/usuarios";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/home" element={<Dashboard/>} />
      <Route path="/comandas" element={<Comandas/>} />
      <Route path="/clientes" element={<Clientes/>} />
      <Route path="/usuarios" element={<Usuarios/>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
