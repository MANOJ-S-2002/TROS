import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PartnerLogin from "./PartnerLogin";
import PartnerSignup from "./PartnerSignup";

const LoginStack = createNativeStackNavigator();

const PartnerLoginStack = () => {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginStack.Screen name="PartnerLogin" component={PartnerLogin} />
      <LoginStack.Screen name="PartnerSignup" component={PartnerSignup} />
    </LoginStack.Navigator>
  );
};
export default PartnerLoginStack;
