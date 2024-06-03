import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Link, Stack } from "expo-router";
import CORES from '../../../constants/cores';

const furnitureTypes = [
  'Rústica', 'Escandinava', 'Art Deco',  'Boêmio',  'Clássica',
  'Moderno', 'Contemporânea', 'Industrial','Colonial',
];

const roomItems = [
  { name: 'Itens Sala', link: './ItensSala' },
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
      <Text style={styles.header}>• Tipo da mobília</Text>
      <View style={styles.chipsContainer}>
        {furnitureTypes.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.chip,
              selected.includes(item) && styles.selectedChip,
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
        ))}
      </View>
      <Text style={styles.header}>• Itens da mobília</Text>
      <FlatList
        data={roomItems}
        renderItem={renderRoomItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.roomItemsContainer}
      />
      <Link href='./ConfirmarDados' asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Salvar e continuar </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: CORES.branco,
    height: '100%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: CORES.secundaria,
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
  roomItemsContainer: {
    marginTop: 10,
  },
  roomItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: CORES.principal,
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
  button: {
    backgroundColor: CORES.secundaria,
    width: '90%',
    borderRadius: 10,
    height: 50,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
  buttonText: {
    color: CORES.branco,
    fontWeight: 'bold',
  },
});

export default MultiSelectChips;
