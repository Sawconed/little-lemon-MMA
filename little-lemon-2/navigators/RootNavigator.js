import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import LittleLemonHeader from "../components/LittleLemonHeader";
import LittleLemonFooter from "../components/LittleLemonFooter";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <LittleLemonHeader />
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
      <LittleLemonFooter />
    </>
  );
};

export default RootNavigator;
