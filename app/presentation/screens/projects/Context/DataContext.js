import React, { createContext, useState } from "react";
import { GlobalDataContext } from "./GlobalContext";


export const DadosProjeto = () => {
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
