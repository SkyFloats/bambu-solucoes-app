import { ActivityIndicator } from "react-native";
import CORES from "../constants/cores";

export function Loading(){
    return(
        <ActivityIndicator style={{flex:1, backgroundColor: CORES.principal, alignItems:'center', justifyContent:"center"}}/>
    )
}