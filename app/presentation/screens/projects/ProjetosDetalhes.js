import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalDataContext } from './Context/GlobalContext';

const DetalhesProjeto = ({ route }) => {
  const { projetos } = useContext(GlobalDataContext);
  const { index } = route.params;
  const projeto = projetos[index];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Projeto</Text>
      <Text style={styles.label}>Título: {projeto.titulo}</Text>
      <Text style={styles.label}>Endereço: {projeto.enderecoProjeto}</Text>
      <Text style={styles.label}>Tipo de Construção: {projeto.tipoConstrucao}</Text>
      <Text style={styles.label}>Tamanho: {projeto.tamanhoConstrucao}</Text>
      <Text style={styles.label}>Orçamento: {projeto.orcamento}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default DetalhesProjeto;
