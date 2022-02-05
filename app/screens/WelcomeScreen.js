import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text, Alert } from "react-native";
import useInterval from "../hooks/useInterval"

import {Constants, Notifications, Permissions} from 'expo';

function WelcomeScreen({ navigation }) {
	
	let [count, setCount] = useState(0);

	useInterval(() => {
		if(count != -1)
			setCount((count + 1));
		
		if(count > 8){
			setCount(-1);
			navigation.navigate('Locks');
      // navigation.navigate('Test');

		}
	}, 150);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcomescreen.jpg")}
    >
      <View style={styles.loadingContainer}>
		  <Image
		  style={[styles.loading, {
				  transform: [
					  {
						  rotate: (count*30)+'deg'
					  }
				  ]
			  }]}
		  source={require("../assets/loading.png")} />
      </View>
    </ImageBackground>
  );
}

// 한바퀴에 1.8초
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
	backgroundColor: "#61dafb",
  },
  loadingContainer: {
    position: "absolute",
    bottom: "30%",
    alignItems: "center",
  },
  loading: {
    // paddingVertical: 20,
	width: 40,
    height: 40,
  },
});

export default WelcomeScreen;
