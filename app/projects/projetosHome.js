import { Link } from 'expo-router';
import React from 'react';
import {Image, View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function ProjetosHome(){
    return (

        <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <Image source={require('../../assets/iconLogo.png')}/> 
                    <Text style={styles.namePage}>Projetos</Text>   
                </View>
                <Image 
                source={require('../../assets/iconLogo.png')}
                style={styles.containerImage} 
                resizeMode='contain'/>

                <Text style={styles.mainText}>Não existem projetos no  {'\n'} momento</Text>

                <Text style={styles.infoText}>Adicionar um {'\n'}novo projeto</Text>

            <Link style={styles.buttonText} href='./DadosCliente'asChild>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/iconAdd.png')}/>
                </TouchableOpacity>
            </Link>

        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    cabecalho:{
        backgroundColor: '#3A5340',
        flexDirection:'row',
        alig:'center'
    },
    namePage:{
        flex: 1,
        fontSize: 25,
        color:'#fff',
        marginTop: '6%',
        marginLeft: ''
    },
    containerImage:{
        alignSelf:'center',
        marginTop: '8%',
        marginBottom: '15%',
        justifyContent:'center',
        flex:1,
        backgroundColor: '#728056',
        borderRadius: 50,
        paddingTop: 20,
    },
    mainText:{
        color: '#728056',
        fontSize: 26,
        textAlign:'center',
    },
    infoText:{
        color: '#728056',
        fontSize: 20,
        textAlign:'center',
        marginTop: '10%',
    },
    button:{
        alignSelf:'center',
        marginBottom:'10%',
    },
   
});