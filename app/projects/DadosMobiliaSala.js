import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link, Stack } from "expo-router";
import CORES from '../../constants/cores' ;

const roomItems = [
  'Itens Sala - Chão',
  'Itens Sala - Parede',
  'Itens Sala - Teto',
];

const chipItemsChao = [
  'Tapete', 'Sofá', 'Raque','Vasos', 'Mesa Centro', 'Poltrona', 'Puff', 
  'Banco', 'Cadeiras',  'Futon', 'Bancos', 'Mesa Lateral', 
];

const chipItemsParede = [
  'Estantes de parede', 'Prateleiras', 'Nichos', 'Suporte pra TV', 'Espelhos', 
  'Cabideiros', 'Caixas Org.', 'Placas', 'Letreiros', 'Quadros', 'Vasos de planta', 
  'Galerias'
];

const chipItemsTeto = [
  'Lustres', 'Plafons', 'Arandelas', 'Ventilador', 'Cortinas', 'Toldos', 
  'Painéis acústicos', 'Sistema de som', 'Barras de apoio'
];

const GreenCardScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedChips, setSelectedChips] = useState({
    chao: [],
    parede: [],
    teto: []
  });

  const handlePress = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleChipPress = (chip, type) => {
    setSelectedChips((prevSelected) => {
      const newSelected = { ...prevSelected };
      if (newSelected[type].includes(chip)) {
        newSelected[type] = newSelected[type].filter((item) => item !== chip);
      } else {
        newSelected[type].push(chip);
      }
      return newSelected;
    });
  };

  const renderRoomItem = (item, index) => {
    let chipItems;
    let chipType;
    
    switch(item) {
      case 'Itens Sala - Chão':
        chipItems = chipItemsChao;
        chipType = 'chao';
        break;
      case 'Itens Sala - Parede':
        chipItems = chipItemsParede;
        chipType = 'parede';
        break;
      case 'Itens Sala - Teto':
        chipItems = chipItemsTeto;
        chipType = 'teto';
        break;
      default:
        chipItems = [];
        chipType = '';
    }

    const renderChips = (chips, type) => {
      return (
        <View style={styles.chipsContainer}>
          {chips.map((chip, chipIndex) => (
            <TouchableOpacity 
              key={chipIndex} 
              style={[
                styles.chip, 
                selectedChips[type].includes(chip) && styles.selectedChip
              ]}
              onPress={() => handleChipPress(chip, type)}
            >
              <Text style={[
                styles.chipText,
                selectedChips[type].includes(chip) && styles.selectedChipText
              ]}>
                {chip}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    };

    return (
      <View key={index}>
        <TouchableOpacity onPress={() => handlePress(index)} style={styles.roomItem}>
          <Text style={styles.roomItemText}>{item}</Text>
          <Text style={styles.arrow}>{expandedIndex === index ? '↑' : '↓'}</Text>
        </TouchableOpacity>
        {expandedIndex === index && (
          <View style={styles.dropdownContent}>
            {renderChips(chipItems, chipType)}
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: "Dados da Mobilia - Sala" }} />
      <View style={styles.card}>
        {roomItems.map((item, index) => renderRoomItem(item, index))}
      </View>

      <Link style={styles.buttonText} href='./context/testando' asChild>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Salvar e continuar </Text>
        </TouchableOpacity>
      </Link> 
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  card: {
    width: '95%',
    height: '80%',
    backgroundColor: CORES.principal,
    borderRadius: 10,
    padding: 15,
    marginBottom: 130,
    marginVertical: 10,
    justifyContent: 'flex-start',
  },
  roomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  roomItemText: {
    fontSize: 18,
    color: CORES.preto,
  },
  arrow: {
    fontSize: 18,
    color: CORES.preto,
  }, 
  dropdownContent: {
    padding: 15,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  chip: {
    borderWidth: 1,
    borderColor: CORES.principal,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: CORES.branco,
    elevation: 6,
    margin: 5,
  },
  selectedChip: {
    backgroundColor: CORES.secundaria,
    borderColor: CORES.secundaria,
  },
  chipText: {
    color: CORES.preto,
  },
  selectedChipText: {
    color: CORES.branco,
  },
  button: {
    backgroundColor: CORES.secundaria,
    width: '90%',
    borderRadius: 10,
    height: 50,
    margin: 'auto',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  buttonText: {
    color: CORES.branco,
    fontWeight: 'bold',
  },
});

export default GreenCardScreen;
