import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import CORES from '../../constants/cores' ;

export default function DadosCliente() {

  return (  
    <View style={styles.container}>
      
        <Text style={styles.nomeText} >Nome*</Text>     
      <TextInput 
      placeholder="Nome do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

        <Text style={styles.enderecoText}>Endereço*</Text>  
      <TextInput 
      placeholder="Endereço do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>
      
        <Text style={styles.telefoneText}>Telefone*</Text>  
      <TextInput 
      placeholder="Telefone do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

        <Text style={styles.emailText}>Email*</Text>  
      <TextInput 
      placeholder="Email do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

      <Link style={styles.buttonText} href='./DadosProjeto' asChild>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Salvar e {'\n'} cotinuar </Text>
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
    borderRadius: 20,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    marginBottom:12,
    marginLeft: '2%',
    paddingLeft: 10,
    fontSize: 16,
    width: '90%'
}, 
 cabecalho:{
  position: 'relative',
   backgroundColor: CORES.secundaria,
   flexDirection:'row',
   alig:'center',
   height: '10%'
},
imagem: {
  alignSelf: 'center',
  justifyContent: 'center',
  marginTop: '7%',
  width: 60, 
  height: 80, 
  resizeMode: 'contain'
},
namePage:{
  flex: 1,
  fontSize: 25,
  color:CORES.branco,
  marginTop: '11%',
  marginLeft: ''
},
button:{
  backgroundColor: CORES.branco,
  width: '40%',
  borderRadius:5,
  marginTop:'10%',
  marginLeft: '2%',
  paddingBottom: 6,
  justifyContent: 'center',
  alignItems: 'center',
},
nomeText: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%' 
},
enderecoText: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%'
},
telefoneText: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%'
},
emailText: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%'
}
});
