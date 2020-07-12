import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { Value, cond, set, eq, add } from 'react-native-reanimated';
import { onGestureEvent } from 'react-native-redash';


const withOffset = (value: Animated.Value<number>, state: Animated.Value<State>) => {
	const offset = new Value(0);
	return cond(eq(state, State.END), [set(offset, add(offset, value)), offset], add(offset, value));
};

function Gesture(){
	const state = new Value(State.UNDETERMINED);
	const translationX = new Value(0);
	const translationY = new Value(0);
	const gestureHandler = onGestureEvent({
		state,
		translationX,
		translationY,
	});
	const translateX = withOffset(translationX, state);
    const translateY = withOffset(translationY, state);
    
	return (
		<View>
			<PanGestureHandler {...gestureHandler}>
				<Animated.View style={{ transform: [{ translateX }, { translateY }] }}>
					<View style={[styles.view]}></View>
				</Animated.View>
			</PanGestureHandler>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: "red"
	},
});

export default Gesture;
