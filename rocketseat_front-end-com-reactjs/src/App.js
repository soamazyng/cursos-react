import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./componentes/Header";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("repositories").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post("repositories", {
      title: "Nova Codigo React",
      utl: "https://github.com/soamazyng",
      techs: ["nova", "codigo"],
    });

    const repository = response.data;

    setProjects([...projects, repository]);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}

export default App;
