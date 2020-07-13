import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture } from './src/index'

export default function App() {
	return (
		<View style={styles.container}>
			<Gesture></Gesture>
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
