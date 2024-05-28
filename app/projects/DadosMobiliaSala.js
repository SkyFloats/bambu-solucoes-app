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
  'Tapete', 'Sofá', 'Raque', 'Mesa Centro', 'Poltrona', 'Mesa Lateral', 
  'Puff', 'Banco', 'Cadeiras', 'Vasos', 'Futon', 'Cadeiras'
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

    const renderChipsInMatrix = (chips, type) => {
      const rows = [];
      for (let i = 0; i < chips.length; i += 3) {
        rows.push(
          <View key={i} style={styles.chipRow}>
            {chips.slice(i, i + 3).map((chip, chipIndex) => (
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
      }
      return rows;
    };

    return (
      <View key={index}>
        <TouchableOpacity onPress={() => handlePress(index)} style={styles.roomItem}>
          <Text style={styles.roomItemText}>{item}</Text>
          <Text style={styles.arrow}>{expandedIndex === index ? '↑' : '↓'}</Text>
        </TouchableOpacity>
        {expandedIndex === index && (
          <View style={styles.dropdownContent}>
            {renderChipsInMatrix(chipItems, chipType)}
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

      <Link style={styles.buttonText} href='./MarcarAgenda' asChild>
        <TouchableOpacity style={styles.button}>
          <Text> Salvar e {'\n'} cotinuar </Text>
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
  chipRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedChip: {
    backgroundColor: CORES.secundaria,
    borderColor: CORES.secundaria,
  },
  chipText: {
    color: '#000',
  },
  selectedChipText: {
    color: '#fff',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: CORES.branco,
    width: 180,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: CORES.secundaria,
    textAlign: 'center',
  },
});

export default GreenCardScreen;
