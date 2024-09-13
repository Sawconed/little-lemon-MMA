import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import littleLemonLogo from "../assets/little-lemon-logo.png";

const WelcomeScreen = () => {
  return (
    <View style={welcomeStyle.container}>
      <View style={welcomeStyle.logoContainer}>
        <Image style={welcomeStyle.logo} source={littleLemonLogo} />
        <Text style={welcomeStyle.logoTitle}>Little Lemon</Text>
      </View>
      <Text style={welcomeStyle.welcomeDescription}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
    padding: 20,
  },
  logoContainer: {
    paddingHorizontal: 55,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 75,
  },
  logoTitle: {
    color: "white",
    fontSize: 25,
  },
  welcomeDescription: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 45,
  },
});
