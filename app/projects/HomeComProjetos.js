import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Bar } from 'react-native-progress';
import CORES from '../../constants/cores';
import { Link } from 'expo-router';

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
      <Text style={styles.dateText}>Início {startDate}</Text>
      <Text style={styles.dateText}>Previsão de entrega {endDate}</Text>
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
        progress={3} 
      />
      <ProjectCard 
        title="- Hotel Sem Fronteiras" 
        startDate="27/05/2023" 
        endDate="07/2024" 
        progress={70} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    backgroundColor: CORES.principal,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 10,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: CORES.branco,
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
    color: CORES.branco,
  },
  progressText: {
    fontSize: 14,
    color: CORES.branco,
  },
  progressBar: {
    width: '100%',
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: CORES.branco,
  },
});

export default ProjectScreen;
