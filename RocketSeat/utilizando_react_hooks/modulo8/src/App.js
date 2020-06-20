import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  // o useState retorna um array
  // sendo que na primeira posição é o state
  // no segundo é uma função que serve para atualizar os itens do state
  const [tech, setTech] = useState([]);
  const [techText, setTechText] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, techText]);
    setTechText('');
  }, [techText, tech]);

  // component did mount
  // se passar vazio ele não vai executar quando inicializar pois ele não está monitorando nenhum state
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // componentDidUpdate -- sempre que o estado alterava
  // também sempre executa na primeira instância
  // agora pode utilizar o useEffect
  // o primeiro parâmetro que ele recebe é a função que vai ser executada
  // o segundo parâmetro é quando, array de dependências
  // por exemplo, se eu colocar o state tech, sempre que ele for alterado é executado a função
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // utiliza quando quer fazer calculo baseado em outras variáveis
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <div>
        <input value={techText} onChange={(e) => setTechText(e.target.value)} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
}

export default App;
