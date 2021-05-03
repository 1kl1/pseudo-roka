import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import LockScreen from "./app/screens/LockScreen";

export default function App() {
	return (
		// (ready ? <Text>dd</Text> : <WelcomeScreen/>)
		// <NavigationContainer>
		//	<AppNavigator />
		//</NavigationContainer>
		<LockScreen/>
		
	);
}
