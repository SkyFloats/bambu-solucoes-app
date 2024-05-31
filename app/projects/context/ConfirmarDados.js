import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Link, Stack, router } from "expo-router";
import CORES from "../../../constants/cores";
import { DataContext } from "./DataContext";
import { GlobalDataContext } from "./GlobalDataContext";

const FormConclusao = () => {
  const { clienteData, projetoData, setProjetoData, checkboxes } = useContext(DataContext); 
  const { projetos, setProjetos } = useContext(GlobalDataContext);
  const [detalhesFinais, setDetalhesFinais] = useState("");

  const handleFinalDetailsChange = (text) => {
    setDetalhesFinais(text);
  };

  const saveFinalDetails = () => {
    const novoProjeto = {
      cliente: clienteData,
      projeto: projetoData,
      caracteristicas: checkboxes,
      detalhesFinais: detalhesFinais,
    };

    setProjetos([...projetos, novoProjeto ]);

    Alert.alert("Sucesso", "Dados do projeto salvos com sucesso!");

    router.navigate('/app/projects/projetosHome')
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: "Conclusão do Formulário" }} />
      <Text style={styles.heading}>Confirmação dos Dados:</Text>

      <Text style={styles.subheading}>Dados do Cliente:</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{clienteData.nome}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{clienteData.email}</Text>
      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.value}>{clienteData.telefone}</Text>

      <Text style={styles.subheading}>Dados do Projeto:</Text>

      <Text style={styles.label}>Titulo:</Text>
      <Text style={styles.value}>{projetoData.titulo}</Text>
      <Text style={styles.label}>Endereço do Projeto:</Text>
      <Text style={styles.value}>{projetoData.enderecoProjeto}</Text>
      <Text style={styles.label}>Tipo de Construção:</Text>
      <Text style={styles.value}>{projetoData.tipoConstrucao}</Text>
      <Text style={styles.label}>Tamanho da Construção:</Text>
      <Text style={styles.value}>{projetoData.tamanhoConstrucao}</Text>
      <Text style={styles.label}>Orçamento Inicial:</Text>
      <Text style={styles.value}>{projetoData.orcamento}</Text>

      <Text style={styles.subheading}>Características:</Text>

      <Text style={styles.label}>Restrições:</Text>
      <Text style={styles.value}>{projetoData.restricoes ? "Sim" : "Não"}</Text>
      <Text style={styles.label}>Sustentabilidade:</Text>
      <Text style={styles.value}>
        {projetoData.sustentabilidade ? "Sim" : "Não"}
      </Text>
      <Text style={styles.label}>Acessibilidade:</Text>
      <Text style={styles.value}>
        {projetoData.acessibilidade ? "Sim" : "Não"}
      </Text>
      <Text style={styles.label}>Ventilação Natural:</Text>
      <Text style={styles.value}>
        {projetoData.ventilacaoNatural ? "Sim" : "Não"}
      </Text>
      <Text style={styles.label}>Isolamento Acústico:</Text>
      <Text style={styles.value}>
        {projetoData.isolamentoAcustico ? "Sim" : "Não"}
      </Text>
      <Text style={styles.label}>Eficiência Energética:</Text>
      <Text style={styles.value}>
        {projetoData.eficienciaEnergetica ? "Sim" : "Não"}
      </Text>
      <Text style={styles.label}>Iluminação Natural:</Text>
      <Text style={styles.value}>
        {projetoData.iluminacaoNatural ? "Sim" : "Não"}
      </Text>
      <Text style={styles.label}>Ventilação:</Text>
      <Text style={styles.value}>{projetoData.ventilacao ? "Sim" : "Não"}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="Adicionar detalhes finais"
        placeholderTextColor={CORES.cinza}
        value={detalhesFinais}
        onChangeText={handleFinalDetailsChange}
        multiline
      />
        <TouchableOpacity style={styles.button} onPress={saveFinalDetails}>
          <Text style={styles.buttonText}>Finalizar</Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: CORES.principal,
    marginBottom: 16,
  },
  subheading: {
    fontSize: 20,
    fontWeight: "bold",
    color: CORES.secundaria,
    marginVertical: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: CORES.principal,
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    color: CORES.secundaria,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: CORES.branco,
    color: CORES.textoPrimario,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: CORES.cinza,
    marginBottom: 16,
  },
  button: {
    backgroundColor: CORES.secundaria,
    width: "90%",
    borderRadius: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation: 6,
    marginTop: 32,
  },
  buttonText: {
    color: CORES.branco,
    fontWeight: "bold",
  },
});

export default FormConclusao;
