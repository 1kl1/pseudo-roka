import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen'
import LockScreen from "../screens/LockScreen"
import TestScreen from "../screens/TestScreen"


const Stack = createStackNavigator();

const AppNavigator = () => (
	<Stack.Navigator initialRouteName="Welcome">
		<Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}} />
		<Stack.Screen name="Locks" component={LockScreen} options={{headerShown: false}} />
		{/* <Stack.Screen name="Test" component={TestScreen} options={{headerShown: false}} /> */}
	</Stack.Navigator>
);

export default AppNavigator;
