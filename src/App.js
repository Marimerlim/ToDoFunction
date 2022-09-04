import React, { useState } from "react";

import * as S from "./Style";

export default function App() {
  const [input, setInput] = useState();
  const [lista, setList] = useState([]);

  const Clikar = () => {
    if (input !== ``) {
      setList([...lista, input]);
      setInput("");
    }

    const bolsa = {
      value: input,
      id: Date.now()
    };
    setList([...lista, bolsa]);
    setInput(``);
  };

  function ApagarTask(id) {
    const listFiltrada = lista.filter((item) => item.id !== id);
    setList(listFiltrada);
  }

  return (
    <S.App>
      <S.GlobaStyle />
      <h1>Tarefas à médio prazo</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          type="text"
        />
        <button
          onClick={() => {
            Clikar();
          }}
        ></button>
      </form>
      <ul>
        {lista.map((item) => (
          <li>
            {item.value}
            <S.Button
              onClick={() => {
                ApagarTask(item.id);
              }}
            >
              {" "}
              🗑️
            </S.Button>
          </li>
        ))}
      </ul>
    </S.App>
  );
}
