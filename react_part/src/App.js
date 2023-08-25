import React from "react";
import NoteList from "./pages/NoteList";
import NotePage from "./pages/NotePage";
import LoginPage from "./pages/LoginPage";
import "./styles/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/notelist" element={<NoteList />} />
          <Route exact path="/notelist/:id" element={<NotePage />} />
          {/* <Route path="/new" element={<NotePage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
