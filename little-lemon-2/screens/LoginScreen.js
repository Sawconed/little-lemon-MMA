import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  Alert,
  ScrollView,
} from "react-native";
import { validateEmail, validatePassword } from "../utils";

const LoginScreen = ({ navigation }) => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });

  const handleButtonPress = () => {
    navigation.navigate("Welcome");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={loginStyle.container}
        behavior={Platform.OS === "ios" ? "position" : "height"}
      >
        <View style={loginStyle.innerContainer}>
          <Text style={loginStyle.loginTitle}>
            Welcome to Little{"\n"}Lemon
          </Text>
          <Text style={loginStyle.loginDescription}>Login to continue</Text>

          <View style={loginStyle.formContainer}>
            <TextInput
              placeholder="email"
              style={loginStyle.formInput}
              value={form.email}
              onChangeText={(email) =>
                setForm({ ...form, email: email.trim() })
              }
            />
            <TextInput
              placeholder="password"
              style={loginStyle.formInput}
              value={form.password}
              onChangeText={(password) =>
                setForm({ ...form, password: password.trim() })
              }
              secureTextEntry={true}
            />
            <Pressable
              style={[
                loginStyle.formButton,
                {
                  backgroundColor: !(
                    validateEmail(form.email) && validatePassword(form.password)
                  )
                    ? "#bfbfbf"
                    : "#ec9973",
                },
              ]}
              onPress={handleButtonPress}
              disabled={
                !(validateEmail(form.email) && validatePassword(form.password))
              }
            >
              <Text
                style={[
                  loginStyle.formButtonText,
                  {
                    color: !(
                      validateEmail(form.email) &&
                      validatePassword(form.password)
                    )
                      ? "white"
                      : "#333333",
                  },
                ]}
              >
                Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  innerContainer: {
    flex: 1,
    padding: 20,
  },
  loginTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 60,
  },
  loginDescription: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 40,
  },
  formContainer: {
    height: "35%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formInput: {
    backgroundColor: "white",
    fontSize: 18,
    padding: 8,
    width: "100%",
  },
  formButton: {
    backgroundColor: "#ec9973",
    borderRadius: 50,
    width: "50%",
    paddingVertical: 7,
  },
  formButtonText: {
    fontSize: 22,
    textAlign: "center",
  },
});
