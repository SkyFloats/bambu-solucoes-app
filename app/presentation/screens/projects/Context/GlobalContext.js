import React, { createContext, useState } from "react";

// Criação do contexto
export const GlobalDataContext = createContext();

// Provedor do contexto
export const GlobalDataProvider = ({ children }) => {
  const [projetos, setProjetos] = useState([]);
  const [projeto, setProjeto] = useState({
    detalhesFinais: "",
  });
  const [cliente, setCliente] = useState({
    nome: "",
    endereco: "",
    email: "",
    telefone: "",
  });
  const [projetoData, setProjetoData] = useState({
    titulo: "",
    enderecoProjeto: "",
    tipoConstrucao: "",
    tamanhoConstrucao: "",
    orcamento: "",
  });
  const [checkboxes, setCheckboxes] = useState([
    { label: "Restrições", checked: false },
    { label: "Sustentabilidade", checked: false },
    { label: "Acessibilidade", checked: false },
    { label: "Ventilação Natural", checked: false },
    { label: "Isolamento Acústico", checked: false },
    { label: "Eficiência Energética", checked: false },
    { label: "Iluminação Natural", checked: false },
    { label: "Ventilação", checked: false },
  ]);

  return (
    <GlobalDataContext.Provider
      value={{
        projeto,
        setProjeto,
        projetos,
        setProjetos,
        cliente,
        setCliente,
        projetoData,
        setProjetoData,
        checkboxes,
        setCheckboxes,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};
