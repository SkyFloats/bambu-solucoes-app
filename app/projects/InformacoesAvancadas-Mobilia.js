import React from "react";
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import { Button } from "react-native-web";

export default function Mobilia() {
    return(

        <View style={styles.container}>

            <Text> - Tipo da Mobilia {'\n'} {'\n'}  </Text>
                <View> 
                    <Text style={styles.TextA}>Rústica</Text> 
                </View>
                <View>
                    <Text style={styles.TextB}>Escandinava</Text>         
                </View>
                <View>
                    <Text style={styles.TextC}>Art Deco</Text>         
                </View>
                <View> 
                    <Text style={styles.TextA}>Rústica</Text> 
                </View>
                <View>
                    <Text style={styles.TextB}>Escandinava</Text>         
                </View>
                <View>
                    <Text style={styles.TextC}>Art Deco</Text>         
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#eeeeee',
},
TextA: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 20,
    marginRight: 320,
    borderRadius: 50,
    elevation: 10,
},
TextB: {
    display: 'flex',
    position: 'relative',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    marginLeft: 150,
    marginRight: 160,
    borderRadius: 50,
    elevation: 10,
},
TextC: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 315,
    marginRight: 20,
    borderRadius: 50,
    elevation: 10,
},
Texta: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 20,
    marginRight: 320,
    borderRadius: 50,
    elevation: 10,
},

});