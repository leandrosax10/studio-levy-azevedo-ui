import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
};
