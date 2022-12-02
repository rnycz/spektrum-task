import React from "react";
import "./styles/App.css";
import ProfilePage from "./pages/ProfilePage";
import FormPage from "./pages/FormPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
