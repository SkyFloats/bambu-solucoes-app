import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link, Stack } from 'expo-router';
import CORES from '../../constants/cores' ;

export default function DadosCliente() {
  return (  
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Dados do Cliente" }} />
        <Text style={styles.text} >Nome*</Text>     
      <TextInput 
      placeholder="Nome do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

        <Text style={styles.text}>Endereço*</Text>  
      <TextInput 
      placeholder="Endereço do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>
      
        <Text style={styles.text}>Telefone*</Text>  
      <TextInput 
      placeholder="Telefone do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

        <Text style={styles.text}>Email*</Text>  
      <TextInput 
      placeholder="Email do cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

      <Link style={styles.buttonText} href='./DadosProjeto' asChild>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}> Salvar e {'\n'} continuar </Text>
          </TouchableOpacity>
      </Link>

    </View>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EEEEEE',
    left: 15,
},
  input:{
    borderRadius: 10,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    marginBottom:12,
    marginLeft: '2%',
    paddingLeft: 10,
    fontSize: 16,
    width: '90%',
    //fontFamily: fontFamily.body,
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
text: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%',
  //fontFamily: fontFamily.body,
}
});
