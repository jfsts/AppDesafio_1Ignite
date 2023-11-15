import { StyleSheet } from "react-native";

const cor = "#8284FA";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  linhaDados: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 16,
    color: "#fff",
  },
  colunaCriadas: {
    flexDirection: "row",
  },

  textoCriadas: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  qtdCriadas: {
    color: "#fff",
    backgroundColor: "#333",
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginLeft: 8,
  },
  colunaConcluidas: {
    flexDirection: "row",
  },
  textoConcluidas: {
    color: cor,
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  qtdConcluidas: {
    color: "#fff",
    backgroundColor: "#333",
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginLeft: 8,
  },
  containerImagem: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  imagem: {},
  primeiroParagrafo: {
    marginTop: 20,
    color: "#808080",
    fontSize: 14,
    fontWeight: "700",
  },
  segundoParagrafo: {
    color: "#808080",
    fontWeight: "400",
    fontSize: 14,
  },
});
