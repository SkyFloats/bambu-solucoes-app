import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CORES from '../../constants/cores';

const ProjetoDetalhesScreen = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>- Projeto Casa de Praia</Text>

       
      <View style={styles.card}>
        <View style={styles.primaryTopic}>
          <Text style={styles.primary}>- Situação atual</Text>
            <Text style={styles.subTopic}>Etapa anterior</Text>
            <Text style={styles.description}>- Reunião de briefing</Text>
            <Text style={styles.subTopic}>Etapa atual</Text>
            <Text style={styles.description}>- Definição de RT</Text>
            <Text style={styles.subTopic}>Próxima etapa</Text>
            <Text style={styles.description}>- Reunião com M.O</Text>
        </View>
        
        <View style={styles.secondaryTopic}>
          <Text style={styles.secondary}>- Sobre a obra</Text>
            <Text style={styles.subTopic}>Endereço</Text>
            <Text style={styles.description}>- Av. Estefânia Carneiro. 171{'\n'}PE - Carpina - Centro</Text>
            <Text style={styles.subTopic}>Tamanho</Text>
            <Text style={styles.description}>- 90m²</Text>
            <Text style={styles.subTopic}>Tipo de obra</Text>
            <Text style={styles.description}>- Residencial</Text>
            <Text style={styles.subTopic}>Orçamento atual</Text>
            <Text style={styles.description9}>- R$9.812,60</Text>
        </View>

        <View style={styles.innerButtonsContainer}>
          <TouchableOpacity style={styles.innerButton}>
            <Text style={styles.innerButtonText}>Características do projeto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerButton}>
            <Text style={styles.innerButtonText}>Características do ambiente</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.status}>Status: em andamento...                   Progresso: 30% {'\n'} </Text> 
        <Text style={styles.status}>*Início: 20/06/2023              Previsão de entrega: 05/2024</Text>
        
        
      </View>


      
      <View style={styles.outerButtonsContainer}>
        <TouchableOpacity style={styles.createTaskButton}>
          <Text style={styles.outerButtonText}>Criar nova task</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteTaskButton}>
          <Text style={styles.outerButtonText}>Deletar task</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar documento</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eee',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    backgroundColor: CORES.principal,
    width: '105%',
    height: '85%',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  primary: {
    color: CORES.branco,
    fontSize: 24,
  },
  secondary: {
    color: CORES.branco,
    fontSize: 24,
  },
  primaryTopic: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    bottom: 20,
  },
  subTopic: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 16,
    bottom: 8,
  },
  description9: {
    color: '#FFFFFF',
    fontSize: 16,
    bottom: 8,
  },
  status: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 0,
  },
  innerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  innerButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  innerButtonText: {
    color: '#3A5340',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  outerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  createTaskButton: {
    backgroundColor: '#3A5340',
    padding: 15,
    borderRadius: 16,
    width: '48%',
    alignItems: 'center',
  },
  deleteTaskButton: {
    backgroundColor: '#D16A47',
    padding: 15,
    borderRadius: 16,
    width: '48%',
    alignItems: 'center',
  },
  outerButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#3A5340',
    fontWeight: 'bold',
  },
});

export default ProjetoDetalhesScreen;