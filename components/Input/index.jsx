import React, { useEffect, useState } from "react";
import { TextInput, View, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "./styles";
import { Adicionar } from "../Adicionar";
import { useMeuContexto } from "../../contexts/contextTarefas";

export const Input = () => {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [onBlur, setOnBlur] = useState(false);
  const { tarefasCriadas, setTarefasCriadas, setTarefasConcluidas } =
    useMeuContexto();

  function compararPorDescricao(a, b) {
    const descricaoA = a.descricao.toUpperCase();
    const descricaoB = b.descricao.toUpperCase();

    if (descricaoA < descricaoB) {
      return -1;
    }
    if (descricaoA > descricaoB) {
      return 1;
    }
    return 0;
  }

  function handleAdicionarAtividade() {
    if (
      tarefasCriadas.some((tarefa) => {
        return tarefa.descricao.includes(novaTarefa.trim());
      })
    ) {
      return Alert.alert(
        "Ops !",
        "Já existe um compromisso idêntico a este na lista !"
      );
    }
    if (novaTarefa === "") {
      return Alert.alert("Ops !", "Digite um compromisso !");
    }
    const arrayOrganizado = [
      ...tarefasCriadas,
      { descricao: novaTarefa.trim(), status: true },
    ];

    if (arrayOrganizado.length > 0) {
      arrayOrganizado.sort(compararPorDescricao);
      setTarefasCriadas(arrayOrganizado);
    }

    setNovaTarefa("");
  }

  const handleFocus = () => {
    setOnBlur(true);
  };

  const handleBlur = () => {
    setOnBlur(false);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, onBlur && styles.onBlur]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={setNovaTarefa}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={novaTarefa}
        />
        <Adicionar handleAdicionarAtividade={handleAdicionarAtividade} />
      </View>
    </>
  );
};
