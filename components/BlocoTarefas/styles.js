import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    padding: 10,
    marginTop: 10,
    flexDirection: "row",
    backgroundColor: "#262626",
    borderRadius: 8,
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  descricao: {
    flex: 1,
    marginLeft: 10,
    color: "#fff",
    alignContent: "flex-start",
  },
  descricaoConcluida: {
    flex: 1,
    marginLeft: 10,
    color: "#808080",
    textDecorationLine: "line-through",
  },
});
