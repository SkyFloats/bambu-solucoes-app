import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import CORES from '../constants/cores'

const Botao = (props) => {
    const filledBgColor = props.color || CORES.principal;
    const outlinedColor = CORES.branco;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? CORES.branco : CORES.principal;

    return(
        <TouchableOpacity
        style={{
            ...styles.button,
            ...{backgroundColor: bgColor},
            ...props.style
        }}
        onPress={props.onPress}
        >
            <Text style={{fontSize: 18, ... {color: textColor}}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        paddingBotton: 6,
        paddingVertical:10,
        borderColor: CORES.principal,
        borderWidth: 2,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: CORES.branco,
        width: '70%',
        marginTop:'30%',
    }
})

export default Botao