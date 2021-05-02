// import React, { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import React, { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function WelcomeScreen(props) {
	
	let [count, setCount] = useState(0);

	useInterval(() => {
		setCount((count + 1)%8);
	}, 225);
	
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
