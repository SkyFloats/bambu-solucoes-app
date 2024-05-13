import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

import * as Animatable from 'react-native-animatable';
export default function Register(){
    return (
        <View style={styles.container}>
            <Animatable.Image 
            animation="fadeInLeft" 
            delay={500} 
            style={styles.containerImage} 
            source={require('../assets/images/logo.png')}
            resizeMode='contain'/>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput placeholder="ID" placeholderTextColor={'#FFFFFF'} style={styles.input}/>

                <TextInput placeholder="E-mail" placeholderTextColor={'#FFFFFF'} style={styles.input}/>

                <TextInput placeholder="Senha" placeholderTextColor={'#FFFFFF'} style={styles.input}/>

                <TextInput placeholder="Confirme a senha" placeholderTextColor={'#FFFFFF'} style={styles.input}/>
                <Link style={styles.button} href={'./login'} asChild>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </Link>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#728056',
    },
    containerImage:{
        alignSelf:'center',
        marginTop: '8%',
        marginBottom: '15%',
        width:'90%',
        flex:1,
    },
    containerForm:{
        flex: 4,
        alignItems:'center',
    },
    input:{
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        height: 40,
        marginBottom:12,
        fontSize: 16,
        width: '70%',
    },
    button:{
        backgroundColor: '#FFFFFF',
        width: '70%',
        borderRadius:20,
        marginTop:'30%',
        paddingBottom: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#3A5340',
        fontSize: 24,
    },
})