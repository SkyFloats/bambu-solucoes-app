import React, { useContext, useState } from "react";
import { View } from "react-native";
import { Stack, router } from "expo-router";
import ButtonLink from "../../components/button/ButtonLink";
import StylesClient from "./ProjectsStyles/DadosClienteStyle";
import InputLink from "../../components/input/InputLink";
import { GlobalDataContext } from "./Context/GlobalContext";

export default function DadosCliente() {
  const { projeto, setProjeto, cliente, setCliente } =
    useContext(GlobalDataContext);

  const handleInputChange = (name, value) => {
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };

  const saveProjeto = () => {
    const updatedProjeto = {
      ...projeto,
      cliente,
    };

    setProjeto(updatedProjeto);
    router.push("/DadosProjeto");
  };

  return (
    <View style={StylesClient.container}>
      <Stack.Screen options={{ title: "Dados do Cliente" }} />
      <InputLink
        placeholder={"Nome do cliente"}
        text={"Nome"}
        style={StylesClient.input}
        value={cliente.nome}
        onChangeText={(text) => handleInputChange("nome", text)}
      />

      <InputLink
        placeholder={"Endereço do cliente"}
        text={"Endereço"}
        value={cliente.endereco}
        onChangeText={(text) => handleInputChange("endereco", text)}
      />

      <InputLink
        placeholder={"Telefone do cliente"}
        text={"Telefone"}
        keyboardType="phone-pad"
        maxLength={11}
        value={cliente.telefone}
        onChangeText={(text) => handleInputChange("telefone", text)}
      />
      <InputLink
        placeholder={"Email do cliente"}
        text={"Email"}
        keyboardType="email-address"
        value={cliente.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      <ButtonLink
        onPress={saveProjeto}
        href="./DadosProjeto"
        text="Salvar e continuar"
      />
    </View>
  );
}
