import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { Stack, router } from "expo-router";
import CORES from "../../../constants/cores";
import { GlobalDataContext } from "./Context/GlobalContext";

const FormConclusao = () => {
  const { projetos, setProjetos, projeto } = useContext(GlobalDataContext);
  const [detalhesFinais, setDetalhesFinais] = useState("");

  const handleFinalDetailsChange = (text) => {
    setDetalhesFinais(text);
  };

  const saveFinalDetails = () => {
    const novoProjeto = {
      ...projeto,
      detalhesFinais: detalhesFinais,
    };

    setProjetos([...projetos, novoProjeto]);

    Alert.alert("Sucesso", "Dados do projeto salvos com sucesso!");
    router.navigate("./projetosHome");
  };

  if (!projeto) {
    return <Text>Carregando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: "Conclusão do Formulário" }} />
      <Text style={styles.heading}>Confirmação dos Dados:</Text>

      <Text style={styles.subheading}>Dados do Cliente:</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>{projeto.nome}</Text>
      <Text style={styles.label}>Endereço:</Text>
      <Text style={styles.value}>{projeto.endereco}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{projeto.email}</Text>
      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.value}>{projeto.telefone}</Text>

      <Text style={styles.subheading}>Dados do Projeto:</Text>
      <Text style={styles.label}>Titulo:</Text>
      <Text style={styles.value}>{projeto.titulo}</Text>
      <Text style={styles.label}>Endereço do Projeto:</Text>
      <Text style={styles.value}>{projeto.enderecoProjeto}</Text>
      <Text style={styles.label}>Tipo de Construção:</Text>
      <Text style={styles.value}>{projeto.tipoConstrucao}</Text>
      <Text style={styles.label}>Tamanho da Construção:</Text>
      <Text style={styles.value}>{projeto.tamanhoConstrucao}m²</Text>
      <Text style={styles.label}>Orçamento Inicial:</Text>
      <Text style={styles.value}>{projeto.orcamento}R$</Text>

      <Text style={styles.subheading}>Características:</Text>
      {projeto.caracteristicas && projeto.caracteristicas.map((item, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <Text style={styles.label}>{item.label}:</Text>
          <Text style={styles.value}>{item.checked ? "Sim" : "Não"}</Text>
        </View>
      ))}

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
  checkboxContainer: {
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
