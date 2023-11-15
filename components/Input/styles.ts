import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    width: "100%",
  },
  input: {
    height: 56,
    flex: 1,
    marginTop: -30,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "#262626",
    borderRadius: 6,
    color: "#F2F2F2",
  },
  onBlur: {
    borderColor: "#5E60CE",
    borderWidth: 1,
  },
  button: {
    marginTop: -30,
    marginRight: 20,
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {},
});
