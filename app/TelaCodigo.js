import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import CORES from '../constants/cores';
import { Link} from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function TelaCodigo() {

    return (
        <View style={styles.container}>
            <View style={styles.circleContainer}>
                <View style={styles.outerCircle}>
                    <View style={styles.innerCircle}>
                        <Image
                            source={require('../assets/iconLogo.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.mainText}>INSIRA O CÓDIGO </Text>

            <Text style={styles.infoText}>Insira o códiogo{'\n'}recebido no e-mail...</Text>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <TextInput 
                    placeholder="CÓDIGO RECEBIDO" 
                    placeholderTextColor={CORES.branco}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Link href={'./login'} asChild>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8}> 
                        <Text style={styles.buttonText}>Enviar Código</Text>
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

circleContainer: {
    alignItems: 'center',
    marginTop: '25%',
},
outerCircle: {
    borderWidth: 3,
    borderColor: CORES.secundaria,
    borderRadius: 100,
    padding: 5,
},
innerCircle: {
    backgroundColor: CORES.secundaria,
    borderRadius: 100,
    padding: 10,
},
image: {
    width: 100,
    height: 100,
},
mainText: {
    color: CORES.branco,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
},
infoText: {
    color: CORES.branco,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
},
containerForm: {
    flex: 4,
    alignItems: 'center',
    marginTop: '20%',
},
input: {
    borderWidth: 2,
    borderColor: CORES.branco,
    height: 50,
    fontSize: 14,
    width: '80%',
    color: CORES.branco,
    padding: 8,
},
button: {
    backgroundColor: CORES.branco,
    width: '90%',
    borderRadius: 20,
    marginTop: '30%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
},
buttonText: {
    color: CORES.secundaria,
    fontSize: 24,
},

});

