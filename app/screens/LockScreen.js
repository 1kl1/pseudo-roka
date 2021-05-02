import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import useInterval from "../hooks/useInterval"


function WelcomeScreen({ navigation }) {
	
	let [spin, setSpin] = useState(0);

	useInterval(() => {
		setSpin(spin + 1);
	}, 225);
	
  return (
    <ImageBackground
      style={styles.background}
      // source={require("../assets/welcomescreen.jpg")}
    >
      <View style={styles.loadingContainer}>
		  <Image
		  style={[styles.loading, {
				  transform: [
					  {
						  rotate: (spin*45)+'deg'
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
	backgroundColor: "#DDA0DD",
  },
  loadingContainer: {
    position: "absolute",
    top: "30%",
    alignItems: "center",
  },
  loading: {
    // paddingVertical: 20,
	width: 400,
    height: 400,
  },
});

export default WelcomeScreen;
