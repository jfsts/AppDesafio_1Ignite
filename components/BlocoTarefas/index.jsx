import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useMeuContexto } from "../../contexts/contextTarefas";

export const BlocoTarefas = () => {
  const {
    tarefasCriadas,
    setTarefasCriadas,
    tarefasConcluidas,
    setTarefasConcluidas,
  } = useMeuContexto();

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
  function handleCheck(tarefaMarcada) {
    Alert.alert("Oba !", `Marcar como Compromisso Realizado ?`, [
      {
        text: "Sim",
        onPress: () => {
          setTarefasCriadas(
            tarefasCriadas.filter(
              (tarefa) => tarefa.descricao !== tarefaMarcada
            )
          );
          const arrayOrganizado = [
            ...tarefasConcluidas,
            { descricao: tarefaMarcada.trim(), status: false },
          ];

          if (arrayOrganizado.length > 0) {
            arrayOrganizado.sort(compararPorDescricao);
            setTarefasConcluidas(arrayOrganizado);
          }

          Alert.alert("OK", `Compromisso ticado !`);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  function handleDeleteConcluida(tarefaAdeletar) {
    Alert.alert("Remover", `Deletar o compromisso Já realizado ?`, [
      {
        text: "Sim",
        onPress: () => {
          setTarefasConcluidas(
            tarefasConcluidas.filter(
              (tarefa) => tarefa.descricao !== tarefaAdeletar
            )
          );
          Alert.alert("Remover", `Compromisso finalizado, deletado !`);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  function handleDelete(tarefaAdeletar) {
    Alert.alert("Remover", `Deletar o compromisso ?`, [
      {
        text: "Sim",
        onPress: () => {
          setTarefasCriadas(
            tarefasCriadas.filter(
              (tarefa) => tarefa.descricao !== tarefaAdeletar
            )
          );
          Alert.alert("Remover", `Compromisso removido com sucesso!`);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <ScrollView>
        {tarefasCriadas.map((tarefa, id) => (
          <View key={id} style={styles.container}>
            {tarefa.status ? (
              <TouchableOpacity onPress={() => handleCheck(tarefa.descricao)}>
                <Image
                  style={styles.imageCheck}
                  source={require("../../assets/Layer.png")}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Image
                  style={styles.imageCheck}
                  source={require("../../assets/check.png")}
                />
              </TouchableOpacity>
            )}
            <Text style={styles.descricao}>{tarefa.descricao}</Text>
            <TouchableOpacity onPress={() => handleDelete(tarefa.descricao)}>
              <Image
                style={styles.imageCheck}
                source={require("../../assets/trash.png")}
              />
            </TouchableOpacity>
          </View>
        ))}
        {tarefasConcluidas.map((tarefa, id) => (
          <View key={id + 10000} style={styles.container}>
            {tarefa.status ? (
              <TouchableOpacity onPress={() => handleCheck(tarefa.descricao)}>
                <Image
                  style={styles.imageCheck}
                  source={require("../../assets/Layer.png")}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Image
                  style={styles.imageCheck}
                  source={require("../../assets/check.png")}
                />
              </TouchableOpacity>
            )}
            <Text style={styles.descricaoConcluida}>{tarefa.descricao}</Text>
            <TouchableOpacity
              onPress={() => handleDeleteConcluida(tarefa.descricao)}
            >
              <Image
                style={styles.imageCheck}
                source={require("../../assets/trash.png")}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </>
  );
};
