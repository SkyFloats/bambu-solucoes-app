import React from 'react';
import { Stack } from "expo-router";
import CORES from "../../constants/cores";
//import {useFonts, LexendTera_400Regular, LexendTera_500Medium, LexendTera_700Bold} from "@expo-google-fonts/lexend-tera"
//import { Loading } from "../../components/loading";
//import { fontFamily } from "../../assets/fonts/font-family";

export default () => {
   /* const [fontsLoaded] = useFonts({
        LexendTera_400Regular,
        LexendTera_500Medium, 
        LexendTera_700Bold,
    });

    if(!fontsLoaded){
        return <Loading />     
    };*/
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: CORES.secundaria,
                },
                headerTintColor: CORES.branco,
                headerTitleStyle: {
                    //fontFamily: fontFamily.heading,
                },
            }}
        >
            <Stack.Screen 
                name="projetosHome"
                options={{ headerShown: false }}
            />
        </Stack>
    );
};