import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CORES from "../../../constants/cores";
import ProjectCard from "../../../constants/projectCard";
import { GlobalDataContext } from "./Context/GlobalContext";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const ProjectScreen = () => {
  const { projetos } = useContext(GlobalDataContext);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView >
        {projetos.map((projeto, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push(`/SobreProjeto/${index}`)}
          >
            <ProjectCard projetoInfo={projeto} progress={70} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
    alignItems: "center",
    paddingVertical: 20,
  },
  card: {
    width: "100%",
    backgroundColor: CORES.principal,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 10,
    alignItems: "flex-start",
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

export default ProjectScreen;
