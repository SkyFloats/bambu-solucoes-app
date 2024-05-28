import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import CORES from '../constants/cores' ;
import * as Animatable from 'react-native-animatable';

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }
        // Lógica de registro
    };
    return (
        <View style={styles.container}>
            <Animatable.Image 
                animation="fadeInLeft" 
                delay={500} 
                style={styles.containerImage} 
                source={require('../assets/logo.png')}
                resizeMode='contain'
            />

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput 
                    placeholder="E-mail" 
                    placeholderTextColor={CORES.branco} 
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <TextInput 
                    placeholder="Digite a sua senha" 
                    placeholderTextColor={CORES.branco} 
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            
                <TextInput 
                    placeholder="Confirme a senha" 
                    placeholderTextColor={CORES.branco} 
                    style={styles.input}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <Link style={styles.buttonText} href='./login' asChild>
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>             
                </Link>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CORES.principal,
    },
    containerImage: {
        alignSelf: 'center',
        marginTop: '8%',
        marginBottom: '15%',
        width: '90%',
        flex: 1,
    },
    containerForm: {
        flex: 4,
        alignItems: 'center',
        width: '100%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: CORES.branco,
        height: 40,
        marginBottom: 12,
        fontSize: 14,
        width: '70%',
        paddingRight: 40,
        color: CORES.branco,
        //fontFamily: fontFamily.body,
        padding: 8,
    },
    button: {
        backgroundColor: CORES.branco,
        width: '70%',
        borderRadius: 20,
        marginTop: '30%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: CORES.secundaria,
        fontSize: 24,
        //fontFamily: fontFamily.subtitle,
    },
});