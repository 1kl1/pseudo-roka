import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import useInterval from "./app/hooks/useInterval";
import {Text} from 'react-native';
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
	let [ready, setReady] = useState(false);
	
	setTimeout(()=>{	
		setReady(true);
	}, 2000);
	
	
	
	return (
		//<NavigationContainer theme={navigationTheme}>
     	//	<AppNavigator />
    	//</NavigationContainer>
		(ready ? <Text>dd</Text> : <WelcomeScreen/>)
	);
}

// 37 37 37
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
