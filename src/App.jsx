import { useState } from "react";
import Home from "../components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DayPage from "../components/DayPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/:day"
          element={<DayPage />}
        />
      </Routes>
    </>
  );
}

export default App;
