import React from "react";
import { Stack } from "expo-router";
import CORES from "../../constants/cores";
import { DataProvider } from "./context/DataContext";

export default () => {
  return (
    <DataProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: CORES.secundaria,
          },
          headerTintColor: CORES.branco,
        }}
      >
        
        <Stack.Screen name="projetosHome" options={{ headerShown: false }} />
      </Stack>
    </DataProvider>
  );
};
