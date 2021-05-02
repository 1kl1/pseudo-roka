import React from 'react';

import WelcomeScreen from "./app/screens/WelcomeScreen"
import Screen from "./app/components/Screen"
import { Text } from 'react-native';



export default function App() {
  return (
    <WelcomeScreen>
      <Text>Open up App.js to start working on your app!!</Text>
    </WelcomeScreen>
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
