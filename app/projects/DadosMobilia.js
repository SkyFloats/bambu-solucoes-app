import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Link, Stack } from "expo-router";
import CORES from '../../constants/cores' ;

const furnitureTypes = [
  'Rústica',
  'Escandinava',
  'Art Deco',
  'Clássica',
  'Moderno',
  'Contemporânea',
  'Industrial',
  'Boêmio',
  'Colonial',
];

const roomItems = [
  { name: 'Itens Sala', link: './DadosMobiliaSalaChao' },
  { name: 'Itens Quarto', link: './ItensQuarto' },
  { name: 'Itens Cozinha', link: './ItensCozinha' },
  { name: 'Itens Antessala', link: './ItensAntessala' },
];

const MultiSelectChips = () => {
  const [selected, setSelected] = useState([]);

  const toggleSelection = (type) => {
    if (selected.includes(type)) {
      setSelected(selected.filter((item) => item !== type));
    } else {
      setSelected([...selected, type]);
    }
  };

  const renderChip = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chip,
        selected.includes(item) && styles.selectedChip,
        styles.shadow,
      ]}
      onPress={() => toggleSelection(item)}
    >
      <Text style={[
        styles.chipText,
        selected.includes(item) && styles.selectedChipText
      ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderRoomItem = ({ item }) => (
    <Link href={item.link} asChild>
      <TouchableOpacity style={styles.roomItem}>
        <Text style={styles.roomItemText}>{item.name}</Text>
        <Text style={styles.arrow}> {'\>'} </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Dados da Mobilia" }} />
      <Text style={styles.header}>- Tipo da mobília</Text>
      <FlatList
        data={furnitureTypes}
        renderItem={renderChip}
        keyExtractor={(item) => item}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
      <Text style={styles.header}>- Itens da mobília</Text>
      <FlatList
        data={roomItems}
        renderItem={renderRoomItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.roomItemsContainer}
      />
        <Link style={styles.buttonText} href='./DadosMobiliaSala' asChild>
            <TouchableOpacity style={styles.button}>
                <Text> Salvar e {'\n'} cotinuar </Text>
            </TouchableOpacity>
        </Link> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#eeeeee',
    height: '100%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: CORES.secundaria,
  },
  grid: {
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  chip: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 1,
    alignItems: 'center',
    backgroundColor: CORES.branco,
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
  shadow: {
    elevation: 6,
  },
  roomItemsContainer: {
    marginTop: 10,
  },
  selectedChipText: {
    color: CORES.branco,
  }, 
  roomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    padding: 7,
    marginBottom: 12,
    backgroundColor: CORES.branco,
    elevation: 5,
  },
  roomItemText: {
    fontSize: 18,
    color: CORES.secundaria,
  },
  arrow: {
    fontSize: 25,
    color: CORES.secundaria,
  },
  buttonText: {
    backgroundColor: CORES.branco,
    color: CORES.secundaria,
    width: 180,
    height: 45,
    borderRadius:5,
    marginTop:'20%',
    marginLeft: '50%',
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
  
});

export default MultiSelectChips;
