import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProjectCard from '../../constants/projectCard'

const ProjectScreen = () => {
  return (
    <View style={styles.container}>
      <ProjectCard 
        title="- Casa de Praia"
        startDate="20/06/2023" 
        endDate="05/2024" 
        progress={3} 
        pagina='./projetos/CasaDePraia'
      />
      <ProjectCard 
        title="- Hotel Sem Fronteiras" 
        startDate="27/05/2023" 
        endDate="07/2024" 
        progress={70}
        pagina='./projetos/HotelSemFronteiras'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

export default ProjectScreen;