import React from "react";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import GeneratePage from "./pages/GeneratePage";
import ModifyPage from "./pages/ModifyPage";
import RefinePage from "./pages/RefinePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const Main = () => {
  return (
    <>
      <BrowserRouter>
        <App>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/generate" element={<GeneratePage />} />
            <Route path="/modify" element={<ModifyPage />} />
            <Route path="/refine" element={<RefinePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </App>
      </BrowserRouter>
    </>
  );
};
export default Main;
