import React from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import littleLemonGreyLogo from "../assets/little-lemon-logo-grey.png";
import { validateEmail } from "../utils";

const SubscribeScreen = () => {
  const [email, setEmail] = React.useState("");

  const handleSubscribe = () => {
    Alert.alert("Thanks for subscribing, stay tuned!");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={subscribeStyle.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Image
            source={littleLemonGreyLogo}
            style={subscribeStyle.subscribeImage}
          />
          <Text style={subscribeStyle.subscribeDescription}>
            Subscribe to our newsletter for our{"\n"}
            latest recipes!
          </Text>
          <TextInput
            value={email}
            style={subscribeStyle.subscribeInput}
            onChangeText={(email) => setEmail(email)}
            onSubmitEditing={Keyboard.dismiss}
            placeholder="Enter your email"
          />
          <Pressable
            style={[
              subscribeStyle.subscribeButton,
              {
                backgroundColor: !validateEmail(email) ? "#8f8f8f" : "#3e524b",
              },
            ]}
            disabled={!validateEmail(email)}
            onPress={handleSubscribe}
          >
            <Text style={subscribeStyle.subscribeButtonText}>Subscribe</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const subscribeStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 25,
    backgroundColor: "#FFFFFF",
  },
  subscribeImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 30,
  },
  subscribeDescription: {
    color: "#5F5F5F",
    textAlign: "center",
    fontSize: 18,
  },
  subscribeInput: {
    borderColor: "#5F5F5F",
    borderWidth: 2,
    padding: 10,
    width: "100%",
    borderRadius: 8,
    marginTop: 20,
  },
  subscribeButton: {
    marginTop: 30,
    // backgroundColor: "#3e524b",
    padding: 10,
    width: "100%",
    borderRadius: 8,
    alignSelf: "center",
  },
  subscribeButtonDisabled: {
    // backgroundColor: "#3d3d3d",
  },
  subscribeButtonText: {
    color: "#EDEFEE",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default SubscribeScreen;
