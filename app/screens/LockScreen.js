import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import useInterval from "../hooks/useInterval"


function WelcomeScreen({ navigation }) {
	
	let [spin, setSpin] = useState(0);

	useInterval(() => {
		setSpin(spin + 1);
	}, 225);
	
	return (
		<View style={styles.background}>
			<View style={styles.topBar}>
				<Image
					style={styles.topBarMenu}
					source={require("../assets/menu.png")}/>
				<Image
					style={styles.topBarIcon}
					source={require("../assets/headerIcon.png")}/>
				<Image
					style={styles.topBarAlert}
					source={require("../assets/alert.png")}/>
			</View>
			
			<Image
				style={styles.headerBackground}
				source={require("../assets/backgroundHeader.png")}/>
			<Image
				style={styles.headerBackgroundDeco}
				source={require("../assets/backgroundHeaderDeco.png")}
				/>
			
			<View style={styles.loadingContainer}>
				<Image
				  style={[styles.loading, {transform: [{rotate: (spin*45)+'deg'}]}]}
				  source={require("../assets/loading.png")} />
			</View>
			<Image
				style={styles.cameraIcon}
				source={require("../assets/cameraBlock.png")}/>
		</View>
	);
}

// 한바퀴에 1.8초
const styles = StyleSheet.create({
	topBar:{
		position: "absolute",
		width: "100%",
		height: "10%",
		justifyContent: "flex",
		top: "0%",
		zIndex: 1,
		flexDirection: "row",
		padding: 10,
		marginVertical: 5,
	},
	topBarMenu:{
		flex: 1,
		resizeMode: "center",
		margin: 10,
	},
	topBarIcon:{
		flex: 4,
		height: "100%",
		resizeMode: "center"
	},
	topBarAlert:{
		flex: 1,
		resizeMode: "center",
		margin: 10
	},
	background: {
		flex: 1,
		justifyContent: "flex",
		alignItems: "center",
		backgroundColor: "#252525",
	},
	headerBackground: {
		width: "100%",
		height: 226,
	},
	headerBackgroundDeco: {
		width: "100%",
		height: 97,
		top: -1,
	},
	loadingContainer: {
		position: "absolute",
		bottom: 200,
		alignItems: "center",
	},
	loading: {
		// paddingVertical: 20,
		width: 244,
		height: 244,
	},
	cameraIcon: {
		position: "absolute",
		bottom: 226,
		width: 190,
		height: 190
	}
});

export default WelcomeScreen;
