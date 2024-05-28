import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, Stack } from "expo-router";
import CORES from '../../constants/cores';
import Checkbox from 'expo-checkbox';

export default function AdvancedInfo() {
    const [isCheckedRestricoes, setIsCheckedRestricoes] = useState(false);
    const [isCheckedSustentabilidade, setIsCheckedSustentabilidade] = useState(false);
    const [isCheckedAcessibilidade, setIsCheckedAcessibilidade] = useState(false);
    const [isCheckedVentilacaoNatural, setIsCheckedVentilacaoNatural] = useState(false);
    const [isCheckedIsolamentoAcustico, setIsCheckedIsolamentoAcustico] = useState(false);
    const [isCheckedEficienciaEnergetica, setIsCheckedEficienciaEnergetica] = useState(false);
    const [isCheckedIluminacaoNatural, setIsCheckedIluminacaoNatural] = useState(false);
    const [isCheckedVentilacao, setIsCheckedVentilacao] = useState(false);

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Dados do Ambiente" }} />
            <View>
                <TouchableOpacity style={styles.buttonA}>
                    <Text style={styles.buttonTextA}>CARACTERÍSTICAS DO PROJETO</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Contém restrições?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedRestricoes}
                        onValueChange={setIsCheckedRestricoes}
                        color={isCheckedRestricoes ? CORES.principal : undefined}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Sustentabilidade?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedSustentabilidade}
                        onValueChange={setIsCheckedSustentabilidade}
                        color={isCheckedSustentabilidade ? CORES.principal : undefined}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Acessibilidade?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedAcessibilidade}
                        onValueChange={setIsCheckedAcessibilidade}
                        color={isCheckedAcessibilidade ? CORES.principal : undefined}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonB}>
                    <Text style={styles.buttonTextA}>CARACTERÍSTICAS DO AMBIENTE</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Ventilação natural?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedVentilacaoNatural}
                        onValueChange={setIsCheckedVentilacaoNatural}
                        color={isCheckedVentilacaoNatural ? CORES.principal : undefined}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Isolamento acústico?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedIsolamentoAcustico}
                        onValueChange={setIsCheckedIsolamentoAcustico}
                        color={isCheckedIsolamentoAcustico ? CORES.principal : undefined}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Eficiência energética?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedEficienciaEnergetica}
                        onValueChange={setIsCheckedEficienciaEnergetica}
                        color={isCheckedEficienciaEnergetica ? CORES.principal : undefined}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Iluminação natural?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedIluminacaoNatural}
                        onValueChange={setIsCheckedIluminacaoNatural}
                        color={isCheckedIluminacaoNatural ? CORES.principal : undefined}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.textoA}>Ventilação?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isCheckedVentilacao}
                        onValueChange={setIsCheckedVentilacao}
                        color={isCheckedVentilacao ? CORES.principal : undefined}
                    />
                </View>
            </View>
            <Link href='./DadosMobilia' asChild>
                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>Salvar e {'\n'} continuar</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
        paddingHorizontal: 20,
        top: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    textoA: {
        fontSize: 18,
        color: CORES.principal,
        flex: 1,
    },
    checkbox: {
        marginRight: 8,
    },
    buttonA: {
        backgroundColor: CORES.principal,
        padding: 20,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonTextA: {
        color: CORES.branco,
        fontSize: 20,
        textAlign: 'center',
    },
    buttonB: {
        backgroundColor: CORES.principal,
        padding: 20,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        backgroundColor: CORES.branco,
        color: CORES.secundaria,
        width: 180,
        height: 60,
        borderRadius: 5,
        textAlign: 'center',
        padding: 10,
        marginTop:'10%',
        marginLeft: '50%',
    },
    button: {
        alignSelf: 'center',
        marginTop: 20,
    },
});
