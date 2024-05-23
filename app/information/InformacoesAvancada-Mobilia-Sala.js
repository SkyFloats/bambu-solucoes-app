import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from "expo-router";
import CORES from '../../constants/cores' ;

const roomItems = [
  'Itens Sala - Chão',
  'Itens Sala - Parede',
  'Itens Sala - Teto',
];

const GreenCardScreen = () => {
  const renderRoomItem = (item, index) => (
    <TouchableOpacity key={index} style={styles.roomItem}>
      <Text style={styles.roomItemText}>{item}</Text>
      <Text style={styles.arrow}>↓</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {roomItems.map((item, index) => renderRoomItem(item, index))}
      </View>

      <Link style={styles.buttonText} href='./agendaHome' asChild>
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
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#000',
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