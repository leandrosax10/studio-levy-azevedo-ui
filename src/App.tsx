import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
};
