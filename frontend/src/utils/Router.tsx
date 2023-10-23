import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import intro_1 from "../pages/intro/intro_1";
import intro_2 from "../pages/intro/intro_2";
import intro_3 from "../pages/intro/intro_3";

type RootStackParamList = {
  intro_1: undefined;
  intro_2: undefined;
  intro_3: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function Router() {
  return (
    <RootStack.Navigator initialRouteName="intro_1">
      <RootStack.Screen
        name="intro_1"
        component={intro_1}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="intro_2"
        component={intro_2}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="intro_3"
        component={intro_3}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  );
}

export default Router;
