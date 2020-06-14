import React, { useState, useEffect } from "react";

import "./styles.css";

import Header from "./components/Header";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get("repositories").then((response) => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post("repositories", {
      id: "158906f8-defa-4c8a-aecd-d64a2695cc97",
      title: "Nova Código",
      techs: ["Brinde Rápido", "Cielo"],
      likes: 0,
    });

    const repository = response.data;

    setRepositories([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`);

    if (response.status === 204) {
      const repository = repositories.filter((repo) => repo.id !== id);
      setRepositories([...repository]);
    }
  }

  return (
    <>
      <Header title="Repositórios" />

      <ul data-testid="repository-list">
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </>
  );
}

export default App;
