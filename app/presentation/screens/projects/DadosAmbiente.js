import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
import CORES from "../../../constants/cores";
import Checkbox from "expo-checkbox";
import ButtonLink from "../../components/button/ButtonLink";
import { GlobalDataContext } from "./Context/GlobalContext";
import StylesAmbiente from "./ProjectsStyles/DadosAmbienteStyle";

export default function AdvancedInfo() {
  const { projeto, setProjeto, checkboxes, setCheckboxes } = useContext(GlobalDataContext);
  
  const setCheckbox = (name, value) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const saveState = () => {
    setProjeto({
      ...projeto,
      ...checkboxes,
    });
  };
  return (
    <View style={StylesAmbiente.container}>
      <Stack.Screen options={{ title: "Dados do Ambiente" }} />
      <View>
        <TouchableOpacity style={StylesAmbiente.title}>
          <Text style={StylesAmbiente.titleText}>
            CARACTERÍSTICAS DO PROJETO
          </Text>
        </TouchableOpacity>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Contém restrições?</Text>
          <Checkbox
            value={checkboxes.restricoes}
            onValueChange={(value) => setCheckbox("restricoes", value)}
            color={checkboxes.restricoes ? CORES.secundaria : undefined}
            style={StylesAmbiente.checkbox}
          />
        </View>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Sustentabilidade?</Text>
          <Checkbox
            value={checkboxes.sustentabilidade}
            onValueChange={(value) => setCheckbox("sustentabilidade", value)}
            color={checkboxes.sustentabilidade ? CORES.secundaria : undefined}
            style={StylesAmbiente.checkbox}
          />
        </View>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Acessibilidade?</Text>
          <Checkbox
            value={checkboxes.acessibilidade}
            onValueChange={(value) => setCheckbox("acessibilidade", value)}
            color={checkboxes.acessibilidade ? CORES.secundaria : undefined}
            style={StylesAmbiente.checkbox}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={StylesAmbiente.title}>
          <Text style={StylesAmbiente.titleText}>
            CARACTERÍSTICAS DO AMBIENTE
          </Text>
        </TouchableOpacity>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Ventilação natural?</Text>
          <Checkbox
            value={checkboxes.ventilacaoNatural}
            onValueChange={(value) => setCheckbox("ventilacaoNatural", value)}
            color={checkboxes.ventilacaoNatural ? CORES.secundaria : undefined}
            style={StylesAmbiente.checkbox}
          />
        </View>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Isolamento acústico?</Text>
          <Checkbox
            value={checkboxes.isolamentoAcustico}
            onValueChange={(value) => setCheckbox("isolamentoAcustico", value)}
            color={checkboxes.isolamentoAcustico ? CORES.secundaria : undefined}
            style={StylesAmbiente.checkbox}
          />
        </View>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Eficiência energética?</Text>
          <Checkbox
            value={checkboxes.eficienciaEnergetica}
            onValueChange={(value) =>
              setCheckbox("eficienciaEnergetica", value)
            }
            color={
              checkboxes.eficienciaEnergetica ? CORES.secundaria : undefined
            }
            style={StylesAmbiente.checkbox}
          />
        </View>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Iluminação natural?</Text>
          <Checkbox
            value={checkboxes.iluminacaoNatural}
            onValueChange={(value) => setCheckbox("iluminacaoNatural", value)}
            color={checkboxes.iluminacaoNatural ? CORES.secundaria : undefined}
            style={StylesAmbiente.checkbox}
          />
        </View>
        <View style={StylesAmbiente.row}>
          <Text style={StylesAmbiente.texto}>Ventilação?</Text>
          <Checkbox
            value={checkboxes.ventilacao}
            onValueChange={(value) => setCheckbox("ventilacao", value)}
            color={checkboxes.ventilacao ? CORES.secundaria : undefined}
            style={StylesAmbiente.checkbox}
          />
        </View>
      </View>

      <ButtonLink
        href="./DadosMobilia"
        text={"Salvar e continuar"}
        onPress={saveState}
      />
    </View>
  );
}
