import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';
import CORES from '../../constants/cores';

const ProjectCard = ({ title, startDate, endDate, progress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.phaseText}>Fase inicial</Text>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
      <Bar 
        progress={progress / 100} 
        width={null} 
        color="#D16A47" 
        unfilledColor="#CC8879" 
        borderWidth={0}
        height={20}
        style={styles.progressBar}
      />
      <Text style={styles.dateText}>Início: {startDate}</Text>
      <Text style={styles.dateText}>Previsão de entrega: {endDate}</Text>
    </View>
  );
};

const ProjectScreen = () => {
  return (
    <View style={styles.container}>
      <ProjectCard 
        title="- Casa de Praia" 
        startDate="20/06/2023" 
        endDate="05/2024" 
        progress={0} 
      />
      <ProjectCard 
        title="- Hotel Sem Fronteiras" 
        startDate="27/05/2023" 
        endDate="07/2024" 
        progress={70} 
      />
      {/* Adicione mais ProjectCard aqui se necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#728056',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 7,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  progressContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  phaseText: {
    fontSize: 14,
    color: '#fff',
  },
  progressText: {
    fontSize: 14,
    color: '#D16A47',
  },
  progressBar: {
    width: '100%',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default ProjectScreen;
