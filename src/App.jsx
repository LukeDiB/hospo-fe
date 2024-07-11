
import Home from "../components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DayPage from "../components/DayPage";
import VenuePage from "../components/VenuePage";

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
        <Route
          path="/:day/:venue"
          element={<VenuePage />}
        />
      </Routes>
    </>
  );
}

export default App;
