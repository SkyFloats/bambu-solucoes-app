import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import * as Animatable from 'react-native-animatable';
export default function Login(){
    return (
        <View style={styles.container}>
            <Animatable.Image 
            animation="fadeInLeft" 
            delay={500} 
            style={styles.containerImage} 
            source={require('../assets/logo.png')}
            resizeMode='contain'/>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput placeholder="ID do arquiteto" placeholderTextColor={'#FFFFFF'} style={styles.input}/>

                <TextInput placeholder="Senha" placeholderTextColor={'#FFFFFF'} style={styles.input}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonEsqueceu}>
                    <Text style={styles.esqueceuText}>Esqueceu a {'\n'}   senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.registerText}>Registrar-se{'\n'} no bambu </Text>
                </TouchableOpacity>
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
    esqueceuText:{
        fontSize: 13,
        color: '#FFFFFF',
    },
    registerText:{
        fontSize:13,
        color: '#FFFFFF',
        textDecorationLine:'underline',
        justifyContent:'center',
    },
    buttonRegister:{
        position: 'absolute',
        bottom: '15%',
    }
})