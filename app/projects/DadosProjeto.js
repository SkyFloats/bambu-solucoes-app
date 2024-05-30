import React, { useContext } from "react";
import {
View,
  Text,
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
          <Text style={styles.buttonText}>Salvar e continuar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  input: {
    borderRadius: 10,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    margin: 'auto',
    marginBottom: 12,
    paddingLeft: 10,
    fontSize: 16,
    width: "90%",
  },
 button: {
  backgroundColor: CORES.secundaria,
  width: '90%',
  borderRadius: 10,
  height: 50,
  margin: 'auto',
  marginTop: 300,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 6,
},
  buttonText: {
  color: CORES.branco,
  fontWeight: 'bold',
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
