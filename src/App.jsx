import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";
import CalendarPage from "./components/pages/CalendarPage";
import Login from "./components/pages/Login";
import Layout from "./common/Layout";

import "./index.css";
import "./app.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/task" element={<CalendarPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
