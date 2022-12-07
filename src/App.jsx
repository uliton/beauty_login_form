import React from "react";
import { Route, Routes } from "react-router";
import { LoginForm } from "./components/LoginForm/LoginForm";

export const App = () => (
  <div className="app">
    <Routes>
      <Route path="*" element={<LoginForm />} />
    </Routes>
  </div>
);
