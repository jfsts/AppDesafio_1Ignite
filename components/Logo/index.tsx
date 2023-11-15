import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

export const Logo = () => {
  return (
    <>
      <View style={styles.containerPai}>
        <Image style={styles.image} source={require("../../assets/Logo.png")} />
      </View>
    </>
  );
};
