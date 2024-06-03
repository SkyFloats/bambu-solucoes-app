import React from 'react';
import { Image, View, Text } from 'react-native';
import ButtonPlus from '../../components/button/ButtonPlus';
import StylesProjetoHome from './ProjectsStyles/ProjetosHomeStyle';
export default function ProjetosHome() {
    
    return (
        <View style={StylesProjetoHome.container}>
            <View style={StylesProjetoHome.cabecalho}>
                <Image source={require('../../assets/icons/iconLogo.png')} />
                <Text style={StylesProjetoHome.namePage}>Projetos</Text>
            </View>
            <View style={StylesProjetoHome.circleContainer}>
                <View style={StylesProjetoHome.outerCircle}>
                    <View style={StylesProjetoHome.innerCircle}>
                        <Image
                            source={require('../../assets/icons/iconLogo.png')}
                            style={StylesProjetoHome.image}
                            resizeMode='contain'
                        />
                    </View>
                </View>
            </View>

            <Text style={StylesProjetoHome.mainText}>Não existem projetos no{'\n'}momento</Text>
            <Text style={StylesProjetoHome.infoText}>Adicionar um{'\n'}novo projeto</Text>

            <View style={StylesProjetoHome.BotoesTemporarios}>             
                <ButtonPlus href={"./DadosCliente"} ImgSource = {require('../../assets/icons/iconAdd.png')}/>
                <ButtonPlus href={"./HomeComProjetos"} ImgSource = {require('../../assets/icons/iconAdd.png')}/>
                <ButtonPlus href={"./TelaSobreProjetos"} ImgSource = {require('../../assets/icons/iconAdd.png')}/>              
            </View>
            
        </View>
    );
};
 
