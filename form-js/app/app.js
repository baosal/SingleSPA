import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BpmnFormPlayground } from "./form-engine/BpmnFormPlayground";
import BpmnForm from "./form-engine/BpmnForm.tsx";
import { Tasks } from "./components/tasks";
import { Form } from "./components/form";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Form Play Ground</Link> | <Link to="/form">Form View</Link>{" "}
        | <Link to="/tasks">Tasks</Link> |{" "}
      </nav>
      <Routes>
        <Route path="/" element={<BpmnFormPlayground />} />
        <Route path="/form" element={<BpmnForm />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/form/:formId" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
