import React from 'react';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function DadosCliente() {

  return (  
    <View style={styles.container}>

        <View style={styles.cabecalho}>
          <Image 
          source={require('../../../assets/images/SetaVoltar.png')}
          style={styles.imagem}/>
          <Text style={styles.namePage}>Dados do Cliente</Text>   
        </View>
      
        <Text style={styles.nomeText} >Nome*</Text>     
      <TextInput placeholder="Nome do cliente" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>

        <Text style={styles.enderecoText}>Endereço*</Text>  
      <TextInput placeholder="Endereço do cliente" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>
      
        <Text style={styles.telefoneText}>Telefone*</Text>  
      <TextInput placeholder="Telefone do cliente" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>

        <Text style={styles.emailText}>Email*</Text>  
      <TextInput placeholder="Email do cliente" placeholderTextColor={'#FFFFFF'} style={[styles.input]}/>

      <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Salvar e {'\n'} cotinuar </Text>
            </TouchableOpacity>

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
nomeText: {
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
telefoneText: {
  fontWeight: 'bold',
  color: '#4F4F4F',
  marginTop: 5,
  marginLeft: '2%'
},
emailText: {
  fontWeight: 'bold',
  color: '#4F4F4F',
  marginTop: 5,
  marginLeft: '2%'
}
});
