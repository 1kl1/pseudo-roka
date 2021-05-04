import React from "react";

import { StyleSheet, Image, View } from "react-native";

function Topbar({ style }) {
  return (
    <View style={[styles.topBar, style]}>
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
  );
}

const styles = StyleSheet.create({
	topBar:{
		position: "absolute",
		width: "100%",
		height: "10%",
		justifyContent: "flex",
		top: "0%",
		zIndex: 1,
		flexDirection: "row",
		padding: 5,
		marginVertical: 5,
	},
	topBarMenu:{
		flex: 1,
		resizeMode: "contain",
		margin: 16,
	},
	topBarIcon:{
		flex: 4,
		height: "100%",
		resizeMode: "center",
	},
	topBarAlert:{
		flex: 1,
		resizeMode: "contain",
		margin: 19
	},
});

export default Topbar;
