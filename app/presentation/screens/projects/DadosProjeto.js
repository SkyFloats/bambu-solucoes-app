import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import ButtonLink from "../../components/button/ButtonLink";
import StylesClient from "./ProjectsStyles/DadosClienteStyle";
import InputLink from "../../components/input/InputLink";
import { GlobalDataContext } from "./Context/GlobalContext";

export default function DadosProjeto() {
  const { projeto, setProjeto, projetoData, setProjetoData } = useContext(GlobalDataContext);

  const handleInputChange = (name, value) => {
    setProjetoData((prevProjetoData) => ({
      ...prevProjetoData,
      [name]: value,
    }));
  };

  const saveProjeto = () => {
    setProjeto((prevProjeto) => [...prevProjeto, projetoData]);
  };

  return (
    <View style={StylesClient.container}>
      <Stack.Screen options={{ title: "Dados do Projeto" }} />
      <InputLink
        placeholder={"Título do projeto"}
        text={"Nome"}
        placeholderTextColor={CORES.branco}
        value={projetoData.titulo}
        onChangeText={(text) => handleInputChange('titulo', text)
        }
      />
      <InputLink
        placeholder={"Endereço do projeto"}
        text={"Endereço"}
        placeholderTextColor={CORES.branco}
        value={projetoData.enderecoProjeto}
        onChangeText={(text) => handleInputChange('enderecoProjeto', text)
        }
      />
      <InputLink
        placeholder={"Resid. Comerc. Indust."}
        text={"Tipo de construção"}
        placeholderTextColor={CORES.branco}
        value={projetoData.tipoConstrucao}
        onChangeText={(text) => handleInputChange('tipoConstrucao', text)
        }
      />
      <InputLink
        placeholder={"Em m²"}
        text={"Tamanho da construção"}
        placeholderTextColor={CORES.branco}
        value={projetoData.tamanhoConstrucao}
        onChangeText={(text) => handleInputChange('tamanhoConstrucao', text)
        }
      />

      <InputLink
        placeholder={"Orçamento inicial"}
        text={"Orçamento"}
        placeholderTextColor={CORES.branco}
        value={projetoData.orcamento}
        onChangeText={(text) => handleInputChange('orcamento', text)
        }
      />

      <ButtonLink onPress={saveProjeto} href="./DadosAmbiente" text="Salvar e continuar" />
    </View>
  );
}
