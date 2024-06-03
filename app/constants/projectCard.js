import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CORES from "./cores";
import { Bar } from "react-native-progress";

const ProjectCard = ({projetoInfo, progress}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{projetoInfo.titulo}</Text>
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
      <Text style={styles.dateText}>Início: {new Date().toLocaleDateString()}</Text>
      <Text style={styles.dateText}>Previsão de entrega {new Date().toLocaleDateString()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: CORES.principal,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 10,
    alignItems: "left",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: CORES.branco,
    marginBottom: 10,
  },
  progressContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: "100%",
    marginBottom: 10,
  },
  dateText: {
    fontSize: 14,
    color: CORES.branco,
  },
});

export default ProjectCard;
