import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import CORES from '../../constants/cores' ;

export default function App() {

  return (  
    <View style={styles.container}>
      
        <Text style={styles.títuloText} >Título do projeto*</Text>     
      <TextInput 
      placeholder="Título do projeto" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

        <Text style={styles.enderecoText}>Endereço*</Text>  
      <TextInput 
      placeholder="Endereço do projeto" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>
      
        <Text style={styles.tipoText}>Tipo de construção*</Text>  
      <TextInput 
      placeholder="Resid. Comerc. Indust." 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

        <Text style={styles.tamanhoText}>Tamanho da construção*</Text>  
      <TextInput 
      placeholder="Em m²cliente" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>
      
        <Text style={styles.orcamentoText}>Orçamento*</Text>  
      <TextInput 
      placeholder="Orçamento inicial" 
      placeholderTextColor={CORES.branco} 
      style={[styles.input]}/>

      <Link style={styles.buttonText} href='./DadosAmbiente' asChild>
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
    left: 10,
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
títuloText: {
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
tipoText: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%'
},
tamanhoText: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%'
},
orcamentoText: {
  fontWeight: 'bold',
  color: CORES.cinza,
  marginTop: 5,
  marginLeft: '2%'
}
});
