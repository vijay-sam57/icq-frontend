import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Admin from "./components/Admin";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App bg-image">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/chat" element={<Chat></Chat>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
