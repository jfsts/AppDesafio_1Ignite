import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useMeuContexto } from "../../contexts/contextTarefas";
import { BlocoTarefas } from "../BlocoTarefas";

export const Tarefas = () => {
  const { tarefasCriadas, tarefasConcluidas } = useMeuContexto();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.linhaDados}>
          <View style={styles.colunaCriadas}>
            <Text style={styles.textoCriadas}>Criadas</Text>
            <Text style={styles.qtdCriadas}>
              {tarefasCriadas.length + tarefasConcluidas.length || 0}
            </Text>
          </View>
          <View style={styles.colunaConcluidas}>
            <Text style={styles.textoConcluidas}>Concluídas</Text>
            <Text style={styles.qtdConcluidas}>
              {tarefasConcluidas.length || 0}
            </Text>
          </View>
        </View>
        {tarefasCriadas.length == 0 && tarefasConcluidas.length == 0 ? (
          <View style={styles.containerImagem}>
            <Image
              style={styles.imagem}
              source={require("../../assets/Clipboard.png")}
            />
            <Text style={styles.primeiroParagrafo}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.segundoParagrafo}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        ) : (
          <BlocoTarefas />
        )}
      </View>
    </>
  );
};
