import React, { useState } from "react";
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import useInterval from "../hooks/useInterval";

import Topbar from "../components/Topbar";

const installDate = "21.03.09 15:54";
const lockDate = "21.07.01 14:13";
let dc = new Date("2021-07-01T14:13:00.000");

// `YYYY-MM-DDTHH:mm:ss.sss`

function WelcomeScreen({ navigation }) {
	
	let [spin, setSpin] = useState(0);

	useInterval(() => {
		setSpin(spin + 1);
	}, 150);
	
	let now = new Date();
	var diff = parseInt((now-dc)/1000);
	let diff_day = parseInt(diff / 86400);
	diff -= diff_day * 86400;
	let diff_hour = parseInt(diff/3600);
	diff -= diff_hour * 3600
	let diff_min = parseInt(diff/60);
	diff -= diff_min * 60;
	let diff_sec = diff;
	
	diff_hour = ("0"+(diff_hour.toString())).slice(-2);
	diff_min = ("0"+(diff_min.toString())).slice(-2);
	diff_sec = ("0"+(diff_sec.toString())).slice(-2);
	
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
					<Text style={styles.headerbarDate}>21.07.01 14:13</Text>
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
			
			<View style={styles.timerContainer}>
				<Text style={styles.timerText}>{diff_day + " "}일</Text>
				<Text style={styles.timerText}>{diff_hour+" : "+diff_min+" : "+diff_sec}</Text>
			</View>
			
			<View style={styles.flexEnd}>
				
				<Image source={require("../assets/button.png")} style={styles.allowBtn}/>
			  <Text style={styles.title}>카메라 허용</Text>
				
				<View style={styles.versionBar}>
					<Text style={{color:"#fff", marginVertical:14}}>Version</Text>
					<Text style={{color:"#fff"}}> 2.0.03</Text>
				</View>
			</View>
		</View>
	);
}


const bottomHeight = 170;
// 한바퀴에 1.8초
const styles = StyleSheet.create({
	title:{
		color: "#fff",
		fontSize: 15,
		fontWeight: "bold",
		position:"absolute",
		bottom:70
	},
	allowBtn:{
		width: "95%",
		height: "10%",
		resizeMode: "contain",
		marginBottom: 7,
	},
	timerContainer: {
		position: "absolute",
		bottom: bottomHeight+50,
		justifyContent: "center",
		alignItems: "center"
	},
	timerText: {
		color: "#fff",
		fontSize: 16,
	},
	versionBar:{
		backgroundColor:"#141617",
		width: "100%",
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
		bottom: bottomHeight,
		alignItems: "center",
	},
	loading: {
		// paddingVertical: 20,
		width: 244,
		height: 244,
	},
	cameraIcon: {
		position: "absolute",
		bottom: bottomHeight+26,
		width: 190,
		height: 190
	}
});

export default WelcomeScreen;
