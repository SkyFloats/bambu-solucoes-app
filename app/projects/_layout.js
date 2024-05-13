import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen name="projetosHome" options={{headerShown: false}}/>
        </Stack>
    );
};