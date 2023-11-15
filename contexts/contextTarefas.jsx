import React, { createContext, useContext, useState } from "react";

const MeuContexto = createContext();

const MeuContextoProvider = ({ children }) => {
  const [tarefasCriadas, setTarefasCriadas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState([]);

  return (
    <MeuContexto.Provider
      value={{
        tarefasCriadas,
        setTarefasCriadas,
        tarefasConcluidas,
        setTarefasConcluidas,
      }}
    >
      {children}
    </MeuContexto.Provider>
  );
};

const useMeuContexto = () => {
  const contexto = useContext(MeuContexto);
  if (!contexto) {
    throw new Error(
      "useMeuContexto deve ser usado dentro de um MeuContextoProvider"
    );
  }
  return contexto;
};

export { MeuContextoProvider, useMeuContexto };
