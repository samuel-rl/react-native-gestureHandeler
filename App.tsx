import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import { Gesture } from './src/index'

export default function App() {
	return (
		<View style={styles.container}>
			<Gesture color="blue" width={300}></Gesture>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
