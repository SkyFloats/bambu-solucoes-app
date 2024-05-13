import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function App() {

  return (  
    <View style={styles.container}>
      
        <Text style={styles.títuloText} >Título do projeto*</Text>     
      <TextInput placeholder="Título do projeto" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>

        <Text style={styles.enderecoText}>Endereço*</Text>  
      <TextInput placeholder="Endereço do projeto" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>
      
        <Text style={styles.tipoText}>Tipo de construção*</Text>  
      <TextInput placeholder="Resid. Comerc. Indust." placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>

        <Text style={styles.tamanhoText}>Tamanho da construção*</Text>  
      <TextInput placeholder="Em m²cliente" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>
      
        <Text style={styles.orcamentoText}>Orçamento*</Text>  
      <TextInput placeholder="Orçamento inicial" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>

      <Link style={styles.buttonText} href='./InformacoesAvancadas' asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}> Salvar e {'\n'} cotinuar </Text>
          </TouchableOpacity>
      </Link>    

    </View>
    
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#EEEEEE',
},
  input:{
    borderRadius: 20,
    backgroundColor: '#728056',
    color: '#fff',
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
   backgroundColor: '#3A5340',
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
  color:'#fff',
  marginTop: '11%',
  marginLeft: ''
},
button:{
  backgroundColor: '#FFFFFF',
  width: '40%',
  borderRadius:5,
  marginTop:'10%',
  marginLeft: '2%',
  paddingBottom: 6,
  justifyContent: 'center',
  alignItems: 'center',
},
títuloText: {
  fontWeight: 'bold',
  color: '#4F4F4F',
  marginTop: 5,
  marginLeft: '2%' 
},
enderecoText: {
  fontWeight: 'bold',
  color: '#4F4F4F',
  marginTop: 5,
  marginLeft: '2%'
},
tipoText: {
  fontWeight: 'bold',
  color: '#4F4F4F',
  marginTop: 5,
  marginLeft: '2%'
},
tamanhoText: {
  fontWeight: 'bold',
  color: '#4F4F4F',
  marginTop: 5,
  marginLeft: '2%'
},
orcamentoText: {
  fontWeight: 'bold',
  color: '#4F4F4F',
  marginTop: 5,
  marginLeft: '2%'
}
});
