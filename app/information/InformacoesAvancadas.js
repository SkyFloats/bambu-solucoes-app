import React from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";
import CORES from '../../constants/cores' ;

export default function AdvancedInfo() {

    return(

        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.buttonA}>
                    <Text style={styles.buttonTexta}> CARACTERÍSTICAS DO PROJETO </Text>
                </TouchableOpacity>
                <Text style={styles.textoA}>
                    Contém restrições?                                         O {'\n'} {'\n'}
                    Sustentabilidade?                                            O {'\n'} {'\n'} 
                    Acessibilidade?                                                O
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonB}>
                    <Text style={styles.buttonTexta}> CARACTERÍSTICAS DO AMBIENTE </Text>
                </TouchableOpacity>
                <Text style={styles.textoA}>
                    Ventilação natural?                                          O {'\n'} {'\n'} 
                    Isolamento acústico?                                      O {'\n'} {'\n'} 
                    Eficiência energética?                                     O {'\n'} {'\n'} 
                    Iluminação natural?                                         O {'\n'} {'\n'} 
                    Ventilação?                                                       O {'\n'} {'\n'}
                    Isolamento Acústico?                                     O {'\n'} {'\n'} 
                </Text>
            </View>
            <Link style={styles.buttonText} href='./InformacoesAvancadas-Mobilia' asChild>
                <TouchableOpacity style={styles.button}>
                    <Text> Salvar e {'\n'} cotinuar </Text>
                </TouchableOpacity>
            </Link> 
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#eeeeee',

},
textoA: {
    fontSize: 18,
    padding: 20,
    color: CORES.principal,
},
buttonTexta: {
    textAlign: 'center',
    backgroundColor: CORES.principal,
    padding: 20,
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    color: CORES.branco,
}, 
buttonText: {
  backgroundColor: CORES.branco,
  color: CORES.secundaria,
  width: 180,
  height: 45,
  borderRadius:5,
  marginTop:'20%',
  marginLeft: '50%',
  paddingBottom: 6,
  justifyContent: 'center',
  alignItems: 'center',
}

});