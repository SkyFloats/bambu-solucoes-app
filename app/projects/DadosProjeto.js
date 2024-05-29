import React, { useContext } from "react";
import {
View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Link, Stack } from "expo-router";
import CORES from "../../constants/cores";
import { DataContext } from "./context/DataContext";

export default function DadosProjeto() {
  const { projetoData, setProjetoData } = useContext(DataContext);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Dados do Projeto" }} />

      <Text style={styles.text}>Título do projeto</Text>
      <TextInput
        placeholder="Título do projeto"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.titulo}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, titulo: text })
        }
      />

      <Text style={styles.text}>Endereço</Text>
      <TextInput
        placeholder="Endereço do projeto"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.enderecoProjeto}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, enderecoProjeto: text })
        }
      />

      <Text style={styles.text}>Tipo de construção</Text>
      <TextInput
        placeholder="Resid. Comerc. Indust."
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.tipoConstrucao}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, tipoConstrucao: text })
        }
      />

      <Text style={styles.text}>Tamanho da construção</Text>
      <TextInput
        placeholder="Em m²"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.tamanhoConstrucao}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, tamanhoConstrucao: text })
        }
      />

      <Text style={styles.text}>Orçamento</Text>
      <TextInput
        placeholder="Orçamento inicial"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={projetoData.orcamento}
        onChangeText={(text) =>
          setProjetoData({ ...projetoData, orcamento: text })
        }
      />

      <Link href="./DadosAmbiente" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar e {"\n"} continuar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    left: 15,
  },
  input: {
    borderRadius: 10,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    marginBottom: 12,
    marginLeft: "2%",
    paddingLeft: 10,
    fontSize: 16,
    width: "90%",
  },
  cabecalho: {
    position: "relative",
    backgroundColor: CORES.secundaria,
    flexDirection: "row",
    alig: "center",
    height: "10%",
  },
  imagem: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "7%",
    width: 60,
    height: 80,
    resizeMode: "contain",
  },
  namePage: {
    flex: 1,
    fontSize: 25,
    color: CORES.branco,
    marginTop: "11%",
    marginLeft: "",
  },
  button: {
    backgroundColor: CORES.branco,
    width: "40%",
    borderRadius: 5,
    marginTop: "10%",
    marginLeft: "2%",
    paddingBottom: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: CORES.cinza,
    marginTop: 5,
    marginLeft: "2%",
  },
  enderecoText: {
    fontWeight: "bold",
    color: CORES.cinza,
    marginTop: 5,
    marginLeft: "2%",
  },
  tipoText: {
    fontWeight: "bold",
    color: CORES.cinza,
    marginTop: 5,
    marginLeft: "2%",
  },
  tamanhoText: {
    fontWeight: "bold",
    color: CORES.cinza,
    marginTop: 5,
    marginLeft: "2%",
  },
  orcamentoText: {
    fontWeight: "bold",
    color: CORES.cinza,
    marginTop: 5,
    marginLeft: "2%",
  },
});
