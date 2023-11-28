import { Routes, Route, Navigate } from "react-router-dom";

export const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/home" element={<p>Teste Router</p>} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
