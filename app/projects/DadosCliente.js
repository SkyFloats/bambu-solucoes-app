import React, {useContext, useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link, Stack } from 'expo-router';
import CORES from '../../constants/cores' ;
import { DataContext } from './context/DataContext';

export default function DadosCliente() {
  const { clienteData, setClienteData } = useContext(DataContext);

  const saveState = () => {
    setClienteData({
      ...clienteData,
    });
  };
  return (  
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Dados do Cliente" }} />
      
      <Text style={styles.text}>Nome</Text>
      <TextInput
        placeholder="Nome do cliente"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={clienteData.nome}
        onChangeText={(text) => setClienteData({ ...clienteData, nome: text })}
      />

      <Text style={styles.text}>Endereço</Text>
      <TextInput
        placeholder="Endereço do cliente"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={clienteData.endereco}
        onChangeText={(text) => setClienteData({ ...clienteData, endereco: text })}
      />
      
      <Text style={styles.text}>Telefone</Text>
      <TextInput
        placeholder="Telefone do cliente"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={clienteData.telefone}
        onChangeText={(text) => setClienteData({ ...clienteData, telefone: text })}
      />
 
      <Text style={styles.text}>Email</Text>
      <TextInput
        placeholder="Email do cliente"
        placeholderTextColor={CORES.branco}
        style={styles.input}
        value={clienteData.email}
        onChangeText={(text) => setClienteData({ ...clienteData, email: text })}
      />

      <Link style={styles.button} href='./DadosProjeto' asChild>
          <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
          onPress={saveState}>
              <Text style={styles.buttonText}> Salvar e continuar </Text>
          </TouchableOpacity>
      </Link>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EEEEEE',
},
  input:{
    borderRadius: 10,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    marginBottom:12,
    margin: 'auto',
    paddingLeft: 10,
    fontSize: 16,
    width: '90%',
}, 
 cabecalho:{
  position: 'relative',
   backgroundColor: CORES.secundaria,
   flexDirection:'row',
   alig:'center',
   height: '10%',
},
imagem: {
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: '7%',
  width: 60, 
  height: 80, 
  resizeMode: 'contain',
},
button: {
  backgroundColor: CORES.secundaria,
  width: '90%',
  borderRadius: 10,
  height: 50,
  margin: 'auto',
  marginTop: 400,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 6,
},
buttonText: {
  color: CORES.branco,
  fontWeight: 'bold',
},
text: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%',
},
});