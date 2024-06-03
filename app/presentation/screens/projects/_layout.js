import React from "react";
import { Stack, Tabs } from "expo-router";
import CORES from "../../../constants/cores";
import { GlobalDataProvider } from "./Context/GlobalContext";

export default () => {
  return (
    <GlobalDataProvider>
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
    </GlobalDataProvider>
  );
};
