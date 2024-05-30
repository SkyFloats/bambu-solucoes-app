import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Link, Stack } from "expo-router";
import CORES from '../../../constants/cores';
import { DataContext } from './DataContext';

const FormConclusao = () => {
    const { clienteData, projetoData, setProjetoData} = useContext(DataContext); // Use the context
    const [detalhesFinais, setDetalhesFinais] = useState('');

    const handleFinalDetailsChange = (text) => {
        setDetalhesFinais(text);
    };

    const saveFinalDetails = () => {
        // Optionally save the final details in the context if needed
        setProjetoData({ 
          ...projetoData, 
          finalDetails: detalhesFinais });
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Conclusão do Formulário" }} />
            <Text style={styles.heading}>Confirmação dos Dados:</Text>
            <Text style={styles.subheading}>Dados do Cliente:</Text>
            <Text>{clienteData.nome}</Text>
            <Text>{clienteData.email}</Text>
            <Text>{clienteData.telefone}</Text>
            <Text style={styles.subheading}>Dados do Projeto:</Text>
            <Text>{projetoData.restricoes ? 'Sim' : 'Não'}</Text>
            <Text>{projetoData.sustentabilidade ? 'Sim' : 'Não'}</Text>
            <Text>{projetoData.acessibilidade ? 'Sim' : 'Não'}</Text>
            <Text>{projetoData.ventilacaoNatural ? 'Sim' : 'Não'}</Text>
            <Text>{projetoData.isolamentoAcustico ? 'Sim' : 'Não'}</Text>
            <Text>{projetoData.eficienciaEnergetica ? 'Sim' : 'Não'}</Text>
            <Text>{projetoData.iluminacaoNatural ? 'Sim' : 'Não'}</Text>
            <Text>{projetoData.ventilacao ? 'Sim' : 'Não'}</Text>
            <Text style={styles.subheading}>Detalhes Finais:</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Adicionar detalhes finais"
                value={detalhesFinais}
                onChangeText={handleFinalDetailsChange}
                multiline
            />
            <Link href='./projetosHome' asChild>
                <TouchableOpacity style={styles.button} onPress={saveFinalDetails}>
                    <Text style={styles.buttonText}>Finalizar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        padding: 16,
    },
    heading: {
        fontSize: 18,
        color: CORES.principal,
        marginBottom: 8,
    },
    subheading: {
        fontSize: 16,
        color: CORES.secundaria,
        marginVertical: 4,
    },
    textInput: {
        backgroundColor: CORES.branco,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
    button: {
     backgroundColor: CORES.secundaria,
     width: '90%',
     borderRadius: 10,
     height: 50,
     margin: 'auto',
     marginTop: 300,
     justifyContent: 'center',
     alignItems: 'center',
     elevation: 6,
   },
     buttonText: {
     color: CORES.branco,
     fontWeight: 'bold',
   },
});

export default FormConclusao;
