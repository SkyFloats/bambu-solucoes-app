// src/context/DataContext.js
import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [clienteData, setClienteData] = useState({
    nome: "",
    endereco: "",
    telefone: "",
    email: "",
  });

  const [projetoData, setProjetoData] = useState({
    titulo: "",
    enderecoProjeto: "",
    tipoConstrucao: "",
    tamanhoConstrucao: "",
    orcamento: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    restricoes: false,
    sustentabilidade: false,
    acessibilidade: false,
    ventilacaoNatural: false,
    isolamentoAcustico: false,
    eficienciaEnergetica: false,
    iluminacaoNatural: false,
    ventilacao: false,
  });

  const setCheckbox = (name, value) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <DataContext.Provider
      value={{
        clienteData,
        setClienteData,
        projetoData,
        setProjetoData,
        checkboxes,
        setCheckbox,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
