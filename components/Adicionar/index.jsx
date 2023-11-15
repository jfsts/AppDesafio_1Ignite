import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useMeuContexto } from "../../contexts/contextTarefas";

export const Adicionar = ({ handleAdicionarAtividade }) => {
  const { tarefasCriadas, setTarefasCriadas, setTarefasConcluidas } =
    useMeuContexto();

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleAdicionarAtividade}
      >
        <Image style={styles.image} source={require("../../assets/plus.png")} />
      </TouchableOpacity>
    </>
  );
};
