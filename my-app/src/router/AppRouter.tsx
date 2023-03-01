import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login title="Login" />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
