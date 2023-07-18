import React from "react";
import NoteList from "./pages/NoteList";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import "./styles/App.css";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/notelist" element={<NoteList />} />
          <Route path="/new" element={<NotePage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
