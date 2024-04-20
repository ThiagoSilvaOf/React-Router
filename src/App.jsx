import React from "react";
import "../public/style.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Produtos from "./Produtos";
import Produto from "./Produto";
import Contato from "./Contato";

function App() {
  return (
    <BrowserRouter>
      <NavLink to="/">Produtos</NavLink>
      <NavLink to="contato">Contato</NavLink>

      <Routes>
        <Route path="/" element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
