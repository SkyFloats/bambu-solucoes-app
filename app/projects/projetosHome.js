import { Link} from 'expo-router';
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

            <Text style={styles.mainText}>Não existem projetos no{'\n'}momento</Text>

            <Text style={styles.infoText}>Adicionar um{'\n'}novo projeto</Text>
            <View style={styles.BotoesTemporarios}>
                <Link style={styles.buttonText} href='./DadosCliente' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.plus} source={require('../../assets/iconAdd.png')} />
                    </TouchableOpacity>
                </Link>
                <Link style={styles.buttonText} href='./HomeComProjetos' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.plus} source={require('../../assets/iconAdd.png')} />
                    </TouchableOpacity>
                </Link>
                <Link style={styles.buttonText} href='./TelaSobreProjetos' asChild>
                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.plus} source={require('../../assets/iconAdd.png')} />
                    </TouchableOpacity>
                </Link> 
                
            </View>
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
        marginTop: '25%',
        opacity: 0.9,
    },
    outerCircle: {
        borderWidth: 3,
        borderColor: CORES.principal,
        borderRadius: 100,
        padding: 5,
        opacity: 0.9,
    },
    innerCircle: {
        backgroundColor: CORES.principal,
        borderRadius: 100,
        padding: 10,
        opacity: 0.9,
    },
    image: {
        width: 100,
        height: 100,
    },
    mainText: {
        color: CORES.principal,
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        opacity: 0.9,
    },
    infoText: {
        color: CORES.principal,
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.9,
    },
    button: {
        alignSelf: 'center',
        marginTop: "25%",
    },
    plus:{
        width: 80,
        height: 80,
    },
    BotoesTemporarios:{
        flexDirection:"row" ,
        justifyContent:"space-evenly"
    },
});
