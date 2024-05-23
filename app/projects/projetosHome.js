import { Link } from 'expo-router';
import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CORES from '../../constants/cores' ;

export default function ProjetosHome() {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Image source={require('../../assets/iconLogo.png')} />
                <Text style={styles.namePage}>Projetos</Text>
            </View>
            <View style={styles.circleContainer}>
                <View style={styles.outerCircle}>
                    <View style={styles.innerCircle}>
                        <Image
                            source={require('../../assets/iconLogo.png')}
                            style={styles.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </View>

            <Text style={styles.mainText}>Não existem projetos no  {'\n'} momento</Text>

            <Text style={styles.infoText}>Adicionar um {'\n'}novo projeto</Text>

            <Link style={styles.buttonText} href='./DadosCliente' asChild>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/iconAdd.png')} />
                </TouchableOpacity>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CORES.branco,
    },
    cabecalho: {
        backgroundColor: CORES.secundaria,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
    },
    namePage: {
        flex: 1,
        fontSize: 25,
        color: CORES.branco,
        marginLeft: 10,
    },
    circleContainer: {
        alignItems: 'center',
        marginTop: 200,
    },
    outerCircle: {
        borderWidth: 3,
        borderColor: CORES.principal,
        borderRadius: 100,
        padding: 5,
    },
    innerCircle: {
        backgroundColor: CORES.principal,
        borderRadius: 100,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    mainText: {
        color: CORES.principal,
        fontSize: 26,
        textAlign: 'center',
        marginTop: 20,
    },
    infoText: {
        color: CORES.principal,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        alignSelf: 'center',
        marginTop: 40,
    },

});
