import * as React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import littleLemonLogo from "../assets/little-lemon-logo.png";

const WelcomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate("Subscribe");
  };

  return (
    <View style={welcomeStyle.container}>
      <View style={{ paddingTop: "45%" }}>
        <Image source={littleLemonLogo} style={welcomeStyle.welcomeImage} />
        <Text style={welcomeStyle.welcomeDescription}>
          Little Lemon, your local{"\n"}Mediterranean Bistro
        </Text>
      </View>
      <Pressable
        style={welcomeStyle.newsletterButton}
        onPress={handleButtonPress}
      >
        <Text style={welcomeStyle.newsletterButtonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    padding: 25,
  },
  welcomeImage: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 60,
  },
  welcomeDescription: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#333333",
    fontSize: 19,
  },
  newsletterButton: {
    backgroundColor: "#3e524b",
    padding: 10,
    width: "100%",
    borderRadius: 8,
    alignSelf: "center",
  },
  newsletterButtonText: {
    color: "#EDEFEE",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
