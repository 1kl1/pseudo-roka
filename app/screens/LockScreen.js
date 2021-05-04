import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import useInterval from "../hooks/useInterval";

import Topbar from "../components/Topbar";


function WelcomeScreen({ navigation }) {
	
	let [spin, setSpin] = useState(0);

	useInterval(() => {
		setSpin(spin + 1);
	}, 150);
	
	return (
		<View style={styles.background}>
			<Topbar/>
			
			<Image
				style={styles.headerBackground}
				source={require("../assets/backgroundHeader.png")}/>
			<Image
				style={styles.headerBackgroundDeco}
				source={require("../assets/backgroundHeaderDeco.png")}/>
			
			<View style={styles.headerBar}>
				<View style={{flexDirection:"row", marginVertical: 2.5}}>
					<Text style={styles.headerbarText}>설치일시 : </Text>
					<Text style={styles.headerbarDate}>21.03.09 15:54</Text>
				</View>
				<View style={{flexDirection:"row", marginVertical: 2.5}}>
					<Text style={styles.headerbarText}>차단일시 : </Text>
					<Text style={styles.headerbarDate}>21.05.01 14:13</Text>
				</View>
			</View>
			
			<View style={styles.loadingContainer}>
				<Image
				  style={[styles.loading, {transform: [{rotate: (spin*30)+'deg'}]}]}
				  source={require("../assets/loading.png")} />
			</View>
			<Image
				style={styles.cameraIcon}
				source={require("../assets/cameraBlock.png")}/>
			
			<View style={styles.flexEnd}>
				<View style={styles.versionBar}>
					<Text style={{color:"#fff", marginVertical:3}}>Version</Text>
					<Text style={{color:"#fff"}}>2.0.03</Text>
				</View>
			</View>
		</View>
	);
}

// 한바퀴에 1.8초
const styles = StyleSheet.create({
	versionBar:{
		backgroundColor:"#141617",
		width: "100%",
		height: 20,
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	flexEnd:{
		flex: 1,
		width: "100%",
		height: 20,
		justifyContent: "flex-end",
		alignItems: "center"
	},
	headerBar: {
		position: "absolute",
		top: "10%",
		marginTop: 20
	},
	headerbarDate: {
		fontWeight: "regular",
		color: "#fff",
		fontSize: 22,
		marginTop: 1
	},
	headerbarText: {
		color: "#fff",
		fontSize: 23,
		fontWeight: "bold",
	},
	background: {
		flex: 1,
		justifyContent: "flex",
		alignItems: "center",
		backgroundColor: "#252525",
	},
	headerBackground: {
		width: "100%",
		height: 200,
	},
	headerBackgroundDeco: {
		width: "100%",
		height: 97,
		top: -1,
	},
	loadingContainer: {
		position: "absolute",
		bottom: 130,
		alignItems: "center",
	},
	loading: {
		// paddingVertical: 20,
		width: 244,
		height: 244,
	},
	cameraIcon: {
		position: "absolute",
		bottom: 156,
		width: 190,
		height: 190
	}
});

export default WelcomeScreen;
