import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";
import { Tarefas } from "../../components/Tarefas";
import { MeuContextoProvider } from "../../contexts/contextTarefas";

export const Home = () => {
  return (
    <>
      <MeuContextoProvider>
        <Logo />
        <Input />
        <Tarefas />
      </MeuContextoProvider>
      <StatusBar style="light" />
    </>
  );
};
