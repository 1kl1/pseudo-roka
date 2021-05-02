import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import useInterval from "../hooks/useInterval"


function WelcomeScreen(props) {
	
	let [count, setCount] = useState(0);

	useInterval(() => {
		setCount((count + 1)%8);
	}, 225);
	
  return (
    <ImageBackground
      style={styles.background}
      //source={require("../assets/welcomescreen.jpg")}
    >
      <View style={styles.loadingContainer}>
		  <Image
		  style={[styles.loading, {
				  transform: [
					  {
						  rotate: (count*45)+'deg'
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
  buttonsContainer: {
    padding: 20,
    width: "100%",
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
